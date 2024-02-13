const emailCode = require("./emailCode");
const User = require("./User");

// RELACION UNO A MUCHOS (1, *)


emailCode.belongsTo(User)

User.hasMany(emailCode)

