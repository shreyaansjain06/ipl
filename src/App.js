import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Graph from './Components/Graph';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Sidebar/>
    <Navbar/>
    <Graph/>
    </div>
  );
}

export default App;
