const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const emailPlace = document.getElementById("email");
  const passwordPlace = document.getElementById("password");

  const email = emailPlace.value.trim();
  const password = passwordPlace.value.trim();

  if (email && password) {
    $.ajax("/api/user/login", { method: "POST", data: { email, password } })
      .then(result => {
        if (result.logged) {
          window.location.replace("/members")
        }
      })
      .catch(err => console.log(err));
  }
})
