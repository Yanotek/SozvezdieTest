class CardFrame extends React.Component {
    constructor(props) {
        super(props);
        this.showDetail = this.showDetail.bind(this);
        this.showFullList = this.showFullList.bind(this);
        this.state = {
            detailId: 0,
            currentPage: 0,
            state: "detailPage"
        };
    }
    render() {
        if (this.state.state === "fullList") {
            return <CardList />;
        } else {
            return <CardDetail Id={this.state.detailId} showFullListClick={this.showFullList} />;
        }
    }

    showFullList() {
        this.setState({ state: "fullList" });
    }

    showDetail(tourId) {

        this.setState({
            state: "detailPage",
            detailId: tourId
        });
    }
}

ReactDOM.render(
    <CardFrame />,
    document.getElementById("content")
);