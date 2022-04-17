import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
      </Routes>
    </div>
  );
}

export default App;
