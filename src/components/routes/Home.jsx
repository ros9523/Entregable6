import React from "react";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products.slice";
import CardHome from   '../home/CardHome'
import './styles/home.css'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])
  //middleware inside the useEffect is due to the asynchonism. To execute it once. 

  //↑usamos useeffect por el asincronismo, para controlar el ciclo, es decir se ejecute solo una vez. 

  const products =useSelector( state=>state.products)

//Ahora despliego con map porque permite desplegar  informacion de manera dinámica y debe ser arreglo porrque map es método de erreglo↓
return (
      <div className="home">
        <div className="home-cards">
          {
            products?.map (product => <CardHome key={product.id} product={product}/>)
          }
 
        </div> 
       </div>
    )
}


export default Home;
//Redux thunk is dispatched the same way we do it with action. 
//To get the information from store, I use the hook useSelector