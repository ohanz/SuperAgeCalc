// script goes here
let currentDate= document.getElementById("currentDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge= document.getElementById("CalcAge");
const displayAge= document.getElementById("displayAge");
const Age= document.getElementById("Age");
let demoClick = document.getElementById("demo");
var today = new Date();
currentDate.innerText=`Today's Date is: ${today.toLocaleDateString('en-US')}`;

CalcAge.addEventListener("click",()=>{
    var birthDate = new Date(dateOfBirth.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    displayAge.style.visibility="visible";
    Age.innerText=`You are ${age} years old.`
    demoClick.innerHTML = "Refresh Now!";
});
demoClick.addEventListener('click',function(){
  window.location.reload();
})
// window.addEventListener("click", function(){
//     if (displayAge.style.visibility=='visible') {
//         displayAge.style.visibility = 'hidden';
//     }
//     // document.getElementById("demo").innerHTML = "Hello World!";
//   });
document.getElementById("sm").onclick = function(){
    alert("Feature Coming soon..")
}
window.onload = function(){
	var popup = document.getElementById('popup');
    var overlay = document.getElementById('backgroundOverlay');
    var openButton = document.getElementById('openOverlay');
    setTimeout(()=>{
        openButton.value = "Close Now"
                    }, 5000) 
    document.onclick = function(e){
        if(e.target.id == 'backgroundOverlay'){
            popup.style.display = 'none';
            overlay.style.display = 'none';
             openButton.value = "Open Popup"
        }
        if(e.target === openButton){
         	popup.style.display = 'block';
            overlay.style.display = 'block';
           openButton.value = "Close Now"
        }
    };
};