
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './Home/About';
import CheckOut from './Home/CheckOut';
import Home from './Home/Home';
import NotFound from './Home/NotFound';
import Services from './Home/Services/Services';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import RequireAuth from './Login/RequireAuth/RequireAuth';
import ServiceDetails from './ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path="/home" element={<Home></Home>}>Home</Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId'
          element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>

      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
