let pepe_activate = false;
let n_activate = false;
let brodie_activate = false;
let cici_activate = false;

let audio_played_door = false;
let show_the_door_active = false;

function pepe_focus() {
    if ((pepe_activate == false) && (n_activate == false) && (brodie_activate == false) && (cici_activate == false)){
        pepe_activate = true;
        let myAudio = new Audio;
        myAudio.src = "././audio/fx.wav";
        myAudio.play();
    }
    else{
        pepe_activate = false;
        n_activate = false;
        brodie_activate = false;
        cici_activate = false;
        let myAudio = new Audio;
        myAudio.src = "././audio/unfx.wav";
        myAudio.play();
    }
}
function n_focus() {
    if ((n_activate == false) && (pepe_activate == true) && (brodie_activate == false) && (cici_activate == false)){
        n_activate = true;
        let myAudio = new Audio;
        myAudio.src = "././audio/fx.wav";
        myAudio.play();
    }
    else{
        pepe_activate = false;
        n_activate = false;
        brodie_activate = false;
        cici_activate = false;
        let myAudio = new Audio;
        myAudio.src = "././audio/unfx.wav";
        myAudio.play();
    }
}
function brodie_focus() {
    if ((brodie_activate == false) && (pepe_activate == true) && (n_activate == true) && (cici_activate == false)){
        brodie_activate = true;
        let myAudio = new Audio;
        myAudio.src = "././audio/fx.wav";
        myAudio.play();
    }
    else{
        pepe_activate = false;
        n_activate = false;
        brodie_activate = false;
        cici_activate = false;
        let myAudio = new Audio;
        myAudio.src = "././audio/unfx.wav";
        myAudio.play();
    }
}
function cici_focus() {
    if ((cici_activate == false) && (pepe_activate == true) && (n_activate == true) && (brodie_activate == true)){
        cici_activate = true;
        let myAudio = new Audio;
        myAudio.src = "././audio/fx.wav";
        myAudio.play();
    }
    else{
        pepe_activate = false;
        n_activate = false;
        brodie_activate = false;
        cici_activate = false;
        let myAudio = new Audio;
        myAudio.src = "././audio/unfx.wav";
        myAudio.play();
    }
}

function open_the_door(){
    if ((cici_activate == true) && (pepe_activate == true) && (n_activate == true) && (brodie_activate == true)){
        if (audio_played_door == false){
            let myAudio = new Audio;
            myAudio.src = "././audio/open_na_noor.mp3";
            myAudio.play();
            let audio_played_door = true;
            show_the_door();
        }
        else if (audio_played_door == true){
            show_the_door();
        }
    }
    else{
        let myAudio = new Audio;
        myAudio.src = "././audio/unfx.wav";
        myAudio.play();
    }
}

function show_the_door(){
    playfull_house = document.querySelector("#house");
    playfull_door = document.querySelector("#door-playfull");
    if (show_the_door_active == false){
        playfull_house.setAttribute("style", "display:none;");
        playfull_door.setAttribute("style", "display:flex;");
        show_the_door_active = true;
    }
    else{
        playfull_house.setAttribute("style", "display:block;");
        playfull_door.setAttribute("style", "display:none;");
        pepe_activate = false;
        n_activate = false;
        brodie_activate = false;
        cici_activate = false;
        show_the_door_active = false;
    }
}

function i_resolved_1(){
    let area_1 = document.getElementById("area1").value;
    let area_2 = document.getElementById("area2").value;
    let area_3 = document.getElementById("area3").value;
    let area_4 = document.getElementById("area4").value;
    if ((area_1 == "A") || (area_1 == "a") && (area_2 == "Z") || (area_2 == "z") && (area_3 == "O") || (area_3 == "o") && (area_4 == "C") || (area_4 == "c")){
        let myAudio = new Audio;
        myAudio.src = "././audio/yay.mp3";
        myAudio.play();
        show_the_door();
    }
    else{
        let myAudio = new Audio;
        myAudio.src = "././audio/fukup.mp3";
        myAudio.play();
        show_the_door();
    }
}