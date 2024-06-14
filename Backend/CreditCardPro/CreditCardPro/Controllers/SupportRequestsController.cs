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
    public class SupportRequestsController : ControllerBase
    {
        private readonly CardDbContext _context;

        public SupportRequestsController(CardDbContext context)
        {
            _context = context;
        }

        // GET: api/SupportRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SupportRequest>>> GetSupportRequests()
        {
            return await _context.SupportRequests.ToListAsync();
        }

        // GET: api/SupportRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SupportRequest>> GetRequest(int id)
        {
            var supportRequest = await _context.SupportRequests.FindAsync(id);

            if (supportRequest == null)
            {
                return NotFound();
            }

            return supportRequest;
        }

        // PUT: api/SupportRequests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRequestStatus(int id, SupportRequest supportRequest)
        {
            if (id != supportRequest.SupportRequestId)
            {
                return BadRequest();
            }

            _context.Entry(supportRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupportRequestExists(id))
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

        // POST: api/SupportRequests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SupportRequest>> Create(SupportRequest supportRequest)
        {
            _context.SupportRequests.Add(supportRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRequest", new { id = supportRequest.SupportRequestId }, supportRequest);
        }

        // DELETE: api/SupportRequests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSupportRequest(int id)
        {
            var supportRequest = await _context.SupportRequests.FindAsync(id);
            if (supportRequest == null)
            {
                return NotFound();
            }

            _context.SupportRequests.Remove(supportRequest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SupportRequestExists(int id)
        {
            return _context.SupportRequests.Any(e => e.SupportRequestId == id);
        }
        [HttpGet("requests")]
        public async Task<IActionResult> GetSupportRequest()
        {
            var requests = await _context.SupportRequests.ToListAsync();
            return Ok(requests);
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitSupportRequest(SupportRequest supportRequest)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.SupportRequests.Add(supportRequest);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Support request submitted successfully" });
        }
    }
}
