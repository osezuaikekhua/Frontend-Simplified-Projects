            /* VERSION 3 (most optimal) */

const nums = [1, 2, 3, 4, 5, 6]
let maxSum = nums[0]
let sum = 0
for(let i = 0; i < nums.length; ++i){
    if(sum < 0) {
        sum = 0
    }
    sum += nums[i]
    maxSum = Math.max(maxSum, sum)


}
console.log(maxSum)

            /* VERSION 2 (optimal) */

/*const nums = [1, 2, 3, 4, 5, 6]
let maxSum = nums[0]

for(let i = 0; i < nums.length; ++i){
    let sum = 0
    
    for(let j = i + 1; j < nums.length; ++j){
        sum += nums[j]
        maxSum = Math.max(maxSum, sum)
    }
}
console.log(maxSum)*/



            /* VERSION 1 (not very optimal)*/

/*const nums = [1, 2, 3, 4, 5, 6]
let maxSum = nums[0]
for(let i = 0; i < nums.length; ++i){
    
    console.log(`iteration${i}`)
    for(let j = i + 1; j < nums.length; ++j){
        const subarray = nums.slice(i,j)
        const sum = subarray.reduce((acc, curr) => acc + curr)
        
        maxSum = Math.max(maxSum, sum)
             OR 
        if(sum > maxSum){
            maxSum = sum
        }

        console.log(subarray, sum)
    }
}
console.log(maxSum)*/