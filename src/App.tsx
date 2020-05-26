import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from "moment";

function App() {
  // 2014-09-25 10:15:00
  const startDate = moment([2014,9,25]);
  const counter = moment(startDate.diff(moment())).format("MM-DD-YYYY HH:mm:ss")
  return (
    <div className="App">
      <div className="heading">
    Hanastian
      </div>
     <div className="counter">
       {counter}
     </div>
    </div>
  );
}

export default App;
