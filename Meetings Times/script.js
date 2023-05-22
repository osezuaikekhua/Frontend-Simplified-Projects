const meetingTimes = (times) => {
    times.sort((a,b) => a[0] - b[0])
    
    for(let i = 1; i < times.length; ++i){
        const currentStart = times[i][0]
        const prevEnd = times[i - 1]

        if(currentStart < prevEnd){
            return console.log(false)
        }
    }
    return console.log(true)
}

meetingTimes([[10, 15], [20, 25]])