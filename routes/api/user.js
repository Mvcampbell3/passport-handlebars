const router = require("express").Router();
const User = require("../../models/User");
const passport = require("../../middleware/passport");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json({ users })
    })
    .catch(err => res.status(400).json({ err }))
})

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ logged: true });
})

router.post("/signup", (req, res) => {
  const { email, password, username } = req.body;

  User.findOne({ email })
    .then(dbUser => {
      if (!dbUser) {
        const newUser = new User({
          username,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(result => {
                res.status(201).json({ success: true, user: result._id })
              })
              .catch(err => res.status(400).json(err));
          })
        });

      } else {
        res.status(200).json({ success: false, msg: "Email already in database" })
      }
    })
})

router.get("/drop", (req, res) => {
  User.remove()
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/")
})

module.exports = router;