

doSomething(10, "Saro", function() {
    console.log("Hello World!");
});


function doSomething(param1, param2, param3) {
    console.log(param1);
    console.log(param2);
    param3();
}

doSomethingOnFacebookServer("sometjing", function(result) {
    console.log("I'm done with the result");
});

console.log("Say hello to my other friend");

console.log("Playing chess with Aram");