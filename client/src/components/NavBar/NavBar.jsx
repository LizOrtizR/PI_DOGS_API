import { Link } from "react-router-dom"; 
import style from "./NavBar.module.css"; 
import ImageHome from "./dog.png";




const NavBar = ({handleChange, handleSubmit})=>{
   return(
    <div>
      
    <div className={style.mainContainer}>
    <Link to="/">
            <img className={style.logo}
              src={ImageHome}
              alt="imagen Beagle"
            ></img>
     </Link>
      <form onChange={handleChange}>
        <input className={style.input} placeholder="Insert Dog Name" type="search" />
        <button className={style.btn} type="submit" onClick={handleSubmit}>Buscar</button>
      </form>


      
      <div>
    
    </div>

       <Link className={style.main}to="/home">Home</Link>
      
      <Link className={style.main}to="/create">Create Dog</Link>
      <Link className={style.main}to="/about">About</Link>
   
    </div>
    </div>
  );
}


export default NavBar;