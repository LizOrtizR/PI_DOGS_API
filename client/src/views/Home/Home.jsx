import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
import { getDogs, cleanDogs, getTemperaments } from "../../redux/actions"; //getTemperaments
import SearchBar from "../../components/NavBar/NavBar"; 
 import FilterBy from "../../components/FilterBy/FilterBy";
import { getByName, getByTemperaments } from "../../redux/actions";
import Pagination from "../../components/Pagination/Pagination";
import Footer from "../Footer/Footer.jsx"



function  Home (){  
    //cuando se monta, que haga dispatch 
  const dispatch = useDispatch(); 
    const  allDogs = useSelector((state)=>state.allDogs);
    const  [filtered, setFiltered] = useState(allDogs); //f. Barra de busqueda, va a ser generica. componente reutilizable. estado local 
    const [searchString, setSearchString] = useState (""); 
    const [selectedTemperament, setSelectedTemperament] = useState("");
    ///pagination
    const [cardsPerPage]= useState(8);
    const [currentPage, setCurrentPage]=useState(1); 
    const maximo = Math.ceil(allDogs.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = filtered.slice(startIndex, endIndex);
  
 

// useEffect(() => {
//     dispatch(getDogs());
//     // dispatch(getTemperaments());
//     dispatch(cleanDogs());
//   }, [dispatch]);

  useEffect(() => {
    if (allDogs.length === 0) {
      dispatch(getDogs());
      dispatch(getTemperaments());
      dispatch(cleanDogs());
     
    }
  }, [allDogs.length, dispatch]);
  

  useEffect(() => {
    setFiltered(allDogs);
  }, [allDogs]);

  useEffect(() => {
    if (selectedTemperament === "") {
      setFiltered(allDogs);
    } else {
      dispatch(getByTemperaments(selectedTemperament));
    }
  }, [selectedTemperament, dispatch, allDogs]);


  const handleChange = (e) => {    //funcion que setea 
    setSearchString(e.target.value);
    const filteredDogs = allDogs.filter((dog) => {
      return dog.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFiltered(filteredDogs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(searchString));
  };

  const handleSelect = (e) => {
    setSelectedTemperament(e.target.value);
  };
  
return(
    <>
    



      
    <SearchBar handleChange = {handleChange} handleSubmit={handleSubmit}/>
    <FilterBy  handleSelect={handleSelect} /> 
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maximo={maximo}/>
    <CardsContainer allDogs = {currentCards}/>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} maximo={maximo}/> 
    <Footer/>
    </>
    
    
)
}

export default Home 
