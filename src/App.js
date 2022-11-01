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
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import { ToastContainer } from 'react-toastify';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Cart from './Pages/Home/Products/Cart/Cart';
import NotFound from './Pages/Shared/NotFound/NotFound';
import MyOrdersDash from './Pages/Dashboard/MyOrdersDash';
import History from './Pages/Dashboard/History';
import AddProduct from './Pages/AddProduct/AddProduct';
import { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';

function App() {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  },[])
  return (
    <div>
           
      <Header></Header>
      {
        loading ?
        <div className='loading-spinner'>
        <ScaleLoader
        color={'#f9a206'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
        :
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/powertool/:cartId' element={<Cart></Cart>}></Route>
        <Route path='/allPowerTools' element={<AllPowerTools></AllPowerTools>}></Route>
        <Route path='/allHandTools' element={<AllHandTools></AllHandTools>}></Route>
        <Route path='/blowers' element={<AllBlowers></AllBlowers>}></Route>
        <Route path='/allGrinders' element={<AllGrinders></AllGrinders>}></Route>
        <Route path='/allCompressor' element={<AllCompressor></AllCompressor>}></Route>
        <Route path='/allSecurities' element={<AllSecurities></AllSecurities>}></Route>

        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path='addProduct' element={
        <RequireAuth>
          <AddProduct></AddProduct>
        </RequireAuth>}
        ></Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyOrdersDash></MyOrdersDash>}></Route>
          <Route path='history' element={<History></History>}></Route>
          </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      }

      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
