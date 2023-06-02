//Introduction to recursion
//This code takes all the sub arrays in the array and merges them all to one array

const flatten = (nums) => {
    const results = []

    const flattenHelper = (nums) => {
        for(elem of nums){ //nums become the smaller array then does the code again for that smaller array
            if(Array.isArray(elem)){ //Checks to see if element is an array
                flattenHelper(elem) //recalls the function again, but now with the smaller numbers
            }else{
                results.push(elem)
            }
        }
    }
    flattenHelper(nums)
    console.log(results)
}

flatten([1, 2, 3,[ 4, [5]]])