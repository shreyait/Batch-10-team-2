using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoanAdminManagement.Model
{
    public class Registration
    {
        [Key]
        [Column(TypeName ="Guid")]
        public Guid Id { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string email { get; set; }
            [Required]
            [Column(TypeName = "varchar(20)")]
            public string password { get; set; }
    }
}
