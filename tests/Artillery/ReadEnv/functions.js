//
// Docs at https://artillery.io/docs/http-reference/#advanced-writing-custom-logic-in-javascript
// https://github.com/shoreditch-ops/artillery/issues/185
//

module.exports = {prepareEnvs: prepareEnvs};

require('dotenv').config();
const traverse = require('traverse');

function prepareEnvs(requestParams, context, ee, next) {

    traverse(requestParams).forEach(function (parameter) {

        if (!parameter || !parameter.url) return;

        let newUri = parameter.url.replace('{{APP_URL}}', process.env.APP_URL);

        requestParams.uri = newUri;

        this.stop();
    });

    return next();
}
