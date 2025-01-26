import './Home.css'
import Services from './Services section/services'
import NavBar from '../../components/NavBar/NavBar'
import Trending from './Trending Section/Trending'
import QuestionSection from './FAQ-section/Question'
import { useNavigate } from 'react-router-dom'


const Home =()=>{

    const navigate = useNavigate();
    
    const goToProductsPage =()=>{
        navigate('/products')
    }

    return(
        <div className='Home-page'>

        <div className='hero-section'>
            <NavBar/>
            <div className='hero-content'>
                <h1 className='company-title'>MONALI TRADERS</h1>
                <h3 className='company-title-description'>Get Your Best <span className='equipment-word'>Equipment</span> here</h3>
                <div className='hero-btn-container'>
                     <button onClick={goToProductsPage} className='hero-btn'>View Products</button>
                </div>
            </div>
            </div>

            <Services/>
            <Trending/>
            <QuestionSection/>


            

        </div>
    )
}

export default Home