using Newtonsoft.Json;
using SozvezdieTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace SozvezdieTest.Data
{
    public class HttpRepository
    {
        HttpClient client = new HttpClient
        {
            BaseAddress = new Uri("https://cdn.sozvezdie-tour.ru")
        };
        public List<Tour> GetTours()
        {
            string tours = client.GetStringAsync("/demo_offers.json").Result;

            return JsonConvert.DeserializeObject<List<Tour>>(tours);
        }

        public Tour GetTour(int Id)
        {
            string tours = client.GetStringAsync("/demo_offers.json").Result;

            return JsonConvert.DeserializeObject<List<Tour>>(tours)
                .FirstOrDefault(x=> x.Id == Id);
        }
    }
}