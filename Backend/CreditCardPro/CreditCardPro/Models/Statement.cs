using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CreditCardPro.Models
{
    public class Statement
    {
        [Key]
        public int StatementId { get; set; }
        public int CustomerId { get; set; }
        public DateTime StatementDate { get; set; } = DateTime.Now;
        public decimal TotalDue { get; set; }
        public decimal AmountPaid { get; set; }
        public ICollection<Payment> Payments { get; set; }

    }
}
