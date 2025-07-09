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
