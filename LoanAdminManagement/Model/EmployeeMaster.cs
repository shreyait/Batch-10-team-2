using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoanAdminManagement.Model
{
    public class EmployeeMaster
    {
        [Key]
        [Column(TypeName ="Guid")]
        public Guid Id { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")] 
        public  string EmployeeName { get; set; }
        [Required]
        [Column(TypeName = "varchar(25)")] 
        public string Designation { get; set; }
        [Required]
        [Column(TypeName = "varchar(25)")] 
        public string Department { get; set; }
        [Required]
        [Column(TypeName = "varchar(1)")] 
        public string Gender { get; set; }
    }
}
