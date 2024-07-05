import { useEffect, useReducer } from "react";

let initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.countType };
    case "decrement":
      return { ...state, counter: state.counter - action.countType };
    default:
      return state;
  }
};

export default function Home() {
  const [count, dispatch] = useReducer(reducer, initialState);

  // Load initial state from localStorage on component mount
  useEffect(() => {
    const savedCounter = localStorage.getItem("counter");
    if (savedCounter) {
      dispatch({ type: "increment", countType: parseInt(savedCounter, 10) });
    }
  }, []);

  // Save counter value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("counter", count.counter);
  }, [count.counter]);

  return <main></main>;
}
