// (function (export, require, module,__filename,__dirname){

console.log("file name: "+__filename);
console.log("dirname: "+__dirname);

var url = "http://google.com";

function log(message) {
	console.log(message);
}

module.exports = log
module.exports.log = log;
module.exports.endPoint = url;

// })