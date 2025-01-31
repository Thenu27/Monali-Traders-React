import './Footer.css';
import logo from '../../assets/Logo.png';
import { useNavigate } from 'react-router-dom';


const Footer=()=>{

    const navigate = useNavigate();

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
        <div className='footer-container'>
            <div className='footer-row-1'>
                <div className='footer-logo-container'>
                    <img onClick={goTOHome} className='footer-logo' src={logo} alt={'Company logo'}/>
                </div>
                <div className='footer-link-container'>
                    <a onClick={goTOHome} className='footer-link'>Home</a>
                    <a onClick={goToContactPage}className='footer-link'>Contact</a>
                    <a onClick={goToProductsPage}className='footer-link'>About</a>
                    <a onClick={goToAboutPage} className='footer-link'>Products</a>
                </div>
            </div>
            <div className='divider'></div>
            <div className='copyright-container'>
                <p className='copyright'>© Monali Traders (pvt) Ltd. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;