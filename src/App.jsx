import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter basename='/restaurant-map'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
