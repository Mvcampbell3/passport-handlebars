const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("clicked");
  const emailPlace = document.getElementById("email");
  const passwordPlace = document.getElementById("password");

  const email = emailPlace.value.trim();
  const password = passwordPlace.value.trim();

  if (email && password) {
    console.log(email, password)
    $.ajax("/api/user/login", { method: "POST", data: { email, password } })
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  }
})
