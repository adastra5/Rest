var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


let callButton = document.querySelector("#callButton")

function callHelper() {
    let warningText = document.querySelector("#warningText").classList.add("d-none")
    let infoText = document.querySelector("#infoText").classList.add("d-none")
    let removeButtons = document.querySelector("#twoButtons1").classList.add("d-none")
    let secondStep = document.querySelector("#secondStep").classList.remove("d-none")
}

function submitFunc(){
    let appointmentDate = document.querySelector("#appointmentDate")
    localStorage.setItem("date", appointmentDate.value);
    let appointmentTime = document.querySelector("#appointmentTime")
    localStorage.setItem("time", appointmentTime);
    let secondStep = document.querySelector("#secondStep").classList.add("d-none")
    let thirdStep = document.querySelector("#thirdStep").classList.remove("d-none")
}

function getAppointmentInfo(){
    let dateInfo = document.querySelector("#dateInfo").innerHTML = `Date: ${localStorage.getItem("date")}`
}

