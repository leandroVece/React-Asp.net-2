using Cadeteria.Models;

namespace Cadeteria.Services;

public interface IRolRepository
{
    IEnumerable<Rol> GetAll();
}