import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // countTotalFeedback() countPositiveFeedbackPercentage()
  handleGood = () => {
    this.setState(prevState => ({
      good: (prevState.good += 1),
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: (prevState.neutral += 1),
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: (prevState.bad += 1),
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <button onClick={this.handleGood}>GOOD</button>
          <button onClick={this.handleBad}>BAD</button>
          <button onClick={this.handleNeutral}>NEUTRAL</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>
              <p>
                Good:<span>{good}</span>
              </p>
            </li>
            <li>
              <p>
                Neutral:<span>{neutral}</span>
              </p>
            </li>
            <li>
              <p>
                Bad:<span>{bad}</span>
              </p>
            </li>
            <li>
              <p>
                Total:<span>0</span>
              </p>
            </li>
            <li>
              <p>
                Positive feedback:<span>0</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
