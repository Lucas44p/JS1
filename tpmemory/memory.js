const tab1 = [];
for (let i = 0; i < 12; i++) {
    tab1.push(i); 
}
const tab2 = [...tab1, ...tab1];

function melanger(tab) {
    return tab.sort(() => Math.random() - 0.5);
}

const tableauMelange = melanger(tab2);

console.log("Tableau mélangé:", tableauMelange);

let memory = null;
let memoryIndex = null;
let one = null;

function gestionCarte() {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 

    tableauMelange.forEach((item, i) => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        
        img.src = `/tpmemory/img/${item}.webp`;
        img.className = "img-button";
        img.style.cursor = 'pointer';

        img.onclick = (event) => {
            if (memory === null) {
                memory = event.target.src;
                memoryIndex = i;
                one = event.target;
                event.target.parentElement.classList.add("green");
            } else {
                if (memory === event.target.src && one !== event.target) {
                    event.target.parentElement.classList.add("green");
                    one.remove();
                    event.target.remove();
                    memory = null;
                    memoryIndex = null;
                    one = null;
                } else {
                    event.target.parentElement.classList.add("green");
                    memory = null;
                    memoryIndex = null;
                    one = null;
                    one.parentElement.classList.remove('green');
                    event.target.parentElement.classList.remove('green');
                }
            }
        };

        div.appendChild(img);
        container.appendChild(div);
    });
}
gestionCarte();
