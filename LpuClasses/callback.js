//synchronous callback

// function parentFunction(name, callback){
//     callback();
//     console.log("Hey "+name);
// }
// function randomFuntion(){
//     console.log("Hey I am callback function");

// }
// parentFunction("Random string",randomFuntion);

//Asynchronous callback funtion
// function parentFunction(name, callback){
//     setTimeout(callback,1000);
//     console.log("Hey "+name);
// }
// function randomFuntion(){
//     console.log("Hey I am callback function");

// }
// parentFunction("Random string",randomFuntion);

// same code with anonymous function
// function parentFunction(name, callback){
//     setTimeout(callback,1000);
//     console.log("Hey "+name);
// }
// parentFunction("Random string", function randomFuntion(){
//     console.log("Hey I am callback function");
// });

//same code with arrow function
// const parentFunction = (name, callback) => {
//     setTimeout(() => {
//       callback();
//       console.log("Hey " + name);
//     }, 1000);
//   };
  
//   parentFunction("Random string", () => {
//     console.log("Hey I am callback function");
//   });

