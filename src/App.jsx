import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';

const basename = import.meta.env.VITE_BASENAME;

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
