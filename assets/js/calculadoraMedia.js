const notaInput = document.querySelector("#nota");
const showNotas = document.querySelector("#containerNotas");
const mediaOutput = document.querySelector("#resposta");
const notas = [];

function adicionarNotas(){
    const nota = parseFloat(notaInput.value);
    if(!isNaN(nota)){
        notas.push(nota);
        showNotas.innerHTML += `<p>${notas.length}º Nota: ${nota} &#128220;</p>`;  
        notaInput.value = ''
        notaInput.focus();
    } else {
        alert('Por favor, insira um número válido.');
    }
}
function calcularMedia(){
    if(notas.length > 0){
        let media = 0;
    let soma = 0;
    for(valor of notas){
        soma += valor;
    }
    media = soma / notas.length;
    mediaOutput.innerHTML = media.toFixed(1);

    } else {
        alert("Não há notas para calcular média.")
    }
}