using Microsoft.AspNetCore.Mvc;

namespace Task.Controllers
{
    public class BlogController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
