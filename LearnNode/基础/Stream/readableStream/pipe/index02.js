/**
 * Created by dell on 2017/8/13.
 */

let fs = require('fs');

fs.createReadStream('../../test.png').pipe(fs.createWriteStream('../../test2.png'));

