'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-preset-deep.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-preset-deep.cjs.dev.js");
}
