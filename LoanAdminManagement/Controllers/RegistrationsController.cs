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
    public class RegistrationsController : ControllerBase
    {
        private readonly DataContextdb _context;

        public RegistrationsController(DataContextdb context)
        {
            _context = context;
        }

        // GET: api/Registrations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Registration>>> GetRegistrations()
        {
          if (_context.Registrations == null)
          {
              return NotFound();
          }
            return await _context.Registrations.ToListAsync();
        }

        // GET: api/Registrations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Registration>> GetRegistration(Guid id)
        {
          if (_context.Registrations == null)
          {
              return NotFound();
          }
            var registration = await _context.Registrations.FindAsync(id);

            if (registration == null)
            {
                return NotFound();
            }

            return registration;
        }

        // PUT: api/Registrations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{employeeId}")]
        public async Task<IActionResult> PutRegistration(string employeeId, Registration registration)
        {
            if (employeeId != registration.employeeId)
            {
                return BadRequest();
            }

            _context.Entry(registration).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegistrationExists(employeeId))
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

        // POST: api/Registrations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Registration>> PostRegistration(Registration registration)
        {
            Logger logger = new Logger();
            logger.Id = registration.Id;
            logger.Name = registration.username;
            logger.password= registration.password;

          if (_context.Registrations == null)
          {
              return Problem("Entity set 'DataContextdb.Registrations'  is null.");
          }
            _context.Registrations.Add(registration);
            _context.Loggers.Add(logger);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRegistration", new { id = registration.Id }, registration);
        }

        // DELETE: api/Registrations/5
        [HttpDelete("{employeeId}")]
        public async Task<IActionResult> DeleteRegistration(string employeeId)
        {
            if (_context.Registrations == null)
            {
                return NotFound();
            }
            var registration =  _context.Registrations.FirstOrDefault(x=>x.employeeId==employeeId);
            if (registration == null)
            {
                return NotFound();
            }

            _context.Registrations.Remove(registration);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RegistrationExists(string id)
        {
            return (_context.Registrations?.Any(e => e.employeeId == id)).GetValueOrDefault();
        }
    }
}
