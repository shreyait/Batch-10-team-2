using LoanAdminManagement.Model;
using Microsoft.EntityFrameworkCore;

namespace LoanAdminManagement.Data
{
    public class DataContextdb:DbContext
    {
        public DataContextdb(DbContextOptions dbContextOptions) : base(dbContextOptions) 
        {

        }
        public DbSet<Logger>Loggers { get; set; }
        public  DbSet<Registration>Registrations { get; set; }
        public DbSet<LoanAdminManagement.Model.EmployeeCardDetails>? EmployeeCardDetails { get; set; }
        public DbSet<LoanAdminManagement.Model.EmployeeIssueDetails>? EmployeeIssueDetails { get; set; }
        public DbSet<LoanAdminManagement.Model.EmployeeMaster>? EmployeeMaster { get; set; }
        public DbSet<LoanAdminManagement.Model.ItemDB>? ItemDB { get; set; }
        public DbSet<LoanAdminManagement.Model.LoanCardMaster>? LoanCardMaster { get; set; }
    }
}
