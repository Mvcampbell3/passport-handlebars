const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }

})

const User = mongoose.model("User", UserSchema);

User.prototype.validatePassword = function(password) {
  console.log(password, this.password);
  bcrypt.compare(password, this.password, (err, result) => {
    if (err) throw err;
    return result;
  })
}

module.exports = User;