
var userName = "Joana Scheer Loayza";
var imagem = "images/fem.png";
var currentYear = new Date().getFullYear();
var link = "https://mackenzie.com.br";
var polo = "Polo: Higienópolis";

var coluna1 = document.getElementById('coluna1');
coluna1.innerHTML = `<p>${userName} <img src="${imagem}" alt="sexo: Feminino"> * ${currentYear} | <a href="${link}">Mackenzie</a> ~ ${polo}</p>`;

var imagens = ["images/fb.png", "images/ig.png", "images/in.png"];
var links = ["https://fcebook.com/primecatsgatil", "https://instagram.com/gudan_ohusky", "https://linkedin.com/joana-scheer"];

var coluna2 = document.getElementById("icons");
for (var i = 0; i < imagens.length; i++) {
    coluna2.innerHTML += `<a href="${links[i]}"><img src="${imagens[i]}" alt="Imagem ${i + 1}"></a>`;
}

var imagensElementos = document.querySelectorAll("#coluna2 img");
for (var i = 0; i < imagensElementos.length; i++) {
    imagensElementos[i].addEventListener('mouseover', function() {
        this.style.filter = 'invert(0)';
    });

    imagensElementos[i].addEventListener('mouseout', function() {
        this.style.filter = 'invert(100%)';
    });
}

// A7

let teams = [
    {
        name: "Cloud9",
        playersNumber: 5,
        shieldImg: "images/teamshields/Cloud9.png",
        sport: "CS2",
        color: "Azul"
    },
    {
        name: "Blackhawks",
        playersNumber: 6,
        shieldImg: "images/teamshields/blackhawks.png",
        sport: "Hockey",
        color: "Vermelho"
    },
    {
        name: "Lakers",
        playersNumber: 5,
        shieldImg: "images/teamshields/lakers.png",
        sport: "Basquete",
        color: "Dourado"
    }
];

function showTeams(color) {
    let divTeams = document.getElementById('teams');
    divTeams.innerHTML = '';

    for (let team of teams) {
        if (team.color === color) {
            let card = document.createElement('div');
            card.className = 'card';

            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            let h5 = document.createElement('h5');
            h5.className = 'card-title';
            h5.textContent = team.name;
            cardBody.appendChild(h5);

            let p = document.createElement('p');
            p.className = 'card-text';
            p.textContent = `Modalidade: ${team.sport}, Jogadores: ${team.playersNumber}`;
            cardBody.appendChild(p);

            let img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = team.shieldImg;
            card.appendChild(img);

            card.appendChild(cardBody);
            divTeams.appendChild(card);
        }
    }
}
