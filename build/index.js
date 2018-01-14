class PomodoroTimer extends React.Component {

    constructor() {
        super();
        this.state = {
            timeElapsed: 0
        };
    }

    totalTime(workTime, restTime) {

        return workTime + restTime;
    }

    componentDidMount() {
        this.interval = setInterval(this.elapseTime.bind(this), 1000);
        this.setState({ start: new Date() });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    elapseTime() {

        var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);
        this.setState({ timeElapsed: timeElapsed });

        if (this.state.timeElapsed >= this.props.workingTime * 60) {
            clearInterval(this.interval);
            alert("It's time for a break!");
        }
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                { className: "display-4" },
                "This timer runs for ",
                this.props.workingTime,
                " minutes, followed by rest of ",
                this.props.restingTime,
                " minutes."
            ),
            React.createElement(
                "p",
                { className: "lead" },
                "For a total time of: ",
                this.totalTime(this.props.workingTime, this.props.restingTime),
                React.createElement("br", null),
                "There are ",
                this.state.timeElapsed,
                " seconds elapsed"
            )
        );
    }
}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 1, restingTime: 5 }), document.getElementById('app'));