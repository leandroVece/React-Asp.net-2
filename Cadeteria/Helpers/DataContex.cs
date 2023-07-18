using Microsoft.EntityFrameworkCore;
using Cadeteria.Models;

namespace Cadeteria;

public class DataContext : DbContext
{

    public DbSet<User> Users { get; set; }
    public DbSet<Rol> rols { get; set; }

    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(User =>
        {
            // List<User> listUser = new List<User>();
            // listUser.Add(new User() { Id_user = Guid.Parse("e2a4980f-7c50-45b0-aba5-6a46d79cf328"), rolForeikey = Guid.Parse("7aafd6fb-612e-42c7-99db-cbec0fdad96f"), Nombre = "admin", Contra = "admin" });
            // listUser.Add(new User() { Id_user = Guid.Parse("df0efb73-de14-4140-bbd0-c357148d89d1"), rolForeikey = Guid.Parse("7a86db69-1474-4d92-a18e-91899d876c92"), Nombre = "cadete", Contra = "cadete" });
            // listUser.Add(new User() { Id_user = Guid.Parse("36126fee-fee7-4d62-a22e-959feb2dd013"), rolForeikey = Guid.Parse("f0601b48-a878-4fb5-a767-3f1340b8c0d8"), Nombre = "cliente", Contra = "cliente" });

            User.ToTable("usuario");
            User.HasKey(User => User.Id_user);
            User.Property(User => User.Name).IsRequired().HasMaxLength(15).IsUnicode();
            User.Property(User => User.Password).IsRequired().HasMaxLength(80);

            User.HasOne(r => r.Rol).WithMany(us => us.User).HasForeignKey(r => r.rolForeikey);

            //User.HasData(listUser);
        });

        modelBuilder.Entity<Rol>(R =>
        {
            List<Rol> listRol = new List<Rol>();
            listRol.Add(new Rol() { Id_rol = Guid.Parse("7aafd6fb-612e-42c7-99db-cbec0fdad96f"), Name = "admin" });
            listRol.Add(new Rol() { Id_rol = Guid.Parse("7a86db69-1474-4d92-a18e-91899d876c92"), Name = "cadete" });
            listRol.Add(new Rol() { Id_rol = Guid.Parse("f0601b48-a878-4fb5-a767-3f1340b8c0d8"), Name = "cliente" });

            R.ToTable("rol");
            R.HasKey(User => User.Id_rol);
            R.Property(User => User.Name).IsRequired().HasMaxLength(15).IsUnicode();

            R.HasData(listRol);
        });
    }
}