// Seleciona os elementos necessários
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.querySelector('.arrows .arrow-btn:last-child'); // Botão >
let prev = document.querySelector('.arrows .arrow-btn:first-child'); // Botão <
let numberDisplay = document.querySelector('.indicators .number');
let lines = document.querySelectorAll('.indicators .line');

let countItem = items.length;
let itemActive = 0;

// Função para atualizar a tela
function showSlider() {
    // Remove 'active' do item e da linha antiga
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let lineActiveOld = document.querySelector('.indicators .line.active');
    
    if (itemActiveOld) itemActiveOld.classList.remove('active');
    if (lineActiveOld) lineActiveOld.classList.remove('active');

    // Adiciona 'active' ao novo item e linha
    items[itemActive].classList.add('active');
    lines[itemActive].classList.add('active');

    // Atualiza o número (01, 02...)
    numberDisplay.innerText = (itemActive + 1) < 10 ? '0' + (itemActive + 1) : (itemActive + 1);
}

// Evento de clique no botão "Próximo"
next.onclick = function() {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// Evento de clique no botão "Anterior"
prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
function showSlider() {
    // Remove a classe active de todos para garantir o "reset" da animação
    let oldItem = document.querySelector('.item.active');
    if (oldItem) oldItem.classList.remove('active');
    
    let oldLine = document.querySelector('.line.active');
    if (oldLine) oldLine.classList.remove('active');

    // Adiciona ao novo item
    items[itemActive].classList.add('active');
    lines[itemActive].classList.add('active');

    // Atualiza o número
    numberDisplay.innerText = (itemActive + 1) < 10 ? '0' + (itemActive + 1) : (itemActive + 1);

    window.addEventListener('scroll', function() {
    let value = window.scrollY;
    let slider = document.querySelector('.slider');
    
    // Gradualmente diminui a opacidade do slider enquanto desce
    // 0.002 é a velocidade do fade, pode ajustar
    slider.style.opacity = 1 - value * 0.0015; 
});
}

