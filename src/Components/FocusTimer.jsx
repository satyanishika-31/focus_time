import { useEffect, useState } from "react";

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
    <div className="mx-auto w-full max-w-3xl">
      <div className="mx-auto my-6 px-2 text-center sm:my-10 sm:px-6">
        <h1 className="text-2xl font-bold sm:text-3xl">Focus Timer</h1>
        <p className="mx-auto my-4 w-full max-w-md rounded p-4 text-4xl  shadow-2xl sm:text-5xl">
          {formatTime(time)}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <button
            onClick={startTimer}
            className="w-full rounded bg-green-500 px-4 py-2 font-medium text-white"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="w-full rounded bg-red-500 px-4 py-2 font-medium text-white"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            className="w-full rounded bg-gray-500 px-4 py-2 font-medium text-white"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mx-auto my-6 px-2 text-center sm:my-10 sm:px-6">
        <h2 className="mt-6 text-lg font-semibold sm:text-xl">
          Session History
        </h2>
        <ul className="mx-auto mt-4 flex w-full max-w-xl flex-col gap-3">
          {sessions.map((s, i) => (
            <li
              key={i}
              className="w-full rounded px-3 py-2 text-sm shadow-xl sm:px-6 sm:text-base"
            >
              <span className="block font-medium sm:inline">
                {formatTime(s.duration)}
              </span>
              <span className="hidden sm:inline"> - </span>
              <span className="block break-words sm:inline">
                {s.completedAt}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FocusTimer;
