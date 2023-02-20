let nimi ="Matkustaja!"
let moikkaus ="Moikka "
let laskuri= 0
let tallennus = "Kävijät"
let kutsuttuteksti =document.getElementById("laskuri-el")
let tallennuskutsu =document.getElementById("tallennus-el")
let moikkauskutsu= document.getElementById("moikkaus-el")
moikkauskutsu.innerText= moikkaus + nimi

document.getElementById("Nappula")

function Lisaa(){
   
    laskuri = laskuri + 1
    console.log(laskuri)
    console.log("Lisäys nappulaa painettiin. Tervetuloa!")
    document.getElementById("laskuri-el").innerText = laskuri
}

function Poistaa(){
   
    laskuri = laskuri - 1
    console.log(laskuri)
    console.log("Miinustus nappulaa painettiin. Hei Hei :(")
    document.getElementById("laskuri-el").innerText = laskuri
}
function tallenna(){
    console.log(laskuri)
    let lisays = "-" + laskuri
    tallennus = tallennus + lisays
    tallennuskutsu.innerText =tallennus
    laskuri = laskuri - laskuri
    document.getElementById ("laskuri-el").innerText=laskuri
}
function Poistamonta(){
   
    laskuri = laskuri - 5
    console.log(laskuri)
    console.log("Miinustus nappulaa painettiin. Hei Hei :(")
    document.getElementById("laskuri-el").innerText = laskuri
}
