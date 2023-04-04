using Microsoft.AspNetCore.Mvc;

namespace Task.Controllers
{
    public class CheckoutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
