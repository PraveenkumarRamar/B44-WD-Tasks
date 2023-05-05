// var p = new Promise((resolve, reject) => {
//     resolve(`this resolved`);
//         reject(`failed`)
// })
// console.log(p)

// var vote = new Promise((resolve,reject)=>{
//     var age = parseInt(prompt(`Enter your age`));
//     if(age>=18){
//         resolve(`you're eligible to vote`)
//     }else{
//         reject(`you're not eligible to vote`)
//     }
// })
// console.log(vote);

// function foo(){
//     return new Promise((resolve, reject) =>{
//         resolve(`This is resolved`)
//     })
// }
// foo().then((data) => console.log(data)).catch((err) => console.log(err))




// function bar(num){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>resolve(num*2),2000)     // if time is equal in resolve and reject it will come under resolve because js is synchronous 
//         setTimeout(()=>reject(num +`  This rejected state`),1000)
//     })
// }

// bar(5).then((data)=>console.log(data)).catch((err)=>console.log(err))



//Promise.all()

// takes array of promises, only for resolved and returns array of result,
     // and if any one promise goes to fail it return only failed or rejected state

// var p1 = new Promise((resolve, reject) => {
//     if(true){
//         setTimeout(()=>{
//             resolve(`This is a p1 resolved`);
//         },4000)
//     }else{
//         setTimeout(()=>{
//             reject(`This p1 rejected`);
//         },2000)
//     }
// })


// var p2 = new Promise((resolve, reject) => {
//     if(true){
//         setTimeout(()=>{
//             resolve(`This is a p2 resolved`);
//         },2000)
//     }else{
//         setTimeout(()=>{
//             reject(`This p2 rejected`);
//         },4000)
//     }
// })

// var p3 = new Promise((resolve, reject) => {
//     if(false){
//         setTimeout(()=>{
//             resolve(`This is p3 resolved`);
//         },3000)
//     }else{
//         setTimeout(()=>{
//             reject(`This p3 rejected`);
//         },1000)
//     }
// })


// // Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((err)=>console.log(err))  // holds only resolvd value
// Promise.allSettled([p1,p2,p3]).then((data)=>console.log(data)).catch((err)=>console.log(err)) //holds both resolvd and rejectd values



// Promise chainnig

function chain(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num*5),2000)
    })
}

function fail(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>reject(num*2 +`  This is rejected`),1000)
    })
}
chain(5).then((data)=>{
    console.log(data)
    return chain(data)
}).then((data1)=>{
    console.log(data1)
    return fail(data1)
}).then((data2)=>{
    console.log(data2)
    return fail(data2)
}).then((data3)=>{
    console.log(data3)
}).catch((err)=>{
    console.log(err)
    return chain(err)
})