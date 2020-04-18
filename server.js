var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))


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


app.get("/greens", (req, res) => {
    res.json(greens)
})

app.post('/login', (req,res) => {
  var itemName=req.body.itemName;
  var itemClass=req.body.itemClass;
  console.log("name = "+itemName);
  console.log("class = "+itemClass);

  let groupTogether = {
      name: itemName,
      class: itemClass
  }
  console.log(groupTogether)

  greens.push(groupTogether)
  res.status(201)

  console.log(greens)

  res.send()

});
app.listen(3000, "localhost", () => {
    console.log("the server is up and running! http://localhost:3000/greens")
})