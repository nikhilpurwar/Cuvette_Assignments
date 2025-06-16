console.log("Hi,")
setTimeout(greet, 1000);
function greet()
{
    console.log(" I am MCA student");
}

function about()
{
    let a = " I am Nikhil Purwar";
    function fun()
    {
        console.log(a);
    }
    return fun;
}
let f = about();
f();