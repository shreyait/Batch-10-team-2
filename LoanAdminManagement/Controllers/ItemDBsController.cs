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
        public async Task<ActionResult<ItemDB>> GetItemDB(Guid id)
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
        public async Task<IActionResult> PutItemDB(Guid id, ItemDB itemDB)
        {
            if (id != itemDB.Id)
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
          //Testing the applyloan itemdb merging
         // ApplyLoan applyLoan = new ApplyLoan();
            //Registration registration = new Registration();
            /*itemDB.Itemid = applyLoan.empId;
            itemDB.ItemMake = applyLoan.IMake;
            itemDB.IssueStatus = applyLoan.Ivalue;
            itemDB.ItemDescription = applyLoan.IDes;
            itemDB.ItemValue = applyLoan.Ivalue;
            itemDB.ItemCategory = applyLoan.IMake;*/
            _context.ItemDB.Add(itemDB);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItemDB", new { id = itemDB.Id }, itemDB);
        }

        // DELETE: api/ItemDBs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItemDB(Guid id)
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

        private bool ItemDBExists(Guid id)
        {
            return (_context.ItemDB?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
