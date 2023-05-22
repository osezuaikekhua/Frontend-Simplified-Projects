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

        leftProducts[0] = 1     //making the first place of the array equal to 1 bcuz there is nothing to the left of it
        rightProducts[nums.length - 1] = 1      //making the last place of the array equal to 1 bcuz there is nothing to the right of it
        
    for(let i = 1; i < nums.length; ++i){   //i = 1 means we are starting at the sencond position in the nums array
        leftProducts[i] = nums[i - 1] * leftProducts[i - 1]
    }

    for(let i = nums.length - 2; i >= 0; --i ){ //For loop going backwards | i = -2 means we are starting at the sencond to last position in the nums array
        rightProducts[i] = nums[i + 1] * rightProducts[i + 1]
    }
    
    for( let i = 0; i < nums.length; ++i){
        results[i] = rightProducts[i] * leftProducts[i]
        
    }
    
    console.log(results)
}

productExcept([1, 2, 3, 4])

