
import './App.css';
import {useState,useEffect} from 'react'
import ProductsList from './components/ProductsList'
import Header from './components/HeaderBurger';
function App() {
  const [produto,setProduto] = useState([])
  const [currentSale,setCurrentSale] = useState(0)
  useEffect(()=>{
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products').then((resp) => resp.json()).then((resp) => setProduto(resp))
  },[])
 
 const showProducts =()=>{

 }
 const handleClick =(productId)=>{
   
 }

  return (
    <div>
        <Header></Header>
        <ProductsList produto={produto}></ProductsList>
    </div>
  );
}

export default App;
