using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CreditCardPro.Models
{
    public class Statement
    {
        [Key]
        public int StatementId { get; set; }
        public int CreditCardId { get; set; }
        [ForeignKey("CreditCardId")]
        public CreditCard CreditCard { get; set; }
        public DateTime StatementDate { get; set; } = DateTime.Now;
        public DateTime DueDate { get; set; }
        public decimal TotalDue { get; set; }
        public decimal MinimumDue { get; set; }
        [Required]
        public string Status { get; set; }
        //public ICollection<Payment> Payments { get; set; }
    }
}
