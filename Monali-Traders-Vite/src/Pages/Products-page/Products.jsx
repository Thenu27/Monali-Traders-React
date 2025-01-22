import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import { data } from '../../Data';

const Products =()=>{
    return(
        <div>
            <div className='product-session'>
                <ProductCard category={Object.keys(data)[0]}/>
            </div>
        </div>
    )
}

export default Products