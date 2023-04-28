const { Router } = require('express');
const dogsRouter = require('./dogsRouter'); 
const tempRouter = require ('./tempRouter'); 


const  mainRouter = Router(); 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const { api_key }  = process.env
// const URL = `https://api.thedogapi.com/v1/breeds?${api_key}`;
mainRouter.use('/dogs', dogsRouter); 
mainRouter.use('/temperaments', tempRouter);




    
module.exports = mainRouter;
