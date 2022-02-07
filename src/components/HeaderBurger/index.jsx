import './style.css'
const Header =()=>{
    return(
        <header>
            <div className='logo--burger'>
                <h1>Burger</h1>
                <h3>Kenzie</h3>
            </div>

            <div className='barra--pesquisa'>
                <input placeholder='    Diguitar Pesquisa' type="text" name="" id="" />
                <button >Pesquisar</button>
            </div>
        </header>
    )
}
export default Header