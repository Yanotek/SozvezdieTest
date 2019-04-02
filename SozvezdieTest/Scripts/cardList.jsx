var page = 0;

var request = new XMLHttpRequest();

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.loadMoreTours = this.loadMoreTours.bind(this);
        this.addTours = this.addTours.bind(this);
        this.state = {
            items: []
        };
        this.loadMoreTours();
    }
    render() {
        return (
        <div>
            {
                this.state.items.map(function (item) {
                    return <Card Data={item}/>
                })
                }
                <p className="button-container">
                    <a className="text button" onClick={this.loadMoreTours}>Загрузить ещё</a>
                </p>
        </div>
        );
    }

    loadMoreTours() {
        if (request.readyState != 4 && request.readyState != 0)
            return;
        request.open("GET", "http://localhost:53765/Tours/GetPage?page=" + page, true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                var status = request.status;
                if (status == 200) {
                    this.addTours(request.responseText);
                } else {
                    alert("Сервер врменно недоступен. Пожалуйста, повторите попытку позже.");
                }
            }
        }.bind(this);
        request.send();
        ++page;
    }

    addTours(toursJson) {
        var tours = JSON.parse(toursJson);
        var list = this.state.items.concat(tours);
        this.setState({ items: list });
    }
}

ReactDOM.render(
    <CardList />,
    document.getElementById("content")
);