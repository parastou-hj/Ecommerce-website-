import './App.css';
import Home from './components/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import HeaderNavbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <header>
      <HeaderNavbar/>
      </header>
   
    <Home/>
    </div>
  );
}

export default App;
