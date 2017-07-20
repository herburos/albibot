
module.exports = {
    isParentOf : function(parent, dir) {
        return dir.indexOf(parent) === 0;
    }
};