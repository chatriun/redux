import { legacy_createStore as createStore } from "redux"

const initState = {
  counter: 0,
  show: true
}
const counterReducer = (state = initState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      show: state.show
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      show: state.show
    };
  } else if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      show: state.show
    };
  } else if (action.type === "toggle"){
    return {
      counter: state.counter,
      show: !state.show
    }
  }
  return state;
};

const store = createStore(counterReducer);

export default store;