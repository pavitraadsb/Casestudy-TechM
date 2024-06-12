using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CreditCardPro.Models
{
    public class Payment
    {
        [Key]
        public int PaymentId { get; set; }
        public int StatementId { get; set; }
        [ForeignKey("StatementId")]
        public Statement Statement { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [Required]
        public string PaymentMethod { get; set; }
        public DateTime PaymentDate { get; set; } = DateTime.Now;
    }
}
