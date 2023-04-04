using Microsoft.AspNetCore.Mvc;

namespace Task.Controllers
{
    public class BasketController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
