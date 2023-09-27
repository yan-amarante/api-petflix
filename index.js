const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const videosRoute = require("./routes/videos")
const cors = require("cors")

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(bodyParser.json()) 

app.use("/videos", videosRoute)



app.listen(port, () => {
    console.log(`Servidor express rodando na porta: ${port}`)
})