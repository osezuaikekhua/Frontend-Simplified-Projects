//Introduction to pointers
//This code finds the numbers in the array that equal the target using pointers. ARRAY NEEDS TO BE SORTED LEAST TO GREATEST
const twoSortedSum = (nums, target)=>{

    let l = 0                   //the values of l and r are equal to the index of nums array
    let r = nums.length - 1
    nums.sort((a,b) => a-b) //Sorts array from least to greatest for pointers to work VERY IMPORTANT
    while(l < r){
        

        const sum = nums[l] + nums[r]  

        if(sum > target) {
            r--;      //move right pointer to the left of the array
        }             //Since it's go lest to greatest, if the sum is bigger we'll move bigger number down (to the left)

        if(sum < target){
            l++         //Since sum is still to small we will move to the next higer number(to the right)
        }
        if(sum === target) {
            return [nums[l], nums[r]]
        }
       
    }
}

console.log(twoSortedSum([10, 1, 7, 3, 4,], 11)) //If the array isnt already sorted from least to greatest, use sort method to do so.