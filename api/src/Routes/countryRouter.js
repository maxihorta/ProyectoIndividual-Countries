const {Router} = require("express")
const {    getCoutriesHandler,
    getCountriesIdHandler,
} = require ("../Handlers/countryHandler")
const countryRouter = Router();


countryRouter
.get("/", getCoutriesHandler) 
.get("/:id", getCountriesIdHandler)


module.exports = countryRouter;