using LoanAdminManagement.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LoanAdminManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeServiceController : ControllerBase
    {
        private readonly EmployeeService _employeeService;
        public EmployeeServiceController(EmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
    }
}
