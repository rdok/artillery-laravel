//
// Docs at https://artillery.io/docs/http-reference/#advanced-writing-custom-logic-in-javascript
//
loadAppUrl = require('../loadAppUrl');
const fs = require('fs');
const traverse = require('traverse');

let customExports = {};
Object.assign(customExports, {generateRandomFile: generateRandomFile});
Object.assign(customExports, loadAppUrl);

module.exports = customExports;

function generateRandomFile(requestParams, context, ee, next) {

    traverse(requestParams).forEach(function (parameter) {

        if (!parameter || !parameter.path) return;

        let fullPath = __dirname + "/" + parameter.path;

        this.update(fs.createReadStream(fullPath));
    });

    return next();
}
