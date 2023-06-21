import "./Counter.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div id="counter_container">
      <div id="counter_number">{count}</div>
      <div id="arrow_container">
        <button id="button_R" onClick={() => dispatch(decrement())}>
          ➖
        </button>
        <button id="button_L" onClick={() => dispatch(increment())}>
          ➕
        </button>
      </div>
    </div>
  );
}

export default Counter;
