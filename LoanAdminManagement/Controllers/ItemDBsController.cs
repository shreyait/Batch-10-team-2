using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LoanAdminManagement.Data;
using LoanAdminManagement.Model;

namespace LoanAdminManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemDBsController : ControllerBase
    {
        private readonly DataContextdb _context;

        public ItemDBsController(DataContextdb context)
        {
            _context = context;
        }

        // GET: api/ItemDBs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemDB>>> GetItemDB()
        {
          if (_context.ItemDB == null)
          {
              return NotFound();
          }
            return await _context.ItemDB.ToListAsync();
        }

        // GET: api/ItemDBs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemDB>> GetItemDB(string id)
        {
          if (_context.ItemDB == null)
          {
              return NotFound();
          }
            var itemDB = await _context.ItemDB.FindAsync(id);

            if (itemDB == null)
            {
                return NotFound();
            }

            return itemDB;
        }

        // PUT: api/ItemDBs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItemDB(string id, ItemDB itemDB)
        {
            if (id != itemDB.Itemid)
            {
                return BadRequest();
            }

            _context.Entry(itemDB).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemDBExists(id))
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

        // POST: api/ItemDBs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ItemDB>> PostItemDB(ItemDB itemDB)
        {
          if (_context.ItemDB == null)
          {
              return Problem("Entity set 'DataContextdb.ItemDB'  is null.");
          }
            _context.ItemDB.Add(itemDB);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ItemDBExists(itemDB.Itemid))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetItemDB", new { id = itemDB.Itemid }, itemDB);
        }

        // DELETE: api/ItemDBs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItemDB(string id)
        {
            if (_context.ItemDB == null)
            {
                return NotFound();
            }
            var itemDB = await _context.ItemDB.FindAsync(id);
            if (itemDB == null)
            {
                return NotFound();
            }

            _context.ItemDB.Remove(itemDB);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ItemDBExists(string id)
        {
            return (_context.ItemDB?.Any(e => e.Itemid == id)).GetValueOrDefault();
        }
    }
}
