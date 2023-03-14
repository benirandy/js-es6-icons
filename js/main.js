let icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];


const containerCardsDom = document.getElementById("Cards");
const clickDom = document.getElementById("click");
let type = [];


for (let i = 0; i < icons.length; i++) {
    icons[i]["color"] = generaColoreRandom();
    creaCarta(containerCardsDom, icons[i]);
    if (!type.includes(icons[i].type)) {
        type.push(icons[i].type);
    }
}




for (i = 0; i < type.length; i++) {
    let options = `<option value="${type[i]}">${type[i]}</option>`;
    clickDom.innerHTML += options;
}


clickDom.addEventListener("change", () => {

    containerCardsDom.innerHTML = "";
    icons.map((carta) => {

        if (clickDom.value == carta.type || clickDom.value == "all") {
            return creaCarta(containerCardsDom, carta);
        }
    });
});


function generaColoreRandom() {
    let characters = "0123456789abcdef"
    let str = "#"
    for (let i = 0; i < 6; i++) {
        str += characters[Math.floor(Math.random() * 16)]
    }
    return str;
}


function creaCarta(destinazione, oggetto) {

    let carta = `  <div class="card shadow-sm" style="width: 290px;">
                     <div class="card-body p-4 text-center">
                        <h2 class="card-title"><i class="fa-solid ${oggetto.prefix}${oggetto.name}" style="color: ${oggetto.color};"></i></h2>
                        <h3 class="card-text">${oggetto.name}</h3>
                     </div>
                  </div>`

    destinazione.innerHTML += carta;
}