using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoanAdminManagement.Model
{
    public class ItemDB
    {
        
        [Key]
        [Column(TypeName ="varchar(20)")]
        public string Itemid { get; set; }
        [Required]
        //Here is start
        [Column(TypeName = "varchar(25)")] public string ItemDescription { get; set; }
        // [Column(TypeName = "")] public required string ItemName { get; set; } 
        [Required]
        [Column(TypeName = "varchar(1)")] public string IssueStatus { get; set; }
        [Required]
        [Column(TypeName = "varchar(25)")] public string ItemMake { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")] public string ItemCategory { get; set; }

        [Required]
        [Column(TypeName = "varchar(6)")] public string ItemValue { get; set; }

    }
}
