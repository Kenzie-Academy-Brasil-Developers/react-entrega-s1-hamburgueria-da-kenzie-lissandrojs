
import './App.css';
import {useState,useEffect} from 'react'
import ProductsList from './components/ProductsList'
import Header from './components/HeaderBurger';
import Card from './components/Card';
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
        <div className='align--main'>
          <ProductsList produto={produto}></ProductsList>
          <Card produto={produto}></Card>
        </div>
        
    </div>
  );
}

export default App;
