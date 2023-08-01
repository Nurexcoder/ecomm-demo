import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './HomeLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
