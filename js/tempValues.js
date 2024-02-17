let usernameX = "test@12345.com";
const newPasswordX = "1234";
let currentPasswordX = "78sa90";

let pvc = "2005d907f15b4debbd72dab1911aa3db3baa3982413040df8cda6938bc8e2102"

const CHANGE_PASSWORD ={
    password: "1234",
}

const SUCCESS_CREATE_USER = {
    newUsername: "test@12345.com",
    password: "1234",
    phoneNumber: "5525008170",
    idPanelista: "9919"
}

const SUCCESS_CHANGE_USER_INFO = {
    "nombre" : "Luis",
    "apellidoPaterno": "Montesasdasdas",
    "apellidoMaterno": "Gomez",
    "edad": "27",
    "idEstado" : "123",
    "ciudad": "CDMX",
    "telefono":"5525008170",
    "birthYear":1996

}

/**
 * TODO: Garantia de que todos los escenarios funcionan
 * Probar happy path y Fail Path
 *  Checar issue de usuarios activos despues de cambiar el password only on success
 */