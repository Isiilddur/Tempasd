
const doLogin = (username, password) => {
    validateUsername(username);
    validatePassword(password);
    login(username, password)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem("token", response.data.dataResponse.accessToken);
          alert("Sesión iniciada");
        }
      })
      .catch((error) => {
        sessionStorage.removeItem("token");
        console.log(error);
        alert("Error al iniciar sesión");
      });
}

const createUser = (username, password, phoneNumber, idPanelista) => {
    validateUsername(username);
    validatePassword(password);
    validatePhoneNumber(phoneNumber);
    const user = {
        username: username,
        password: password,
        phoneNumber: phoneNumber,
        userInfoDTO: {
            idPanelista: idPanelista,
        }
    };
    newUser(user)
      .then((response) => {
        if (response.data.code === 200) {
          alert("Usuario creado");
        }else{
            alert("Error al crear usuario");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error al crear usuario");
      });
}

const confirmPasswordChange = (password, confirmPassword) => {
    validatePassword(password);
    validatePassword(confirmPassword);
    changePassword(password, confirmPassword)
      .then((response) => {
        if (response.status === 200) {
          alert("Contraseña cambiada");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error al cambiar contraseña");
      });
}

const verifyPVC = (code, email) => {
  validateUsername(email);
    verifyPasswordCode(code, email)
      .then((response) => {
        if (response.data.code === 200) {
          alert("Código verificado");
          sessionStorage.setItem("token", response.data.dataResponse.accessToken);
        }else{
            alert("Error al verificar código");
            sessionStorage.removeItem("token");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error al verificar código");
        sessionStorage.removeItem("token");

      });
}

const requestPasswordReset = (email) => {
  validateUsername(email);
    requestPasswordChange(email)
      .then((response) => {
        if (response.data.code === 200) {
          alert("Código enviado");
        }
        else{
            alert("Error al enviar código");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error al enviar código");
      });
}

const changeUserInfo = (userInfo) => {
    //validateUserInfo(userInfo)//This should validate multiple fields
    changeUserInfoData(userInfo)
      .then((response) => {
        if (response.status === 200) {
          alert("Información cambiada");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error al cambiar información");
      });
}

const listEncuestas = (user) => {
  validateUsername(user);
    listEncuestasByUser(user)
      .then((response) => {
        if (response.status === 200) {
          alert("Encuestas listadas");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error al listar encuestas");
      });
}
