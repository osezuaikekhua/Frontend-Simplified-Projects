//This code finds the target in the array and returns the index of the target.
const sortedArray = (nums, target) => {
    let l = 0
    let r = nums.length - 1

    while( l <= r){ //We used " <= we could had an array with just ONE number so we have to check for that.
        let mid = Math.floor((l + r) / 2)
        
        if(nums[mid] === target){
            console.log(nums[mid],mid)
        }

        //Checks is array is in the green portion
        if(nums[mid] < nums[r]){
            if(target < nums[mid] || target > nums[r]){
                r = mid - 1
            }
            else{
                l = mid + 1
            }
        }
        //Checks is array is in the blue portion
        else{
            if(target > nums[mid] || target < nums[l]){
                l = mid + 1
            }
            else{
                r = mid - 1
            }
            
        }
        
    }

}
sortedArray([8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7], 0)