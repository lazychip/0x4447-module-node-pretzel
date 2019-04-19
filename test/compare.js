let pretzel = require('../index');
let expect = require('chai').expect;

//
//	RULES
//
let rules = {
	nr: {
		comparison: 1
	}
};

describe('1 Is', function() {

	it('Equal 1', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 1
		};

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

describe('1 Is not', function() {

	it('Equal 2', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 2
		};

		//
		//	1.	Execute on the function.
		//
		let result = pretzel(data, rules);

		//
		//	2.	We should have gotten back and array with what is wrong.
		//
		expect(result[0])
			.to.be.an('object')
			.to.include({
				variable: 'nr'
			});

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});
