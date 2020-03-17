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

function update(id, car) {
    return db("cars").update(car).where({id})
    .then(() => {
        return getById(id)
    })
}

function remove(id) {
    return db("cars").delete().where({id})
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

app.put("/:id", (req, res) => {
    const {id} = req.params
    const car = req.body
    update(id, car)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).end()
    })
})

app.delete("/:id", (req, res) => {
    const {id} = req.params
    remove(id)
    .then(response => {
        res.status(200).json("deleted")
    })
    .catch(err => {
        res.status(500).end()
    })
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})