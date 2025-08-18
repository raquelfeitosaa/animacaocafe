const botaosim = document.querySelector('.botao-cafe-sim')
const caixafundo = document.querySelector('.caixa-fundo')
const caixasim = document.querySelector('.caixa-sim')
const botaonao = document.querySelector('.botao-cafe-nao')
const caixanao = document.querySelector('.caixa-não')

function cliqueiNobotaoSim() {
    caixafundo.style.visibility = 'hidden';
    caixasim.style.visibility = 'visible';
    console.log("Cliquei no botão sim!")
}
function CliqueiNobotaoNao() {
    caixafundo.style.visibility = 'hidden';
    caixanao.style.visibility = 'visible';
    console.log("Cliquei no botão não!")
}

botaosim.addEventListener('click', cliqueiNobotaoSim)

botaonao.addEventListener('click', CliqueiNobotaoNao)

caixasim.addEventListener('click', function() {
    caixafundo.style.visibility = 'visible';
    caixasim.style.visibility = 'hidden';
});

caixanao.addEventListener('click', function() {
    caixafundo.style.visibility = 'visible';
    caixanao.style.visibility = 'hidden';
});