using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoanAdminManagement.Model
{
    public class ApplyLoan
    {
        [Key]
        [Column(TypeName ="Guid")]
        public Guid Id { get; set; }

        [Required]
        [Column(TypeName ="varchar(20)")]
        public string empId { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string empName { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string IDes { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string IMake { get; set;}
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string Ivalue { get; set; }
    }
}
