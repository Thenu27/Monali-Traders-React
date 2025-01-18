import './NavBar.css';
import logo from '../../assets/Logo.png'

const NavBar =()=>{
    return(
        <div className='nav-container'>
            <div className='logo-container'>
                <img className='logo-img' src={logo}/>
            </div>

            <div className='nav-link-container'>
                
                    <a className='nav-link' href="#">Home</a>                
                    <a className='nav-link' href="#">Products</a>
                    <a className='nav-link' href="#">About</a>

                

            </div>
            <button className='contact-btn'>Contact Us</button>

        </div>
    )
}

export default NavBar;