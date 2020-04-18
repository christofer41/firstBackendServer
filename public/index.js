fetch("http://localhost:3000/greens").then((response) => {
    return response.json()
}).then((greens) => {
    console.log(greens)
    printGreens(greens)
})

function printGreens(greens) {
    let greensTable = document.getElementById("greensTable")

    greens.forEach(greens => {

        let greenName = document.createElement("th")
        greenName.innerText = greens.name

        if (greens.class == "Fruit") {
            
            let greensTr = document.createElement("tr")
            greensTr.appendChild(greenName)
            greensTr.className = "greensTrBox"
            
            greensTable.appendChild(greensTr)
    
        }
        else {
            let greensTr = document.getElementsByClassName("greensTrBox")

            for (let i = 0; i < greensTr.length; i++) {
                if (greensTr[i].childNodes.length == 1) {
                    console.log("goes here")
                    greensTr[i].appendChild(greenName)
                    break;
                }
            }
        }
            
        
    });
}


$(document).ready(function(){
    var itemName;
    $("#submit").click(function(){
      Name="banana";
      Class="fruit";
      $.post("http://localhost:3000/login",{itemName: Name,itemClass: Class}, function(data){
        if(data==='done')
          {
            alert("login success");
          }
      });
    });
  });