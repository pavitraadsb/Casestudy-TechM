using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CreditCardPro.Models
{
    public class Account
    {
        [Key]
        public int AccountId { get; set; }
        public int CustomerId { get; set; }
        [ForeignKey("CustomerId")]
        public Customer Customer { get; set; }
        [Required]
        public string AccountNumber { get; set; }
        public string AccountStatus { get; set; }
        
    }
}
