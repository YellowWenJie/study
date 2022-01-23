const loginCheck = (username, password) => {
  if (username === "yellowwenjie" && password === "123456") {
    return true;
  }
  return false;
};
module.exports = {
  loginCheck
};
