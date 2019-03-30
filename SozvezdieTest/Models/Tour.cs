using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SozvezdieTest.Models
{
    public class Tour
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Header { get; set; }
        public string Description { get; set; }
        public DateTime PeriodStart { get; set; }
        public DateTime PeriodEnd { get; set; }
        public double MinPrice { get; set; }
        public PhotoCard PhotoCard { get; set; }
        public List<PhotoCard> PhotoAlbum { get; set; }
        public List<string> Route { get; set; }

        public string Duration
        {
            get => $"{PeriodStart.ToString("dd.MM")}-{PeriodEnd.ToString("dd.MM")} ({(PeriodEnd - PeriodStart).Days + 1}дн.)";
        }
    }
}