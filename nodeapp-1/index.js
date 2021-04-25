const http = require("http"); // core module
const _ = require("lodash"); // third party - 4 Lakh+
const math = require("./math"); // local module - application logic
// import * as math from math;
const fs = require('fs');
//fs-extra - 3rd party - promise pattern

const arr = ['a', 'b', 'c', 'd'];
const arr1 = _.chunk(arr, 3);
console.log(arr1, _.compact([0, 1, false, 2, '', 3, undefined, null]));
console.log(math.add(1, 2), math.diff(1, 2));

// console.log(http)
const server = http.createServer(function (req, res) {
    console.log("Request comes here...", req.url);
    if (req.url == "/") {
        res.write("Hello! Welcome to Node JS!");
        res.end();
    } else if (req.url == "/read") {
        fs.readFile("./test.txt", function (err, data) {
            if (err) {
                res.write(err.toString());
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (req.url == "/readSync") {
        const data = fs.readFileSync("./test.txt");
        res.write(data);
        res.end();
    } else if (req.url == "/write") {
        fs.writeFile("./test.txt", "Overwriting to 9pm Sunday", function (err) {
            if (err) {
                res.write(err.toString());
            } else {
                res.write("write success");
            }
            res.end();
        });
    } else if (req.url == "/append") {
        fs.appendFile("./test.txt", "\nAppending " + (new Date()), function (err) {
            if (err) {
                res.write(err.toString());
            } else {
                res.write("append success");
            }
            res.end();
        });

    } else if (req.url == "/delete") {
        fs.unlink("./test.txt", function (err) {
            if (err) {
                res.write(err.toString());
            } else {
                res.write("delete success");
            }
            res.end();
        });
    } else {
        res.write("404 Not found!");
        res.end();
    }
});

server.listen(8080);
console.log("Server running in port 8080");