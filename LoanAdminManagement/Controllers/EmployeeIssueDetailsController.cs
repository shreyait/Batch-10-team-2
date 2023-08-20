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
    public class EmployeeIssueDetailsController : ControllerBase
    {
        private readonly DataContextdb _context;

        public EmployeeIssueDetailsController(DataContextdb context)
        {
            _context = context;
        }

        // GET: api/EmployeeIssueDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeIssueDetails>>> GetEmployeeIssueDetails()
        {
          if (_context.EmployeeIssueDetails == null)
          {
              return NotFound();
          }
            return await _context.EmployeeIssueDetails.ToListAsync();
        }

        // GET: api/EmployeeIssueDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeIssueDetails>> GetEmployeeIssueDetails(Guid id)
        {
          if (_context.EmployeeIssueDetails == null)
          {
              return NotFound();
          }
            var employeeIssueDetails = await _context.EmployeeIssueDetails.FindAsync(id);

            if (employeeIssueDetails == null)
            {
                return NotFound();
            }

            return employeeIssueDetails;
        }

        // PUT: api/EmployeeIssueDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeIssueDetails(Guid id, EmployeeIssueDetails employeeIssueDetails)
        {
            if (id != employeeIssueDetails.Id)
            {
                return BadRequest();
            }

            _context.Entry(employeeIssueDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeIssueDetailsExists(id))
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

        // POST: api/EmployeeIssueDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeeIssueDetails>> PostEmployeeIssueDetails(EmployeeIssueDetails employeeIssueDetails)
        {
          if (_context.EmployeeIssueDetails == null)
          {
              return Problem("Entity set 'DataContextdb.EmployeeIssueDetails'  is null.");
          }
            _context.EmployeeIssueDetails.Add(employeeIssueDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeIssueDetails", new { id = employeeIssueDetails.Id }, employeeIssueDetails);
        }

        // DELETE: api/EmployeeIssueDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeIssueDetails(Guid id)
        {
            if (_context.EmployeeIssueDetails == null)
            {
                return NotFound();
            }
            var employeeIssueDetails = await _context.EmployeeIssueDetails.FindAsync(id);
            if (employeeIssueDetails == null)
            {
                return NotFound();
            }

            _context.EmployeeIssueDetails.Remove(employeeIssueDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeIssueDetailsExists(Guid id)
        {
            return (_context.EmployeeIssueDetails?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
