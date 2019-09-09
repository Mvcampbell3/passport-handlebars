const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.render("home");
})

router.get("/login", (req, res) => {
  res.render("login")
})

router.get("/signup", (req, res) => {
  res.render("signup")
})

router.get("/members", (req, res) => {
  res.render("members")
})

module.exports = router;
