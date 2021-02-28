// Import depandencies
const express = require("express")
const router = express.Router()

// Import local depandencies
const getIPController = require("../controllers/getIPController")

// Get ip route
router.get("/getip", getIPController.getIPController_get)

module.exports = router