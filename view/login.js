document.addEventListener("DOMContentLoaded", function () {
  let submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", function (e) {
    // preventDefault sikrer at siden ikke opdatere imens form input oplyses
    e.preventDefault();

    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    let loginUser = {
      username: usernameInput,
      password: passwordInput,
    };

    //Poster givne oplysninger
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          localStorage.setItem("user_id", data);
          location.href = "/";
        } else {
          window.alert("Username or password incorrect");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  });
});
