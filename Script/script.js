function locationFrom() {
    var travelLocation = ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Tuticorin", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"]
    travelLocation.forEach(element => {
        var options = document.createElement('option');
        var text = document.createTextNode(element)
        options.appendChild(text);
        document.getElementById('from').appendChild(options);
    });
}

function locationTo() {
    var travelLocation = ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Tuticorin", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"]
    travelLocation.forEach(element => {
        var options = document.createElement('option');
        var text = document.createTextNode(element)
        options.appendChild(text);
        document.getElementById('to').appendChild(options);
    });

}

function locationValidation() {
    var startingLocation = document.getElementById("from").value;
    var locationSpanId = document.getElementById("invalidlocation");
    var destination = document.getElementById("to").value;
    if (startingLocation == destination) {
        locationSpanId.classList.remove("location-error");
        locationSpanId.style.fontSize = "smaller";
        locationSpanId.style.color = "red";
    } else {
        locationSpanId.classList.add("location-error");
    }
}

function myFunction() {
    var password = document.getElementById("pass");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function toggle() {
    var togglePassword = document.querySelector('#toggle');
    var password = document.querySelector('#pword');
    var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.className = togglePassword.className === "fa fa-eye-slash" ? "fa fa-eye" : "fa fa-eye-slash";
}

function validate() {
    if (document.forms[0].checkValidity()) {
        const person = {
            Personname: document.getElementById("name").value,
            Dateofbirth: document.getElementById("dob").value,
            Email: document.getElementById("email").value,
            MobileNumber: document.getElementById("mobile").value,
            Password: document.getElementById("pword").value,
            Confirm: document.getElementById("confirmpass").value,
            Gender: document.getElementById("male").checked ? "male" : "female"
        }
        console.log(JSON.stringify(person))
        window.localStorage.setItem('person', JSON.stringify(person));
        console.log(JSON.stringify(person));
        // var url = new URL("http://127.0.0.1:5500/html/index.html");
        // window.location.href = url;
    }
}

function nametest() {
    var nameRegex = /[A-z]{4,25}/;
    var nameValue = document.getElementById("name").value;
    var nameSpanId = document.getElementById("nameerror");
    var nameInputBox = document.getElementById("name");
    if (nameRegex.test(nameValue)) {
        nameSpanId.classList.add("errormessage");
        nameInputBox.style.borderColor = "grey";
    } else {
        nameSpanId.classList.remove("errormessage");
        nameSpanId.style.color = "red";
        nameInputBox.style.borderColor = "red";
    }
}

function emailtest() {
    var emailRegex = /^[a-z0-9\._-]{4,15}@[a-z]{2,6}\.[a-z]{2,4}$/;
    var emailValue = document.getElementById("email").value;
    var emailSpanId = document.getElementById("emailerror");
    var emailInputBox = document.getElementById("email");
    if (emailRegex.test(emailValue)) {
        emailSpanId.classList.add("errormessage");
        emailInputBox.style.borderColor = "grey";
    } else {
        emailSpanId.classList.remove("errormessage");
        emailSpanId.style.color = "red";
        emailInputBox.style.borderColor = "red";
    }
}

function contactvalidate() {
    var mobileRegex = /^[0-9]{10}$/;
    var mobileValue = document.getElementById("mobile").value;
    var mobileSpanId = document.getElementById("contacterror");
    var mobileInputBox = document.getElementById("mobile");
    if (mobileRegex.test(mobileValue)) {
        mobileSpanId.classList.add("errormessage");
        mobileInputBox.style.borderColor = "grey";
    } else {
        mobileSpanId.classList.remove("errormessage");
        mobileSpanId.style.color = "red";
        mobileInputBox.style.borderColor = "red";
    }
}

function passwordvalidate() {
    var passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@$%^&])[a-zA-Z0-9!@$%^&]{8,16}/;
    var passwordValue = document.getElementById("pword").value;
    var passwordSpanId = document.getElementById("passworderror");
    var passwordInputBox = document.getElementById("pword");
    if (passwordRegex.test(passwordValue)) {
        passwordSpanId.classList.add("errormessage");
        passwordInputBox.style.borderColor = "grey";
    } else {
        passwordSpanId.classList.remove("errormessage");
        passwordSpanId.style.color = "red";
        passwordInputBox.style.borderColor = "red";
    }
}

function confirmpassword() {
    var givenpassword = document.getElementById("pword").value;
    var confirmpass = document.getElementById("confirmpass").value;
    var confirmSpanId = document.getElementById("confirmerror");
    var confirmInputBox = document.getElementById("confirmpass");
    if (givenpassword == confirmpass) {
        confirmSpanId.classList.add("errormessage");
        confirmInputBox.style.borderColor = "grey";
    } else {
        confirmSpanId.classList.remove("errormessage");
        confirmSpanId.style.color = "red";
        confirmInputBox.style.borderColor = "red";
    }

}
function birthDate() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear() - 10;
    var birthday = currentYear + "-12-31";
    document.getElementById("dob").setAttribute("max", birthday);
}

function increment() {
    document.getElementById("donation").stepUp();
}

function decrement() {
    document.getElementById("donation").stepDown();
}

function booking() {
    var checkbox = document.getElementById("check");
    var save = document.getElementById("savedetails");
    save.disabled = checkbox.checked ? false : true;
}

function save() {
    var detailspage = new URL("http://127.0.0.1:5500/html/details.html");
    window.location.href = detailspage;
}

function loginpage() {
    var loginpage = new URL("http://127.0.0.1:5500/html/index.html");
    window.location.href = loginpage;
}
function newBooking(){
    var newTicketBooking = new URL("http://127.0.0.1:5500/html/details.html");
    window.location.href = newTicketBooking;
}

function startingDate() {
    var todayDate = new Date().toLocaleDateString();
    if (document.getElementById("leavingdate") != null) {
        document.getElementById("leavingdate").setAttribute("min", todayDate);
        console.log(todayDate);
    }
}

function journeyDate() {
    var journeydate = document.getElementById("leavingdate").value;
    console.log(journeydate);
    console.log(typeof journeydate);
    var date1 = new Date(journeydate);
    console.log(date1)
    console.log(typeof date1);
    var objectdate = date1.setDate(date1.getDate()+1);
    console.log(objectdate);
    console.log(typeof objectdate);
    var year = date1.getFullYear();
    var month = date1.getMonth() + 1;
    var minimumDate = year + "-" + month + "-" + objectdate;
    document.getElementById("returndate").setAttribute("min", minimumDate);
    console.log(minimumDate);

}
function displayJSON(){
    var url = new URL("http://127.0.0.1:5500/html/bookhere.html");
        window.location.href = url;
}
function creatingJSON(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://gorest.co.in/public/v2/users",true);
    xhttp.setRequestHeader("accept", "application/JSON");
    xhttp.send();
    xhttp.onload = function() {
        dataSendFunction(this);
    }

    function dataSendFunction(request) {
        var require = JSON.parse(request.responseText);
        if(request.readyState == 4 && request.status == 200){
            console.log(require);
            document.getElementById("namefield").value = require[0].name;
            document.getElementById("emailfield").value = require[0].email;
            document.getElementById("genderfield").value = require[0].gender;
            document.getElementById("namefield1").value = require[1].name;
            document.getElementById("emailfield1").value = require[1].email;
            document.getElementById("genderfield1").value = require[1].gender;
            document.getElementById("namefield2").value = require[2].name;
            document.getElementById("emailfield2").value = require[2].email;
            document.getElementById("genderfield2").value = require[2].gender;

        }else{
            alert("check for readystate and state");
        }

    }

}