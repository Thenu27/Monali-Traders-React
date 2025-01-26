import './Trending.css'
import productimg from '../../../assets/Ariel Bundle Photo-min.jpg'
const Trending = () =>{
    return(
        <>
        <h1 className='services-main-title trending-main-title'>Trending Items</h1>

        <div className='trending-section'>

            <div className='trending-product-container'>

                <div className='trend-product-card'>
                    <div className='trend-product-image'>
                        <img className='trend-img' src={productimg}/>
                    </div>
                    <div className='trend-product-details'>
                        <h4 className='trend-product-name'>Product Name</h4>
                        <p className='trend-product-category'>Electrical Safety Equipment</p>
                        <button className='view-btn trend-view-btn'>View</button>

                    </div>
                </div>


                <div className='trend-product-card'>
                    <div className='trend-product-image'>
                        <img className='trend-img' src={productimg}/>
                    </div>
                    <div className='trend-product-details'>
                        <h4 className='trend-product-name'>Product Name</h4>
                        <p className='trend-product-category'>Electrical Safety Equipment</p>
                        <button className='view-btn trend-view-btn'>View</button>

                    </div>
                </div>
                

                <div className='trend-product-card'>
                    <div className='trend-product-image'>
                        <img className='trend-img' src={productimg}/>
                    </div>
                    <div className='trend-product-details'>
                        <h4 className='trend-product-name'>Product Name</h4>
                        <p className='trend-product-category'>Electrical Safety Equipment</p>
                        <button className='view-btn trend-view-btn'>View</button>

                    </div>
                </div>


                <div className='trend-product-card'>
                    <div className='trend-product-image'>
                        <img className='trend-img' src={productimg}/>
                    </div>
                    <div className='trend-product-details'>
                        <h4 className='trend-product-name'>Product Name</h4>
                        <p className='trend-product-category'>Electrical Safety Equipment</p>
                        <button className='view-btn trend-view-btn'>View</button>

                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Trending