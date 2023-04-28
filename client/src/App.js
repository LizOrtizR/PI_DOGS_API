import { Home, Landing, Form, Detail,About} from "./views"; 
import './App.css';
import { Route } from "react-router-dom"  //uselocation



function App() { 
  // const location = useLocation(); 
//la Nav no se va a mostrar en el Landing. 
  
  return (
    <div className="App">  
    {/* {location.pathname !=="/"&&<NavBar/>} */}
           
      <Route exact path= "/" render= {()=> <Landing/>}/>  

     <Route path="/home" render= {()=> <Home/>}/>

     <Route  exact path="/detail/:idRaza" render= {()=> <Detail/>}/>

     <Route exact  path="/create" render= {()=> <Form/>}/>
     <Route exact  path="/about" render= {()=> <About/>}/>
    </div>
  );
}

export default App;
