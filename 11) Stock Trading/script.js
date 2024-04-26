//A lil more advanced pointers
//The code is buying low and selling high. Buy at the lowest price and sell at a later date with the highest price.
const stockTrading = (nums) =>{
    let l = 0
    let r = 1
    let maxProfit = 0
    

    while(r < nums.length){ //This will stop at the end of the array
        const profit = nums[r] - nums[l]
        if (profit > 0){    //Before even prodeecing to the code we have to make sure we are even making a profit. 3 -8 is gunna be negative 5. No poiont in proceeding, so move to the next iteration
            maxProfit = Math.max(maxProfit, profit)//If the profit is greater than what we have so far, store the profit in the maxProfit 
            
        }else{
            l = r //if profit isnt above 0 move to next iteration.
        }
        r++ //since we made a profit we are gunna leave the left point where it's at and move the right pointer to find a higher profit. 
      
    }
    return maxProfit
} 
console.log(stockTrading([8, 3, 6, 1, 6, 4, 7]))
