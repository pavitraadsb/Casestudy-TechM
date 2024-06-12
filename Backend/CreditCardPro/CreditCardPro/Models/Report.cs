using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CreditCardPro.Models
{
    public class Report
    {
        [Key]
        public int ReportId { get; set; }
        public string ReportType { get; set; }
        public int GeneratedBy {  get; set; }
        [ForeignKey("AdminId")]
        public Admin Admin { get; set; }
        public DateTime GeneratedDate { get; set; } = DateTime.Now;
        public string Content { get; set; } 
    }
}
