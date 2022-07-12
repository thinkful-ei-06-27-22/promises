const turnOnComputer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const message = "Welcome to Windows!";
        if (message === "Welcome to Windows!") {
            resolve("Welcome to Windows!");
        } else {
            reject("Technical Error!");
        }
    }, 2500);
})

turnOnComputer.then((result) => {
    console.log("Success: ", result);
}).catch((error) => {
    console.log("Failure: ", error)
});


const turnOnSystem = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({ message: 'Computer is broken' });
    }, 1000)

})

turnOnSystem.then(status => {
   
   
    console.log(status.message)
}
).catch(err=>console.log(err));