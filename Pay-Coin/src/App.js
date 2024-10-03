import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import User from './Components/User';
import Header from './Components/Header';
import Login from './Components/Login';
import Contact from './Components/Contact';
import Index from './Components/Index';
import Singlepage from './Components/Home Pages/singlepage';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/index' element={<Index />} />
        <Route path='/singlePage' element={<Singlepage />} />
      </Routes>
    </>
  );
}

export default App;
