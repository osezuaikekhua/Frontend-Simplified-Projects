//This code finds the smallest number in the array


const minRotatedArray = (nums) => {
    let l = 0 
    let r = nums.length - 1
    
    while(l < r){
        let mid = Math.floor((l + r) / 2)

        if(nums[mid] > nums[r]){
            l = mid + 1
        }else{
            r = mid
        }

      console.log(nums[l])

    
    }
}
minRotatedArray([8, 9, 10, 0, 1, 2, 3, 4, 5])
//               blue               green 

/*To know if we are on the green portion of the array we need
to see if mid is less than right. Since its sorted the right 
side will alway be higher.*/
