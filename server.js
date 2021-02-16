// Import depandencies
require("dotenv").config()
const express = require("express")
const app = express()

// Import local depandencies
const mongoConnect = require("./configs/mongoDB")

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// MongoDB Database connection
mongoConnect()


// local routes



// Running the server on PORT 5000
const port = process.env.PORT

app.listen(port || 5000, () => {
    console.log(`Server is running on port 5000 or ${port}`);
})