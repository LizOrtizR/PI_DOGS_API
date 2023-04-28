import { Link } from "react-router-dom";
import styles from "./Landing.module.css";


const Landing = () =>{
    
    return (
        <div>
            
        <div className={styles.image}>
           
            <Link to={'/home'}>
            <h1 className={styles.title}>PI Dogs  </h1>
               <h1 className={styles.title}> Click Here to Start</h1>
               
            </Link>
            <div>

            </div>
            <div className={styles.backgroundImage}></div>
            

         
        </div>

        </div>
    )
}


export default Landing;