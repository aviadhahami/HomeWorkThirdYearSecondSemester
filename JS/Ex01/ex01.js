var fun1 = function(){
	// Proto chain
}
function fun2(){
	return fun4;
}
var fun3= function(){
	return fun2();
}
var fun4 = function(){
	return (new Function(){
		k:null
	});
};
var fun5 = function(a,b){
	// return 6th arg ?
}

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
}
}

var fun8 = function(n){
	
}