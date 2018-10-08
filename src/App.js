import React, { Component } from 'react';
import DatePicker from 'antd/lib/date-picker';
import moment from 'moment';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: moment()
    };
  }

  onChange = (date, dateString) => {
    this.setState({ chosenDate: date });
  };

  render() {
    const { chosenDate } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Which Day</h1>
        </header>
        <main className="App-main">
          <p className="day-number-header">Day Number</p>
          <p className="day-number">{chosenDate ? chosenDate.dayOfYear() : '🤔'}</p>
          <DatePicker value={chosenDate} onChange={this.onChange} format="DD/MM/YYYY" />
        </main>
        <footer className="App-footer">
          <p>Coded with ❤️ by Khaled Mohamed</p>
        </footer>
      </div>
    );
  }
}

export default App;
