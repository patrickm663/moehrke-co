'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-preset-roboto.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-preset-roboto.cjs.dev.js");
}
