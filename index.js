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
		age: 34
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
		}
	}
}

//
//
//
let mastrObject = {
	type,
	length,
	regexp,
	biggerThen,
	smallerThen,
	inclusion
}

research(data, test);

function research(data, test) {

	//
	//	Loop over the whole loop
	//
	for(let key in data)
	{

		//
		//	IF: 	the test is an object, this means that we have some
		//			extra rules to compare.
		//
		//	ELSE: 	it is a regular value, and in that case we take that
		//			value and compare it with the data as is.
		//
		if(typeof(data[key]) == 'object')
		{
			research(data[key], test[key])
		}
		else
		{
			if(test[key])
			{
				for(let functionName in test[key])
				{
					let result = mastrObject[functionName](
									data[key],
									test[key][functionName]
								);

					console.log("%s %s is %s", key, functionName, result);
				}
			}
			else
			{
				//
				//	Simple comparison of values.
				//
				if(data[key] == test[key])
				{
					console.log("%s is ok", key);
				}
			}
		}

	}
}

//
//	Test the type
//
function type(data, test)
{
	if(typeof(data) == test)
	{
		return true;
	}

	return false
}

//
//	Test the length
//
function length(data, test)
{
	if(data.toString().length == test)
	{
		return true;
	}

	return false;
}

//
//	Test if a number is bigger then the test
//
function biggerThen(data, test)
{
	if(data > test)
	{
		return true;
	}

	return false;
}

//
//	Test if a number is smaller then the test
//
function smallerThen(data, test)
{
	if(data < test)
	{
		return true;
	}

	return false;
}

//
//	Look if a value exists within an array of possibilities
//
function inclusion(data, test)
{
	let findings = test.find(function(subject) {

		return subject === data;

	});

	if(findings)
	{
		return true;
	}

	return false;
}

//
//	Test data against a regular expression
//
function regexp(data, test)
{
	let re = new RegExp(test);

	if(re.exec(data))
	{
		return true;
	}

	return false;
}

