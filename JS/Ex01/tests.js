/**
 * Created by aviad on 4/4/2016.
 */


var isArr = function(arr) {
    return Array.isArray(arr);
};

var f1Tester = function(obj){
    var counter=0;
    while(obj != null){
        obj = Object.getPrototypeOf(obj);
        counter = obj != null? counter +1 : counter;
    }
    return counter;
};
var f2Tester = function(func){
    return func();
};

var f3Tester = function(obj){
    return obj();
};

var f4Tester = function(obj){
    return (obj().k === null) && (typeof obj() === 'function');
};
var f5Tester= function(fun5, number, number2, number3, number4, number5, number6, number7) {
    return fun5(number,number2,number3,number4,number5,number6,number7);
};

var f6Tester = function(fun,n){
    return fun(n);
};

var f7Tester = function (fun7) {
    var obj = fun7();
    return (typeof obj ==='object')
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
    function checkArrLength(arr,length){
        return arr.length === length;
    }

    var arr = fun8();

    return isArr(arr) && checkArrLength(arr,arrLength);
};
if(window.assert){

    assert.BiggerThan(f1Tester(fun1()),4,'function 1');
    assert.Equals(f2Tester(fun2),fun4, 'function 2');
    assert.Equals(f3Tester(fun3),fun4, 'function 3');
    assert.Equals(f4Tester(fun4),true,'function 4');
    assert.Equals(f5Tester(fun5,1,2,3,4,5,6,7),6,'function 5');
    assert.Equals(f6Tester(fun6,20),6765,'function 6');
    assert.Equals(f7Tester(fun7),true,'function 7');
    assert.Equals(f8Tester(fun8,5,3),true, 'function 8');
    // fun8(n): return an array that consists of n keys 0..[n-1].
    // the value of each key is a function that upon calling prints the key via
    // (console.log()). e.g. fun8(5)[3] prints 3
}
