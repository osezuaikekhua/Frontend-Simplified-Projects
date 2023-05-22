//Binary search array is a search algorithm that is designed to search an element in a sorted array. It shortens the array until it finds the value it's looking for.

const binarySearch = (nums, target) => {
    let l = 0
    let r = nums.length - 1
    
    while( l <= r){         //While left anf right dont overlap
        let mid = Math.floor((l + r) / 2)

        if(nums[mid] > target){
            r = mid - 1     //Moves right pointer to the left of mid        
        }
        else if (nums[mid] < target){
            l = mid + 1     //Moves left pointer to the right of mid
        }
        else{       //If isnt less then target nor is it greater than target. Then it is the target
            return nums[mid]
        }
    }
}
console.log(binarySearch([1, 2, 4, 9, 12], 9))