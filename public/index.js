fetch("http://localhost:3000/greens").then((response) => {
    return response.json()
}).then((greens) => {
    printGreens(greens)
})


function reprintGreens() {

    let fruitTable = document.getElementById("fruitTable")
    let vegetableTable = document.getElementById("vegetableTable")

    let fruitNr = fruitTable.childNodes.length
    let iFruit = 0;
    while (iFruit < fruitNr) {
        fruitTable.childNodes[0].remove()
        iFruit++;
    }

    let vegNr = vegetableTable.childNodes.length
    let iVeg = 0;
    while (iVeg < vegNr) {
        vegetableTable.childNodes[0].remove()
        iVeg++;
    }

    for (let i = 0; i < vegetableTable.length; i++) {
        vegetableTable.deleteRow(i)
    }



    fetch("http://localhost:3000/greens").then((response) => {
    return response.json()
}).then((greens) => {
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
    let error = false;
    
    let userOld = document.getElementById("changeOldValue").value;
    let userNew = document.getElementById("changeNewValue").value;

    if (userOld == "" || userOld == null) {
        alert("please enter a to replace")
        error = true;
    }

    if (userNew == "") {
        alert("please enter a value to change into")
        error = true
    }

    if (fruit.checked) {
        classChoice = "Fruit"
    }
    else if (vegetable.checked) {
        classChoice = "Vegetable"
    }
    else{
        alert("Please choose a class!")
        error = true;
    }

    if(error == false) {
        fetch("http://localhost:3000/greens",
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({itemName: userOld, itemNewName: userNew, itemClass: classChoice})

        });

        fetch("http://localhost:3000/valueIsMissing").then((response) => {
            return response.json()
        }).then((valueIsMissing) => {
        if(valueIsMissing == true) {
            alert("I didn't find what you were searching for")
        }
        })
        reprintGreens()
    }
}

function removeTheName() {

    let userInput = document.getElementById("deleteValue").value;
    if (userInput == "" || userInput == null) {
        alert("please enter something to remove")
    }
    else {
        
        fetch("http://localhost:3000/greens",
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({itemName: userInput})
        })
        fetch("http://localhost:3000/valueIsMissing").then((response) => {
            return response.json()
        }).then((valueIsMissing) => {
        if(valueIsMissing == true) {
            alert("I didn't find what you were searching for")
        }
        })
        reprintGreens()

    }
}

function mainButtonClicked() {
    alert("This is not a phone, but It's nice to pretend :)")
}