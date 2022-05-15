'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./gatsby-plugin-theme-ui.cjs.prod.js");
} else {
  module.exports = require("./gatsby-plugin-theme-ui.cjs.dev.js");
}
