/**
 * Created by aviad on 4/4/2016.
 */
function init(){

    document.body.innerHTML += '<h1>Tests results</h1>';
};
init();

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