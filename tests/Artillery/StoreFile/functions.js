//
// Docs at https://artillery.io/docs/http-reference/#advanced-writing-custom-logic-in-javascript
//
loadEnv = require('./../loadEnv');

let customExports = {};
Object.assign(customExports, {generateRandomFile: generateRandomFile});
Object.assign(customExports, loadEnv);

module.exports = customExports;

// Make sure to "npm install faker" first.
const Faker = require('faker');
const fs = require('fs');
const traverse = require('traverse');


function generateRandomFile(requestParams, context, ee, next) {
    traverse(requestParams).forEach(function (parameter) {

        if (!parameter) return;

        if (!parameter.path) return;

        let fullPath = __dirname + "/" + parameter.path;

        this.update(fs.createReadStream(fullPath));
    });


    return next();
}
