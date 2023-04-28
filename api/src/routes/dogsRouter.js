const { Router } = require('express'); 
const {getDogsHandler, getDogsHandlerById, getDogsHandlerByName, createDogsHandler} =require("../handlers/dogsHandlers"); 
const dogsRouter = Router(); 



const validate =(req, res, next)=>{ //midlew //sumo validacion con el back y front 
const {name, weight, height, life_span} = req.body
    if(!name) return res.status (400).json ({Error : "Missing Name, please complete the data to continue "});
    if(!life_span ) return res.status (400).json ({Error : "Missing life span, please complete the data to continue "});
    if(!weight ) return res.status (400).json ({Error : "Missing weight, please complete the data to continue "});
    if(!height) return res.status (400).json ({Error : "Missing Height please complete the data to continue "});
    
    next()
}




dogsRouter.get('/',  getDogsHandler); 
dogsRouter.get('/:idRaza', getDogsHandlerById); 
dogsRouter.get('/', getDogsHandlerByName);
dogsRouter.post('/', validate, createDogsHandler); 


module.exports = dogsRouter; 
