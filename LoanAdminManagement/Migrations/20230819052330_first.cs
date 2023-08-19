using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LoanAdminManagement.Migrations
{
    /// <inheritdoc />
    public partial class first : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmployeeCardDetails",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EmployeeId = table.Column<string>(type: "varchar(20)", nullable: false),
                    LoanId = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeCardDetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeIssueDetails",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IssueId = table.Column<string>(type: "varchar(20)", nullable: false),
                    EmployeeId = table.Column<string>(type: "varchar(20)", nullable: false),
                    LoanId = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeIssueDetails", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeMaster",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EmployeeName = table.Column<string>(type: "varchar(20)", nullable: false),
                    Designation = table.Column<string>(type: "varchar(25)", nullable: false),
                    Department = table.Column<string>(type: "varchar(25)", nullable: false),
                    Gender = table.Column<string>(type: "varchar(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeMaster", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ItemDB",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Itemid = table.Column<string>(type: "varchar(20)", nullable: false),
                    ItemDescription = table.Column<string>(type: "varchar(25)", nullable: false),
                    IssueStatus = table.Column<string>(type: "varchar(1)", nullable: false),
                    ItemMake = table.Column<string>(type: "varchar(25)", nullable: false),
                    ItemCategory = table.Column<string>(type: "varchar(20)", nullable: false),
                    ItemValue = table.Column<string>(type: "varchar(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemDB", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LoanCardMaster",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Loanid = table.Column<string>(type: "varchar(20)", nullable: false),
                    LoanType = table.Column<string>(type: "varchar(15)", nullable: false),
                    Duration = table.Column<string>(type: "varchar(2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoanCardMaster", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Loggers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "varchar(20)", nullable: false),
                    password = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Loggers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Registrations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "varchar(20)", nullable: false),
                    username = table.Column<string>(type: "varchar(20)", nullable: false),
                    email = table.Column<string>(type: "varchar(20)", nullable: false),
                    password = table.Column<string>(type: "varchar(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registrations", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmployeeCardDetails");

            migrationBuilder.DropTable(
                name: "EmployeeIssueDetails");

            migrationBuilder.DropTable(
                name: "EmployeeMaster");

            migrationBuilder.DropTable(
                name: "ItemDB");

            migrationBuilder.DropTable(
                name: "LoanCardMaster");

            migrationBuilder.DropTable(
                name: "Loggers");

            migrationBuilder.DropTable(
                name: "Registrations");
        }
    }
}
