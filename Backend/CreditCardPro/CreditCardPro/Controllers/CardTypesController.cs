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
    public class CardTypesController : ControllerBase
    {
        private readonly CardDbContext _context;

        public CardTypesController(CardDbContext context)
        {
            _context = context;
        }

        // GET: api/CardTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CardType>>> GetCardTypes()
        {
            return await _context.CardTypes.ToListAsync();
        }

        // GET: api/CardTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CardType>> GetCardType(int id)
        {
            var cardType = await _context.CardTypes.FindAsync(id);

            if (cardType == null)
            {
                return NotFound();
            }

            return cardType;
        }

        // PUT: api/CardTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCardType(int id, CardType cardType)
        {
            if (id != cardType.CardTypeId)
            {
                return BadRequest();
            }

            _context.Entry(cardType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CardTypeExists(id))
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

        // POST: api/CardTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<IActionResult> AddCardType(CardType cardType)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    _context.CardTypes.Add(cardType);
        //    await _context.SaveChangesAsync();

        //    return Ok(new { message = "Card type added successfully!" });
        //}
        [HttpPost]
        public async Task<ActionResult<CardType>> PostCardType(CardType cardType)
        {
            _context.CardTypes.Add(cardType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCardType", new { id = cardType.CardTypeId }, cardType);
        }

        // DELETE: api/CardTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCardType(int id)
        {
            var cardType = await _context.CardTypes.FindAsync(id);
            if (cardType == null)
            {
                return NotFound();
            }

            _context.CardTypes.Remove(cardType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CardTypeExists(int id)
        {
            return _context.CardTypes.Any(e => e.CardTypeId == id);
        }
    }
}
