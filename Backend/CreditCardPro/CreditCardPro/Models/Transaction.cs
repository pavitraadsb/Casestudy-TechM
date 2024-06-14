﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace CreditCardPro.Models
{
    public class Transaction
    {
        [Key]
        public int TransactionId { get; set; }
        public int PaymentId {  get; set; }
        [ForeignKey("PaymentId")]
        public Payment Payment { get; set; }
        public DateTime TransactionDate { get; set; } = DateTime.Now;
        public decimal Amount { get; set; }
        public string Merchant { get; set; }
        public string Category { get; set; }
        [Required]
        public string Status { get; set; }
    }
}
