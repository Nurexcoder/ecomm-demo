import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import WishList from './pages/WishList';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
