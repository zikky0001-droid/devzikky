"use strict";

const { handleChat } = require("../server");

module.exports = async function chat(req, res) {
  return handleChat(req, res);
};
