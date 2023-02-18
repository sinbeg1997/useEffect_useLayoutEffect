import React, { useState, useEffect, useLayoutEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // useEffect khi click button Increment nhanh thì sẽ bị nhấp nháy lúc từ 3 về 0.
  useEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  // useLayoutEffect khi click button Increment nhanh thì sẽ không bị nhấp nháy lúc từ 3 về 0
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
