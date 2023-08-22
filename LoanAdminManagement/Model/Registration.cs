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
        public string employeeId { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string Name { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string username { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string email { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string designation { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string department { get; set; }

        [Required]
        [Column(TypeName = "varchar(2)")]
        public string Gender { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString ="{0:yyyy-MM-dd}")]
        public DateTime dateofBirth { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime dateofJoining { get; set; }

        [Required]
        [Column(TypeName = "varchar(20)")]
        public string password { get; set; }

        

    }
}
