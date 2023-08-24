using LoanAdminManagement.Data;

namespace LoanAdminManagement.Model
{
    public class EmployeeService
    {
        private readonly DataContextdb _context;

        public EmployeeService(DataContextdb context)
        {
            _context = context;
        }
        public List<ApplyLoan> GetEmployeebyIds(string empId) 
        {
           
                return _context.ApplyLoan
                .Where(e=>empId.Contains(e.empId))
                .ToList();
            
        }
    }
}
