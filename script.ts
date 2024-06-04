document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculateBtn") as HTMLButtonElement;
    const timeInput = document.getElementById("time") as HTMLInputElement;
    const result = document.getElementById("result") as HTMLParagraphElement;

    calculateBtn.addEventListener("click", () => {
        const time = parseFloat(timeInput.value);
        if (!isNaN(time) && time > 0) {
            const velocity = calculateVelocityAtPoint(time);
            result.textContent = `A velocidade do carro em um ponto específico a 25 km da origem é de aproximadamente ${velocity.toFixed(2)} km/h.`;
        } else {
            result.textContent = "Por favor, insira um tempo válido.";
        }
    });

    function calculateVelocityAtPoint(time: number): number {
        const distance = 25.0; //fixo, tenho que mudar depois
        return distance / time;
    }
});
