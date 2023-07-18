﻿// <auto-generated />
using System;
using Cadeteria;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Cadeteria.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Cadeteria.Models.Rol", b =>
                {
                    b.Property<Guid>("Id_rol")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(15)
                        .IsUnicode(true)
                        .HasColumnType("nvarchar(15)");

                    b.HasKey("Id_rol");

                    b.ToTable("rol", (string)null);

                    b.HasData(
                        new
                        {
                            Id_rol = new Guid("7aafd6fb-612e-42c7-99db-cbec0fdad96f"),
                            Name = "admin"
                        },
                        new
                        {
                            Id_rol = new Guid("7a86db69-1474-4d92-a18e-91899d876c92"),
                            Name = "cadete"
                        },
                        new
                        {
                            Id_rol = new Guid("f0601b48-a878-4fb5-a767-3f1340b8c0d8"),
                            Name = "cliente"
                        });
                });

            modelBuilder.Entity("Cadeteria.Models.User", b =>
                {
                    b.Property<Guid>("Id_user")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(15)
                        .IsUnicode(true)
                        .HasColumnType("nvarchar(15)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)");

                    b.Property<Guid>("rolForeikey")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id_user");

                    b.HasIndex("rolForeikey");

                    b.ToTable("usuario", (string)null);
                });

            modelBuilder.Entity("Cadeteria.Models.User", b =>
                {
                    b.HasOne("Cadeteria.Models.Rol", "Rol")
                        .WithMany("User")
                        .HasForeignKey("rolForeikey")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Rol");
                });

            modelBuilder.Entity("Cadeteria.Models.Rol", b =>
                {
                    b.Navigation("User");
                });
#pragma warning restore 612, 618
        }
    }
}