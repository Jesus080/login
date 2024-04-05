document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("calculadora");
    
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const num1 = parseFloat(document.getElementById("numero1").value);
        const num2 = parseFloat(document.getElementById("numero2").value);
        const operacionesSelec = document.getElementById("operaciones").value;
        let resultado;

        switch (operacionesSelec) {
            case 'suma':
                resultado = num1 + num2;
                break;
            case 'resta':
                resultado = num1 - num2;
                break;
            case 'multiplicacion':
                resultado = num1 * num2;
                break;
            case 'divicion':
                resultado = num1 / num2;
                break;
            default:
                resultado = "Seleccione operacion";
        }

        document.getElementById("resultado").innerText = resultado;
    });
});