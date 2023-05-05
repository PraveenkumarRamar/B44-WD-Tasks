
// setTimeout(()=>console.log("runing"),4000); //---arrow function

// // setTimeout(function(){
    // console.log("runing")
// },3000);
// console.log("Going to end");
// console.log("Finshed");


// let foo = () =>{
//     bar();
//     console.log( "this is foo");
// } 

// let bar = () =>{
    // console.log( "this is bar");
// }

// foo();


// // var arr = [ 1,2,3,4,5,6,7,8,9,10,11,12];
// // var res = arr.map((ele)=>ele*2)   //------------callback function Map is a function,param is  arrow function
// // div.innerHTML= res)



// function fooo(nam,cb) {
//    console.log( `Hello world`)
//     cb(nam)
// }

// function baar(nam) {
    // console.log(`Hello ${nam}`)
// }

// fooo(`Praveen ; )`,baar)

// function f1(){
//     function f2(){
//         function f3(){
//             // console.log(`Helo`)
//         }
//     }
// }


var div = document.createElement('div');
div.className = "main";


function tast(){
    setTimeout(()=>{
        div.innerHTML= "10"
        setTimeout(()=>{
            div.innerHTML= "9"
                setTimeout(()=>{
                div.innerHTML= "8"
                    setTimeout(()=>{
                    div.innerHTML= "7"
                        setTimeout(()=>{
                        div.innerHTML= "6"
                            setTimeout(()=>{
                            div.innerHTML= "5"
                                setTimeout(()=>{
                                div.innerHTML= "4"
                                    setTimeout(()=>{
                                    div.innerHTML= "3"
                                        setTimeout(()=>{
                                        div.innerHTML= "2"
                                            setTimeout(()=>{
                                            div.innerHTML= "1"
                                                setTimeout(()=>{
                                                div.innerHTML= `Happy Independence Day!`
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}

tast();

document.body.appendChild(div)