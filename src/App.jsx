
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { ProductPage } from './pages/ProductPage';
import { Pharmacy } from './pages/Pharmacy';
import { Grocery } from './pages/Grocery';
function App() {
  return (

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/grocery' element={<Grocery/>}/>
        <Route path='/pharmacy' element={<Pharmacy/>}/>
       </Routes>
    </div>
  );
}

export default App;
