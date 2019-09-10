const signBtn = document.getElementById("signBtn");

signBtn.addEventListener("click", function(e) {
  e.preventDefault();
  console.log("clicked");
  
  const usernamePlace = document.getElementById("username");
  const emailPlace = document.getElementById("email");
  const passwordPlace = document.getElementById("password");

  const username = usernamePlace.value.trim();
  const email = emailPlace.value.trim();
  const password = passwordPlace.value.trim();

  console.log(username, email, password);

  if (email && username && password) {
    $.ajax("/api/user/signup", {method: "POST", data: {email, username, password}})
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err);
      })
  }
})