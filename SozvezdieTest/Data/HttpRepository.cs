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
        static List<Tour> Tours = new List<Tour>();

        HttpClient client = new HttpClient
        {
            BaseAddress = new Uri("https://cdn.sozvezdie-tour.ru")
        };
        public List<Tour> GetTours()
        {
            LoadTours();

            return Tours;
        }

        public Tour GetTour(int Id)
        {
            LoadTours();

            return Tours
                .FirstOrDefault(x=> x.Id == Id);
        }

        void LoadTours()
        {
            if(!Tours.Any())
            {
                string tours = client.GetStringAsync("/demo_offers.json").Result;

                Tours = JsonConvert.DeserializeObject<List<Tour>>(tours);
            }
        }
    }
}