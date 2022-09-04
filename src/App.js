import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/style.css'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Addstudent from './Components/Addstudent';
import Data from './Components/Data';

function App() {
  return (
    <Data>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Student" element={<Student/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </Data>
    );
  }
  
export default App;

