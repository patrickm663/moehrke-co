'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-preset-system.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-preset-system.cjs.dev.js");
}
