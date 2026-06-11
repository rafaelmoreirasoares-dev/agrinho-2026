document.addEventListener("DOMContentLoaded", function() {
    const btnCalcular = document.getElementById("btn-calcular");
    const inputArea = document.getElementById("area");
    const divResultado = document.getElementById("resultado");

    btnCalcular.addEventListener("click", function() {
        const area = parseFloat(inputArea.value);

        // Validação simples
        if (isNaN(area) || area <= 0) {
            divResultado.style.backgroundColor = "#f8d7da";
            divResultado.style.color = "#842029";
            divResultado.innerHTML = "⚠️ Por favor, insira um tamanho de área válido maior que zero.";
            return;
        }

        // Cálculo fictício baseado em média: gotejamento economiza cerca de 15 litros por m² por dia
        const economiaGeral = area * 15;

        // Exibe o resultado manipulando a DOM
        divResultado.style.backgroundColor = "#d1e7dd";
        divResultado.style.color = "#0f5132";
        divResultado.innerHTML = `🎉 Incrível! Em uma área de ${area}m², o uso de irrigação por gotejamento pode economizar aproximadamente <strong>${economiaGeral} litros</strong> de água por dia!`;
    });
});