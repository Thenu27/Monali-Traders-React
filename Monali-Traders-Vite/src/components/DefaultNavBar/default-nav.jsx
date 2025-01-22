import './default-nav.css';
import logo from '../../assets/Logo.png'
import { useLocation, useNavigate } from 'react-router-dom';

const DefaultNav =()=>{
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

    const location =useLocation();



    return(
        <div className={location.pathname==='/'? 'not-display':'default-nav-container'}>
            <div className='logo-container'>
                <img className='logo-img-default' src={logo}/>
            </div>

            <div className='nav-link-container default-nav-link-container'>
                
                    <a onClick={goTOHome} className='nav-link' href="#">Home</a>                
                    <a onClick={goToProductsPage} className='nav-link' href="#">Products</a>
                    <a className='nav-link' href="#">About</a>

                

            </div>
            <button onClick={goToContactPage} className='contact-btn default-nav-contact-btn'>Contact Us</button>

        </div>
    )
}

export default DefaultNav;