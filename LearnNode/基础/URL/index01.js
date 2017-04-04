/**
 * Created by dell on 2017/3/27.
 */
const url=require('url');

console.log(url.parse('https://nodejs.org/dist/latest-v6.x/docs/api/url.html#url_url_format_urlobject'));
console.log(url.format({
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'nodejs.org',
    port: null,
    hostname: 'nodejs.org',
    hash: '#url_url_format_urlobject',
    search: null,
    query: null,
    pathname: '/dist/latest-v6.x/docs/api/url.html',
    path: '/dist/latest-v6.x/docs/api/url.html',
    href: 'https://nodejs.org/dist/latest-v6.x/docs/api/url.html#url_url_format_urlobject' }));
console.log(url.resolve('https://nodejs.org/dist/','/latest-v6.x/docs/api/url.html#url_url_format_urlobject'))