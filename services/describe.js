"use strict";

let serviceUtils = require("../utils/service-utils");

let Promise = require("bluebird");

module.exports = function(serviceName) {
    let service = serviceUtils.findService(serviceName);

    if(!service){
        return Promise.resolve(`Service ${serviceName} currently not defined!`);
    }

    service = serviceUtils.findService(servcie);

    if(!service){
        return Promise.resolve(`Service ${serviceName} currently not defined!`);
    }

    if(service.name === "math-battle") {
        Promise.resolve(`This service ${service.serviceDescription}\n
                        sample call:\n
                        math-battle updateScore 120 https://tbot.xyz/math/#eyJ1Ijo0TAzNDcxNSwibiI6IkFsYm9yeiBTYW1hZGkiLCJnIjoiTWF0aEJhdHRsZSIsImNpIjoiNzgxMDk1MzQyMzcwMjQ0ODc3OCIsImkiOiJBUUFBQU5nWUF3RGJOZXdDel9nekNIRlJpaFUifTc4NTI1NGU2ZDVlMGI4ZWYxZTgwNTdmZjY2NzNkMjQx?tgShareScoreUrl=tg%3A%2F%2Fshare_game_score%3Fhash%3DLX-6tK6CeDU8QRcYwV1ak3lnSs9j2ElM1Pci6GdBZlM`)
    }
};
