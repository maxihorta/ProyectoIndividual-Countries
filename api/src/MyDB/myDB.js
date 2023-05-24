const axios = require('axios');
const { Country } = require('../db')
const { API } = process.env;

async function MyDB(req, res) {

  const allCountries = Country.findAll();
  try {
    if (!allCountries.length) {
      const allCountries = await axios.get(API);
      var apiCountries = allCountries.data.map((e) => {
        return {
          id: e.cca3,
          name: e.name.common,
          image: e.flags[1],
          continent: e.continents[0],
          capital: e.capital ? e.capital[0] : 'Not found',
          subregion: e.subregion,
          area: e.area,
          population: e.population
        }
      })

      apiCountries = apiCountries.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name < b.name) {
          return -1
        }
      })
      await Country.bulkCreate(apiCountries);
      console.log('BD Create')

    }
  }
  catch (error) {
    console.error(error,"<--------Api Error")
  }
}


module.exports = { MyDB }