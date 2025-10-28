let myChoicebox = document.querySelector(".choicebox");
let mycards = document.querySelector(".cards");
let mycard = document.getElementsByClassName("card");
document.getElementById("valider").addEventListener("click", () => {
    const myChoice = document.querySelector("input[name='choice']:checked");
    if(myChoice){
        myChoicebox.style.display = "none";
        mycards.style.display = "grid";
        let gametitle = document.createElement("span");
        gametitle.textContent = "MEMORY GAME " + myChoice.value + " X " + myChoice.value;
        gametitle.style.gridColumn = "1 / -1";
        mycards.prepend(gametitle);
        switch(myChoice.value) {
            case "2" : mycards.classList.add("matrix2x2"); break;  
            case "4" : mycards.classList.add("matrix4x4"); break;
            case "6" : mycards.classList.add("matrix6x6"); break;
            case "8" : mycards.classList.add("matrix8x8"); break;
        }
        for( let i = 0 ; i < myChoice.value*myChoice.value; i++) {
            mycard[i].style.display = "block";
            if(myChoice.value == 2){
                mycard[i].style.width ="50%";
                mycard[i].style.height ="100%";
            }else if(myChoice.value == 4){
                mycard[i].style.width ="40%";
                mycard[i].style.height ="100%";
            }else if(myChoice.value == 6){
                mycard[i].style.width ="35%";
                mycard[i].style.height ="100%";
            }else if(myChoice.value == 8){
                mycard[i].style.width ="40%";
                mycard[i].style.height ="100%";
            }
        }
    }
}
);

