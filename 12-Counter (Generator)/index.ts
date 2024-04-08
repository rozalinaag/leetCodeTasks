function* generateSequence(n: number) {
  for (let i = n; true; i++) yield i;
}

function createCounter(n: number): () => any {

    let generator = generateSequence(n);
        
    return function() {
       return generator.next().value
    }
}

const counter = createCounter(10)

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

