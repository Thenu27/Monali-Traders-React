import './Footer.css';
import logo from '../../assets/Logo.png';

const Footer=()=>{
    return(
        <div className='footer-container'>
            <div className='footer-row-1'>
                <div className='footer-logo-container'>
                    <img className='footer-logo' src={logo} alt={'Company logo'}/>
                </div>
                <div className='footer-link-container'>
                    <a className='footer-link' href='#'>Home</a>
                    <a className='footer-link' href='#'>Contact</a>
                    <a className='footer-link' href='#'>About</a>
                    <a className='footer-link' href='#'>Products</a>
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