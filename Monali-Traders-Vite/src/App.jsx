import './App.css';
import Home from './Pages/Home/Home';
import { Route,Routes } from 'react-router-dom';
import ContactPage from './Pages/contact-page/contact';
import DefaultNav from './components/DefaultNavBar/default-nav';
import Products from './Pages/Products-page/Products';
import Footer from './components/Footer/Footer';
import About from './Pages/About-page/About';

function App() {



  return (
    <div className='App'>
      <DefaultNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
