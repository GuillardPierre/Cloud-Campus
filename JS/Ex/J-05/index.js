const form = document.querySelector("#mainForm")
const finalMessage = document.querySelector(".finalMessage")

form.noValidate = true

const handleError = (input, errorSpan) => {
    let message = ""

    if (input.validity.valueMissing) {
        message = "Ce champ est obligatoire."
    } else if (input.name === "name" && input.validity.tooShort) {
        message = "Le nom doit contenir au moins 3 caractères."
    } else if (input.name === "email" && input.validity.typeMismatch) {
        message = "Veuillez entrer une adresse email valide."
    } else if (input.name === "message" && input.validity.tooShort) {
        message = "Le message doit contenir au moins 10 caractères."
    } else if (input.name === "note" && input.validity.valueMissing) {
        message = "Veuillez sélectionner une note."
    }
    input.classList.add("error")
    input.classList.remove("valid")
    errorSpan.textContent = message
}

const validateInput = (input) => {
    const errorSpan = input.nextElementSibling
    finalMessage.classList.add("hidden")

    if (!input.validity.valid) {
        handleError(input, errorSpan)
    } else {
        input.classList.add("valid")
        input.classList.remove("error")
        errorSpan.textContent = ""
    }
}

const displayFinalMessage = (message, type) => {
    if (type === 'valid' || type === "error") {
        finalMessage.classList.remove("hidden")
        finalMessage.classList.add(type)
        finalMessage.textContent = message
}}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let isFormValid = true
    
    Array.from(form.elements).forEach((input) => {
        if (input.type !== "submit") {
            validateInput(input)
            if (!input.checkValidity()) {
                isFormValid = false;
            }
        }
    })

    if (isFormValid) {
        form.reset()
        displayFinalMessage("Formulaire envoyé", "valid")
    } else {
        displayFinalMessage("Veuillez corriger les erreurs", "error")
    }
})

form.addEventListener("input", (e) => {
    if (e.target.type !== "submit") {
        validateInput(e.target)
    }
})
