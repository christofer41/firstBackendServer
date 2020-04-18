const express = require("express")
const app = express()

const greens = [
    {
        name: "Tomato",
        class: "Fruit"
    },
    {
        name: "Peppers",
        class: "Fruit"
    },
    {
        name: "Pumpkin",
        class: "Fruit"
    },
    {
        name: "Eggplant",
        class: "Fruit"
    },
    {
        name: "Potato",
        class: "Vegetable"
    },
    {
        name: "Rhubarb",
        class: "Vegetable"
    },
    {
        name: "Okra",
        class: "Vegetable"
    },
    {
        name: "asparagus",
        class: "Vegetable"
    },
]

app.use(express.json())
app.use(express.static("public"))

app.get("/greens", (req, res) => {
    res.json(greens)
})

app.post("/greens", (req, res) => {
    greens.push(req.body)
    res.status(201)
    res.send()
})

app.listen(3000, "localhost", () => {
    console.log("the server is up and running! http://localhost:3000/greens")
})