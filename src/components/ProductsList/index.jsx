import Product from '../Product'
import './style.css'
const ProductsList = ({produto})=>{
    return(
        <div className='main--burger'>
            {produto.map((item)=>
            (  
                <div>
                   
                    <Product key={item.id} img={item.img} name={item.name} category={item.category} price={item.price}></Product>
                </div>
            ))}
        </div>
    )

}
export default ProductsList