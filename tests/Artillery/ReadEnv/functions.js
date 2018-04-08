//
// Docs at https://artillery.io/docs/http-reference/#advanced-writing-custom-logic-in-javascript
//
module.exports = {
    setJSONBody: setJSONBody,
    logHeaders: logHeaders,
    generateRandomFile: generateRandomFile
};

function setJSONBody(requestParams, context, ee, next) {
    return next(); // MUST be called for the scenario to continue
}

function logHeaders(requestParams, response, context, ee, next) {
    console.log(response.headers);
    return next(); // MUST be called for the scenario to continue
}

// Make sure to "npm install faker" first.
const Faker = require('faker');
const fs = require('fs');
const traverse = require('traverse');

function generateRandomFile(requestParams, context, ee, next) {
    // const filename = Faker.lorem.word;

    // requestParams.formData.filename = filename;
    // requestParams.formData.fileContents.update(fs.createReadStream(__dirname + '/file_to_upload.dat'));
    traverse(requestParams).forEach(function (parameter) {

        if (!parameter) return;

        if (!parameter.path) return;

        let fullPath = __dirname + "/" + parameter.path;

        this.update(fs.createReadStream(fullPath));
    });


    return next();
}
