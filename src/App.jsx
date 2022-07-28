
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
function App() {
  return (

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
       </Routes>
    </div>
  );
}

export default App;
