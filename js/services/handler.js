
const newUser = (user) => {
  return request("user/newUser", "POST", user); //Should be changed to authRequest
};

const verifyPasswordCode = (code, email) => {
  return request(`changePassword/verify?pvc=${code}&email=${email}`, "GET");
};

const requestPasswordChange = (email) => {
  return request(`changePassword/reset?email=${email}`, "GET");
};

const changePassword = (password, confirmPassword) => {
  return authRequest(
    getToken(),
    `profile/newPassword?password=${password}&confirmPassword=${confirmPassword}`,
    "POST"
  );
};

const login = (email, password) => {
  const body = {
    username: email,
    password: password,
  };
  return request("user/login", "POST", body);
};

const changeUserInfoData = (userInfo) => {
  return authRequest(getToken(), "profile/info", "POST", userInfo);
}

const listEncuestasByUser = (user) => {
    return authRequest(getToken(), `encuesta/listByUser?idUserInfo=${user}`, "GET");
    }

//
const getToken = () => {
  return sessionStorage.getItem("token");
};

