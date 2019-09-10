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


User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}



module.exports = User;