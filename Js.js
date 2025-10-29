let myChoicebox = document.querySelector(".choicebox");
let mycards = document.querySelector(".cards");

const cardImages = [
    'images/card1.png',
    'images/card2.png',
    'images/card3.jpg',
    'images/card4.jpg',
    'images/card5.jpg',
    'images/card6.jpg',
    'images/card7.jpg',
    'images/card8.jpg',
    'images/card9.jpg',
    'images/card10.jpg',
    'images/card11.jpg',
    'images/card12.jpg',
    'images/card13.jpg',
    'images/card14.jpg',
    'images/card15.jpg',
    'images/card16.jpg',
    'images/card17.jpg',
    'images/card18.jpg',
    'images/card19.jpg',
    'images/card20.jpg',
    'images/card21.jpg',
    'images/card22.jpg',
    'images/card23.jpg',
    'images/card24.jpg',
    'images/card25.jpg',
    'images/card26.jpg',
    'images/card27.jpg',
    'images/card28.jpg',
    'images/card29.png',
    'images/card30.webp',
    'images/card31.png',
    'images/card32.jpg',
];

document.getElementById("valider").addEventListener("click", () => {
    const myChoice = document.querySelector("input[name='choice']:checked");
    if (myChoice){
        mycards.style.display = "grid";
        myChoicebox.style.display = "none";
        mycards.style.display = "grid";
    
        mycards.innerHTML = '';
        mycards.className = "cards";
    
        mycards.classList.add(`matrix${myChoice.value}x${myChoice.value}`);
    
        let gametitle = document.createElement("span");
        gametitle.textContent = `MEMORY GAME ${myChoice.value} X ${myChoice.value}`;
        gametitle.style.gridColumn = "1 / -1";
        mycards.appendChild(gametitle);
    
        let totalCards = myChoice.value * myChoice.value;
    
        let selectedImages = cardImages.slice(0, totalCards / 2);
        let cardsPool = [...selectedImages, ...selectedImages];
    
        function shuffle(array) {
            let temp;
            for (let i = 0 ; i < array.length; i++) {
                let j = Math.floor(Math.random() * (i + 1));
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        }
        cardsPool = shuffle(cardsPool);
        
        cardsPool.forEach(imgSrc => {
            const card = document.createElement("div");
            card.classList.add("card");
            if (myChoice.value == 2) {
                card.style.width = "200px";
                card.style.height = "300px";
                mycards.style.rowGap = "20px";
            }
            else if (myChoice.value == 4){
                card.style.width = "100px";
                card.style.height = "150px";
                mycards.style.rowGap = "12px";
                mycards.style.columnGap = "30px";
            }
            else if (myChoice.value == 6){
                card.style.width = "60px";
                card.style.height = "90px";
                mycards.style.rowGap = "10px";
            }
            else if (myChoice.value == 8){
                card.style.width = "50px";
                card.style.height = "75px";
                mycards.style.rowGap = "5px";
            }
            const back = document.createElement("img");
            back.src = "images/cardback.jpg";
            back.classList.add("back");
    
            const front = document.createElement("img");
            front.src = imgSrc;
            front.classList.add("front");
    
            card.appendChild(back);
            card.appendChild(front);
            mycards.appendChild(card);
            
            card.addEventListener("click", function () {
                this.classList.toggle("flip");
            });
        });
    }
    
});
