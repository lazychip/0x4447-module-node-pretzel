let pretzel = require('../index');
let expect = require('chai').expect;

//
//	RULES
//
let rules = {
	first_name: {
		type: 'string'
	},
	last_name: {
		regexp: '[a-zA-Z]'
	},
	age: {
		type: 'number'
	},
	address: {
		street: {
			type: 'string'
		},
		nr: {
			type: 'number'
		},
		state: {
			includes: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
		},
		country: {
			includes: ['United States', 'Canada']
		}
	}
};

describe('Recursive Is', function() {

	it('OK', function(done) {

		//
		//	DATA
		//
		let data = {
			first_name: 'David',
			last_name: 'Gatti',
			age: 99,
			address: {
				street: 'Wonder Land',
				nr: 55,
				state: 'TX',
				country: 'United States'
			}
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

describe('Recursive Is not', function() {

	it('OK', function(done) {

		//
		//	DATA
		//
		let data = {
			first_name: 'David',
			last_name: 'Gatti!',
			age: 99,
			address: {
				street: 'Wonder Land',
				nr: 55,
				state: 'XX',
				country: 'Italy'
			}
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
				variable: "state"
			})
			.to.deep.include({
				variable: "country"
			});

		//
		//	-> Tell chai that we are done with our test.
		//
		done();

	});

});
