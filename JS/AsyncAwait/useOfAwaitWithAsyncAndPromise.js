const p = new Promise((resolve, reject) =>{
    resolve("Hey, This is Nikhil");
});
async function fun()
{
    const result = await p;
    console.log(result);
}
fun();

