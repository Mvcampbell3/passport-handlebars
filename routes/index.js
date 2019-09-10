const router = require("express").Router();
const apiRoutes = require("./api");
const checkAuth = require("../middleware/checkAuth");
const User = require("../models/User");

router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.render("home");
})

router.get("/login", (req, res) => {
  res.render("login", { email: "" })
})

router.get("/login/signed/:id", (req, res) => {
  console.log("route hit")
  const id = req.params.id
  User.findById(id)
    .then(user => {
      res.render("login", { msg: "You are signed up! Just need to login", email: user.email })
    })
    .catch(err => {
      console.log(err)
    })
})

router.get("/signup", (req, res) => {
  res.render("signup")
})

router.get("/members", checkAuth, (req, res) => {
  res.render("members", req.user);
})

module.exports = router;
