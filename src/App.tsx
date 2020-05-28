import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from "moment";
import { setInterval } from 'timers';

function App() {
  // 2014-09-25 10:15:00
  const [counter, setCounter] = React.useState("");
  const [on, setOn] = React.useState(false);

  setInterval(function () {
    setCounter(moment([2014, 9, 25]).fromNow());
  }, 1000);

  return (
    <div className="App">
      <div className="heading">
      </div>
      {/* <div className="counter">
        {counter}
      </div> */}


      <div className={on ? "mover mover-on" : "mover"}>
        <div className="floater">
          :D
        </div>
      </div>
        <button onClick={() => setOn(!on)}>Switch</button>
      <div className="container">
        {/* <div className="floater">
    ?
  </div> */}
      </div>
    </div>
  );
}

export default App;
