function calcular (operacao){
    let primeiroNumero = parseFloat(document.getElementById('numero1').value);
    let segundoNumero = parseFloat(document.getElementById('numero2').value);
    let resultado;
    let c = document.getElementById('resetar');

    if (isNaN(primeiroNumero) || isNaN (segundoNumero)) {
        resultado = "Por favor, insira números."
    }
    else{
        if (operacao === '+') {
            resultado = primeiroNumero + segundoNumero;
        }
        else if (operacao === '-') {
            resultado = primeiroNumero - segundoNumero;
        }
        else if (operacao === '*') {
            resultado = primeiroNumero * segundoNumero;
        }
        else if (operacao === '/') {
            resultado = primeiroNumero / segundoNumero;
        }
    }
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}


c.addEventListener('click', function(){
        resultado.textContent = ''; 
        document.getElementById('numero1').value = '';
        document.getElementById('numero2').value = '';               
    });