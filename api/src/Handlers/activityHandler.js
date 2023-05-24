const { activities,createActivityDB} = require ("../Controllers/activities") 


const getActivityHandler = async (req, res) =>{
   try {
        const response = await activities() 
       return res.status(201).json( response)
   
   } catch (error) {
    res.status(402).json({error: error.message})
   }
}


const postActivityHandler =  async (req, res)=>{
    const {name, difficulty, duration, season, idCountry} = req.body

    if(name && difficulty && duration && season && idCountry.length > 0){
      idCountry.forEach((e) =>{
          createActivityDB(name, difficulty, duration, season, e)
      })
      return res.status(201).json({
          msg: `Actividad '${name}' creada correctamente!`  
      });
      
  }
  else{
      return res.status(400).send({
          msg: "Por favor completar todos los campos solicitados"
      })
  }

}





module.exports = {
    getActivityHandler,
    postActivityHandler
}
