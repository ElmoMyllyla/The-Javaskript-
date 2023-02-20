



let laskuri= 0
document.getElementById("Nappula")




function JormanLisaus(){
   
    laskuri = laskuri + 1
    console.log(laskuri)
    console.log("Lisäys nappulaa painettiin. Tervetuloa!")
    document.getElementById("laskuri-el").innerText = laskuri
}

function JormanPoisto(){
   
    laskuri = laskuri - 7
    console.log(laskuri)
    console.log("Miinustus nappulaa painettiin. Hei Hei :(")
    document.getElementById("laskuri-el").innerText = laskuri
}
