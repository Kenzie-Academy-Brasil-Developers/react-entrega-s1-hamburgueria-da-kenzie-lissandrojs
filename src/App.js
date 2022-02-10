
import './App.css';
import {useState,useEffect} from 'react'
import ProductsList from './components/ProductsList'
import Header from './components/HeaderBurger';
import Card from './components/Card';
function App() {
  const [produto,setProduto] = useState([])
  const [filteredProducts, setFilteredProducts] = useState()
  const [valueInput,setValueInput] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  useEffect(()=>{
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products').then((resp) => resp.json()).then((resp) => setProduto(resp))
  },[])
 
 const showProducts =()=>{
      const addAll = produto.filter((item)=>{
          return  item.name === filteredProducts || item.category === filteredProducts
      })
      setValueInput(addAll)
      console.log(valueInput)
 }

 const handleClick =(productId)=>{
    const addProd =produto.find((item)=> item.id == productId)
   
    setCurrentSale([...currentSale,addProd])
 }

  return (
    <div>
        <Header showProducts={showProducts} setFilteredProducts={setFilteredProducts} setValueInput={setValueInput}></Header>
        <div className='align--main'>
          <ProductsList filteredProducts={filteredProducts}handleClick={handleClick}produto={produto} valueInput={valueInput}></ProductsList>
          <Card setCurrentSale={setCurrentSale} currentSale={currentSale} ></Card>
        
        </div>
        
    </div>
  );
}

export default App;
