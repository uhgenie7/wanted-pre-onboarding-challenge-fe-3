import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>root</h2>
      <button
        onClick={() => {
          console.log("라우트");
        }}
      >
        {"Route naming"}
      </button>
    </div>
  );
}

export default App;
