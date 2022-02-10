import "./style.css";
import "./reset.css";
const Card = ({ currentSale,setCurrentSale}) => {
  
  const calcTotal =()=>{
   const allValue = currentSale.reduce((previousValue, currentValue) => previousValue + currentValue.price,0)
   return allValue
  }
  const  test =(itemF)=>  {
    setCurrentSale(currentSale.filter((value)=> value.id !== itemF))
   }
  return (
    

        <div className="align--card">
            <section className="titulo--card">
                <h2>Carrinho de Compras</h2>
            </section>
          <section className="main--card">
            <div className="container--main--item">

              
                <ul className="main--item">
                  {currentSale.map((item)=>{ return(
                                  
                                        <li key={item.id} className="item--card">

                                        <img src={item.img} alt={item.name} />
                                        <div className="info--burger">
                            
                                            <h2>{item.name}</h2>
                                            <p>{item.category}</p>
                                        </div>
                                        <button id={item.id} onClick={(event)=>{test(item.id)}}>Remover</button>
                                      </li>
                  )})}

                </ul>

            </div>
            
            <div className="div--border">

                <div className="valor--total">
                <p>Total:</p>
                <span>R$ {calcTotal().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                </div>

                <button>Remover todos</button>
            </div>

          </section>
        </div>
  );
};
export default Card;
