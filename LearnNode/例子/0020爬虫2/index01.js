/**
 * Created by dell on 2017/3/31.
 */
const http = require('http');
const filters = require('./filters');

const rootWebpageUrl = 'http://www.fzdm.com/manhua/117/';
const resultData=undefined;
/*
* {id:
*   {id:'',
*    name:'',
*    children:['url']}
*  }
* */

const reptileWegpage = function (reptileUrl) {
    return new Promise(function (resolve, reject) {
        http.get(reptileUrl, function (res) {
            let html = '';

            res.on('data', function (data) {
                html += data;
            });

            res.on('end', function () {
                resolve(html);
            });
        }).on('error', function () {
            reject(`爬取${reptileUrl}失败`);
        });
    });
};
const reptileChildWebpage = function (reptileUrls) {
    const promises=[];
    reptileUrls.forEach(function (item) {
        promises.push(reptileWegpage(item));
    });
    return promises;
};

reptileWegpage(rootWebpageUrl)
    .then(function (response) {
        console.log(filters.rootPageFilter(response));
    });



