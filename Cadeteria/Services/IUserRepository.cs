using Cadeteria.Models;

namespace Cadeteria.Services;

public interface IUserRepository
{
    AuthenticateResponse Authenticate(AuthenticateRequest model);
    IEnumerable<User> GetAll();
    User GetById(Guid id);
    void Register(RegisterRequest model);
    void Update(Guid id, UpdateRequest model);
    void Delete(Guid id);

}