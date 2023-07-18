namespace Cadeteria.Models;

public class AuthenticateResponse
{
    public Guid Id_user { get; set; }
    public string Name { get; set; }
    public Guid rolForeikey { get; set; }
    public string Token { get; set; }
}


