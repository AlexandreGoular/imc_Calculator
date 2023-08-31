const form = document.querySelector("form");

form.addEventListener('submit',function(event) {
    event.preventDefault();
    //O value é pro Js receber o valor que vem do html
    const massa = document.querySelector("#peso").value;
    const alt = document.querySelector("#altura").value;
    const value = document.querySelector("#iemc");

    //Tofixed é a quantidade de numeros que aparecera depois da virguls
    const imc = (massa / (alt * alt)).toFixed(2);

    let descricao = '';

    if (imc <= 18.5) {
        descricao = "Cuidado,Você esta abaixo do Peso"
    } else if (imc > 18.5 && imc <= 25) {
        descricao = "Você esta no seu peso ideal"
    } else if (imc > 25 && imc <= 30) {
        descricao = "Você esta acima do peso"
    } else {
        descricao = "Procure um medico urgente"
    }

    value.textContent = ("Seu IMC: " + imc);
    document.querySelector("#texto").textContent = descricao;
});

