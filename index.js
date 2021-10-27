require("dotenv").config();
const express = require("express");
const app = express();

const libs = require("./src/libs");
libs.forEach((lib) => require(`./src/libs/${lib}`)(app));

module.exports = app;
