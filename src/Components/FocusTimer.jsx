
import React, { useState, useEffect } from "react";

function FocusTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => {
    setIsRunning(false);
    if (time > 0) {
      const session = {
        duration: time,
        completedAt: new Date().toLocaleString(),
      };
      setSessions([...sessions, session]);
    }
  };
  const resetTimer = () => setTime(0);

  const formatTime = (seconds) =>
    new Date(seconds * 1000).toISOString().substr(11, 8);

  return (
    <div>

    <div className="p-6 text-center m-10 ">
      <h1 className="text-2xl font-bold">Focus Timer</h1>
      <p className="text-4xl my-4 shadow-2xl p-3 w-fit m-auto px-50">{formatTime(time)}</p>
      <div className="space-x-2">
        <button onClick={startTimer} className="px-4 py-2 bg-green-500 text-white  rounded">Start</button>
        <button onClick={stopTimer} className="px-4 py-2 bg-red-500 text-white rounded">Stop</button>
        <button onClick={resetTimer} className="px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
      </div>
    </div>
    <div>
      <div className="p-6 text-center m-10">

      <h2 className="mt-6 text-lg font-semibold">Session History</h2>
      <ul className="mt-2">
        {sessions.map((s, i) => (
          <li key={i} className="  shadow-xl w-fit p-2 m-auto  px-40 my-3">
            {formatTime(s.duration)} – {s.completedAt}
          </li>
        ))}
      </ul>
        </div>
        </div>
    </div>
  );
}

export default FocusTimer;
