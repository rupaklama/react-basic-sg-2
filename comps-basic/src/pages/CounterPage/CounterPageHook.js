import Button from "../../components/Button/Button";
import useCounter from "../../hooks/useCounter";

// Reusable custom hook demo
// const useCounter = initialCount => {
//   const [count, setCount] = useState(initialCount);

//   useEffect(() => {
//     console.log(count);
//   }, [count]);s

//   const increment = () => {
//     setCount(count + 1);
//   };

//   // 2. In the hook, return an object the contains the variables the component needs
//   return { count, increment };
// };

function CounterPage() {
  // 3. In the component, call your hook & destructure the props that component needs
  const { count, increment } = useCounter(0);

  // 1. Move the state & related codes into the custom hook to reuse the code
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}
export default CounterPage;
