'use strict';

class includes
{
    stringAppend (str, ext) {
        let result = str.concat(ext);

        return result;
    }
}


module.exports = new includes();