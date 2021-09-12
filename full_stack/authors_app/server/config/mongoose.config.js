const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/author_db", {useNewUrlParser: true, useUnifiedTopology: true,})
    .then(()=> console.log("Established a Connected to mongodb"))
    .catch((err) => console.log(`Something went wrong when connecting to the database, Error: ${err}`))