function is_array(arr){
    if (Array.isArray(arr)){
        return true;
    } else{
        return false;
    }
}

console.log(is_array(["3", "4", "5"]))
console.log(is_array('hfrdjs'))

