namespace Cadeteria.Services;

using AutoMapper;
using BCrypt.Net;
using Cadeteria.Models;
using Cadeteria.Authorization;

public class RolRepository : IRolRepository
{
    private DataContext _context;

    public IEnumerable<Rol> GetAll()
    {
        return _context.rols;
    }


}