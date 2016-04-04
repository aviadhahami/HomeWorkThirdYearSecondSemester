
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
	// return ith fibbo
}

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

};