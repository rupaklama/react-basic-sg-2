import { useReducer, useState } from "react";
import Button from "../../components/Button/Button";
import Panel from "../../components/Panel/Panel";

// a function to update slices of states
const reducer = (state, action) => {
  // note: Rules around Reducer Function
  // 1. Whatever you return, it will be you new state
  // 2. If you return nothing, then your state wil be 'undefined'
  // 3. No async/await/promises, no outside variables
  // 4. state.count = state.count + 1 (can't directly modify the state object) unless using 'immer'
  // 5. Need to completely Reset State then Return Brand New Object { count: initialCount, valueToAdd: 0,}
  // without merging or copying object into new Object, common indirect way in Reducer function

  // note - Good practice is to add business logic into Reducer and keep Dispatches simple
  if (action.type === "increment-count") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === "decrement-count") {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === "change-value") {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }

  if (action.type === "add-value") {
    return {
      ...state,
      count: state.count + state.valueToAdd,
      valueToAdd: 0,
    };
  }

  // note - need to return state value else state will be undefined
  return state;
};

// NOTE: useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount || 0);
  // const [valueToAdd, setValueToAdd] = useState(0);

  // note - useReducer can be alternative to useState if we have several different closely-related pieces of state
  // Very useful when future state values depend on the current state eg. adding new count to current
  // note - 'dispatch' dispatches the action object 'payload' to the Reducer function above
  // to update our component state.
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const incrementCount = () => {
    // Similar to 'setState' in useState hook
    // This will Call Reducer function to update the state with or without params.

    // note - Best practice is to pass an Action Object to tell
    // the Reducer how the state should be updated. This will avoid issues with state updates.

    // note - The Action Object will always have a 'type' property as a string which
    // tells the reducer what state update it needs to make.
    // If we need to communicate or pass some data to the Reducer, it will be
    // placed on the 'payload' property of the Action Object.
    dispatch({
      type: "increment-count",
    });
  };

  const decrementCount = () => {
    if (state.count <= 0) {
      return;
    }

    dispatch({
      type: "decrement-count",
    });

    // setCount(prevState => prevState - 1);
  };

  const handleChange = e => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: "change-value",
      payload: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // setCount(count + valueToAdd);
    dispatch({
      type: "add-value",
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>

      <div className="flex flex-row">
        <Button onClick={incrementCount} className="mr-2">
          Increment
        </Button>
        <Button onClick={decrementCount}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Add a lot!</label>
        <input
          type="number"
          id="input"
          // note - use empty string instead of the default 0 in the input value
          // 0 is the falsy value & will default to empty string
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
