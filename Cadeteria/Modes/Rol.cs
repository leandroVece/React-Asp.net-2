using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Cadeteria.Models;

public class Rol
{

    public Guid Id_rol { get; set; }
    public string RolName { get; set; }

    [NotMapped]
    [JsonIgnore]
    public virtual ICollection<User>? User { get; set; }

}