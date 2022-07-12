const getFortune=(question)=>{
    return new Promise((resolve,reject)=>{
        if(!question) return reject('You didnt ask anything!')
        setTimeout(()=>{      
            console.log('Shakeah Shakeah!')      
            const arr = ['This is likely','No chance', 'The outlook is good!','Nope!']
            let fortune = arr[Math.floor(Math.random()*arr.length)];
            resolve({question,fortune})
        },2000)
    })
    /*const arr = ['This is likely','No chance', 'The outlook is good!','Nope!']
    let fortune = arr[Math.floor(Math.random()*arr.length)];
    return Promise.resolve({question,fortune})*/
}

let question = process.argv[2];
getFortune(question).then(({question, fortune})=>{    
    console.log(`You asked: ${question}`);
    console.log('One moment, asking the universe...')
   setTimeout(()=>{
        console.log(`My response is: ${fortune}`)
   },2500) 
}).catch(console.error)