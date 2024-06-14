using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CreditCardPro.Models
{
    public class SupportRequest
    {
        [Key]
        public int SupportRequestId { get; set; }
        public string IssueDescription { get; set; }
        public DateTime RequestDate { get; set; }
        [Required]
        public string Status {  get; set; }
        public DateTime ResolutionDate { get; set; }
        public int HandleBy {  get; set; }
    }
}
