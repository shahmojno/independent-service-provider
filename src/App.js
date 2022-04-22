
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>

      </Routes>

    </div>
  );
}

export default App;
