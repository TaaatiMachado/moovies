import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Home from './pages/Home';
import NavBar from './components/Navbar';
import SearchPage from './pages/Search';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
