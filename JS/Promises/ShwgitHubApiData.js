const github_API = "https://api.github.com/users/nikhilpurwar";
const userData = fetch(github_API);

userData.then((response) => {
    response.json().then((data) =>{
        console.log(data.login);
    });
});
