const pathUtils = require("../utils/path-utils");
const path = require("path");

module.exports = {

    findService : function(message) {
        try {
            let servicePath;

            if(!message.text){

                servicePath = `${__dirname}/../services/${message}`;
            } else {

                servicePath = `${__dirname}/../services/${message.text.split(" ")[0]}`;
            }

            if(!pathUtils.isParentOf(path.resolve(`${__dirname}/../`), path.resolve(servicePath))) {
                throw Error("badd service name");
            }
            return require(path.resolve(servicePath));
        } catch(err){
            console.log("Couldn't find service for message :", message);
            return null;
        }

    }
};