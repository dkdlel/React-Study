// 비동기 함수
// setTimeout(function(){
//     console.log("Hello Node~!");
// },3000);
// console.log("김정현 돼지");

// const condition = false;
// const func = new Promise((reslove, reject) => {
//     let num = 0;
//     if(condition){
//         reject(false);
//     }
//     while(num != 100000){
//         num++;
//     }
//     reslove(true);
// });
// // func.then(function(resolve){
// //     console.log(resolve);
// // }).catch(function(error){
// //     console.log(reject);
// // });
// async function test(){
//     const result = await func;
//     console.log(result);
// }
// test();
// console.log("Pig 정현");

/* ----------------------------------------------------------------------*/

// const func = new Promise((resolve,reject) => {
//     let num = 0;
//     while(num != 100000){
//         num++;
//     }
//     resolve(true);
// });
// async function test(){
//     const result = await func;
//     console.log(result);
// }
// test();
// console.log("김정현 돼지");

// const condition = false;
// const func = new Promise((resolve,reject)=>{
//     if(condition){
//         reject(false);
//     }
//     let num = 0;
//     while(num != 100000){
//         num++;
//     }
//     resolve(true);
// });
// func.then(function(resolve){
//     console.log(resolve);
// }).catch(function(error){
//     console.log(reject);
// });

// const func = new Promise((resolve,reject)=>{
//     let num = 0;
//     while(num != 100000){
//         num++;
//     }
//     resolve(true);
// });
// async function test(){
//     const result = await func;
//     console.log(result);
// }
// test();
// console.log("Pig");

// const condition = true;
// const func = new Promise((resolve,reject) => {
//     if(condition){
//         reject(false);
//     }
//     let num = 0;
//     while(num != 100000){
//         num++;
//     }
//     resolve(true);
// });

// func.then(function(resolve){
//     console.log(resolve);
// }).catch(function(error){
//     console.log(error);
// });
// console.log("PigPig");