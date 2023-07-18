namespace Cadeteria.Models;

using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;


public class AuthenticateRequest
{
    [Required]
    public string Name { get; set; }

    [Required]
    public string Password { get; set; }
}


