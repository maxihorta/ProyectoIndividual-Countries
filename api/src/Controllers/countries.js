const { Sequelize } = require("sequelize");
const {Country, Activity} = require ("../db");
const {Op} = require("sequelize")

const getCountryQuery = async function (name){
  
  
    const CountryByName = await Country.findAll({
        where: {name:{
          [Op.iLike]: `%${name}%`
        }},
        include: Activity 
    })
    return CountryByName
}
  
 
  


const getCountry = async () => {
  const countryAll = await Country.findAll({include: Activity });
  return(countryAll);
}




const getCountryId = async function (id) {
  const CountryById = await Country.findOne({
    where: {id:{
      [Op.iLike]: `%${id}%`
    }},
    include: Activity 
    
})

return CountryById
}
module.exports = {
    getCountryQuery,
    getCountry,
    getCountryId
}