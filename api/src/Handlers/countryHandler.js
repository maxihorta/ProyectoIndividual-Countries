const { getCountry, getCountryQuery,getCountryId} = require ("../Controllers/countries") 
const{Activity} = require("../db")



const getCoutriesHandler = async (req, res) =>{
   
    const {name} = req.query; 
   try {
    
     if(!name){
        const response = await getCountry(name)
        
       return res.status(201).json(response)
       
    }
    else {
        const response = await getCountryQuery(name)
    if(!response[0]){
        return res.status(400).send("the country does not exist")
    }
    else{
        return res.status(200).json(response)
    }
    }
    
   } catch (error) {
    res.status(400).json({error: error.message})
   }
}


const getCountriesIdHandler = async (req, res)=>{
    const {id} = req.params
    const response = await getCountryId(id)

    if(id.length!==3 || !response ){
        return res.status(400).send("Id wrong or does not exist, must be 3 letters ")
    }
   else{
    return res.status(200).json(response)
   }
}



module.exports = {
    getCoutriesHandler,
    getCountriesIdHandler,
    
}
