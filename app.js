// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

app.get("/v1/explorers", (req, res, next) => {
    console.log(`Api Explorers GET ALL requests ${ new Date()}`)
    const explorer1 = {id:1, name:"Oscar 1"}
    const explorer2 = {id:2, name:"Oscar 2"}
    const explorer3 = {id:3, name:"Oscar 3"}
    const explorer4 = {id:4, name:"Oscar 4"}
    const explores = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explores)
})

app.get("/v1/explorer/:id", (req, res, next) => {
    console.log(`Api Explorers GET ALL requests ${ new Date()}`)
    console.log(`Geting explorer with id ${ req.params.id }`)
    const explorer1 = {id:1, name:"Oscar 1"}
    const explores = [explorer1]
    res.status(200).json(explores.filter((explorer) => explorer.id == req.params.id))
})

app.post("/v1/explorer", (req, res, next) => {
    console.log(`Api Explorers POST requests ${ new Date()}`)
    const requestBody = req.body;
    res.status(201).json({messege: "Creado"})
})

app.put("/v1/explorer/:id", (req, res, next) => {
    console.log(`Api Explorers PUT requests ${ new Date()}`)
    console.log(`Update explorer with id ${ req.params.id }`)
    const requestBody = req.body;
    res.status(200).json({messege: "Update"})
})

app.delete("/v1/explorer/:id", (req, res, next) => {
    console.log(`Api Explorers DELETE requests ${ new Date()}`)
    console.log(`Update explorer with id ${ req.params.id }`)
    const requestBody = req.body;
    res.status(200).json({messege: "DELETED"})
})
