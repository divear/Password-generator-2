
let alphabet = "abcdefghijklmnopqrstuvwxyz"
const bl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const sl = 'abcdefghijklmnopqrstuvwxyz'
const n = '123456789'

let Ranlet2 = alphabet[Math.floor(Math.random() * alphabet.length)]

let c1;
let c2 = true;
let c3 = true;

if(c1 == undefined){
    c1 = true;
}

function Generate(){
   const Despos = document.getElementById("Despos");
   let Passlenght = document.getElementById("np");
   let Lenght = Passlenght.value;

    let Ranlet = alphabet[Math.floor(Math.random() * alphabet.length)]

    for(i = 1;i < Lenght ;i++){
        Ranlet += Ranlet2
        Change()    
    }

    if(Lenght > 50){
        Passlenght.value = 10;
    }else{
       Despos.innerHTML = Ranlet;
    }
};


function Change(){
    Ranlet2 = alphabet[Math.floor(Math.random() * alphabet.length)]
};

function EBletters1(){
    if (c1 == true){
        alphabet += bl;
        
        Generate()
        c1 = false;
    }else if(c1 == false){  

        if(c2 == false){
            alphabet = sl + n;
        }else if(c2 == true){
            alphabet = sl;
        }     
        Generate()
        c1 = true;
    }
};


function EBletters2(){
    if (c2 == true){
        alphabet += n;
        Generate()
        c2 = false;

        
    }else if(c2 == false){

        if(c1 == false){
            alphabet = sl + bl;
        }else if(c1 == true){
            alphabet = sl;
        }
        Generate()
        c2 = true;
    }
};
