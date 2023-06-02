const maxWater = (heights) => {
    let l = 0
    let r = heights.length - 1
    let maxArea = 0

    while(l <= r){
        let width = r - l
        let height = Math.min(heights[l], heights[r])
        let area = width * height

        if(heights[l] > heights[r]){
            l += 1
        }
        else{
            r -= 1
        }

        if(area > maxArea){
            maxArea = area
        }

        
    }
    return console.log(maxArea)
}
maxWater([1, 5, 6, 3, 4, 2])