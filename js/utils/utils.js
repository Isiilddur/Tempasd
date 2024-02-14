const validateUsername = (email) => {
    if (email === "") {
        alert("Email vacío");
        throw new Error("Email vacío");
    }
    else if (!email.includes("@")) {
        alert("Email inválido");
        throw new Error("Email inválido");
    }
}

const validatePassword = (password) => {
    if (password === "") {
        alert("Contraseña vacía");
        throw new Error("Contraseña vacía");
    }
}

const validatePhoneNumber = (phoneNumber) => {
    if (phoneNumber === "") {
        alert("Teléfono vacío");
        throw new Error("Teléfono vacío");
    }
    if (isNaN(phoneNumber)) {
        alert("Teléfono inválido");
        throw new Error("Teléfono inválido");
    }
    if (phoneNumber.length !== 10) {
        alert("Teléfono inválido");
        throw new Error("Teléfono inválido");
    }
}

