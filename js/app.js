const dateBorn = new Date("3/29/2023");
const dateNow = new Date();
const dayNow = dateNow.getDate();

function somar() {
    var num1 = 2;
    var num2 = 2;
    var resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function time_now() {
    var dateNow = new Date()
    document.getElementById("resultado").innerHTML = dateNow;
}

function years() {

}

function calcularDiasVividos() {        
    var diferenca = Math.floor((dateNow - dateBorn) / (1000 * 60 * 60 * 24));    
    return diferenca;
}

function calcularIdade() {
    var dataNascimento = dateBorn;
    var dataAtual = new Date();

    var anoNascimento = new Date(dataNascimento).getFullYear();
    var mesNascimento = new Date(dataNascimento).getMonth();
    var diaNascimento = new Date(dataNascimento).getDate();

    var anoAtual = dataAtual.getFullYear();
    var mesAtual = dataAtual.getMonth();
    var diaAtual = dataAtual.getDate();

    var idadeAnos = anoAtual - anoNascimento;
    var idadeMeses = mesAtual - mesNascimento;
    var idadeDias = diaAtual - diaNascimento;

    if (idadeMeses < 0 || (idadeMeses === 0 && idadeDias < 0)) {
        idadeAnos--;
        idadeMeses += 12;
    }

    if (idadeDias < 0) {
        var ultimoDiaMesAnterior = new Date(anoAtual, mesAtual, 0).getDate();
        idadeDias = ultimoDiaMesAnterior - diaNascimento + diaAtual;
        idadeMeses--;
    }

    document.getElementById("age").innerHTML = "_Age: " + idadeAnos + " anos, " + idadeMeses + " meses e " + idadeDias + " dias";
    document.getElementById("shits").innerHTML = "_Shits: " + idadeDias * 3;
}

function days() {    
    var dateNow = new Date();
    var timeDiff = Math.abs(dateNow.getTime() - dateBorn.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays
}

function diapers() {
    document.getElementById("diapers").innerHTML = `_diapers: ${days()*8}`
    //document.getElementById("diapers").innerHTML = days() * 8
}

function shits() {
    document.getElementById("shits").innerHTML = `_shits: ${calcularDiasVividos() * 3}`
}

function breastfeed() {
    document.getElementById("breastfeed").innerHTML = `_breastfeed: ${calcularDiasVividos() * 6}`
}

function burp() {
    document.getElementById("burp").innerHTML = `_burp: ${calcularDiasVividos() * 4}`
}

function iniciarSoma() {
    //time_now(); // Realiza a soma inicialmente

    //setInterval(time_now, 3000); // Chama a função somar() a cada 3 segundos (3000 milissegundos)
    calcularIdade()
    diapers();
    shits();
    breastfeed();
    burp();

    setInterval(diapers, 3000);
    setInterval(calcularIdade, 3000);
    setInterval(shits, 3000);
    setInterval(breastfeed, 3000);
    setInterval(burp, 3000);
}