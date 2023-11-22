const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const gmail = document.getElementById("gmail")
const phone = document.getElementById("phone")
const dob = document.getElementById("dob")
const address = document.getElementById("address")
const city = document.getElementById("city")
const pin = document.getElementById("pin")
const state = document.getElementById("state")
const education = document.getElementById("education")
const pword = document.getElementById("pword")

const form = document.getElementById("myForm");

function validate(e) {
    e.preventDefault(); 
    if(!fname.value) {
        alert("Enter your firstname")
        fname.focus()
    }
    else if(!lname.value) {
        alert("Enter your lastname")
        lname.focus()
    }
    else if(!gmail.value) {
        alert("Enter your email id")
        gmail.focus()
    }
    else if(!phone.value) {
        alert("Enter your phone number")
        phone.focus()
    }
    else if(!dob.value) {
        alert("Enter your date of birth")
        dob.focus()
    }
    else if(!address.value) {
        alert("Enter your address")
        address.focus()
    }
    else if(!city.value) {
        alert("Enter your city")
        city.focus()
    }
    else if(!pin.value) {
        alert("Enter your pincode")
        pin.focus()
    }
    else if(!state.value) {
        alert("Enter your state")
        state.focus()
    }
    else if(!education.value) {
        alert("Select your qualification")
        education.focus()
    }
    else if(!pword.value) {
        alert("Enter your password")
        pword.focus()
    }
    else{
        alert("Form Submitted")
    }
}


form.addEventListener('submit', validate);