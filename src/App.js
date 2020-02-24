import React from "react";
//state
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      runningTime: 0,
      seconds: 0,
      hours: 0,
      minutes: 0
    };
    setInterval(() => {
      if (this.state.status) {
        this.setState({
          runningTime: this.state.runningTime + 1
        });
        this.timeConversion(this.state.runningTime);
      }
    }, 1000);
  }
  timeConversion = s => {
    this.setState({
      hours: Math.floor(s / 3600),
      minutes: Math.floor((s - this.state.hours * 3600) / 60),
      seconds: Math.floor(
        (s - this.state.hours * 3600 - this.state.minutes * 60) / 1
      )
    });
  };
  Click = () => {
    this.setState({ status: !this.state.status });
  };
  Reset = () => {
    this.setState({
      status: false,
      runningTime: 0,
      seconds: 0,
      hours: 0,
      minutes: 0
    });
  };
  render() {
    return (
      <div className="container">
        <div className="container">
          <div>
            <p>{String(this.state.hours).padStart(2, "0")}:</p>
            <p> H </p>
          </div>
          <div>
            <p>{String(this.state.minutes).padStart(2, "0")}: </p>
            <p> Min </p>
          </div>
          <div>
            <p>{String(this.state.seconds).padStart(2, "0")}</p>
            <p> Sec </p>
          </div>
        </div>
        <div>
          <button onClick={this.Click}>
            {this.state.status ? "Stop" : "Start"}
          </button>
          <button onClick={this.Reset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Timer;
