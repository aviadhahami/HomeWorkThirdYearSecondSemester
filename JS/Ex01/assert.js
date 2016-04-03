/**
 * Created by aviad on 4/4/2016.
 */

window.assert = {
    Equals: function (arg1, arg2, testName) {
        if (arg1 === arg2) {
            console.log('%c Test Passed for '+ testName, 'background: green; color: white');
        } else {
            console.log('%c Test Failed for '+ testName, 'background: red; color: white');
        }
    },
    BiggerThan: function (arg1, arg2, testName) {
        if (arg1 > arg2) {
            console.log('%c Test passed for '+ testName, 'background: green; color: white');
        } else {
            console.log('%c Test Failed for '+ testName, 'background: red; color: white');
        }
    }
};