using Microsoft.AspNetCore.Mvc;

namespace Task.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
