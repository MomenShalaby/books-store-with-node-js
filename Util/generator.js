var sequential = require("sequential-ids");

var generator = new sequential.Generator({
    digits:2,
    restore: "00"
  });

  generator.start()

  module.exports = generator