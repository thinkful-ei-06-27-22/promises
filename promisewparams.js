function askQuestion(question){
    return new Promise((resolve,reject)=>{
        if(question){
            resolve('I dunno');
        }else{
            reject('You didnt ask anything!')
        }
    })
}

askQuestion('What is the meaning of life').then(response=> console.log(response));
askQuestion().then(response=> console.log(response)).catch(err=>console.log(err));