// Created by Aviad Hahami via WebStorm
var window = {} | window;

// ******* FUNCTIONS DECLARATIONS ******* //
var o1 = {a:1};
var o2 = Object.create(o1);
var o3 = Object.create(o2);
var o4 = Object.create(o3);
var o5 = Object.create(o4);

var fun1 = function(){
	return o5;
};

function fun2(){
	return fun4;
}
var fun3= function(){
	return fun2();
};

var fun4 = function(){
	var CustomObject = function(){
		return "hello";
	};
	CustomObject.k = null;
	return CustomObject;
};

var fun5 = function(a,b){
	return arguments[5];
};

var fun6 = function(i){
	return i<= 1 ? i : (fun6(i-1) + fun6(i-2));
};

var fun7 = function(){
	return {
		name : {
			firstName:'Aviad',
			lastName:'Hahami'
		},
		age:'2',
		gender:'m',
		year:'1990',
		id:'302188347',
		phones:['0544932840'],
		photoURL: ['linkforgoogle.com/img']
	};
};

var fun8 = function(n){
	var customF = function(i){
		console.log(i);
	};
	var arr = new Array(n);
	for(var i=0;i<arr.length;i++){
		arr[i] = customF.bind(null,i);
	}
	return arr;
};
// ******* END DECLARATIONS ******* //

// ******* ASSERTION CUSTOM FRAMEWORK ******* //
function initPage(){

	document.body.innerHTML += '<h1>Tests results</h1>';
};
initPage();

window.assert = {
	Equals: function (arg1, arg2, testName) {
		if (arg1 === arg2) {
			document.body.innerHTML += '<p style="background: green; color: white;">Test Passed for ' + testName+'</p>';
		} else {
			document.body.innerHTML += '<p style="background: darkred; color: white;">Test Failed for ' + testName+'</p>';
		}
	},
	BiggerThan: function (arg1, arg2, testName) {
		if (arg1 > arg2) {
			document.body.innerHTML += '<p style="background: green; color: white;">Test Passed for ' + testName + '</p>';
		} else {
			document.body.innerHTML += '<p style="background: darkred; color: white;">Test Failed for ' + testName + '</p>';

		}
	}
};
// ******* END ASSERT OBJECT ******* //

// ******* TESTS ******* //
var fun9 = function() {


	var isArr = function (arr) {
		return Array.isArray(arr);
	};

	var f1Tester = function (obj) {
		var counter = 0;
		while (obj != null) {
			obj = Object.getPrototypeOf(obj);
			counter = obj != null ? counter + 1 : counter;
		}
		return counter;
	};
	var f2Tester = function (func) {
		return func();
	};

	var f3Tester = function (obj) {
		return obj();
	};

	var f4Tester = function (obj) {
		return (obj().k === null) && (typeof obj() === 'function');
	};
	var f5Tester = function (fun5, number, number2, number3, number4, number5, number6, number7) {
		return fun5(number, number2, number3, number4, number5, number6, number7);
	};

	var f6Tester = function (fun, n) {
		return fun(n);
	};

	var f7Tester = function (fun7) {
		var obj = fun7();
		return (typeof obj === 'object')
			&& (obj.hasOwnProperty('name'))
			&& (obj.name.hasOwnProperty('firstName'))
			&& (obj.name.hasOwnProperty('lastName'))
			&& (obj.hasOwnProperty('age'))
			&& (obj.hasOwnProperty('gender'))
			&& (obj.hasOwnProperty('year'))
			&& (obj.hasOwnProperty('id'))
			&& (obj.hasOwnProperty('phones'))
			&& (isArr(obj.phones))
			&& (obj.hasOwnProperty('photoURL'))
			&& (isArr(obj.photoURL));
	};
	var f8Tester = function (fun8, arrLength, numberToPrint) {
		function checkArrLength(arr, length) {
			return arr.length === length;
		}

		var arr = fun8(5);

		var isArrayOfFunctions = function (arr) {
			var flag = true;
			arr.forEach(function (elem) {
				if (typeof elem !== 'function') {
					flag = false;
				}
			});
			return flag;
		};

		function invokeAllAndVerify(arr) {

			// Keep pointer to the original console.log func
			var oldConsole = (console.log).bind(console);

			// Override console.log in order to verify what's printed
			console.log = function (arg) {
				window.lastPrinted = arg;
				oldConsole(arg);
			};

			var flag = true;
			// Verify each function instance contains and prints the index it was instantiated with
			arr.forEach(function (elem, index) {
				elem();
				if (index !== window.lastPrinted) {
					flag = false;
				}
			});

			// Return the old console in order to not fuck up the internet
			console.log = oldConsole;
			return flag;
		}

		return isArr(arr)
			&& checkArrLength(arr, arrLength)
			&& isArrayOfFunctions(arr)
			&& invokeAllAndVerify(arr);
	};

	if (window.assert) {

		assert.BiggerThan(f1Tester(fun1()), 4, 'function 1');
		assert.Equals(f2Tester(fun2), fun4, 'function 2');
		assert.Equals(f3Tester(fun3), fun4, 'function 3');
		assert.Equals(f4Tester(fun4), true, 'function 4');
		assert.Equals(f5Tester(fun5, 1, 2, 3, 4, 5, 6, 7), 6, 'function 5');
		assert.Equals(f6Tester(fun6, 20), 6765, 'function 6');
		assert.Equals(f7Tester(fun7), true, 'function 7');
		assert.Equals(f8Tester(fun8, 5, 3), true, 'function 8');
	}
};

// Invoke tests
fun9();

// ******* END TESTS ******* //