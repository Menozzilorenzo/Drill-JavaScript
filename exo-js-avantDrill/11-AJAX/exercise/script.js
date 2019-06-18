let req = new XMLHttpRequest();
req.open("get", "https://raw.githubusercontent.com/becodeorg/CRL-Turing-3.11/master/Parcours/04-Javascript/11-AJAX/files/data.json?token=AL3ATJEX7ECMPPJE7QKFTTK476ZCG", true);
req.send();
req.onload = function(){
    let data = req.response;
    data = JSON.parse(data);
    
    data.map(function(elementDuTableau){ // elementdutableau est un argument qui definit l'objet du tableau (data)
        let random = Math.round(Math.random()* 1000) // getRandomInt 
        elementDuTableau.score = random
    });
    data.sort(function(a,b){ // (sort = fonction ittérative)  | data.sort((a,b) => a.score - b.score)
        return a.score - b.score;
    });
    console.table(data)

    let categorieA = [];
    let categorieB = [];
    let categorieC = [];
    data.forEach(function(elementDuTableau){ // data.forEach(element =>{ if(...) ...})
    if(elementDuTableau.score > 750){
        categorieA.push(elementDuTableau);
    } else if (elementDuTableau.score > 500){
        categorieB.push(elementDuTableau);
    } else {
        categorieC.push(elementDuTableau);
    }
    });
    /*console.table(categorieA);
    console.table(categorieB);
    console.table(categorieC);*/

    let bahrain = data.filter(function(element){ // const bahrain = data.filter((element) => element.country == "Bahrain")
        return element.country == "Bahrain";
    });
    console.table(bahrain);
    // sortir le plus petit et plus grand score
    console.table(data[0]); // data[0] ca ressort le premier element
    console.table(data[data.length-1]); // le -1 car on demarre à 0
};
/*for (let i = 0; i < data.length; i++) {
        
        console.log(data[i].score)
        
    }*/