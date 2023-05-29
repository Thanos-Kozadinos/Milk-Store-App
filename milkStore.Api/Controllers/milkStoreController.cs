using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using milkStore.Api.Models;

namespace milkStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class milkStoreController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public milkStoreController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/milkStore
        [HttpGet]
        public async Task<ActionResult<IEnumerable<milkStorage>>> GetmilkStorage()
        {
          if (_context.milkStorage == null)
          {
              return NotFound();
          }
            return await _context.milkStorage.ToListAsync();
        }

        // GET: api/milkStore/5
        [HttpGet("{id}")]
        public async Task<ActionResult<milkStorage>> GetmilkStorage(int id)
        {
          if (_context.milkStorage == null)
          {
              return NotFound();
          }
            var milkStorage = await _context.milkStorage.FindAsync(id);

            if (milkStorage == null)
            {
                return NotFound();
            }

            return milkStorage;
        }

        // PUT: api/milkStore/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutmilkStorage(int id, milkStorage milkStorage)
        {
            if (id != milkStorage.Id)
            {
                return BadRequest();
            }

            _context.Entry(milkStorage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!milkStorageExists(id))
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

        // POST: api/milkStore
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<milkStorage>> PostmilkStorage(milkStorage milkStorage)
        {
          if (_context.milkStorage == null)
          {
              return Problem("Entity set 'ApplicationDbContext.milkStorage'  is null.");
          }
            _context.milkStorage.Add(milkStorage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetmilkStorage", new { id = milkStorage.Id }, milkStorage);
        }

        // DELETE: api/milkStore/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletemilkStorage(int id)
        {
            if (_context.milkStorage == null)
            {
                return NotFound();
            }
            var milkStorage = await _context.milkStorage.FindAsync(id);
            if (milkStorage == null)
            {
                return NotFound();
            }

            _context.milkStorage.Remove(milkStorage);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool milkStorageExists(int id)
        {
            return (_context.milkStorage?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
