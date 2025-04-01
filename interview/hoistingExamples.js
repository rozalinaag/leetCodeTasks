console.log(x) // undefined - hoisting of var
var x = 5
console.log(x) // 5 - already initialized

// console.log(y) // ReferenceError: "Cannot access 'y' before initialization - the same with const
// let y = 3
// console.log(y)

sayHello() //easy hoisting for function declaration
function sayHello(){
    console.log('Hello')
}

expFun() // error because function expression behave like variables!
const expFun = () => {
    console.log("hello")
}