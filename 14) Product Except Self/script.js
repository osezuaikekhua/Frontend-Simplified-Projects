/** Product of Array except Self:
 *
 * Write a function that takes in an array of integers 'nums' and
 * returns an array with the product of all integers except the current integer.
 * 
 * Note: You can not use the division operator 
 * 
 * Follow up: Can you do this in constant space? The results array does NOT count to the space.
 *
 * @examples
 * productExceptSelf([1, 2, 3, 4]) -> [24, 12, 8, 6]
 * productExceptSelf([3, 2, 6, 1]) -> [12, 18, 6, 36]
 * productExceptSelf([10, 1, 5, 2]) -> [10, 100, 20, 50]
 */






// const productExcept = (nums) => {
    
//     const results = []

//     results[0] = 1     
       
        
//     for(let i = 1; i < nums.length; ++i){   
//         results[i] = results[i - 1] * nums[i - 1]
//     }

//     let rightProduct = 1   
//     for(let i = nums.length - 1; i >= 0; --i ){ 
//         results[i] = results[i] * rightProduct
//         rightProduct *=nums[i]
//     }
//     console.log(results)


// }

// productExcept([1, 2, 3, 4])



//This code multiples every numeber in the array expect the current number we are on.


const productExcept = (nums) => {
    const leftProducts = []
    const rightProducts = []
    const results = []

    leftProducts[0] = 1     //making the first place of the array equal to 1 bcuz there is nothing to the left of the first value in the nums array
    rightProducts[nums.length - 1] = 1      //making the last place of the array equal to 1 bcuz there is nothing to the right of it
    //Calculating left Products    
    for(let i = 1; i < nums.length; ++i){   //i = 1 means we are starting at the sencond position in the nums array
        leftProducts[i] = nums[i - 1] * leftProducts[i - 1] //We are multiply the current integer by the previous integer
    }
    //Calculating right Products  
    for(let i = nums.length - 2; i >= 0; --i ){ //For loop going backwards | i = -2 means we are starting at the sencond to last position in the nums array
        rightProducts[i] = nums[i + 1] * rightProducts[i + 1] //There is no sceneario where there's an element to the right of the last value in nums array
    }
    //The left and right products multiplied will give us our answer
    for( let i = 0; i < nums.length; ++i){
        results[i] = rightProducts[i] * leftProducts[i]
        
    }
    
    console.log(results)
}

productExcept([1, 2, 3, 4])

