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


if(window.assert){

    assert.BiggerThan(f1Tester(fun1()),4,'function 1');
}
