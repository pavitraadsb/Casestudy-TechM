using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CreditCardPro.Models
{
    public class CreditCardApplication
    {
        [Key]
        public int ApplicationId { get; set; }
        [Required]
        public int CustomerId { get; set; }
        [Required]
        public string CardType { get; set; }
        public decimal AnnualIncome { get; set; }
        public string EmploymentStatus { get; set; }
        public int CreditScore { get; set; }
        [Required]
        public string ApplicationStatus { get; set; }
        public DateTime ApplicationDate { get; set; } = DateTime.Now;
        public DateTime? ReviewedDate { get; set; }
        public int? ReviewedBy { get; set; }
        public string AccountNumber { get; set; }
    }
}
