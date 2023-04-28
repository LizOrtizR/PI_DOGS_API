const {searchTemp, getAllTemp } = require("../controllers/tempControllers"); 



const getTempHandler = async (req, res) => {
    const results = await getAllTemp();
    res.status(200).json(results);
  };


module.exports={
    getTempHandler
  }