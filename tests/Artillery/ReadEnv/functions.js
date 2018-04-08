//
// Docs at https://artillery.io/docs/http-reference/#advanced-writing-custom-logic-in-javascript
//

module.exports = {
    generateRandomFile: generateRandomFile
};

require('dotenv').config();


function generateRandomFile(requestParams, context, ee, next) {
    console.log('');
    console.log('########### Env Variables ################');
    console.log('process.env.USER_EMAIL: ' + process.env.USER_EMAIL);
    console.log('########### Env Variables ################');
    console.log('');

    return next();
}
