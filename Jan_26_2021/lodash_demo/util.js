const _ = require('lodash');

module.exports = {
    contains: function(originalStr, substring) {
        return _.includes(originalStr, substring);
    }
}