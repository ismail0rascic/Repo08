function localScope() {
    var myVariable = "I am here!";
    console.log(myVariable);
}
localScope();
if (typeof myVariable != "undefiend") {
    console.log('outside localScope', myVariable);
} else {
    console.log('outside localScope UNDEFINED!!!');
}
module.exports = localScope;