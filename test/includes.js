let pretzel = require('../index');
let expect = require('chai').expect;

//
//	RULES
//
let rules = {
	nr: {
		includes: [9, '0x4447']
	}
};

describe('9 Is', function() {

	it('Included in [9, "0x4447"]', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 9
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

describe('10 Is not', function() {

	it('Included in [9, "0x4447"]', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 10
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
				variable: 'nr'
			});

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});

describe('0x4447 Is', function() {

	it('Included in [9, "0x4447"]', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: '0x4447'
		};

		//
		//	1.	Execute on the function.
		//
		let result = pretzel(data, rules);

		//
		//	2.	Check if we got an array.
		//
		expect(result).to.be.an('array').that.is.empty;

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});

describe('Bob Is not', function() {

	it('Included in [9, "0x4447"]', function(done) {

		//
		//	DATA
		//
		let data = {
			nr: 'Bob'
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
