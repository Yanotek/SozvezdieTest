var page = 0;

var request = new XMLHttpRequest();

function loadMoreTours() {
    if (request.readyState != 4 && request.readyState != 0)
        return;
    ++page;
    
    request.open("GET", "http://localhost:53765/Tours/GetPage?page=" + page, true);
    request.onreadystatechange = reqReadyStateChange;
    request.send();
}

function reqReadyStateChange() {
    if (request.readyState == 4) {
        var status = request.status;
        if (status == 200) {
            renderTours(request.responseText);
        } else {
            alert("Сервер врменно недоступен. Пожалуйста, повторите попытку позже.");
        }
    }
}

function renderTours(jsonTours) {
    var tours = JSON.parse(jsonTours);
    for (var i = 0; i < tours.length; i++) {
        addTour(tours[i]);
    }
}

function addTour(tour) {
    var template = document.querySelector('#tourElement');

    var container = document.querySelector("div.container");
    var buttoncontainer = document.querySelector("p.button-container");
    var clone = document.importNode(template.content, true);
    clone.querySelector("#element-id").setAttribute("href", "/Tours/Details?id=" + tour.Id);
    clone.querySelector("#element-icon").setAttribute("style", "background: url(" + tour.PhotoCard.Thumbnail + ") no-repeat center top / cover");
    clone.querySelector("#element-title").innerText = tour.Title;
    clone.querySelector("#element-duration").innerText = tour.Duration;
    clone.querySelector("#element-price").innerText = "Цена от: "+ tour.MinPrice;
    clone.querySelector("#element-header").innerText = tour.Header;

    container.insertBefore(clone, buttoncontainer);
}

