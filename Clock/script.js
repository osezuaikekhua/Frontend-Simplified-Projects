const secondHandle = document.querySelector(".handle_second")
const minuteHandle = document.querySelector(".handle_minute")
const hourHandle = document.querySelector(".handle_hour")


setInterval(() => {
    setHandles()
},1000)

function setHandles () {
const d = new Date
const hours = d.getHours()
const minutes = d.getMinutes()
const seconds = d.getSeconds()


const extraMinutesAngle = seconds * 0.1
const minutesAngle = minutes * 6 + extraMinutesAngle

const extraHoursAngle = minutes * 0.5
const hoursHandle = hours * 30 + extraHoursAngle



hourHandle.style.transform = ` translateX(-50%) rotate(${hoursHandle}deg)`
secondHandle.style.transform = ` translateX(-50%) rotate(${seconds * 6}deg)`
minuteHandle.style.transform = ` translateX(-50%) rotate(${minutesAngle}deg)`

}