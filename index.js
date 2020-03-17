const express = require('express')
const db = require('./data/config')

const app = express()

const PORT = process.env.PORT || 6000

app.use(express.json())

function get() {
    return db("cars")
}

function getById(id) {
    return db("cars").where({id})
}

function insert(car) {
    return db("cars").insert(car)
    .then(ids => {
        return getById(ids[0])
    })
}

app.get("/", (req, res) => {
    get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

app.get("/:id", (req, res) => {
    const {id} = req.params
    getById(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

app.post("/", (req, res) => {
    const car = req.body
    insert(car)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})