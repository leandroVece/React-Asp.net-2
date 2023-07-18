namespace Cadeteria.Services;

using AutoMapper;
using BCrypt.Net;
using Cadeteria.Models;
using Cadeteria.Authorization;

public class UserRepository : IUserRepository
{
    private DataContext _context;
    private IJwtUtils _jwtUtils;
    private readonly IMapper _mapper;

    public UserRepository(
        DataContext context,
        IJwtUtils jwtUtils,
        IMapper mapper)
    {
        _context = context;
        _jwtUtils = jwtUtils;
        _mapper = mapper;
    }

    public AuthenticateResponse Authenticate(AuthenticateRequest model)
    {
        var user = _context.Users.SingleOrDefault(x => x.Name == model.Name);

        // validate
        if (user == null || !BCrypt.Verify(model.Password, user.Password))
            throw new AppException("Username or password is incorrect");

        // authentication successful
        var response = _mapper.Map<AuthenticateResponse>(user);
        response.Token = _jwtUtils.GenerateToken(user);
        return response;
    }

    public IEnumerable<User> GetAll()
    {
        return _context.Users;
    }

    public User GetById(Guid id)
    {
        return getUser(id);
    }

    public void Register(RegisterRequest model)
    {
        // validate
        if (_context.Users.Any(x => x.Name == model.Name))
            throw new AppException("Username '" + model.Name + "' is already taken");

        // map model to new user object
        var user = _mapper.Map<User>(model);

        // hash password
        user.Password = BCrypt.HashPassword(model.Password);

        // save user
        _context.Users.Add(user);
        _context.SaveChanges();
    }

    public void Update(Guid id, UpdateRequest model)
    {
        var user = getUser(id);

        // validate
        if (model.Name != user.Name && _context.Users.Any(x => x.Name == model.Name))
            throw new AppException("Username '" + model.Name + "' is already taken");

        // hash password if it was entered
        if (!string.IsNullOrEmpty(model.Password))
            user.Password = BCrypt.HashPassword(model.Password);

        // copy model to user and save
        _mapper.Map(model, user);
        _context.Users.Update(user);
        _context.SaveChanges();
    }

    public void Delete(Guid id)
    {
        var user = getUser(id);
        _context.Users.Remove(user);
        _context.SaveChanges();
    }

    // helper methods

    private User getUser(Guid id)
    {
        var user = _context.Users.Find(id);
        if (user == null) throw new KeyNotFoundException("User not found");
        return user;
    }
}