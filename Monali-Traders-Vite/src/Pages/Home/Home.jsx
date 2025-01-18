import './Home.css'
import Services from './Services section/services'
import NavBar from '../../components/NavBar/NavBar'
import Trending from './Trending Section/Trending'
const Home =()=>{
    return(
        <div className='Home-page'>

        <div className='hero-section'>
            <NavBar/>
            <div className='hero-content'>
                <h1 className='company-title'>MONALI TRADERS</h1>
                <h3 className='company-title-description'>Get Your Best <span className='equipment-word'>Equipment</span> here</h3>
                <button className='hero-btn'>View Products</button>
            </div>
            </div>

            <Services/>
            <Trending/>


            

        </div>
    )
}

export default Home