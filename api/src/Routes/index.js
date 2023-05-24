const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 const activityRouter = require("./activityRouter");
const countryRouter = require("./countryRouter");

const routes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


routes.use("/countries", countryRouter);

 routes.use("/activities", activityRouter);

module.exports = routes;




