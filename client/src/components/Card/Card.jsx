import style from "./Card.module.css"; 

import { Link } from "react-router-dom"; 
///muestra la info que cada dog mapeado y nos da un link para ir al detalle de cada dog  



function Card ({dog}) {

    const { image ={url:''}, name, weight, height, life_span, temperament, id } = dog; //Card, solo recibe props y muetra props||dump 

    return (
      
        <div className={style.card}>
        <Link to={`/detail/${id}`}>   
            <div className = {style.front}>
          
            <img src={image.url} alt={name} />
            </div>
        </Link>
            <div className={style.back} >
            <div>
            <h2 className= {style.name}>{name}</h2>
            </div>
           
           <div className = {style.dogs}>
           </div>
      

          <p>Weight: {weight.metric} KG</p> 
          <p>Heigth:{height.metric}</p>
        
          <p>Temperaments:{temperament}</p>
          <p>{life_span}</p>
        </div>
        </div>
      );
    }
export default Card 