import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from "moment";
import { setInterval } from 'timers';

function App() {
  const [counter, setCounter] = React.useState("");
  const start = moment([2014, 9, 25]);
  const [on, setOn] = React.useState(false);

  function incrementCounter() {
    const diffTime = moment().unix() - start.unix();
    const duration = moment.duration(diffTime, 'seconds');
    setCounter(`${duration.years()} years, 
    ${duration.months()} months,
    ${duration.days()} days,
    ${duration.hours()} hours,
    ${duration.minutes()} minutes,
    ${duration.seconds()} seconds
    `);
  }

  React.useEffect(() => {

    setInterval(function () {
      incrementCounter();
    }, 1000);

    setTimeout(() => {
      setOn(true);
    }, 3000);

  }, []);


  return (
    <div className="App">
      <div className="fadeIn" />
      <div className="container">
        <img className={on ? "graphic visible" : "graphic hidden"} src="/blob_people.png" alt="blob people" />
      </div>
      <div className="counter">
        {counter}
      </div>
      <div className="heading" onClick={() => setOn(!on)}>
        Hanastian
      </div>

      {/* <div className="floater">
          :D
        </div> */}



    </div>
  );
}

export default App;
