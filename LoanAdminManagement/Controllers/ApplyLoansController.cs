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
    public class ApplyLoansController : ControllerBase
    {
        private readonly DataContextdb _context;

        public ApplyLoansController(DataContextdb context)
        {
            _context = context;
        }

        // GET: api/ApplyLoans
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApplyLoan>>> GetApplyLoan()
        {
          if (_context.ApplyLoan == null)
          {
              return NotFound();
          }
            return await _context.ApplyLoan.ToListAsync();
        }

        // GET: api/ApplyLoans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ApplyLoan>> GetApplyLoan(string id)
        {
          if (_context.ApplyLoan == null)
          {
              return NotFound();
          }
            var applyLoan = await _context.ApplyLoan.FindAsync(id);

            if (applyLoan == null)
            {
                return NotFound();
            }

            return applyLoan;
        }

        // PUT: api/ApplyLoans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutApplyLoan(string id, ApplyLoan applyLoan)
        {
            if (id != applyLoan.empId)
            {
                return BadRequest();
            }

            _context.Entry(applyLoan).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApplyLoanExists(id))
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

        // POST: api/ApplyLoans
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ApplyLoan>> PostApplyLoan(ApplyLoan applyLoan)
        {
          if (_context.ApplyLoan == null)
          {
              return Problem("Entity set 'DataContextdb.ApplyLoan'  is null.");
          }
          ItemDB itemDB = new ItemDB();
            string originalValue = applyLoan.IMake;
            string shortvalue = originalValue.Substring(0, 1);
            itemDB.Itemid = applyLoan.empId;
            itemDB.ItemMake = applyLoan.IMake;
            itemDB.IssueStatus = shortvalue;
            itemDB.ItemDescription = applyLoan.IDes;
            itemDB.ItemValue = applyLoan.Ivalue;
            itemDB.ItemCategory = applyLoan.IMake;

            _context.ItemDB.Add(itemDB);
            _context.ApplyLoan.Add(applyLoan);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ApplyLoanExists(applyLoan.empId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetApplyLoan", new { id = applyLoan.empId }, applyLoan);
        }

        // DELETE: api/ApplyLoans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteApplyLoan(string id)
        {
            if (_context.ApplyLoan == null)
            {
                return NotFound();
            }
            var applyLoan = await _context.ApplyLoan.FindAsync(id);
            if (applyLoan == null)
            {
                return NotFound();
            }

            _context.ApplyLoan.Remove(applyLoan);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ApplyLoanExists(string id)
        {
            return (_context.ApplyLoan?.Any(e => e.empId == id)).GetValueOrDefault();
        }
    }
}
