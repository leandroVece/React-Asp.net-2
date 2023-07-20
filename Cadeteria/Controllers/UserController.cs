namespace Cadeteria.Controllers;

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Cadeteria.Authorization;
using Cadeteria.Models;
using Cadeteria.Services;

[Authorize]
[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private IUserRepository _userRepository;
    private IMapper _mapper;
    private readonly AppSettings _appSettings;

    public UserController(
        IUserRepository userService,
        IMapper mapper,
        IOptions<AppSettings> appSettings)
    {
        _userRepository = userService;
        _mapper = mapper;
        _appSettings = appSettings.Value;
    }

    [AllowAnonymous]
    [HttpPost("authenticate")]
    public IActionResult Authenticate(AuthenticateRequest model)
    {
        var response = _userRepository.Authenticate(model);
        //SetSesion(response);
        return Ok(response);
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public IActionResult Register(RegisterRequest model)
    {
        model.rolForeikey = Guid.Parse("f0601b48-a878-4fb5-a767-3f1340b8c0d8");
        _userRepository.Register(model);
        return Ok(new { message = "Registration successful" });
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var users = _userRepository.GetAll();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {
        var user = _userRepository.GetById(id);
        return Ok(user);
    }

    [HttpPut("{id}")]
    public IActionResult Update(Guid id, UpdateRequest model)
    {
        _userRepository.Update(id, model);
        return Ok(new { message = "User updated successfully" });
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        _userRepository.Delete(id);
        return Ok(new { message = "User deleted successfully" });
    }
}