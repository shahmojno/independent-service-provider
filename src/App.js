
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import ServiceDetails from './ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path="/home" element={<Home></Home>}>Home</Route>
        <Route path='/service/:serviceId'
          element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

      </Routes>

    </div>
  );
}

export default App;
