import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show =useSelector((state) => state.show)
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleIncrease = () => {
    dispatch({ type: "increase", amount: 7})
  }
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <button onClick={handleIncrease}>+7</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </main>
  );
};

export default Counter;
