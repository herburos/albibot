"use strict;"

module.exports = {
    getPosition: function (string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }
};