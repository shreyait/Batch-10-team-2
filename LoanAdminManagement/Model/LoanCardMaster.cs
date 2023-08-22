using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoanAdminManagement.Model
{
    public class LoanCardMaster
    {
        [Key]
        [Column(TypeName = "Guid")] public Guid Id { get; set; }

        [Required]
        [Column(TypeName ="varchar(20")]
        public string Loanid { get;set; }
        [Required]
        [Column(TypeName = "varchar(15)")] public string LoanType { get; set; }
        [Required]
        [Column(TypeName = "varchar(2)")] public string Duration { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime Cardissuedate{ get; set; }

    }
}
