import "./style.css";
import "./reset.css";
const Card = ({ produto }) => {
  return (
    <div className="align--card">
        <section className="titulo--card">
            <h2>Carrinho de Compras</h2>
        </section>
      <section className="main--card">
        <div className="container--main--item">

       
            <div className="main--item">

                <div className="item--card">
                        <img src="https://i.imgur.com/Vng6VzV.png" alt="" />
                        <div className="info--burger">
            
                            <h2>Hamburguer</h2>
                            <p>Sanduíches</p>
                        </div>
                </div>
                <button>Remover</button>
            </div>

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
