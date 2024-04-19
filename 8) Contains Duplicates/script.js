



function Duplicates(nums) {
    const set = new Set()

    for(let i = 0; i < nums.length; ++i){
        if(set.has(nums[i])){ //Tells you that the element that you have in the paraentheses exist in the map
            return console.log(true)
        }
        set.add(nums[i]) //If it doesnt exist in the set then we add it
    }
    return console.log(false)
}


Duplicates([ 1, 2, 4, 3])

/*
$60k - $80k
function Duplicates(num) {
    const sortedArr = num.sort((a, b) => a - b) //this sorts the array by linear 
  
    for(let i = 0; i < sortedArr.length - 1; ++i){
        if(sortedArr[i] === sortedArr[i + 1]){ // this checks if the current value is equal to the next value
            return true
        }
    }
    return true
}
Duplicates([ 1, 2, 45, 3])
*/




