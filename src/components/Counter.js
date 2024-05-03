import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux"

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const handleIncrement = () => {
    dispatch({ type: "increment"})
  }
  const handleDecrement = () => {
    dispatch({ type: "decrement"})
  }
  const toggleCounterHandler = () => {};

  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </p>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
