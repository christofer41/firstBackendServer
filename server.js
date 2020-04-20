var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))


let greens = [
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

app.post('/greens', (req,res) => {
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


app.put("/greens", (req,res) => {
    var itemName=req.body.itemName;
    let itemNewName=req.body.itemNewName;
    let itemNewClass=req.body.itemClass

    console.log("name = "+itemName);

    greens.forEach(greens => {
        if (itemName == greens.name) {
            greens.name = itemNewName;
            greens.class = itemNewClass
            console.log(greens.name)
        }
    })
    
    console.log(greens)
    res.send()
})

app.delete("/greens", (req,res) => {
    let itemName=req.body.itemName

    let removeTheName = greens.findIndex(greens => itemName === greens.name)

    if (removeTheName) {
        greens.splice(removeTheName, 1)

    }

    console.log(greens)
    res.send()
})

app.listen(3000, "localhost", () => {
    console.log("the server is up and running! http://localhost:3000/")
})