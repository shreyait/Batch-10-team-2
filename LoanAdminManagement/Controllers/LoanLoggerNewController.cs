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
    public class LoanLoggerNewController : ControllerBase
    {
        private readonly DataContextdb _context;

        public LoanLoggerNewController(DataContextdb context)
        {
            _context = context;
        }

        // GET: api/LoanLoggerNew
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Logger>>> GetLoggers()
        {
          if (_context.Loggers == null)
          {
              return NotFound();
          }
            return await _context.Loggers.ToListAsync();
        }

        // GET: api/LoanLoggerNew/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Logger>> GetLogger(Guid id)
        {
          if (_context.Loggers == null)
          {
              return NotFound();
          }
            var logger = await _context.Loggers.FindAsync(id);

            if (logger == null)
            {
                return NotFound();
            }

            return logger;
        }

        // PUT: api/LoanLoggerNew/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLogger(Guid id, Logger logger)
        {
            if (id != logger.Id)
            {
                return BadRequest();
            }

            _context.Entry(logger).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoggerExists(id))
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

        // POST: api/LoanLoggerNew
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Logger>> PostLogger(Logger logger)
        {
          if (_context.Loggers == null)
          {
              return Problem("Entity set 'DataContextdb.Loggers'  is null.");
          }
            _context.Loggers.Add(logger);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLogger", new { id = logger.Id }, logger);
        }

        // DELETE: api/LoanLoggerNew/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLogger(Guid id)
        {
            if (_context.Loggers == null)
            {
                return NotFound();
            }
            var logger = await _context.Loggers.FindAsync(id);
            if (logger == null)
            {
                return NotFound();
            }

            _context.Loggers.Remove(logger);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //login validation
        [HttpPost("login")]
        public async Task<IActionResult> Loginchecker(Logger logger)
        {
            var employee = await _context.Loggers.FirstOrDefaultAsync(u=>u.password == logger.password);
            if(employee == null)
            {
                return NotFound();
            }
            if(logger.Name!=employee.Name) { throw new Exception("username not maching"); }
            return new OkObjectResult(employee);
        }

        private bool LoggerExists(Guid id)
        {
            return (_context.Loggers?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
