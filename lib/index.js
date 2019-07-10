'use strict';


const includes = require('./includes.js');


class testClass {
    main() {
        const testVar = '100';
        let resultVar = includes.stringAppend(testVar, '000');

        console.log(resultVar);
    }
}


module.exports = testClass;
