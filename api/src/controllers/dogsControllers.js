const { Dog,Temperament } = require('../db'); 
const axios = require("axios"); 

const cleanArray = (arr)=>     //modularizando el mapeo
   arr.map((elem)=>{
        return {
            id:elem.id,
            name:elem.name,
            weight: elem.weight,
            height: elem.height,
            life_span: elem.life_span,
            temperament: elem.temperament,
            image: elem.image,
            created: false,
        };
    });


    const capitalizar = (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    };
    
    const createDog = async (name, weight, height, life_span, temperament, image) => {
      const image1 = await (await axios.get("https://dog.ceo/api/breeds/image/random")).data.message;
      const dogCreated = await Dog.findOrCreate({
        where: {
          name: capitalizar(name),
          weight,
          height,
          life_span,
          image: image || image1,
        },
      });
      if (temperament) {
        const temperaments = await Temperament.findAll({ where: { name: temperament } });
        await dogCreated[0].setTemperaments(temperaments);
      }
      return dogCreated;
      
    };
    


const getDogById = async (idRaza, source)=>{
    const dog = 
    source === "api"
    ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`))
    .data
    : await Dog.findByPk(idRaza); //{ include: Temperament }
  return dog; 
  
  }; 

  const getAllDogs= async ()=>{     //data cruda 
    const dataBaseDogs = await Dog.findAll(); 
     
    const apiDogsRaw= (
        await axios.get("https://api.thedogapi.com/v1/breeds")
    ).data; 

    const  apiDogs = cleanArray(apiDogsRaw)
    return [...dataBaseDogs, ...apiDogs]; //array nuevo
    res.json(dogs)
  };




  const searchDogByName= async (name)=>{ 

    const dataBaseDogs = await Dog.findAll({
        
     where: {name}
    });

    const  apiKey = process.env.API_KEY;
    const apiUrl = `https://api.thedogapi.com/v1/breeds/search?q=${name}`; 
    const headers = {' x-api-key': process.env.API_KEY}; 

  const apiDogsRaw = await axios.get(apiUrl,{ headers });
const apiDogs = apiDogsRaw.data.map((elem)=>({
    id:elem.id,
    name:elem.name,
    weight: elem.weight,
    height: elem.height,
    life_span: elem.life_span,
    temperament: elem.temperament,
    image: elem.image,
    created: false,
 

}));



    return [...dataBaseDogs, ...apiDogs];
   
    
  };






 
module.exports={ createDog, getDogById, searchDogByName, getAllDogs }