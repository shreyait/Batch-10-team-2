using LoanAdminManagement.Data;
using LoanAdminManagement.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LoanAdminManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanLoggerController : ControllerBase
    {
        private readonly DataContextdb dataContextdb;

        public LoanLoggerController(DataContextdb dataContextdb) 
        {
            this.dataContextdb = dataContextdb;
        }
        [HttpGet]
        [Route("{password:Guid}")]
        public IActionResult actionResult([FromRoute]string password)
        {
            var details = dataContextdb.Loggers.FirstOrDefault(x => x.password == password);
            if(details == null)
            {
                return NotFound();
            }
            return Ok(details);
        }
    }
}
