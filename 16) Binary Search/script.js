/** Binary Search **
 * 
 * Given a sorted array 'nums' and an integer 'target', return
 * the index of the target. 
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * binarySearch([1, 2, 4, 9, 12], 9) -> 3
 * binarySearch([-2, -1, 4, 5, 7], -1) -> 1
 * binarySearch([-1, 4, 18, 20], 18) -> 2
 * 
*/

//Binary search array is a search algorithm that is designed to search an element in a sorted array. It shortens the array until it finds the value it's looking for.

const binarySearch = (nums, target) => {
    nums.sort((a,b) => a-b)
    console.log(nums)
    let l = 0
    let r = nums.length - 1

    //MAKE SURE TO SORT ARRAY IF NOT SORTED
    
    while( l <= r){         //While left and right dont overlap
        let mid = Math.floor((l + r) / 2)

        if(nums[mid] > target){
            r = mid - 1     //Moves right pointer to the left of mid. The code knows the target is on the left side of mid and ignores eveything to the right of mid        
        }
        else if (nums[mid] < target){
            l = mid + 1     //Moves left pointer to the right of mid. The code knows the target is on the right side of mid nad ignores eveythign to the left of mid
        }
        else{       //If isnt less then target nor is it greater than target. Then it is the target
            return mid
        }
    }
}
console.log(binarySearch([1, 2, 4, 8, 9, 12, 19], 9))