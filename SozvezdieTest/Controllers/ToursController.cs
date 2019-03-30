using SozvezdieTest.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SozvezdieTest.Controllers
{
    public class ToursController : Controller
    {
        HttpRepository httpRepository;
        public ToursController()
        {
            httpRepository = new HttpRepository();
        }
        // GET: Tours
        public ActionResult Index()
        {
            return View(httpRepository.GetTours());
        }

        public ActionResult Details(int Id)
        {
            return View(httpRepository.GetTour(Id));
        }
    }
}