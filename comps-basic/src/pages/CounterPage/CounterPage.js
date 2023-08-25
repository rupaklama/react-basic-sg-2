import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";

// reusable custom hook demo
const useCounter = initialCount => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  // 2. In the hook, return an object the contains the variables the component needs
  return { count, handleClick };
};

function CounterPage() {
  // 3. In the component, call your hook & destructure the props that component needs
  const { count, handleClick } = useCounter(0);

  // 1. Move the state & related codes into the custom hook to reuse the code
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}
export default CounterPage;
