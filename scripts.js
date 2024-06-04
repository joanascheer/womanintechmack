
var userName = "Woman in Tech";
var imagem = "images/fem.png";
var currentYear = new Date().getFullYear();
var link = "https://mackenzie.com.br";

var coluna1 = document.getElementById('coluna1');
coluna1.innerHTML = `<p>${userName} <img src="${imagem}" alt="sexo: Feminino"> * ${currentYear} | <a href="${link}">Mackenzie</a></p>`;

var imagens = ["images/fb.png", "images/ig.png", "images/in.png"];
var links = ["https://fcebook.com/primecatsgatil", "https://instagram.com/gudan_ohusky", "https://linkedin.com/joana-scheer"];

var coluna2 = document.getElementById("icons");
for (var i = 0; i < imagens.length; i++) {
    coluna2.innerHTML += `<a href="${links[i]}"><img src="${imagens[i]}" alt="Imagem ${i + 1}"></a>`;
}

var imagensElementos = document.querySelectorAll("#team img");
for (var i = 0; i < imagensElementos.length; i++) {
    imagensElementos[i].addEventListener('mouseover', function() {
        this.style.filter = 'grayscale(0)';
    });

    imagensElementos[i].addEventListener('mouseout', function() {
        this.style.filter = 'grayscale(1)';
    });
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
});
