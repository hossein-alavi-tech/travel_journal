import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data"

function App() {
  const Cards = data.map(entry => <Card {...entry} />)
  return (
    <div className="App">
      <Navbar />
      {Cards}
    </div>
  );
}

export default App;
 