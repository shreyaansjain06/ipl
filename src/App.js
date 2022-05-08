import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Chartdata from './Components/Chartdata';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Sidebar/>
    <Navbar/>
    <Chartdata/>
    </div>
  );
}

export default App;
