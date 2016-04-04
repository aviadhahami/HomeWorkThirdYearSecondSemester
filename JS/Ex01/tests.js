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

if(window.assert){

    assert.BiggerThan(f1Tester(fun1()),4,'function 1');
    assert.Equals(f2Tester(fun2),fun4, 'function 2');
    assert.Equals(f3Tester(fun3),fun4, 'function 3');
    assert.Equals(f4Tester(fun4),true,'function 4');

}
