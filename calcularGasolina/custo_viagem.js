var _a;
function calcularCustoViagem(precoGasolina, consumoMedio, distancia) {
    if (consumoMedio === 0) {
        throw new Error("O consumo médio não pode ser zero.");
    }
    return (distancia / consumoMedio) * precoGasolina;
}
(_a = document.querySelector('button[type="submit"]')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    event.preventDefault();
    var precoGasolinaInput = document.getElementById('preco_gasolina');
    var consumoMedioInput = document.querySelector('input[name="input"]:nth-of-type(2)');
    var distanciaInput = document.querySelector('input[name="input"]:nth-of-type(3)');
    var resultado = document.getElementById('resultado');
    var precoGasolina = parseFloat(precoGasolinaInput.value);
    var consumoMedio = parseFloat(consumoMedioInput.value);
    var distancia = parseFloat(distanciaInput.value);
    if (isNaN(precoGasolina) || isNaN(consumoMedio) || isNaN(distancia)) {
        resultado.textContent = "Por favor, insira valores numéricos válidos.";
        return;
    }
    try {
        var custoViagem = calcularCustoViagem(precoGasolina, consumoMedio, distancia);
        resultado.textContent = "O custo estimado da viagem \u00E9 R$ ".concat(custoViagem.toFixed(2), ".");
    }
    catch (error) {
        resultado.textContent = error.message;
    }
});
