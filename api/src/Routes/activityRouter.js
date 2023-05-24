const {Router} = require("express")
const {  getActivityHandler,
    postActivityHandler
} = require ("../Handlers/activityHandler")
const activityRouter = Router();


activityRouter
.get("/", getActivityHandler) 
.post("/", postActivityHandler)



module.exports = activityRouter;