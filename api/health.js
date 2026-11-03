"use strict";

const { handleHealth } = require("../server");

module.exports = async function health(req, res) {
  return handleHealth(req, res);
};
