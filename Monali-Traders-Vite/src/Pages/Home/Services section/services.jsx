import './services.css'
import service1 from '../../../assets/Ariel Bundle Photo-min.jpg'

const Services=()=>{
    return(
        <div className='services-section'>
             <h1 className='services-main-title'>What We Provide</h1>

             <div className='service-container'>
                <h1 className='service-title'>Ariel Bundle Cables & Electrical Fittings Import Services</h1>
                <p className='service-description'>We specialize in importing high-quality Ariel 
                    bundle cables, electrical fittings, and accessories that are 
                    carefully selected to meet the highest industry standards.
                     Our products are designed to deliver exceptional durability, safety, and performance,
                      making them ideal for a wide range of electrical installation applications.</p>

                <div className='service-image-container'>
                    <img className='services-img' src={service1}/>
                </div>      
             </div>


             <div className='service-container service-container2'>
                <h1 className='service-title'>Technical Assistance and Installation Guidance</h1>
                <p className='service-description'>Our competitive pricing strategy ensures you receive the
                     best value for your investment. We offer affordable rates while maintaining the highest standards of quality in our products and services. By optimizing our resources and processes, we balance cost-
                    effectiveness with exceptional performance, ensuring that you don’t have to choose between price and quality..</p>

                <div className='service-image-container'>
                    <img className='services-img' src={service1}/>
                </div>      
             </div>



             <div className='service-container'>
                <h1 className='service-title'>Competitive Pricing Strategy</h1>
                <p className='service-description'>Our competitive pricing strategy ensures you receive the 
                    best value for your investment. We offer affordable rates while maintaining the highest 
                    standards of quality in our products and services. By optimizing our resources and processes, we balance cost-effectiveness 
                    with exceptional performance, ensuring that you don’t have to choose between price and quality.</p>

                <div className='service-image-container'>
                    <img className='services-img' src={service1}/>
                </div>      
             </div>

        </div>
    )
}

export default Services