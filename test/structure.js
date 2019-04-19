let pretzel = require('../index');
let expect = require('chai').expect

//
//	RULES
//
let rules = {
	comparason: 1,
}

describe('Structure', function() {

	it('Array', function(done) {

		//
		//	DATA
		//
		let data = {
			comparason: 1
		}

		//
		//	1.	Execute on the function.
		//
		let result = pretzel(data, rules);

		//
		//	2.	Check if we got an array.
		//
		expect(result).to.be.a('array');

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});
