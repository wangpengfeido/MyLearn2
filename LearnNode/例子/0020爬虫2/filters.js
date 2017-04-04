/**
 * Created by dell on 2017/3/28.
 */
const cheerio = require('cheerio');

/*
 * 处理首页
 * [{id:,name:,url:}]
 */
const rootPageFilter = function (html) {
    const $ = cheerio.load(html);
    const result = [];

    const chapterNodes = $('#content>.pure-u-1-2>a');
    chapterNodes.each(function (item) {
        let oneItem = $(this);
        result.push({
            id: oneItem.attr('href').split('/')[0].replace('_', '.'),
            name: oneItem.text(),
            url: oneItem.attr('href')
        });
    });

    return result;
};


exports.rootPageFilter = rootPageFilter;