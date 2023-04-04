using Microsoft.AspNetCore.Mvc;

namespace Task.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
