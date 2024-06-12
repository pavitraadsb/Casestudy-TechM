using Microsoft.EntityFrameworkCore;

namespace CreditCardPro.Models
{
    public class CardDbContext:DbContext
    {
        public CardDbContext() { }
        public CardDbContext(DbContextOptions<CardDbContext> options) : base(options) { }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<CreditCard> creditCards { get; set; }
        public DbSet<CreditCardApplication> creditCardsApplication { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<Statement> Statements { get; set; }
        public DbSet<SupportRequest> SupportRequests { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

    }
}
