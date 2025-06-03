function is_array(arr){
    return Array.isArray(arr)
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

//--------------------------------------------------------------

console.log([3,4,1,2].sort((a, b) => b-a))

//--------------------------------------------------------------

function mostFrequencyItem(arr){
    let objItems = {}

    for (let i=0; i<arr.length; i++){
        if (objItems[arr[i]]){
            objItems[arr[i]] = objItems[arr[i]] + 1
        } else{
            objItems[arr[i]] = 1
        }
    }

    let bigValue = [1, arr[0]]

    for (let item of Object.keys(objItems)) {
       if (objItems[item] > bigValue[0]){
           bigValue = [objItems[item], item]
       }
    }

    return bigValue[1]
}

console.log(mostFrequencyItem(['aa', 'ff', 'ff', '54']))