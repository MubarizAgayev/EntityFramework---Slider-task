using Microsoft.AspNetCore.Mvc;

namespace Task.Controllers
{
    public class WishlistController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
