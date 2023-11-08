const otazka = document.querySelector(".question")
otazka.textContent = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon."
const odpoved = prompt("Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.").toLowerCase()
let answer = document.querySelector(".answer__text")
answer = odpoved
const answerDva = document.querySelector(".answer")
if (answer == "bell") {
    answerDva.classList.add("answer--correct")
    answerDva.textContent = `Správně`
}
else {
    answerDva.classList.add("answer--wrong")
    answerDva.textContent = `Správná odpověď je Bell`
}
document.body.innerHTML += `Odpověděl jsi: ${answer}`