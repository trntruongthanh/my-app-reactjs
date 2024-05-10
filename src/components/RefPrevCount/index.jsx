import React, { useEffect, useRef, useState } from "react";

RefPrevCount.propTypes = {};

function RefPrevCount() {
  // 1
  const [count, setCount] = useState(0);

  const prevCount = useRef(count);
  const buttonRef = useRef();

  // 3
  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleIncreaseClick = () => {
    setCount((x) => x + 1);
  };

//   useEffect(() => {
//     console.log(buttonRef.current);
//   });

  
  // 2
  return (
    <div>
      <p>Previous: {prevCount.current}</p>
      <p>Current: {count}</p>

      <div>
        <button ref={buttonRef} onClick={handleIncreaseClick}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default RefPrevCount;
