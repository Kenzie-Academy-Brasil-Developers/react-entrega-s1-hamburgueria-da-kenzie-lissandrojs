import './style.css'
const Header =({setFilteredProducts,setValueInput,showProducts})=>{
    return(
        <header >
            <div className='logo--burger'  >
                <h1>Burger</h1>
                <h3>Kenzie</h3>
            </div>

            <div className='barra--pesquisa'>
                <input placeholder='    Diguitar Pesquisa' type="text" name="" id="" onKeyUp={(e)=> setFilteredProducts(e.target.value)} />
                <button onClick={()=>showProducts()}  >Pesquisar</button>
            </div>
        </header>
    )
}
export default Header