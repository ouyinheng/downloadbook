const http = require('http');
const https = require('https');
class Ajax {
    get(url) {
        console.log(url)
        let content = '';
        let content1 = '';
        // res = res.setEncoding(decode)
        // res.on('data', function (chunk) {
        //     content += chunk;
        // });
        // res.on('end', function () {
        //     resolve(content)
        // });
    }
}
class Request extends Ajax {
    static getHead(url) {
        if(url.substr(0,5)==='https') {

        } else if(url.substr(0,4) === 'http'){
            console.log(Request.get(url))
        } else {
            console.error('url格式错误')
        }
    }
}

exports.default = Request;