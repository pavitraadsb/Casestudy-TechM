using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CreditCardPro.Models;
using Microsoft.AspNetCore.Authorization;

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
        public async Task<ActionResult<IEnumerable<CreditCardApplication>>> GetCreditCardApplications(int customerId)
        {
            return await _context.creditCardsApplication
                                 .Where(app => app.CustomerId == customerId)
                                 .ToListAsync();
        }
        [HttpGet("admin")]
        public async Task<ActionResult<IEnumerable<CreditCardApplication>>> GetCreditCardApplicationsForAdmin()
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
        [HttpGet("CardTypes")]
        public IActionResult GetCardTypes()
        {
            var cardTypes = _context.CardTypes.ToList();
            return Ok(cardTypes);
        }
        [HttpGet("customer/{CustomerId}")]
        public async Task<ActionResult<IEnumerable<CreditCardApplication>>> GetApplicationsByCustomerId(int CustomerId)
        {
            var applications = await _context.creditCardsApplication
                .Where(a => a.CustomerId == CustomerId)
                .ToListAsync();

            if (applications == null || applications.Count == 0)
            {
                return NotFound();
            }

            return applications;
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
        [HttpPut("{applicationId}/status")]
        public async Task<IActionResult> UpdateApplicationStatus(int applicationId, [FromBody] UpdateApplicationStatusRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var application = await _context.creditCardsApplication.FindAsync(applicationId);
            if (application == null)
            {
                return NotFound();
            }

            application.ApplicationStatus = request.Status;
            application.ReviewedBy = request.ReviewedBy;
            application.ReviewedDate = DateTime.Now;

            _context.Entry(application).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplicationExists(applicationId))
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
        [HttpPost("apply")]
        public async Task<IActionResult> ApplyForCreditCard(CreditCardApplication application)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            
            
            _context.creditCardsApplication.Add(application);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Application submitted successfully!" });
        }

        [HttpPost("review/{id}")]
        public async Task<IActionResult> ReviewApplication(int id, [FromBody] ReviewRequest reviewRequest)
        {
            var application = await _context.creditCardsApplication.FindAsync(id);
            if (application == null)
            {
                return NotFound();
            }

            application.ReviewedDate = DateTime.Now;
            application.ReviewedBy = reviewRequest.ReviewedBy;
            application.ApplicationStatus = reviewRequest.Status;

            await _context.SaveChangesAsync();
            return Ok(new { message = "Application reviewed successfully!" });
        }
        private bool ApplicationExists(int id)
        {
            return _context.creditCardsApplication.Any(e => e.ApplicationId == id);
        }


    }
    public class ReviewRequest
    {
        public int ReviewedBy { get; set; }
        public string Status { get; set; }
    }
    public class UpdateApplicationStatusRequest
    {
        public string Status { get; set; }
        public int ReviewedBy { get; set; }
    }
}
