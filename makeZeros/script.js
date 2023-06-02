//This code returns all the zeros at the end of the array
const makeZeros = (nums) => {

    let l = 0
    let r = 0

    while(r < nums.length ){
        
        if(nums[r] !== 0 ){
            let temp = nums[r]
            nums[r] = nums[l]
            nums[l] = temp
            l+=1
        }
        
        
         r+=1
         
    }
   console.log(nums)
    
}
makeZeros([0, 6, 0, 4, 8])