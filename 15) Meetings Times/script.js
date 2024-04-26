/** Meeting Times **
 * 
 * Given an array of meeting times, determine if a person can
 * attend all meetings. 
 *  
 * @example
 * meetingTimes([[10, 15], [20, 25]]) -> true
 * meetingTimes([[5, 10], [10, 15], [12, 25], [25, 30]]) -> false
 * meetingTimes([[10, 20], [20, 30], [30, 40]]) -> true
 * 
 */
const meetingTimes = (times) => {
    times.sort((a,b) => a[0] - b[0]) //First sorting array to get the meetings in least to greatest order
    
    for(let i = 1; i < times.length; ++i){ // i = 1 becasue the are comparing the current meeting to the meeting before it. And if we start at the first, there's no meeting before it
        const currentStart = times[i][0] //Get the start number of the current meeting
        const prevEnd = times[i - 1] //getting the end number of the previous meeting

        if(currentStart < prevEnd){ //if the end of our meeting is greater than or after the start of our next meeting, then we can't attend it.
            return console.log(false)
        }
    }
    return console.log(true)
}

meetingTimes([[10, 15], [20, 25]])