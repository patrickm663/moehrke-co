'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-preset-bulma.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-preset-bulma.cjs.dev.js");
}
