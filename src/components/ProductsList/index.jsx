import Product from '../Product'
import './style.css'
import { useState } from 'react'
const ProductsList = ({produto,handleClick,filteredProducts,valueInput})=>{
        const [test,setTest] = useState([])

    return(
        <div className='main--burger'>
            {valueInput.length !== 0 ?
            (valueInput.map((item)=>
            (  
                <div key={item.id}>
                   
                    <Product id={item.id} handleClick={handleClick}  img={item.img} name={item.name} category={item.category} price={item.price}></Product>
                </div>
            ))):
            (produto.map((item)=>
            (  
                <div key={item.id}>
                   
                    <Product id={item.id} handleClick={handleClick}  img={item.img} name={item.name} category={item.category} price={item.price}></Product>
                </div>
            )))
            }
        </div>
    )

}
export default ProductsList