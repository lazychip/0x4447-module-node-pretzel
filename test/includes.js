let pretzel = require('../index');
let expect = require('chai').expect

//
//	RULES
//
let rules = {
	nr: {
		includes: [9, 'David']
	}
}

describe('9 Is', function() {

	it('Included in [9, "David"]', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 9
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

describe('10 Is not', function() {

	it('Included in [9, "David"]', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 10
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
			.to.include({ variable: 'nr'});

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});

describe('David Is', function() {

	it('Included in [9, "David"]', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 'David'
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

describe('Bob Is not', function() {

	it('Included in [9, "David"]', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 'Bob'
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
			.to.include({ variable: 'nr'});

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});
