import './ProductCard.css';
import { data } from '../../Data';


const ProductCard = ({ category }) => {

    const renderProducts = () => {
        return data[category].map((product, i) => (
                <div key={i} className='product-card'>
                    <div className='trend-product-image '>
                        <img
                            src={'../../assets/Home-min (2).jpg'} 
                            className='trend-img product-img '
                            alt={product[0]} 
                        />
                    </div>
                    <h1 className='trend-product-name product-name'>{product[0]}</h1>
                    <p className='product-intro'>{product[1]}</p>
                    <button className='view-btn product-view-btn'>View</button>
                </div>
        ));
    }

    return (
        <>
            <div className='category-container'>
                <h1 className='category'>{category}</h1>
            </div>
            <div  className='products-container'>
                <div className='products-inner-container'>
                     { renderProducts()}
                </div>
            </div>


        </>
    );
}

export default ProductCard;
