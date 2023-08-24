using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoanAdminManagement.Model
{
    public class EmployeeMaster
    {
       
       // public Guid Id { get; set; }
        [Key]
        [Column(TypeName ="varchar(20)")]
        public string empId { get; set; }

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

        [Required]
        [Column(TypeName = "Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime dateofBirth { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime dateofJoining { get; set; }
    }
}
