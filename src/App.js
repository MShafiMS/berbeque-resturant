import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';

function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/menu' element={<Menu></Menu>}></Route>
     </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
