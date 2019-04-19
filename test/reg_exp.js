let pretzel = require('../index');
let expect = require('chai').expect

//
//	RULES
//
let rules = {
	values: {
		regexp: '[aAzZ.-]'
	}
}

describe('Z Is', function() {

	it('Within the aAzZ.- range', function(done) {

		//
		//	DATA
		//
		let data = {
			values: 'Z'
		}

		//
		//	1.	Execute on the function.
		//
		let result = pretzel(data, rules);

		//
		//	2.	Check if we got an array.
		//
		expect(result)
			.to.be.an('array')
			.that.is.empty;

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});

describe('! Is not', function() {

	it('Within the aAzZ.- range', function(done) {

		//
		//	DATA
		//
		let data = {
			values: '!'
		}

		//
		//	1.	Execute on the function.
		//
		let result = pretzel(data, rules);

		//
		//	2.	We should have gotten back and array with what is wrong.
		//
		expect(result[0])
			.to.be.an('object')
			.to.include({ variable: 'values'});

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});
