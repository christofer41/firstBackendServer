let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))

let valueIsMissing = false
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

app.get("/valueIsMissing", (req, res) => {
    res.json(valueIsMissing)
})


app.post('/greens', (req,res) => {
  let itemName=req.body.itemName;
  let itemClass=req.body.itemClass;

  let groupTogether = {
      name: itemName,
      class: itemClass
  }

  greens.push(groupTogether)
  res.status(201)

  res.send()

});


app.put("/greens", (req,res) => {
    let itemName=req.body.itemName;
    let itemNewName=req.body.itemNewName;
    let itemNewClass=req.body.itemClass

    ("name = "+itemName);

    greens.forEach(greens => {
        if (itemName == greens.name) {
            greens.name = itemNewName;
            greens.class = itemNewClass
        }
    })

    valueIsMissing = false; 
    if (!greens.includes(itemName)) {
        res.status(404);
        changeTheError()
        
        return;
    }
    
    res.send()
})

function changeTheError() {
        valueIsMissing = true;  
        ("hello")
}

app.delete("/greens", (req,res) => {
    let itemName=req.body.itemName

    let removeTheName = greens.findIndex(greens => itemName === greens.name)

    if (removeTheName) {
        greens.splice(removeTheName, 1)

    }

    valueIsMissing = false; 
    if (!greens.includes(itemName)) {
        res.status(404);
        changeTheError()
        
        return;
    }

    res.send()
})

app.listen(3000, "localhost", () => {
    console.log("the server is up and running! http://localhost:3000")
})
