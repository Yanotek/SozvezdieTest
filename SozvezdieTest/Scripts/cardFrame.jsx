class CardFrame extends React.Component {
    constructor(props) {
        super(props);
        this.showDetail = this.showDetail.bind(this);
        this.showFullList = this.showFullList.bind(this);
        this.state = {
            detailId: 0,
            currentPage: 0,
            state: "fullList"
        };
    }
    render() {
        if (this.state.state === "fullList") {
            return <CardList currentPage={this.state.currentPage} showDetail={this.showDetail} />;
        } else {
            return <CardDetail Id={this.state.detailId} showFullListClick={this.showFullList} />;
        }
    }

    showFullList() {
        this.setState({ state: "fullList" });
    }

    showDetail(Id) {
        this.setState({
            state: "detailPage",
            detailId: Id
        });
    }
}

ReactDOM.render(
    <CardFrame />,
    document.getElementById("content")
);