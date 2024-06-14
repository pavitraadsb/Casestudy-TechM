using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CreditCardPro.Models
{
    public class CreditCard
    {
        [Key]
        public int CreditCardId { get; set; }
        public string CardType { get; set; }
        [Required(ErrorMessage = "The field is required.")]
        [RegularExpression(@"^\d{16}$", ErrorMessage = "The field must be exactly 16 digits.")]
        public string CardNumber { get; set; }
        [Required(ErrorMessage = "Expiry date is required.")]
        [RegularExpression(@"^(0[1-9]|1[0-2])\/([0-9]{2})$", ErrorMessage = "Expiry date must be in MM/YY format.")]
        public string ExpiryDate { get; set; }
        [Required]
        public string CVV { get; set; }
        public string MaskedCVV
        {
            get
            {
                if (string.IsNullOrEmpty(CVV))
                    return string.Empty;
                return new string('*', CVV.Length); 
            }
        }
        public decimal CreditLimit { get; set; }
        public decimal AvailableCredit { get; set; }
        public DateTime IssuedDate { get; set; } = DateTime.Now;
        public string Status { get; set; }
        //public ICollection<Transaction> Transactions { get; set; }
        //public ICollection<Statement> Statements { get; set; }
    }
}
