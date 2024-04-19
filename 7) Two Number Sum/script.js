const twoSum = (nums, target ) => {
    for(let i = 0; i < nums.length -1; ++i){ //-1 was added to get rid of the code looping through 4. since all the other unmbers would already check 4 in there own loops. Now the code is more efficent.

        for(let j = i; j < nums.length; ++j){  //j = i so J will start at i. now we wont have to loop through numbers that have already be compared before. Profiency purposes.

            if(nums[i] + nums[j] === target){
                return console.log([i,j])
            }
        }
    }
}
twoSum([0, 1, 2, 3, 4], 5)