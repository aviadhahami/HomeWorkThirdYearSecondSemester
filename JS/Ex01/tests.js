/**
 * Created by aviad on 4/4/2016.
 */

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
var f6Tester = function(fun,n){
    return fun(n);
};

function f5Tester(fun5, number, number2, number3, number4, number5, number6, number7) {
    return fun5(number,number2,number3,number4,number5,number6,number7);
}
if(window.assert){

    assert.BiggerThan(f1Tester(fun1()),4,'function 1');
    assert.Equals(f2Tester(fun2),fun4, 'function 2');
    assert.Equals(f3Tester(fun3),fun4, 'function 3');
    assert.Equals(f4Tester(fun4),true,'function 4');
    assert.Equals(f5Tester(fun5,1,2,3,4,5,6,7),6,'function 5');
    assert.Equals(f6Tester(fun6,20),6765,'function 6');
}
