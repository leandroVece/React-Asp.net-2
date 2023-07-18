using System.ComponentModel.DataAnnotations;

namespace Cadeteria.Models;

public class RegisterRequest
{

    [Required]
    public Guid rolForeikey { get; set; }
    [Required]
    public string Name { get; set; }

    [Required]
    public string Password { get; set; }


}