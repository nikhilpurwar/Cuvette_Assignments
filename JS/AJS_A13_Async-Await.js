const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Here is complete github data");
    },2000);
});
pro.then((result) => console.log(result));



const API_URL = "https://api.github.com/users/nikhilpurwar";
async function callAPI() {
    const data = await fetch(API_URL);
    const result = await data.json();
    console.log(result);
}
callAPI().catch((err) => console.log("Unable to fetch from API " + err));
