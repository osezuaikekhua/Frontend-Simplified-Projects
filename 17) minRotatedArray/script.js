/** Minimum Number in Rotated Sorted Array **
 * 
 * Given a rotated sorted array, return the smallest 
 * number in the array.
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * findMinimum([5, 4, 1, 2]) -> 1
 * findMinimum([7, 9, 12, 3, 4]) -> 3
 * findMinimum([3, 4, 2, 0]) -> 0
 * 
 */


//This code finds the smallest number in the array


const minRotatedArray = (nums) => {
    nums.sort((a,b)=> a-b) //Must sort arry first
    let l = 0
    let r = nums.length - 1
 
    while( l <= r){    
        let mid = Math.floor((l + r) / 2)  
        if(nums[mid] < nums[r]){
            r = mid ;
        }else if(nums[mid] < nums[l]){
           
            l = mid ;
        }else{
            return nums[mid]
        }
    }
}
minRotatedArray([8, 9, 10, 0, 1, 2, 3, 4, 5])
//               blue               green 

/*To know if we are on the green portion of the array we need
to see if mid is less than right. Since its sorted the right 
side will alway be higher.*/
