using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoanAdminManagement.Model
{
    public class EmployeeCardDetails
    {
        [Key]
        [Column(TypeName = "Guid")] public Guid Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string EmployeeId { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")] 
        public string LoanId { get; set; }
    }
}
