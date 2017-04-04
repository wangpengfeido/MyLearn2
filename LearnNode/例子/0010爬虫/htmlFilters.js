/**
 * Created by dell on 2017/3/28.
 */
const cheerio = require('cheerio');
/*
 return:
 [
 title:'',
 items:[{title:'',detail:''}]
 ]
 */
const homePageFilter = function (html) {
    let $ = cheerio.load(html);
    let result = {title: '', items: []};

    let titleContainer = $('.jumbotron');
    result.title = titleContainer.find('h1').text() + ' ' + titleContainer.find('h2').text();

    let items = $('.projects>.row>div');
    items.each(function (item) {
        let oneItem = $(this);
        result.items.push({
            title: oneItem.find('.caption>h3>a').contents().eq(0).text().trim(),
            detail: oneItem.find('.caption>p').text().trim()
        });
    });

    return result;
};

exports.homePageFilter = homePageFilter;