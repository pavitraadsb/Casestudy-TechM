using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CreditCardPro.Models;

namespace CreditCardPro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly CardDbContext _context;

        public PaymentsController(CardDbContext context)
        {
            _context = context;
        }

        // GET: api/Payments
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Payment>>> GetPayments()
        //{
        //    return await _context.Payments.ToListAsync();
        //}
        [HttpGet]
        public ActionResult<IEnumerable<Payment>> GetPayments()
        {
            var payments = _context.Payments.ToList();
            return Ok(payments);
        }

        // GET: api/Payments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Payment>> GetPayment(int id)
        {
            var payment = await _context.Payments.FindAsync(id);

            if (payment == null)
            {
                return NotFound();
            }

            return payment;
        }
        [HttpGet("{CustomerId}")]
        public IActionResult GetPayments(int CustomerId)
        {
            var payments = _context.Payments
                .Include(p => p.Statement)  // Include the Statement
                .Where(p => p.Statement.CustomerId == CustomerId)
                .Select(p => new
                {
                    p.PaymentId,
                    p.Amount,
                    p.PaymentMethod,
                    p.PaymentDate,
                    TotalDue = p.Statement.TotalDue,
                    OutstandingBalance = p.Statement.TotalDue - p.Statement.AmountPaid
                }).ToList();

            return Ok(payments);
        }
       
        // PUT: api/Payments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPayment(int id, Payment payment)
        {
            if (id != payment.PaymentId)
            {
                return BadRequest();
            }

            _context.Entry(payment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Payments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult MakePayment([FromBody] Payment payment)
        {
            var statement = _context.Statements.Find(payment.StatementId);

            if (statement == null)
                return NotFound("Statement not found");

            statement.AmountPaid += payment.Amount;
            _context.Payments.Add(payment);
            _context.SaveChanges();

            return Ok(payment);
        }

        // DELETE: api/Payments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayment(int id)
        {
            var payment = await _context.Payments.FindAsync(id);
            if (payment == null)
            {
                return NotFound();
            }

            _context.Payments.Remove(payment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PaymentExists(int id)
        {
            return _context.Payments.Any(e => e.PaymentId == id);
        }
    }

}
