import { GET_DOGS, GET_BY_NAME, GET_BY_DETAIL, GET_TEMPERAMENTS,
  FILTER_BY,GET_BY_TEMPERAMENTS,CHARGE_ALL, ORDER_BY, 
  CLEAN_DETAIL,CLEAN_DOGS, DOG_POST} from "./actions"

const initialState ={  //estado global al inicio de mi aplicacion 
allDogs:[],dogsCopy:[], detailDog: {}, temperament:[], filtered:[]//copia del estado para que sea exactamente igual a allDogs|| es una manera de regresar al estado origina; 

}; 


export const rootReducer=(state = initialState,  action, payload)=>{ //es una funcion que es quien sabe que va a modificar 
  switch (action.type) {
    case GET_DOGS:
        return {...state, ///retorna una copia del estado, modificando el valor que quiero modificar y retorna un estado nuevo 
            allDogs: action.payload, 
            dogsCopy: action.payload,
            filtered:action.payload
        };   
      case GET_BY_NAME:
        return {...state, 
          filtered:action.payload,

        }; 

     case GET_BY_DETAIL:
         return{...state,
          detailDog:action.payload,
      }; 
      
    case CLEAN_DETAIL:    //me retorna una copia del estado y me da un objeto vacio, esto es para limpiar el estado
      return{
        ...state,
        detailDog:{}
      }
    case CLEAN_DOGS:
      return {
        ...state,
       allDogs:[]
      }

    case GET_TEMPERAMENTS:
        return {...state,
        temperament: action.payload,
      
      }; 

    
   case GET_BY_TEMPERAMENTS:
     return {
      ...state, 
      filtered: state.dogsCopy.filter(el=>el.temperament? el.temperament.includes(action.payload):null)

    }; 
  
    case FILTER_BY:
      if(action.payload === 'db'){
        if( state.dogsCopy.filter((item)=> (typeof item.id) === 'string').length === 0 ){
           return alert('no hay perros en la base de datos')
        }
        return {
            ...state, 
            filtered: state.dogsCopy?.filter((item)=> (typeof item.id) === 'string')}
        }
      
    else {
        return {
            ...state, 
            filtered: state.dogsCopy.filter((item)=> (typeof item.id) === 'number')}
        } ;  

    case CHARGE_ALL:
      return{
        ...state,
        filtered: state.dogsCopy
      }; 


        

      case ORDER_BY:
        if(action.payload === 'A-Z'){
          return {
              ...state, 
              filtered: [...state.filtered].sort((prev, next) => {
              if(prev.name > next.name) return 1
              if(prev.name < next.name) return -1
              return 0
          })}}
            
      if(action.payload === 'Z-A'){
          return {
              ...state, 
              filtered: [...state.filtered].sort((prev, next) => {
              if(prev.name > next.name) return -1
              if(prev.name < next.name) return 1
              return 0
          })}}
            
      if(action.payload === 'desc'){
          return {
              ...state, 
              filtered: [...state.filtered].sort((prev,next) => prev.weight.toString().slice(0,2) - next.weight.toString().slice(0,2) )}
         }
            
      if(action.payload === 'asc'){
          return {
              ...state, 
              filtered: [...state.filtered].sort((prev,next) => next.weight.toString().slice(0,2) - prev.weight.toString().slice(0,2))}
          }     
      else {
          return {
              ...state, 
              filtered: state.dogsCopy}
          };
          case DOG_POST:
            return {
              ...state
            }
          


    default:
        return state; 
  }
}

export default rootReducer; 