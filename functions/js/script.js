let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  ___omdat het een tekst is.___________ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ____integer,________ waarom? ___omdat het een getal is._________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? ___omdat je de variabelen moet declareren._________ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____17_________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter.__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde __Meris Beganovic__________ de waarde noemen we een Argument.__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een _melding______ op het scherm met de tekst _Meris Beganovic________ deze tekst staan op regel _17______ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? __nee._________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _____dit vervangt de foto met de andere foto.______________ en waar wordt deze in je HTML aangeroepen? _____23_______ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML ____regel 25, bij 'show'_______ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? ___selecteert de juiste id van een element.________________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? ___dit vervangt de foto met de andere foto.________________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______32________ en wanneer wordt deze aangeroepen? ____als je op de button klikt._______ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ___regel 2 script.js___________ en waar komt de waarde van getal vandaan? ___HTML regel 32_________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? ____dit selecteert de goeie class van het element._______________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? ______berekent myInt + getal_______________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? _____dan verandert de uitkomst.________________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen __regel 38 en 44____________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _____regel 38 HTML_________ en waar komt de waarde van kleur vandaan? _____aqua_______ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? ____regel 44 HTML________ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? ________verandert de tekstkleur/style/grootte_____________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven __als je de pagina laad komt er een melding bovenin het scherm met de tekst "dit is een variabele van het datatype string"________ en wanneer gebeurt dat __als je op de site klikt________ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? __dan verandert de tekst in de melding_________________ vul je antwoord in op de lijn.