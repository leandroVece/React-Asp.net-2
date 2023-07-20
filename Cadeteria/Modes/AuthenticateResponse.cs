namespace Cadeteria.Models;

public class AuthenticateResponse
{
    public Guid Id_user { get; set; }
    public string Name { get; set; }
    public string Rol { get; set; }
    public string Token { get; set; }
}


