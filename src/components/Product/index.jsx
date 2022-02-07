const Product =({img,name,category,price})=>{
    
    
   return  (
        <div>
            <img src={img} alt={name}/>
            <h4>{name}</h4>
            <p>{category}</p>
            <span>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        </div>
    )

}
export default Product