using System.ComponentModel.DataAnnotations;

namespace CreditCardPro.Models
{
    public class CardType
    {
        [Key]
        public int CardTypeId { get; set; }
        [Required]
        public string TypeName { get; set; }
    }
}
