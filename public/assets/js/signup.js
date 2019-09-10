const signBtn = document.getElementById("signBtn");

signBtn.addEventListener("click", function(e) {
  e.preventDefault();

  const usernamePlace = document.getElementById("username");
  const emailPlace = document.getElementById("email");
  const passwordPlace = document.getElementById("password");

  const username = usernamePlace.value.trim();
  const email = emailPlace.value.trim();
  const password = passwordPlace.value.trim();


  if (email && username && password) {
    $.ajax("/api/user/signup", { method: "POST", data: { email, username, password } })
      .then(result => {
        if (result.success) {
          window.location.replace(`/login/signed/${result.user}`)
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
})