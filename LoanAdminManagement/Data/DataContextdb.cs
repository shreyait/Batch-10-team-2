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
    }
}
