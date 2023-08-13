using LoanAdminManagement.Data;
using LoanAdminManagement.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LoanAdminManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationControlleremp : ControllerBase
    {
        private readonly DataContextdb dataContextdb;

        public RegistrationControlleremp(DataContextdb dataContextdb)
        {
            this.dataContextdb = dataContextdb;
        }

        [HttpPost]
        public IActionResult ActionResult()
        {
            Registration registration = new Registration();
            return Ok(registration);
        }
    }

}
