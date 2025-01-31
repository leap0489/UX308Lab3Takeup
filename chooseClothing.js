//Take a variable with the **temperature** and another variable with the **relative humidity** and output a **clothing** *suggest*ion.

function chooseClothing(temperature, humidity){
    let sClothing = "toque, boots, heavy coat";
    if (temperature > 25){
        sClothing = "shorts, t-shirt, birkenstocks";
    
     }else if(temperature >10){
        sClothing = "long pants, running shoes, hoodie";
    }
    return sClothing

}

export{chooseClothing}