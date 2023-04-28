
import NavBar from "../../components/NavBar/NavBar"; 

import style from "./About.module.css"; 


const About = () => {
    
  
    return (
      <div>
  <NavBar/>
     
    
      <div className={style.about}>
  
        <h1>👩🏽‍💻 Creado por: Maria Elizabeth Ortiz </h1>
        <span>
            Github: https://github.com/LizOrtizR
            
        </span>
            <br />
           
      </div>
      </div>
    );
  }
  



export default About; 