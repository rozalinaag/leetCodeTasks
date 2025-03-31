function outerFunc(n){
    return function (){
        console.log(1000 * n)
    }
}

const calc = outerFunc(24)
calc() // calling without parameters, but function remember parameter 24. This access to outer variables is closure