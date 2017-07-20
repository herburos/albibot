let Promise = require("bluebird");
let https = require("https");
let { exec } = require("child_process");

module.exports = {
    name: "math-battle",
    serviceDescription: "updates your score of math-battle game in telegram.\n",
    callDescription: "",
    argumentInfo: "",

    updateScore: function (score, url) {

        let session = url.split("#")[1].split("?")[0];
        score = parseInt(score);

        function promiseFromChildProcess(child) {
            return new Promise(function (resolve, reject) {
                child.addListener("error", reject);
                child.addListener("exit", resolve);
            });
        }

        let child = exec(`curl 'https://tbot.xyz/api/setScore' -H 'Origin: https://tbot.xyz' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.8,fa;q=0.6' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36' -H 'Content-Type: text/plain;charset=UTF-8' -H 'Accept: */*' -H 'Referer: https://tbot.xyz/math/' -H 'Connection: keep-alive' --data-binary 'data=${session}&score=${score}' --compressed`);
        return promiseFromChildProcess(child);


    },
};