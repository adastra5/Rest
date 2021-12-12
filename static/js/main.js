let callButton = document.querySelector("#callButton")
let batteryValue;
let items = []


async function main(){
    await data()
    if (batteryValue <= 20){
        batteryWarning = document.querySelector("#batteryWarning")
        batteryWarning.classList.remove("d-none")
    }
    
}

main()
async function data(){
    let response = await fetch("http://127.0.0.1:5000/json/car_status.json")
    let json = await response.json()
    batteryValue = json.stateofcharge.value
}

//Calculating Cost
let serviceCost = 150
let chargeCost = 50
let estimatedCost = document.querySelector("#chargeCost")
estimatedCost.innerHTML = `<span class="font-weight-bold">Total Estimated Cost:</span> ${serviceCost+chargeCost}$`


document.getElementsByName("total")[0].value = "$" + total.toFixed(2);

function totalIt() {
    var input = document.getElementsByName("product");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total += parseFloat(input[i].value);
      }
    }
    document.getElementsByName("total")[0].innerHTML = "$" + total.toFixed(2);
  }

function callHelperr() {
    let warningText = document.querySelector("#warningText").classList.add("d-none")
    let infoText = document.querySelector("#infoText").classList.add("d-none")
    let removeButtons = document.querySelector("#twoButtons1").classList.add("d-none")
    let secondStep = document.querySelector("#secondStep").classList.remove("d-none")
}
function callHelperStatus(){
    let warningText = document.querySelector("#warningText2").classList.add("d-none")
    let infoText = document.querySelector("#infoText2").classList.add("d-none")
    let removeButtons = document.querySelector("#twoButtons2").classList.add("d-none")
    let secondStep = document.querySelector("#secondStepStatus").classList.remove("d-none")
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
    let dateInfo = document.querySelector("#dateInfo").innerHTML = `<span class="font-weight-bold">Date:</span class="font-weight-bold"> ${localStorage.getItem("date")}`
    let timeInfo = document.querySelector("#timeInfo").innerHTML = `<span class="font-weight-bold">Time:</span class="font-weight-bold"> ${localStorage.getItem("time")}`
    let locationInfo = document.querySelector("#locationInfo").innerHTML = `<span class="font-weight-bold">Meeting Place:</span class="font-weight-bold"> ${localStorage.getItem("location")}`
    
}
function submitFuncStatus(){
    let appointmentDate = document.querySelector("#appointmentDate2")
    localStorage.setItem("dateStatus", appointmentDate.value);
    let appointmentTime = document.querySelector("#appointmentTime2")
    localStorage.setItem("timeStatus", appointmentTime.value);
    let getLocation = document.querySelector("#location2")
    localStorage.setItem("locationStatus", getLocation.value)
    let secondStep = document.querySelector("#secondStepStatus").classList.add("d-none")
    let thirdStep = document.querySelector("#thirdStepStatus").classList.remove("d-none")
    let dateInfo = document.querySelector("#dateInfo2").innerHTML = `<span class="font-weight-bold">See you on </span class="font-weight-bold"> ${localStorage.getItem("dateStatus")}`
    let timeInfo = document.querySelector("#timeInfo2").innerHTML = `<span class="font-weight-bold">at </span class="font-weight-bold"> ${localStorage.getItem("timeStatus")}`
    let locationInfo = document.querySelector("#locationInfo2").innerHTML = `<span class="font-weight-bold">in </span class="font-weight-bold"> ${localStorage.getItem("locationStatus")}`
    
}
function submitFuncStatusDelivery(){
    let appointmentDate = document.querySelector("#appointmentDate3")
    localStorage.setItem("dateStatusDelivery", appointmentDate.value);
    let appointmentTime = document.querySelector("#appointmentTime3")
    localStorage.setItem("timeStatusDelivery", appointmentTime.value);
    let getLocation = document.querySelector("#location3")
    localStorage.setItem("locationStatusDelivery", getLocation.value)
    let secondStep = document.querySelector("#test").classList.add("d-none")
    let thirdStep = document.querySelector("#test2").classList.remove("d-none")
    let dateInfo = document.querySelector("#dateInfo3").innerHTML = `<span class="font-weight-bold">See you on </span class="font-weight-bold"> ${localStorage.getItem("dateStatusDelivery")}`
    let timeInfo = document.querySelector("#timeInfo3").innerHTML = `<span class="font-weight-bold">at </span class="font-weight-bold"> ${localStorage.getItem("timeStatusDelivery")}`
    let locationInfo = document.querySelector("#locationInfo3").innerHTML = `<span class="font-weight-bold">in </span class="font-weight-bold"> ${localStorage.getItem("locationStatusDelivery")}`
    
}

function goingHomepage(){
    let goHome = document.querySelector("#batteryWarning").classList.add("d-none")
    let statusToHome = document.querySelector("#statusWarning").classList.add("d-none")
}

function goingSMS(){
    let goHome = document.querySelector("#thirdStepStatus").classList.add("d-none")
    let tirePage = document.querySelector("#tirePage").classList.remove("d-none")
    
}

function goingCheckup(){
    let closeTire = document.querySelector("#tirePage").classList.add("d-none")
    let openCheckup = document.querySelector("#checkupPage").classList.remove("d-none")
}

function goingFourth(){
    let closeThird = document.querySelector("#thirdStep").classList.add("d-none")
    let openFourth = document.querySelector("#fourthStep").classList.remove("d-none")
}
function goingFifth(){
    let close= document.querySelector("#fourthStep").classList.add("d-none")
    let open = document.querySelector("#fifthStep").classList.remove("d-none")
}
function goingSixth(){
    document.querySelector("#fifthStep").classList.add("d-none")
    document.querySelector("#sixthStep").classList.remove("d-none")
}
function payButton(){
    document.querySelector("#sixthStep").classList.add("d-none")
    document.querySelector("#seventhStep").classList.remove("d-none")
}
function goingResults(){
    document.querySelector("#checkupPage").classList.add("d-none")
    document.querySelector("#checkupResults").classList.remove("d-none")
}
function goingDelivery(){
    document.querySelector("#checkupResults").classList.add("d-none")
    document.querySelector("#test").classList.remove("d-none")
}
function goingPay(){
    document.querySelector("#test2").classList.add("d-none")
    document.querySelector("#payTier").classList.remove("d-none")
}
function payButton2(){
    document.querySelector("#payTier").classList.add("d-none")
    document.querySelector("#lastPage").classList.remove("d-none")
}



