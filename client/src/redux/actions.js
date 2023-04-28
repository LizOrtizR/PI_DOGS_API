import axios from 'axios'; 
export const GET_DOGS = "GET_DOGS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_DETAIL ="GET_BY_DETAIL"; 
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_BY="FILTER_BY"; 
export const GET_BY_TEMPERAMENTS = "GET_BY_TEMPERAMENTS ";
export const CHARGE_ALL = "CHARGE_ALL"; 
export const ORDER_BY="ORDER_BY";
export const CLEAN_DETAIL="CLEAN_DETAIL";
export const CLEAN_DOGS="CLEAN_DOGS"; 
export const FILTER_CARDS= 'FILTER'; 
export const ORDER_CARDS="ORDER"; 
export const DOG_POST = "DOG_POST"



//---------------------------------------------------------------------------------------------------------------------------
export const getDogs =()=> {
    return async function(dispatch){ //esta funcion hace la request  y cuando tiene la info hace un dispatch 
      const apiData =await axios.get ('http://localhost:3001/dogs'); 

         return dispatch ({ type: GET_DOGS, payload: apiData.data,}); //const GET_DOGS . el reducer recibe esta action 
    }
}; 


export const getByName =(name)=> {
  return async function(dispatch){ //esta funcion hace la request  y cuando tiene la info hace un dispatch 
    const apiData =await axios.get (`http://localhost:3001/dogs?name=${name}`); 

       return dispatch ({ type: GET_BY_NAME, payload: apiData.data,});
        //const GET_DOGS . el reducer recibe esta action 
  }
  
}; 

export const getByDetail =(id)=> {
  return async function(dispatch){ //esta funcion hace la request  y cuando tiene la info hace un dispatch 
    const apiData =await axios.get (`http://localhost:3001/dogs/${id}`); 

       return dispatch ({ type: GET_BY_DETAIL, payload: apiData.data,}); //const GET_DOGS . el reducer recibe esta action 
  }
}; 



export const getTemperaments =()=> {
  return async function(dispatch){ //esta funcion hace la request  y cuando tiene la info hace un dispatch 
    const apiData =await axios.get (`http://localhost:3001/temperaments`); 

       return dispatch ({ type: GET_TEMPERAMENTS, payload: apiData.data,}); //const GET_DOGS . el reducer recibe esta action 
  }
}; 
//------------------------------------------------------filtrar por temperamentos 
export const getByTemperaments =(payload)=> {
  return function(dispatch){ //esta funcion hace la request  y cuando tiene la info hace un dispatch 
    
   dispatch ({ type: GET_BY_TEMPERAMENTS , payload}); //const GET_DOGS . el reducer recibe esta action 
  }
};




export const filterBy =(payload)=> {
  return  function(dispatch){ //esta funcion hace la request  y cuando tiene la info hace un dispatch 
    
      dispatch ({ type: FILTER_BY, payload}); //const GET_DOGS . el reducer recibe esta action 
  }
};


export const chargeAll =()=> {
  return function(dispatch){ //esta funcion hace la request  y cuando tiene la info hace un dispatch 
    
      dispatch ({ type: CHARGE_ALL}); //const GET_DOGS . el reducer recibe esta action 
  }
};
export const orderBy =(order)=> {
  return function(dispatch){ //esta funcion hace la request  y cuando tiene la info hace un dispatch 
    
      dispatch ({ type: ORDER_BY, payload:order}); //const GET_DOGS . el reducer recibe esta action 
  }
};


export const cleanDetail =()=>{
  return {type: CLEAN_DETAIL}
}
export const cleanDogs =()=>{
  return {type: CLEAN_DOGS}
}


