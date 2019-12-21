import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      hour: 24,
      minute: 0,
      second: 0,
      ampm: ''
    });
  }

  componentDidMount() {
    setInterval(() => {
      let time = new Date();
      this.setState({
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
        ampm: time >= 12 ? 'am' : 'pm'
      });
    }, 1000);
  }

  // Map out getHours and move ahead 1 in array...
  hourArray = length => Array.from({ length }).map((v, k) => k).map(x => x+1);
  
  // Map out getMinutes and getSeconds display '0' if < 10
  array = length => Array.from({ length }).map((v, k) => k).map(x => x).map(x => x < 10 ? '0' + x : x);
  

  render() {
    return (
      <div className="App">
        <header className={`App-header ${(this.state.ampm) ? "am" : "pm"}`}>          
          <div className='box'>
            <div className='box-inner'>
            <div className='ampm'>
              {`${this.state.ampm}`}
            </div>

              {this.hourArray(1).map((x, index) => {
                return (
                  <div key={index}
                    className={`hour earth ${index === (this.state.hour - 1) ? "active" : ""}`}
                    style={{ animation: `rotate 86400s linear infinite`, transition: `transform 86400000ms linear`, transform: `translate(-50%, -50%) rotate(${index * (360 / 1) - (360 / 1) * (this.state.hour - 1)}deg)` }}>
                  </div>
                )
              })}
              
            {this.hourArray(12).map((x, index) => {
              return (
                <div key={index}
                  className={`hour item ${index === (this.state.hour - 1) ? "active" : ""}`}
                  style={{ transform: `translate(-50%, -50%) rotate(${index * (360 / 12) - (360 / 12) * (this.state.hour - 1)}deg)` }}>
                  {`${x}`}
                </div>
              )
            })}

              {this.array(60).map((x, index) => {
              return (
                <div key={index}
                  className={`minute item ${index === (this.state.minute) ? "active" : ""}`}
                  style={{ transform: `translate(-50%, -50%) rotate(${index * (360 / 60) - (360 / 60) * (this.state.minute)}deg)` }}>
                  {`${x}`}
                </div>
              )
            })}

            {this.array(60).map((x, index) => {
              return (
                <div key={index}
                  className={`second item ${index === (this.state.second) ? "active" : ""}`}
                  style={{ transform: `translate(-50%, -50%) rotate(${index * (360 / 60) - (360 / 60) * (this.state.second)}deg)` }}>
                  {`${x}`}
                </div>
              )
            })}
          </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
