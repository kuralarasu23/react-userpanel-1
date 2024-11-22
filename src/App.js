import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Shirts from './Components/Shirts';
import Pants from './Components/Pants';
import Tshirt from './Components/Tshirt';
import Shorts from './Components/Shorts';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Apidata from './Components/Apidata';
import Navbarr from './Components/Navbar';
import Footer from './Components/Footer';
import Productdetails from './Components/Productdetails';
import Task from './Components/Task';

function App() {
  return (
    <div className='bgclr'>
      <Router>
        <Navbarr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shirts' element={<Shirts />} />
          <Route path='/pants' element={<Pants />} />
          <Route path='/tshirt' element={<Tshirt />} />
          <Route path='/shorts' element={<Shorts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/apidata/:id' element={<Apidata />} />
          <Route path='/productdetails/:id' element={<Productdetails />} />
        </Routes>
        <Footer />
        {/* <Task /> */}
      </Router>
    </div>
  );
}

export default App;
