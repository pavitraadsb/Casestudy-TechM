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
    public class CreditCardApplicationsController : ControllerBase
    {
        private readonly CardDbContext _context;

        public CreditCardApplicationsController(CardDbContext context)
        {
            _context = context;
        }

        // GET: api/CreditCardApplications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CreditCardApplication>>> GetcreditCardsApplication()
        {
            return await _context.creditCardsApplication.ToListAsync();
        }

        // GET: api/CreditCardApplications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CreditCardApplication>> GetApplication(int id)
        {
            var creditCardApplication = await _context.creditCardsApplication.FindAsync(id);

            if (creditCardApplication == null)
            {
                return NotFound();
            }

            return creditCardApplication;
        }

        // PUT: api/CreditCardApplications/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateApplication(int id, CreditCardApplication creditCardApplication)
        {
            if (id != creditCardApplication.ApplicationId)
            {
                return BadRequest();
            }

            _context.Entry(creditCardApplication).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CreditCardApplicationExists(id))
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

        // POST: api/CreditCardApplications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CreditCardApplication>> Apply(CreditCardApplication creditCardApplication)
        {
            _context.creditCardsApplication.Add(creditCardApplication);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetApplication", new { id = creditCardApplication.ApplicationId }, creditCardApplication);
        }

        // DELETE: api/CreditCardApplications/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCreditCardApplication(int id)
        {
            var creditCardApplication = await _context.creditCardsApplication.FindAsync(id);
            if (creditCardApplication == null)
            {
                return NotFound();
            }

            _context.creditCardsApplication.Remove(creditCardApplication);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CreditCardApplicationExists(int id)
        {
            return _context.creditCardsApplication.Any(e => e.ApplicationId == id);
        }
    }
}
