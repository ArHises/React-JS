// import "./App.css";
import TemperatureConverter from "./components/TemperatureConverter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
