import React from "react";
import useClock from "../../hooks/useClock";
import "./BetterClock.scss";

function BetterClock() {

  const { timeString } = useClock();

  return (
    
    <div className="better-clock">
      <div className="better-clock__time">{timeString}</div>
    </div>
  );
}

export default BetterClock;
