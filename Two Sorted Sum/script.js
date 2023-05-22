//Introduction to pointers
//This code finds the numbers in the array that equal the target using pointers
const twoSortedSum = (nums, target)=>{
    let l = 0                   //the values of l and r are equal to the index of nums array
    let r = nums.length - 1

    while(l < r){
        const sum = nums[l] + nums[r]  

        if(sum > target) {
            r--;      //move right pointer to the left of the array
        }             //Since it's go lest to greatest, if the sum is bigger we'll move bigger number down (to the left)

        if(sum < target){
            l++         //Since sum is still to small we will move to the next higer number(to the right)
        }
        else {
            console.log([l, r])
            l++ 
        }
       
    }
}

twoSortedSum([1, 2, 4, 9], 13) //If the array isnt already sorted from least to greatest, use sort method to do so.