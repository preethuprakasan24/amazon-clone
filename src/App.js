import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
// import BottomScrollspy from './components/BottomScrollspy';
import Footer from './components/Footer';
import Header from './components/Header';
import ShopCard from './components/ShopCard';
import Slider from './components/Slider';
import Signin from './pages/Signin';
import Cart from './pages/Cart';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname!=='/signin' && <Header />}

      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <div className='mx-3'>
              <ShopCard />
              <br />
              <ShopCard />
            </div>
          </>
        } />
        <Route path='/signin' element={<Signin />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      {location.pathname!=='/signin' && <Footer />}
      {/* <Header />

      <Slider />
      <div className='mx-3'>
        <ShopCard />
        <br />
        <ShopCard />
      </div>
      
      <Footer />

      <Routes>
        <Route path='/signin' Component={<Signin />} />
      </Routes> */}

    </>
  );
}

export default App;
