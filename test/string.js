let pretzel = require('../index');
let expect = require('chai').expect

//
//	RULES
//
let rules = {
	name: {
		type: "string"
	}
}

describe('David Is', function() {

	it('String', function(done) {

		//
		//	DATA
		//
		let data = {
			name: 'David'
		}

		//
		//	1.	Execute on the function.
		//
		let result = pretzel(data, rules);

		//
		//	1.	Check if we got an array.
		//
		expect(result).to.be.an('array').that.is.empty;

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
			.to.include({ variable: 'name', test: 'string' });

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});
