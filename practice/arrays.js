function is_array(arr){
    if (Array.isArray(arr)){
        return true;
    } else{
        return false;
    }
}

console.log(is_array(["3", "4", "5"]))
console.log(is_array('hfrdjs'))

//------------------------------------------------------------

function array_clone(arr){
    return arr.slice(0)
}

let test1 = [1, 3, 4]
let test2 = array_clone(test1)

test1.push(5)

console.log(test1, test2)

//-------------------------------------------------------------

function firstElementsOfArray(arr, number){
    return arr.slice(0, number)
}

console.log(firstElementsOfArray([1,2,3,4], 3))

//-------------------------------------------------------------

function joinElementsOfArray(arr, arr2){
    let newArr = arr.slice(0)
    newArr.push(...arr2)
    return newArr
}

console.log(joinElementsOfArray([2,4,5], [5, 3]))