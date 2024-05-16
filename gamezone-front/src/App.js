import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './views/Home/Home';
import Products from './views/Products/Products';

function App() {
  return (
    
    // <Home />
    <Routes>
      <Route  path='/' element={<Home />} />
      <Route path='products' element={<Products />} />
      {/* Add similar Route components for Contact and About */}
    </Routes>
        
     
  );
}

export default App;
