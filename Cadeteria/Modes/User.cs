namespace Cadeteria.Models;

using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

public class User
{
    public Guid Id_user { get; set; }
    public Guid rolForeikey { get; set; }
    public string Name { get; set; }
    public string Password { get; set; }

    [NotMapped]
    [JsonIgnore]
    public virtual Rol? Rol { get; set; }

}


