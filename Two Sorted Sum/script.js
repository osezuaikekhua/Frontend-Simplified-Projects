const twoSortedSum = (nums, target)=>{
    let l = 0
    let r = nums.length - 1

    while(l < r){
        const sum = nums[l] + nums[r]

        if(sum > target) {
            r--;
        }

        if(sum < target){
            l++
        }
        else {
            console.log([l, r]) 
        }
    }
}

twoSortedSum([1, 2, 4, 9], 13)