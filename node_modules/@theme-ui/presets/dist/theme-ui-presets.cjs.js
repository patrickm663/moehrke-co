'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-presets.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-presets.cjs.dev.js");
}
