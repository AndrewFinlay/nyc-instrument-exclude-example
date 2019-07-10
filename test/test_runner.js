/* global require, describe, it */

'use strict';

require('chai').should();
require('tap').mochaGlobals();

const target = require('../src/index.js');

describe('Test output', function() {
    it('Will this work?', function() {
        const result = target.testfunction(10, 20);
        result.should.equal(30);
    });
    it('How \'bout this?', function() {
        const result = target.testOthers();
        result.should.equal(10);
    });
});