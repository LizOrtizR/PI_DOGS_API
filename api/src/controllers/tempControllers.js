const { Temperament } = require('../db'); 
const axios = require("axios"); 
const {API_KEY}= process.env; 



const getAllTemp = async () => {
    try {
      // Obtenemos la información de la API
      const response = await axios.get("https://api.thedogapi.com/v1/breeds");
      const dog = response.data;
  
      // Extraemos los temperamentos de la información obtenida de la API
      const allTemperaments = dog.flatMap((dog) =>
        dog.temperament ? dog.temperament.split(", ") : []
      );
  
      // Eliminamos los elementos duplicados y creamos un objeto con el nombre del temperamento
      const uniqueTemperaments = [...new Set(allTemperaments)].map((temp) => ({
        name: temp,
      }));
  
      // Insertamos los temperamentos en la base de datos
      await Temperament.bulkCreate(uniqueTemperaments);
  
      // Devolvemos los temperamentos obtenidos de la API junto con los existentes en la base de datos
      const databaseTemps = await Temperament.findAll();
      return [...databaseTemps, ...uniqueTemperaments];
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  



const searchTemp =async(temperament)=>{}

module.exports = { searchTemp, getAllTemp }; 