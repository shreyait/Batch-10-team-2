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
    public class EmployeeCardDetailsController : ControllerBase
    {
        private readonly DataContextdb _context;

        public EmployeeCardDetailsController(DataContextdb context)
        {
            _context = context;
        }

        // GET: api/EmployeeCardDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeCardDetails>>> GetEmployeeCardDetails()
        {
          if (_context.EmployeeCardDetails == null)
          {
              return NotFound();
          }
            return await _context.EmployeeCardDetails.ToListAsync();
        }

        // GET: api/EmployeeCardDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeCardDetails>> GetEmployeeCardDetails(Guid id)
        {
          if (_context.EmployeeCardDetails == null)
          {
              return NotFound();
          }
            var employeeCardDetails = await _context.EmployeeCardDetails.FindAsync(id);

            if (employeeCardDetails == null)
            {
                return NotFound();
            }

            return employeeCardDetails;
        }

        // PUT: api/EmployeeCardDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeCardDetails(Guid id, EmployeeCardDetails employeeCardDetails)
        {
            if (id != employeeCardDetails.Id)
            {
                return BadRequest();
            }

            _context.Entry(employeeCardDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeCardDetailsExists(id))
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

        // POST: api/EmployeeCardDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeeCardDetails>> PostEmployeeCardDetails(EmployeeCardDetails employeeCardDetails)
        {
          if (_context.EmployeeCardDetails == null)
          {
              return Problem("Entity set 'DataContextdb.EmployeeCardDetails'  is null.");
          }
            _context.EmployeeCardDetails.Add(employeeCardDetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeCardDetails", new { id = employeeCardDetails.Id }, employeeCardDetails);
        }

        // DELETE: api/EmployeeCardDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeCardDetails(Guid id)
        {
            if (_context.EmployeeCardDetails == null)
            {
                return NotFound();
            }
            var employeeCardDetails = await _context.EmployeeCardDetails.FindAsync(id);
            if (employeeCardDetails == null)
            {
                return NotFound();
            }

            _context.EmployeeCardDetails.Remove(employeeCardDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeCardDetailsExists(Guid id)
        {
            return (_context.EmployeeCardDetails?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
