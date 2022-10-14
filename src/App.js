import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AllHandTools from './Pages/Home/Products/HandTools/AllHandTools';
import Home from './Pages/Home/Home';
import AllPowerTools from './Pages/Home/Products/PowerTools/AllPowerTools';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header';
import AllBlowers from './Pages/Home/Products/Blowers/AllBlowers';
import Shop from './Pages/Shop/Shop';
import AllGrinders from './Pages/Home/Products/Grinder/AllGrinders';
import AllCompressor from './Pages/Home/Products/Compressor/AllCompressor';
import AllSecurities from './Pages/Home/Products/Security/AllSecurities';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/allPowerTools' element={<AllPowerTools></AllPowerTools>}></Route>
        <Route path='/allHandTools' element={<AllHandTools></AllHandTools>}></Route>
        <Route path='/blowers' element={<AllBlowers></AllBlowers>}></Route>
        <Route path='/allGrinders' element={<AllGrinders></AllGrinders>}></Route>
        <Route path='/allCompressor' element={<AllCompressor></AllCompressor>}></Route>
        <Route path='/allSecurities' element={<AllSecurities></AllSecurities>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
