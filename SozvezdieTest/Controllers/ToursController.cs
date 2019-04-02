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
        static int countToursOnPage = 9;
        HttpRepository httpRepository;
        public ToursController()
        {
            httpRepository = new HttpRepository();
        }
        
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Details(int Id)
        {
            return Json(httpRepository.GetTour(Id),
                JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetPage(int page)
        {
            return Json(httpRepository
                .GetTours(page, countToursOnPage)
                .Select(x => new { x.Id, x.Title, x.Header, x.Duration, x.MinPrice, x.PhotoCard }),
                JsonRequestBehavior.AllowGet);
        }
    }
}