import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Shirts from './Components/Shirts';
import Pants from './Components/Pants';
import Tshirt from './Components/Tshirt';
import Shorts from './Components/Shorts';

function App() {
  return (
    <div className='bgclr'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shirts' element={<Shirts />} />
          <Route path='/pants' element={<Pants />} />
          <Route path='/tshirt' element={<Tshirt />} />
          <Route path='/shorts' element={<Shorts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
