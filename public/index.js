fetch("http://localhost:3000/greens").then((response) => {
    return response.json()
}).then((greens) => {
    console.log(greens)
    printGreens(greens)
})


function reprintGreens() {

    let fruitTable = document.getElementById("fruitTable")
    let vegetableTable = document.getElementById("vegetableTable")

    let fruitNr = fruitTable.childNodes.length
    let iFruit = 0;
    while (iFruit < fruitNr) {
        console.log(fruitTable.childNodes[0])
        fruitTable.childNodes[0].remove()
        console.log(fruitTable.childNodes.length)
        console.log(fruitTable.childNodes[0])
        iFruit++;
    }

    let vegNr = vegetableTable.childNodes.length
    let iVeg = 0;
    while (iVeg < vegNr) {
        console.log(vegetableTable.childNodes[0])
        vegetableTable.childNodes[0].remove()
        console.log(vegetableTable.childNodes.length)
        console.log(vegetableTable.childNodes[0])
        iVeg++;
    }

    for (let i = 0; i < vegetableTable.length; i++) {
        vegetableTable.deleteRow(i)
    }



    fetch("http://localhost:3000/greens").then((response) => {
    return response.json()
}).then((greens) => {
    console.log(greens)
    printGreens(greens)
})

}


function printGreens(greens) {

    let fruitTable = document.getElementById("fruitTable")
    let vegetableTable = document.getElementById("vegetableTable")



    greens.forEach(greens => {

        let greenName = document.createElement("th")
        greenName.innerText = greens.name

        if (greens.class == "Fruit") {
                let greensTr = document.createElement("tr")
                greensTr.appendChild(greenName)
                greensTr.className = "greensTrBox"
                
                fruitTable.appendChild(greensTr)
        }
        else if (greens.class == "Vegetable") {
                let greensTr = document.createElement("tr")
                greensTr.appendChild(greenName)
                greensTr.className = "greensTrBox"
                
                vegetableTable.appendChild(greensTr)
        }
    
    });
}




function submitTheName() {

    let fruit = document.getElementById("submitNewFruit");
    let vegetable = document.getElementById("submitNewVegetable")
    let classChoice;

    let userInput = document.getElementById("submitNewValue").value;
    if (userInput == "") {
        alert("please enter a value")
    }

    if (fruit.checked) {
        classChoice = "Fruit"
    }
    else if (vegetable.checked) {
        classChoice = "Vegetable"
    }
    else{
        alert("Please choose a class!")
    }


    fetch("http://localhost:3000/greens",
{
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({itemName: userInput, itemClass: classChoice})
});
reprintGreens()
}


function changeTheName() {

    let fruit = document.getElementById("changeFruit");
    let vegetable = document.getElementById("changeVegetable")
    let classChoice;

    let userOld = document.getElementById("changeOldValue").value;
    if (userOld == "") {
        alert("please enter a value")
    }

    let userNew = document.getElementById("changeNewValue").value;
    if (userNew == "") {
        alert("please enter a value")
    }

    if (fruit.checked) {
        classChoice = "Fruit"
    }
    else if (vegetable.checked) {
        classChoice = "Vegetable"
    }
    else{
        alert("Please choose a class!")
    }
    fetch("http://localhost:3000/greens",
    {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({itemName: userOld, itemNewName: userNew, itemClass: classChoice})
    });
    reprintGreens()
}

function removeTheName() {

    let userInput = document.getElementById("deleteValue").value;
    if (userInput == "") {
        alert("please enter a value")
    }

    fetch("http://localhost:3000/greens",
    {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({itemName: userInput})
    });
    reprintGreens()
}