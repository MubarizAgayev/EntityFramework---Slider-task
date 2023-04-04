using Microsoft.AspNetCore.Mvc;

namespace Task.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
