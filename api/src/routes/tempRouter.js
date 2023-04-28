const { Router } = require('express'); 
const {getTempHandler} = require('../handlers/tempHandlers'); 
const tempRouter = Router(); 



tempRouter.get('/', getTempHandler);







module.exports = tempRouter; 
