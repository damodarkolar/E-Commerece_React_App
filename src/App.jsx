import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { ProductPage } from './pages/ProductPage';
import { Pharmacy } from './pages/Pharmacy';
import { Grocery } from './pages/Grocery';
import { Cart } from './pages/Cart';
import { Private } from './components/Private';
import { useDispatch } from 'react-redux';
import {useEffect} from "react"
import { cartDataFetching, orderHistoryDataFetching } from './redux/Cart/actions';
import { OrderHistory } from './pages/OrderHistory';

function App() {

  const dispatch =useDispatch();
useEffect(()=>{
  dispatch(cartDataFetching());
  dispatch(orderHistoryDataFetching());
},[])
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
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orderHistory" element={<OrderHistory/>}/>
       </Routes>
    </div>
  );
}

export default App;
