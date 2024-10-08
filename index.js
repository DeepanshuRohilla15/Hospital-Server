const express = require("express")

const users = [{
    name: "Stark",
    kidneys: [{
        healthy: false
    }]
}]

const app = express()  // creating the clinic


app.listen(3000)   // docter actually taking the room