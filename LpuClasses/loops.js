// for(let i =0; i<5 ; i++){
//     console.log(i);
// }

// let count = 0;
// while(count<5){
//     console.log(count);
//     count++;
// }

// let count = 0;
// do{
//     console.log(count);
//     count++;
// } while(count<5);

// let person = {name: "John", age: 30,occupation: "developer"};
// for(let key in person){
//     console.log(key+":"+person[key]);
// }

// let car ={
//     make: "Toyota",
//     model: "Camry",
//     year: 2022,
//     isElectric: false,
//     start: function(){
//         console.log("Engine Started!");
//     }
// }
// car.start();
// console.log(car);

// function Book(title, author, year){
//     this.title=title;
//     this.author=author;
//     this.year=year;
// }
// let book1 = new Book("The Catcher in the rye","J.D. Salinger",1951);
// let book2 = new Book("To Kill a Mockingbird","Harper Lee",1960);
// console.log(book1);
// console.log(book2);


// let fruits=["apple","banana","orange","grape"];
// fruits.push("kiwi"); //add element at end of the array
// console.log(fruits);
// fruits.unshift("mango"); //add element at the start of the array
// console.log(fruits);
// let removedLast = fruits.pop();
// console.log(fruits); //delete last element of the array
// console.log(removedLast);
// let removedfirst = fruits.shift(); //delete first element of the array
// console.log(fruits);
// let indexofOrange = fruits.indexOf("orange"); //find index of element
// console.log(indexofOrange);
// fruits.splice(indexofOrange,1) //remove element at particular index from the original array
// console.log(fruits);
// let citrus = fruits.slice(1,3); //creates a new array of the range of index provided
// console.log(citrus);  
// let removed = fruits.splice(1,2,"pear","melon"); //removes the elements in the given range and add the elements given after that
// console.log(removed);
// console.log(fruits);

//anonymous function
// const multiply = function(a,b){
//     return a*b;
// };
// const product = multiply(4,6);
// console.log("Function Expression - Product:",product);
//chai with code, js documentation 

//ARROW FUNCTION
// const subtract = (a,b) => a-b;
// const difference = subtract(8,3);
// console.log('Arrow Function-Difference:',difference);

//error handling
// try{
//     throw new Error("An error");
// } catch (error){
//     console.error(error.message);
// } finally{
//     console.log("Cleanup code");
// }

//timers

//setTimeout function
// const delayFunction = () => {
//     console.log('Delayed fucntion executed');
// };
// setTimeout(delayFunction,2000);  //executes after 2 sec

//setInterval function
// const repeatedFunction = () =>{
//     console.log('Repeating...');
// };
// const intervalId = setInterval(repeatedFunction,1000);
// //how to stop a repeating function
// setTimeout(()=>{
//     clearInterval(intervalId);
//     console.log("stops repeating.");
// },5000);

