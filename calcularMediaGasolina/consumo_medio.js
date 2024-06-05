var _a;
function calcularConsumoMedio(km, litros) {
    if (litros === 0) {
        throw new Error("A quantidade de litros não pode ser zero.");
    }
    return km / litros;
}
(_a = document.getElementById('calcularMedia')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var kmInput = document.getElementById('input_km_rodado');
    var litrosInput = document.getElementById('input');
    var resultado = document.getElementById('resultado');
    var km = parseFloat(kmInput.value);
    var litros = parseFloat(litrosInput.value);
    if (isNaN(km) || isNaN(litros)) {
        resultado.textContent = "Por favor, insira valores numéricos válidos.";
        return;
    }
    try {
        var consumoMedio = calcularConsumoMedio(km, litros);
        resultado.textContent = "O consumo m\u00E9dio \u00E9 de ".concat(consumoMedio.toFixed(2), " km/l.");
    }
    catch (error) {
        resultado.textContent = error.message;
    }
});
