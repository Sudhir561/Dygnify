



let UserRoutes = require("./routes/user.js");




let express = require('express')
let bodyParser = require('body-parser');
let mongoose = require('mongoose')
let cors = require('cors')
require('dotenv'). config()

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/users", UserRoutes);

app.get("/", (req, res) => res.send("hello"));

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on ${PORT}`));
  })
  .catch((err) => console.log(err.message));