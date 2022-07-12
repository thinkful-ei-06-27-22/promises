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
}

const log = [];
getFortune("Why").then(({question, fortune})=>{    
   log.push(`You asked: ${question}: One moment, asking the universe... ${fortune}`)
  }).catch(console.error)
getFortune("How").then(({question, fortune})=>{    
   log.push(`You asked: ${question}: One moment, asking the universe... ${fortune}`)
  }).catch(console.error)
getFortune("Who").then(({question, fortune})=>{    
   log.push(`You asked: ${question}: One moment, asking the universe... ${fortune}`)
  }).catch(console.error)


let questions = [getFortune("Why"),getFortune("How"),getFortune("Who")];

Promise.all(questions).then(resp=>{
    console.log('promiseall result')
    console.log(resp.reduce((acc,res)=>{
        acc[res.question]=res.fortune
        return acc;
    },{}))

})