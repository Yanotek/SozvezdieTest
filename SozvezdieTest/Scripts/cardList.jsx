var request = new XMLHttpRequest();

class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.showDetailPage = this.showDetailPage.bind(this);
        this.loadMoreTours = this.loadMoreTours.bind(this);
        this.addTours = this.addTours.bind(this);
        this.state = {
            items: [],
            currentPage: this.props.currentPage
        };
        this.loadMoreTours();
    }
    render() {
        return (
        <div>
            {
                this.state.items.map((item) => {
                    return <Card Data={item} showDetail={this.props.showDetail} />
                })
            }
            <p className="button-container">
                <a className="text button" onClick={this.loadMoreTours}>Загрузить ещё</a>
            </p>
        </div>
        );
    }

    showDetailPage() {
        alert("kek");
    }

    loadMoreTours() {
        if (request.readyState != 4 && request.readyState != 0)
            return;
        request.open("GET", "http://localhost:53765/Tours/GetPage?page=" + this.state.currentPage, true);
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
        ++this.state.currentPage;
    }

    addTours(toursJson) {
        var tours = JSON.parse(toursJson);
        var list = this.state.items.concat(tours);
        this.setState({ items: list });
    }
}