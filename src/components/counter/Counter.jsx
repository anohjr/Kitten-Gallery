import "./Counter.scss";

function Counter() {

  return (
    <div id="counter_container">
      <div id="counter_number">10</div>
      <div id="arrow_container">
        <button id="button_L">⬅️</button>
        <button id="button_R">➡️</button>
      </div>
    </div>
  );
}

export default Counter;
