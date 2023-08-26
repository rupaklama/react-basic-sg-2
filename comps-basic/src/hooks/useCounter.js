import { useEffect, useState } from "react";

// reusable custom hook demo
const useCounter = initialCount => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  // 2. In the hook, return an object the contains the variables the component needs
  return { count, increment };
};
export default useCounter;
