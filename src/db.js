const mongoose = require("mongoose");

//connection creation and creating new db
mongoose.connect("mongodb://localhost:27017/storetwitter"),{ useNewUrlParser: true, useNewUrlParser: true  }
.then (() => console.log("connection is successfull.."))
.catch((err) => console.log(err));



