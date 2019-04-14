//
//	This object is the link with all the test that we can perform.
//
let master_obj = {
	type,
	length,
	regexp,
	biggerThen,
	smallerThen,
	inclusion
}

//
//	Take the data and the JSON validation an test if the data matches the
//	restrictions.
//
let main = function(data, test)
{
	//
	//	Recursively loop over the data structure.
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
			main(data[key], test[key]);
		}
		else
		{
			if(test[key])
			{
				for(let function_name in test[key])
				{
					let result = master_obj[function_name](
									data[key],
									test[key][function_name]
								);

					console.log("%s %s is %s", key, function_name, result);
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
//	Export the main function for others to use.
//
module.exports = main;

//	 ______  _    _  _   _   _____  _______  _____  ____   _   _   _____
//	|  ____|| |  | || \ | | / ____||__   __||_   _|/ __ \ | \ | | / ____|
//	| |__   | |  | ||  \| || |        | |     | | | |  | ||  \| || (___
//	|  __|  | |  | || . ` || |        | |     | | | |  | || . ` | \___ \
//	| |     | |__| || |\  || |____    | |    _| |_| |__| || |\  | ____) |
//	|_|      \____/ |_| \_| \_____|   |_|   |_____|\____/ |_| \_||_____/
//

//
//	Test the type
//
function type(data, test)
{
	if(typeof(data) == test)
	{
		return true;
	}

	return false;
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

