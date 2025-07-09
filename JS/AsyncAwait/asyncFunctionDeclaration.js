async function asyncFun()
{
    return "Hello Guys";
}
const data = asyncFun();
console.log(data);   // here it will print promise because async function always return promise

//What if we wanted to print Hello Guys....?
data.then((result) => {
    console.log(result);
})


// We can make our own promisee and return it from async function
const p = new Promise((resolve, reject) => {
    resolve("This is Nikhil");
});

async function functionToReturnPromise() {
    return p;  //returning a promise
}

const newData = functionToReturnPromise();
newData.then((res) => {
    console.log(res);
});
