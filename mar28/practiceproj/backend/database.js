const mongoose = require("mongoose");
const connection = "mongodb+srv://khalil1221:<Briana2804>@<https://cloud.mongodb.com/v2/5e7fc293dd44dc2defce8089#clusters>/<UsersDB>?retryWrites=true&w=majority";
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));