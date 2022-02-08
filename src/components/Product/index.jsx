import './style.css'
const Product =({img,name,category,price,handleClick,id})=>{
    
    
   return  (
        <div className='container--burguer'>
            <section className='container--item'>
                <div className='container--img'>
                    <img src={img} alt={name}/>
                </div>
               
                <h4>{name}</h4>
                <p>{category}</p>
                <div className='container--btn'>

                <span>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                <button onClick={(event)=>{handleClick(event.target.id)}} id={id} className='btn--add'>Adicionar</button>
                </div>
                
            </section>
            
        </div>
    )

}
export default Product