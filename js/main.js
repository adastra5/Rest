let callButton = document.querySelector("#callButton")

function callHelperr() {
    let warningText = document.querySelector("#warningText").classList.add("d-none")
    let infoText = document.querySelector("#infoText").classList.add("d-none")
    let removeButtons = document.querySelector("#twoButtons1").classList.add("d-none")
    let secondStep = document.querySelector("#secondStep").classList.remove("d-none")
}
function nearestStations(){
    let warningText = document.querySelector("#warningText").classList.add("d-none")
    let infoText = document.querySelector("#infoText").classList.add("d-none")
    let removeButtons = document.querySelector("#twoButtons1").classList.add("d-none")
    let nearestStep = document.querySelector("#nearestStation").classList.remove("d-none")
}
function nearestServices(){
    let warningText = document.querySelector("#warningText2").classList.add("d-none")
    let infoText = document.querySelector("#infoText2").classList.add("d-none")
    let removeButtons = document.querySelector("#twoButtons2").classList.add("d-none")
    let nearestStep = document.querySelector("#nearestServices").classList.remove("d-none")
}

function submitFunc(){
    let appointmentDate = document.querySelector("#appointmentDate")
    localStorage.setItem("date", appointmentDate.value);
    let appointmentTime = document.querySelector("#appointmentTime")
    localStorage.setItem("time", appointmentTime.value);
    let getLocation = document.querySelector("#location")
    localStorage.setItem("location", getLocation.value)
    let secondStep = document.querySelector("#secondStep").classList.add("d-none")
    let thirdStep = document.querySelector("#thirdStep").classList.remove("d-none")
    let dateInfo = document.querySelector("#dateInfo").innerHTML = `Date: ${localStorage.getItem("date")}`
    let timeInfo = document.querySelector("#timeInfo").innerHTML = `Time: ${localStorage.getItem("time")}`
    let locationInfo = document.querySelector("#locationInfo").innerHTML = `Meeting Place: ${localStorage.getItem("location")}`

}

function goingHomepage(){
    let goHome = document.querySelector("#batteryWarning").classList.add("d-none")
}

function getAppointmentInfo(){
    
}

