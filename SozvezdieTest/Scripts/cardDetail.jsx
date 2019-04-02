class CardDetail extends React.Component {
    componentWillMount() {
        this.loadDetail = this.loadDetail.bind(this);
        var tourJson = this.loadDetail();
        this.setState({
            Data: JSON.parse(tourJson)
        });
    }

    loadDetail() {
        var id = this.props.Id;
        var request = new XMLHttpRequest();
        request.open("GET", "http://localhost:53765/Tours/Details?Id=" + id, false);
        request.send();
        if (request.readyState == 4) {
            var status = request.status;
            if (status == 200) {
                return request.responseText;
            } else {
                alert("Сервер врменно недоступен. Пожалуйста, повторите попытку позже.");
            }
        }
    }

    render() {
        {
            var photo;
            if (this.state.Data.PhotoCard === null)
                photo = "https://look.com.ua/pic/201209/2560x1600/look.com.ua-24749.jpg";
            else
                photo = this.state.Data.PhotoCard.Photo;
        }
        return (
            <div>
                <h1 className="center">{this.state.Data.Title}</h1>
                <hr />
                <p className="center duration-text">{this.state.Data.Duration}</p>
                <p className="center">
                    <img className="main-ico" src={photo} />
                </p>
                <p className="center">
                    {
                        this.state.Data.PhotoAlbum.map(function (item) {
                            return <img className="optional-ico" src={item.Photo} />})
                    }        
                </p>
                <p className="route-header">Программа тура:</p>
                <ul> 
                    {
                        this.state.Data.Route.map(function (item) {
                            return <li className="route-element">{item}</li>})
                    }
                </ul>
                <p className="center description-text">{this.state.Data.Description}</p>
                <p>
                    <a className="text button" onClick={this.props.showFullListClick}>Вернуться к списку туров</a>
                </p>
            </div>);
    }
}

CardDetail.defaultProps = {
    Id: 0
};