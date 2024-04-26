/** Three Sum
 *
 * Given an array of integers 'nums', return an array of all the
 * three numbers that add up to 0.
 *
 * Note: There cannot be any duplicate triplets in the results array.
 *
 * @examples
 * threeSum([-1, 0, 1, 2, -1, -4]) = [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([-2, -2, 0, 0, 1, 1, 2, 2]) = [[ -2, 0, 2 ], [ -2, 1, 1 ]]
 * threeSum([0, 0, 0, 0]) = [[0, 0, 0]]
 */

/* Given an array of interger 'nums', return an array of all the three number that add up to 0 */
//This code is the same as the two sorted sum, but just 3 numbers
const threeSum = (nums, target) => {
    nums.sort((a,b) => a - b) //Putting it from least to greatest
    const results = []

    for(let i = 0; i < nums.length; ++i){
        if(nums[i] === nums[i - 1]){ //Makes sure the right pointer isn't identical to the previous right pointer
            continue;
        }
        let l = i + 1
        let r = nums.length - 1

        while (l < r){ //This while loop makes sure the pointers keep looping and dont skip to the next iteration after finding numbers that equal the target
            const sum = nums[i] + nums[l] + nums[r]

            if(sum > target) {
                r--
            }
            if(sum < target) {
                l++
            }
            if(sum === target) {
                results.push([nums[i], nums[l], nums[r]])
                l++
                while (nums[l] === nums[l - 1] && l < r){ // Makes sure the left pointer is'nt identical to the previous left pointer
                    l++ 
                }
            }
        }
    }
    console.log(results)
}
threeSum([-1, 0, 1, 2, -1, -4], 0)