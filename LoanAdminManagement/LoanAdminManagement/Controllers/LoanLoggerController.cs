using LoanAdminManagement.Data;
using LoanAdminManagement.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        //LoanLogger adding to database logic
      
       
       // [HttpGet]
        //[Route("{password:string}")]
      /*  public IActionResult actionResult([FromRoute]string password)
        {
            var details = dataContextdb.Loggers.FirstOrDefault(x => x.password == password);
            if(details == null)
            {
                return NotFound();
            }
            return Ok(details);
        }*/
    }
}
