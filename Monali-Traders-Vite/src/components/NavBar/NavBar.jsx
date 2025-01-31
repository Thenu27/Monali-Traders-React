import './NavBar.css';
import logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom';
const NavBar =()=>{
    const navigate =useNavigate();

    const goToContactPage =()=>{
        navigate('/contact')
    }

    const goTOHome=()=>{
        navigate('/')
    }

    const goToProductsPage =()=>{
        navigate('/products')
    }

    const goToAboutPage =()=>{
        navigate('/about')
    }


    return(
        <div className='nav-container'>
            <div className='logo-container'>
                <img className='logo-img' src={logo}/>
            </div>

            <div className='nav-link-container'>
                
                    <a onClick={goTOHome} className='nav-link' >Home</a>                
                    <a onClick={goToProductsPage} className='nav-link' >Products</a>
                    <a onClick={goToAboutPage} className='nav-link' >About</a>

                

            </div>
            <button onClick={goToContactPage} className='contact-btn'>Contact Us</button>

        </div>
    )
}

export default NavBar;