
document.addEventListener("DOMContentLoaded", function() {
    var userName = "Woman in Tech";
    var imagem = "images/fem.png";
    var currentYear = new Date().getFullYear();
    var link = "https://mackenzie.com.br";
    var coluna1 = document.getElementById('coluna1');
    coluna1.innerHTML = `<p>${userName} <img src="${imagem}" alt="sexo: Feminino"> * ${currentYear} | <a href="${link}">Mackenzie</a></p>`;
});

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

document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
});
