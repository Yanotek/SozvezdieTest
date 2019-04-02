class Card extends React.Component {

    render() {
        {
            var photo;
            if (this.props.Data.PhotoCard === null)
                photo = "https://look.com.ua/pic/201209/2560x1600/look.com.ua-24749.jpg";
            else
                photo = this.props.Data.PhotoCard.Thumbnail;
            var styleIcon = {
                background: "url('" + photo + "') no-repeat center top / cover"
            };
        }
        return <div className="element">
            <a className="text" id="element-id" onClick={(e) => this.props.showDetail(this.props.Data.Id)}>
                <div className="element-icon" id="element-icon" style={styleIcon}>
                    <div className="icon-description">
                        <h2 className="header" id="element-title">
                            {this.props.Data.Title}
                        </h2>
                        <h2 className="header duration" id="element-duration">
                            {this.props.Data.Duration}
                        </h2>
                    </div>
                </div>
                <div className="description">
                    <p>
                        <strong id="element-price">
                            Цена от: {this.props.Data.MinPrice} р.
                        </strong>
                    </p>
                    <p id="element-header">
                        {this.props.Data.Header}
                    </p>
                </div>
            </a>
        </div>;
    }
}

Card.defaultProps = {
    Data: {
        Id: 1,
        Header: "Its Header",
        MinPrice: "10500",
        Duration: "Mnoga",
        Title: "Its title"
    }
};