/**
 * Created by dell on 2017/3/28.
 */
const http = require('http');
const htmlFilters = require('./htmlFilters');

const bootstrapWebsitUrl = 'http://www.bootcss.com/';

http.get(bootstrapWebsitUrl, function (res) {
    let html = '';

    res.on('data', function (data) {
        html += data;
    });

    res.on('end', function () {
        let pageMessage = htmlFilters.homePageFilter(html);
        console.log(pageMessage.title);
        pageMessage.items.forEach(function (item) {
           console.log(`【${item.title}】${item.detail}`)
        });
    });
}).on('error', function () {
    console.log('get请求失败')
});








