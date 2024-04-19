/*
Given two arrays return true if  there are two
numbers in both arrays which can add up to an
integer target. Otherwise, return false.
*/

const sumOfTwo = (nums1, nums2, target) => {
    const set = new Set()

    for(num of nums1){
        set.add(target - num)
    }
    for(num of nums2){
        if(set.has(num)){
            return console.log(true)
        }
    }
    console.log(false)
}

sumOfTwo([1, 3, 5, 9, 11], [1, 3, 4], 8)