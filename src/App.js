import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
