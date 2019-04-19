let pretzel = require('../index');
let expect = require('chai').expect;

//
//	RULES
//
let rules = {
	name: {
		type: "string"
	}
};

describe('David Is', function() {

	it('String', function(done) {

		//
		//	DATA
		//
		let data = {
			name: 'David'
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

	it('String', function(done) {

		//
		//	DATA
		//
		let data = {
			name: 1
		};

		//
		//	1.	Execute on the function.
		//
		let result = pretzel(data, rules);

		//
		//	2.	We should have gotten back and array with what is wrong.
		//
		expect(result)
			.to.be.an('array')
			.to.deep.include({
				variable: 'name'
			});

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});
