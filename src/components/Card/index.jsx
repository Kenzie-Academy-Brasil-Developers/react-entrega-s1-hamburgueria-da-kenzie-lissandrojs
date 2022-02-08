import "./style.css";
import "./reset.css";
const Card = ({ currentSale}) => {
  console.log(currentSale)
  return (
    

        <div className="align--card">
            <section className="titulo--card">
                <h2>Carrinho de Compras</h2>
            </section>
          <section className="main--card">
            <div className="container--main--item">

          
                <ul className="main--item">
                  {currentSale.map((item)=>{ return(
                                  
                                        <li className="item--card">

                                        <img src={item.img} alt={item.name} />
                                        <div className="info--burger">
                            
                                            <h2>{item.name}</h2>
                                            <p>{item.category}</p>
                                        </div>
                                        <button>Remover</button>
                                      </li>
                  )})}

                </ul>

            </div>
            
            <div className="div--border">

                <div className="valor--total">
                <p>Total:</p>
                <span>R$40,00</span>
                </div>

                <button>Remover todos</button>
            </div>

          </section>
        </div>
  );
};
export default Card;
