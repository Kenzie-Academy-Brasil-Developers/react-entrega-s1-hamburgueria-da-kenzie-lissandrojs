
import './App.css';
import {useState,useEffect} from 'react'
import ProductsList from './components/ProductsList'
import Header from './components/HeaderBurger';
import Card from './components/Card';
function App() {
  const [produto,setProduto] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  useEffect(()=>{
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products').then((resp) => resp.json()).then((resp) => setProduto(resp))
  },[])
 
 const showProducts =(value)=>{
    produto.filter((item)=>{
      return  value === item.name || value === item.category
    })

 }
 const handleClick =(productId)=>{
    let addProd =produto.find((item)=> item.id == productId)
    setCurrentSale([...currentSale,addProd])
 }

  return (
    <div>
        <Header></Header>
        <div className='align--main'>
          <ProductsList handleClick={handleClick}produto={produto}></ProductsList>
          <Card currentSale={currentSale} ></Card>
        </div>
        
    </div>
  );
}

export default App;
