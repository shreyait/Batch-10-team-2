﻿// <auto-generated />
using System;
using LoanAdminManagement.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace LoanAdminManagement.Migrations
{
    [DbContext(typeof(DataContextdb))]
    partial class DataContextdbModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("LoanAdminManagement.Model.EmployeeCardDetails", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("Guid");

                    b.Property<string>("EmployeeId")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("LoanId")
                        .IsRequired()
                        .HasColumnType("Guid");

                    b.HasKey("Id");

                    b.ToTable("EmployeeCardDetails");
                });

            modelBuilder.Entity("LoanAdminManagement.Model.EmployeeIssueDetails", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("Guid");

                    b.Property<string>("EmployeeId")
                        .IsRequired()
                        .HasColumnType("vachar(20)");

                    b.Property<string>("IssueId")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("LoanId")
                        .IsRequired()
                        .HasColumnType("Guid");

                    b.HasKey("Id");

                    b.ToTable("EmployeeIssueDetails");
                });

            modelBuilder.Entity("LoanAdminManagement.Model.EmployeeMaster", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("Guid");

                    b.Property<string>("Department")
                        .IsRequired()
                        .HasColumnType("varchar(25)");

                    b.Property<string>("Designation")
                        .IsRequired()
                        .HasColumnType("varchar(25)");

                    b.Property<string>("EmployeeName")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("char(1)");

                    b.HasKey("Id");

                    b.ToTable("EmployeeMaster");
                });

            modelBuilder.Entity("LoanAdminManagement.Model.ItemDB", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("Guid");

                    b.Property<string>("IssueStatus")
                        .IsRequired()
                        .HasColumnType("varchar(1)");

                    b.Property<string>("ItemCategory")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("ItemDescription")
                        .IsRequired()
                        .HasColumnType("varchar(25)");

                    b.Property<string>("ItemMake")
                        .IsRequired()
                        .HasColumnType("varchar(25)");

                    b.Property<string>("ItemValue")
                        .IsRequired()
                        .HasColumnType("varchar(6)");

                    b.Property<string>("Itemid")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.HasKey("Id");

                    b.ToTable("ItemDB");
                });

            modelBuilder.Entity("LoanAdminManagement.Model.LoanCardMaster", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("guid");

                    b.Property<string>("Duration")
                        .IsRequired()
                        .HasColumnType("varchar(2)");

                    b.Property<string>("LoanType")
                        .IsRequired()
                        .HasColumnType("varchar(15)");

                    b.Property<string>("Loanid")
                        .IsRequired()
                        .HasColumnType("varchar(20");

                    b.HasKey("Id");

                    b.ToTable("LoanCardMaster");
                });

            modelBuilder.Entity("LoanAdminManagement.Model.Logger", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("Guid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.HasKey("Id");

                    b.ToTable("Loggers");
                });

            modelBuilder.Entity("LoanAdminManagement.Model.Registration", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("Guid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.HasKey("Id");

                    b.ToTable("Registrations");
                });
#pragma warning restore 612, 618
        }
    }
}
