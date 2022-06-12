var express = require('express')
let { addUsers, getUsers } = require("../controllers/user.js");

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUsers);

module.export= router;