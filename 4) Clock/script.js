const secondHandle = document.querySelector(".handle_second")
const minuteHandle = document.querySelector(".handle_minute")
const hourHandle = document.querySelector(".handle_hour")


setInterval(() => {
    setHandles()
},1000)

function setHandles () {
    //This gives us the actual current time
    const d = new Date
    const hours = d.getHours()
    const minutes = d.getMinutes()
    const seconds = d.getSeconds()

    /*This code makes sure that the hour and minute hand dont jump to the next
      After a second has passed. It should slowly get there.
    */

    //Since 1 sec is 6 deg. So 1 sec is incremented by 0.1 deg
    const extraMinutesAngle = seconds * 0.1
    const minutesAngle = minutes * 6 + extraMinutesAngle

    const extraHoursAngle = minutes * 0.5
    const hoursHandle = hours * 30 + extraHoursAngle



    
    //6 deg is the equivelant to 1 sec. 
    secondHandle.style.transform = ` translateX(-50%) rotate(${seconds * 6}deg)`
    minuteHandle.style.transform = ` translateX(-50%) rotate(${minutesAngle}deg)`
    hourHandle.style.transform = ` translateX(-50%) rotate(${hoursHandle}deg)`
}