/** Move Zeroes **
 * 
 * Given an array 'nums', move all the zeroes to the end.
 * 
 * Note: You can not make a copy of the 'nums' array.
 * 
 * @example
 * moveZeroes([1, 0, 2, 0]) -> [1, 2, 0, 0]
 * moveZeroes([10, 0, 9]) -> [10, 9, 0]
 * moveZeroes([3, 4, 0, 2, 0]) -> [3, 4, 2, 0, 0]
 * 
 */

//This code returns all the zeros at the end of the array
const makeZeros = (nums) => {

    let l = 0
    let r = 0

    while(r < nums.length ){
        
        if(nums[r] !== 0 ){
            let temp = nums[r]
            nums[r] = nums[l]//We are switching the places of the numbers, by litterally switching their values
            nums[l] = temp
            l+=1
        }
        
        
         r+=1
         
    }
   console.log(nums)
    
}
makeZeros([0, 6, 0, 4, 8])