//// function // getElementById // addEventlistners

function questao1() {


    {
        const p1 = Number(prompt("Peso 1:"))
        const p2 = Number(prompt("Peso 2:"))
        const p3 = Number(prompt("Peso 3:"))
        const p4 = Number(prompt("Peso 4:"))
        const p5 = Number(prompt("Peso 5:"))

        const media = (p1 + p2 + p3 + p4 + p5) / 5
        alert("Média: " + media)
    }



}
const buttonquestao1 = document.getElementById("questao1")
buttonquestao1.addEventListener('click', () => { questao1() })



function questao2() {

    {
        const c = Number(prompt("Celsius:"))
        const f = c * 1.8 + 32
        alert("Fahrenheit: " + f)
    }


}
const buttonquestao2 = document.getElementById("questao2")
buttonquestao2.addEventListener('click', () => { questao2() })

function questao3() {
    const n = Number(prompt("Número:"))
    let resultado = ""
    for (let i = 0; i <= 10; i++) {
        resultado += n + " x " + i + " = " + (n * i) + "\n"
        alert(resultado)
    }

}
const buttonquestao3 = document.getElementById("questao3")
buttonquestao3.addEventListener('click', () => { questao3() })

function questao4() {
    let v1 = Number(prompt("velocidade permitida:"));
    let v2 = Number(prompt("velocidade do motorista:"));

    if (v2 <= v1) {
        console.log("sem multa");
    } else if (v2 <= v1 * 1.2) {
        console.log("multa:R$ 102");
    } else {
        console.log("multa: R$500");
    }
}
const buttonquestao4 = document.getElementById("questao4")
buttonquestao4.addEventListener('click', () => { questao4() })

function somar() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);

    document.getElementById("resultado").innerText = "Resultado:" + somar;


}