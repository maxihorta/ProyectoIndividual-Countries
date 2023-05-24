const {Activity} = require ("../db");


const activities = async function (){
    const activityAll = await Activity.findAll();
  return(activityAll);
}

const createActivityDB = async (name, difficulty, duration, season, idCountry) => {
   try{
    const newActivity = await Activity.create({ name, difficulty, duration, season, idCountry})
    await newActivity.addCountry(idCountry)
    
console.log("Activity: "+ name +" add country "+ idCountry);
} catch (e) {
console.log(e);
   
   }
  }
module.exports= {
    activities,
    createActivityDB
}

