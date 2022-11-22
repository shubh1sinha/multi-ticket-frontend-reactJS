import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import BookBus from './Front-end/BookBus';
import BookHotel from './Front-end/BookHotel';
import Bookings from './Front-end/Bookings';
import Bus from './Front-end/Bus';
import Dashboard from './Front-end/Dashboard';
import Home from './Front-end/Home';
import Hotel from './Front-end/Hotel';
import Registration from './Front-end/Registration';
import Train from './Front-end/Train';
import TrainBook from './Front-end/TrainBook';
import Navbar from './Layout/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/registration' element={<Registration/>}></Route>
      <Route exact path='/dashboard/:id' element={<Dashboard/>}></Route>
      <Route exact path='/hotel/:id' element={<Hotel/>}></Route>
      <Route exact path='/hotel/:id/book/:uId' element={<BookHotel/>}></Route>
      <Route exact path='/train/:id' element={<Train/>}></Route>
      <Route exact path='/train/:id/book/:uId' element={<TrainBook/>}></Route>
      <Route exact path='/bus/:id' element={<Bus/>}></Route>
      <Route exact path='/bus/:id/book/:uId' element={<BookBus/>}></Route>
      <Route exact path='/bookings/:id' element={<Bookings/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
