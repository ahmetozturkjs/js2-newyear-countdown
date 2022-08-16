let day=document.querySelector("#day");
let hour=document.querySelector("#hour");
let minute=document.querySelector("#minute");
let second=document.querySelector("#second");

let yilbasi=new Date("Jan 1, 2023")


function yenile(){
    let simdi=new Date()

let fark=yilbasi.getTime()-simdi.getTime()

let saniye=1000;
let dakika=saniye*60;
let saat=dakika*60;
let gun=saat*24;


    
    day.innerText=Math.floor(fark/gun)
    hour.innerHTML=Math.floor((fark%gun)/saat)
    minute.innerHTML=Math.floor((fark%saat)/dakika)
    second.innerHTML=Math.floor((fark%dakika)/saniye)
    setInterval(yenile,1000)
}

yenile();