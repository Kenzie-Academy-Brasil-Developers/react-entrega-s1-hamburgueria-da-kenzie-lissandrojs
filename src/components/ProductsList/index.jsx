import Product from '../Product'

const ProductsList = ({produto})=>{
    return(
        <div>
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