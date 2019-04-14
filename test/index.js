let pretzel = require('../index');

//
//	DATA
//
let data = {
	number: '10',
	string: "David",
	comparason: 324252,
	notest: "Skip",
	deep: {
		name: "David",
		age: 34,
		more: {
			data: {
				hello: 23
			}
		}
	}
}

//
//	TEST
//
let test = {
	number: {
		type: "string",
		regexp: "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
		biggerThen: 4,
		smallerThen: 10,
		inclusion: [9, 'ewewe']
	},
	string: {
		type: "string"
	},
	comparason: 324252,
	deep: {
		name: {
			type: "string"
		},
		age: {
			biggerThen: 18
		},
		more: {
			data: {
				hello: {
					type: "string"
				}
			}
		}
	}
}

//
//
//
pretzel(data, test);
