document.addEventListener("DOMContentLoaded", function () {
    var calculateBtn = document.getElementById("calculateBtn");
    var timeInput = document.getElementById("time");
    var result = document.getElementById("result");
    calculateBtn.addEventListener("click", function () {
        var time = parseFloat(timeInput.value);
        if (!isNaN(time) && time > 0) {
            var velocity = calculateVelocityAtPoint(time);
            result.textContent = "A velocidade do carro em um ponto espec\u00EDfico a 25 km da origem \u00E9 de aproximadamente ".concat(velocity.toFixed(2), " km/h.");
        }
        else {
            result.textContent = "Por favor, insira um tempo válido.";
        }
    });
    function calculateVelocityAtPoint(time) {
        var distance = 25.0; // Distância fixa de 25 km
        return distance / time;
    }
});
