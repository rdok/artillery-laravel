//
// DEBUG=http* artillery run tests/Artillery/NtlmAuth/ntlmAuth.yml
// https://github.com/shoreditch-ops/artillery/issues/122#issuecomment-231589072
// https://github.com/Node-SMB/ntlm
//
module.exports = {loadNtlmUrl: loadNtlmUrl, loadNtlmAuth: loadNtlmAuth};
const traverse = require('traverse');
require('dotenv').config();
let url = require('url');

function loadNtlmAuth(requestParams, context, ee, next) {
    const ntlmUrl = requestParams.uri;

    const hostname = url.parse(ntlmUrl).hostname;

    const domain = "national";
    const username = process.env.NTLM_USERNAME;
    const password = process.env.NTLM_PASSWORD;

    let ntlm = require('ntlm');
    let ntlmRequest = require('request').defaults({
        agentClass: require('agentkeepalive').HttpsAgent
    });

    let type1HeaderAuth = {'Authorization': ntlm.challengeHeader(hostname, domain)};

    Object.assign(requestParams.headers, type1HeaderAuth);

    ntlmRequest(ntlmUrl, {headers: type1HeaderAuth}, function (err, res) {

        let type3HeaderAuth = {headers: {'Authorization': ntlm.responseHeader(res, ntlmUrl, domain, username, password)}};

        ntlmRequest(ntlmUrl, type3HeaderAuth, function (err, res, body) {
            console.log(body);
        });

        Object.assign(requestParams.headers, type3HeaderAuth);
    });


    return next();
}

function loadNtlmUrl(requestParams, context, ee, next) {

    traverse(requestParams).forEach(function (parameter) {

        if (!parameter || !parameter.url) return;

        let newUri = parameter.url.replace('{{NTLM_URL}}', process.env.NTLM_URL);

        requestParams.uri = newUri;

        this.stop();
    });

    return next();
}

