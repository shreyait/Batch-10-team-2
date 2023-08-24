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
    public class EmployeeMastersController : ControllerBase
    {
        private readonly DataContextdb _context;

        public EmployeeMastersController(DataContextdb context)
        {
            _context = context;
        }

        // GET: api/EmployeeMasters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeMaster>>> GetEmployeeMaster()
        {
          if (_context.EmployeeMaster == null)
          {
              return NotFound();
          }
            return await _context.EmployeeMaster.ToListAsync();
        }

        // GET: api/EmployeeMasters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeMaster>> GetEmployeeMaster(string id)
        {
          if (_context.EmployeeMaster == null)
          {
              return NotFound();
          }
            var employeeMaster = await _context.EmployeeMaster.FindAsync(id);

            if (employeeMaster == null)
            {
                return NotFound();
            }

            return employeeMaster;
        }

        // PUT: api/EmployeeMasters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeMaster(string id, EmployeeMaster employeeMaster)
        {
            if (id != employeeMaster.empId)
            {
                return BadRequest();
            }

            _context.Entry(employeeMaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeMasterExists(id))
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

        // POST: api/EmployeeMasters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmployeeMaster>> PostEmployeeMaster(EmployeeMaster employeeMaster)
        {
          if (_context.EmployeeMaster == null)
          {
              return Problem("Entity set 'DataContextdb.EmployeeMaster'  is null.");
          }
            _context.EmployeeMaster.Add(employeeMaster);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeeMasterExists(employeeMaster.empId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployeeMaster", new { id = employeeMaster.empId }, employeeMaster);
        }

        // DELETE: api/EmployeeMasters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeMaster(string id)
        {
            if (_context.EmployeeMaster == null)
            {
                return NotFound();
            }
            var employeeMaster = await _context.EmployeeMaster.FindAsync(id);
            if (employeeMaster == null)
            {
                return NotFound();
            }

            _context.EmployeeMaster.Remove(employeeMaster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeMasterExists(string id)
        {
            return (_context.EmployeeMaster?.Any(e => e.empId == id)).GetValueOrDefault();
        }
    }
}
