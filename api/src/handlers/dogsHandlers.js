
const axios = require("axios");
const { createDog,getDogById,searchDogByName,getAllDogs } = require("../controllers/dogsControllers"); 
const { Dog, Temperament } = require("../db");


const getDogsHandler= async (req,res)=>{
  const {name} = req.query; 
  
const results = name ? await searchDogByName(name):await getAllDogs()
try {
  res.status(200).json (results)
} catch (error) {
  res.status(400).json({error: "el usuario no existe"});
}


};



const getDogsHandlerById = async (req, res) => {
  const { idRaza } = req.params;
  const source = isNaN(idRaza) ? "db" : "api"; //si lo que tengo es NaN sig que es un uuid si no va a la api 
  try {
    const dog = await getDogById(idRaza, source); //indico a donde va a buscarlo  
    const response = { ...dog, Temperament: dog.Temperament };
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: "el id no existe" });
  }
  
};



const createDogsHandler = async (req, res) => {
  const { name, weight, height, life_span, temperament, image } = req.body;
  
  try {  
    const newDog = await createDog(name, weight, height, life_span, temperament, image); 
    res.status(201).json(newDog); 
  
  } catch (error) {
    res.status(400).json({error: error.message}); 
  }
  
};

const getDogsHandlerByName =(req, res)=>{
  res.send
};


// const createDogsHandler = async (req, res) => {
//   const { name, weight, height, life_span, temperament, image } = req.body;

//   try {
//     const capitalizar = (name) => {
//       return name.charAt(0).toUpperCase() + name.slice(1);
//     };

//     if (!name || !height || !weight) {
//       return res.status(400).json({ msg: "faltan datos" });
//     }

//     let image1 = await (await axios.get("https://dog.ceo/api/breeds/image/random")).data.message;

//     const [dogCREATED] = await Dog.findOrCreate({
//       where: {
//         name: capitalizar(name),
//         weight,
//         height,
//         life_span,
//         image: image ? image : image1,
//       },
//     });

//     await dogCREATED?.setTemperaments(temperament);

//     res.status(201).json({ message: "successfully created" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };



module.exports={
  getDogsHandler, getDogsHandlerById, getDogsHandlerByName, createDogsHandler
}