using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cadeteria.Migrations
{
    public partial class rols : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "rol",
                columns: new[] { "Id_rol", "Name" },
                values: new object[] { new Guid("7a86db69-1474-4d92-a18e-91899d876c92"), "cadete" });

            migrationBuilder.InsertData(
                table: "rol",
                columns: new[] { "Id_rol", "Name" },
                values: new object[] { new Guid("7aafd6fb-612e-42c7-99db-cbec0fdad96f"), "admin" });

            migrationBuilder.InsertData(
                table: "rol",
                columns: new[] { "Id_rol", "Name" },
                values: new object[] { new Guid("f0601b48-a878-4fb5-a767-3f1340b8c0d8"), "cliente" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "rol",
                keyColumn: "Id_rol",
                keyValue: new Guid("7a86db69-1474-4d92-a18e-91899d876c92"));

            migrationBuilder.DeleteData(
                table: "rol",
                keyColumn: "Id_rol",
                keyValue: new Guid("7aafd6fb-612e-42c7-99db-cbec0fdad96f"));

            migrationBuilder.DeleteData(
                table: "rol",
                keyColumn: "Id_rol",
                keyValue: new Guid("f0601b48-a878-4fb5-a767-3f1340b8c0d8"));
        }
    }
}
