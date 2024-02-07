using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Chefs.Models;
using Microsoft.EntityFrameworkCore;

namespace Chefs.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private AppDbContext _context;     

    public HomeController(ILogger<HomeController> logger ,  AppDbContext context)
    {
        _logger = logger;

        _context = context;    
    }

    public IActionResult Index()
    {
           // Now any time we want to access our database we use _context   
        List<Chef> AllChefs = _context.Chefs.Include(d => d.AllDishes).ToList();
        return View(AllChefs);
    }

    public IActionResult Privacy()
    {
        List<Dish> AllDishes = _context.Dishes.Include(c =>c.Creator).ToList() ; 
        return View(AllDishes);
    }

       public IActionResult AddChef()
    {
        return View();
    }

       public IActionResult AddDish()
    {   
        ViewBag.chefs=_context.Chefs.ToList();
        return View();
    }

      [HttpPost]
    public IActionResult CreateChef(Chef newChef)
    {
        if (ModelState.IsValid)
        {
            // 1  Add
            _context.Add(newChef);
            // 2 Save
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        // Display Error messages
        return View("AddChef");
    }

    [HttpPost]
    public IActionResult CreateDish(Dish newDish)
    {
        if (ModelState.IsValid)
        {
            // 1  Add
            _context.Add(newDish);
            // 2 Save
            _context.SaveChanges();
            return RedirectToAction("Privacy");
        }
        // Display Error messages
        return View("AddDish");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
