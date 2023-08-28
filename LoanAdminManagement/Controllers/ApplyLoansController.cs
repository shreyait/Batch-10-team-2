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
        public async Task<ActionResult<IEnumerable<ApplyLoan>>> GetApplyLoan(string id)
        {
          if (_context.ApplyLoan == null)
          {
              return NotFound();
          }
            var applyLoan =  _context.ApplyLoan.Where(x=>x.empId==id).ToList();

            if (applyLoan == null)
            {
                return NotFound();
            }

            return applyLoan;
        }

        // PUT: api/ApplyLoans/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutApplyLoan(Guid id, ApplyLoan applyLoan)
        {
            if (id != applyLoan.Id)
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
            _context.ApplyLoan.Add(applyLoan);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetApplyLoan", new { id = applyLoan.Id }, applyLoan);
        }

        // DELETE: api/ApplyLoans/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteApplyLoan(Guid id)
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

        private bool ApplyLoanExists(Guid id)
        {
            return (_context.ApplyLoan?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
