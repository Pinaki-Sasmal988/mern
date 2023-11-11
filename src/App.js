import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Carousel } from './components/carousel/Carousel';
import {BrowserRouter,Route,Routes,Switch} from "react-router-dom";
import { Contact } from './components/contact/Contact';

function App() {
    
   

  return (
    <>
  <BrowserRouter>
  <Navbar/>
  {/* <Carousel/> */}
  <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>

    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
