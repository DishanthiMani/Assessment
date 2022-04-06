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
            for(i = 0; i < require.length; i++){
                var sampleDiv = document.createElement('DIV');
                sampleDiv.setAttribute("id", "sampleDiv"+i);
                sampleDiv.setAttribute("class","sample-div");
                var sampleId = document.createElement("label");
                sampleId.setAttribute("for","Id"+i);
                sampleId.innerText = "Id";
                sampleDiv.append(sampleId);
                var idInput = document.createElement("input");
                idInput.setAttribute("id","sampleId"+i);
                idInput.setAttribute("class","sample-id");
                idInput.readOnly = true;
                idInput.value = require[i].id;
                sampleDiv.append(idInput);
                var nameLabel = document.createElement("label");
                nameLabel.setAttribute("for","name"+i)
                nameLabel.innerText = "Name";
                sampleDiv.append(nameLabel)
                var nameInput = document.createElement("input");
                nameInput.setAttribute("id","sampleName"+i);
                nameInput.setAttribute("class","sample-name");
                nameInput.readOnly=true;
                nameInput.value = require[i].name;
                sampleDiv.append(nameInput);
                var emailLabel = document.createElement("label");
                emailLabel.setAttribute("for", "email"+i);
                emailLabel.innerText = "Email";
                sampleDiv.append(emailLabel);
                var emailInput = document.createElement("input");
                emailInput.setAttribute("id", "sampleEmail"+i);
                emailInput.setAttribute("class","sample-email");
                emailInput.readOnly=true;
                emailInput.value = require[i].email;
                sampleDiv.append(emailInput);
                var genderLabel = document.createElement("label");
                genderLabel.innerText = "Gender";
                genderLabel.setAttribute("for","gender"+i);
                sampleDiv.append(genderLabel);
                var genderInput = document.createElement("input");
                genderInput.setAttribute("id", "sampleGender"+i);
                genderInput.setAttribute("class","sample-gender");
                genderInput.readOnly=true;
                genderInput.value = require[i].gender;
                sampleDiv.append(genderInput);
                var statusLabel = document.createElement("label");
                statusLabel.innerText = "Status";
                statusLabel.setAttribute("for","status"+i);
                sampleDiv.append(statusLabel);
                var statusInput = document.createElement("input");
                statusInput.setAttribute("id", "sampleStatus"+i);
                statusInput.setAttribute("class","sample-status");
                statusInput.readOnly = true;
                statusInput.value = require[i].status;
                sampleDiv.append(statusInput);
                var sampleButton = document.createElement("div");
                sampleButton.setAttribute("id","sampleButton"+i);
                sampleButton.setAttribute("class","sample-button")
                sampleDiv.appendChild(sampleButton)
                var deleteButton = document.createElement("button");
                deleteButton.setAttribute("id","deleteButton"+i);
                deleteButton.setAttribute("class","delete-button");
                deleteButton.setAttribute("onclick","deleteJSONData(this)");
                deleteButton.innerText = "Delete"
                sampleDiv.append(deleteButton);
                var editButton = document.createElement("button");
                editButton.setAttribute("id","editButton"+i);
                editButton.setAttribute("class","edit-button");
                editButton.setAttribute("onclick","editData(this)");
                editButton.innerText = "Edit"
                sampleDiv.append(editButton);
                document.getElementById('card-container').appendChild(sampleDiv);
            }
        }else{
            alert("check for readystate and state");
        }

    }  
}
function editData(element){
    if(element.innerText == "Edit"){
    element.parentElement.getElementsByClassName("sample-name")[0].readOnly=false;
    element.parentElement.getElementsByClassName("sample-email")[0].readOnly=false;  
    element.innerText = "Update";
    }else{
        patchJSONData();
    }
    function patchJSONData(){
        var jsonObject = {
            jsonname : element.parentElement.getElementsByClassName("sample-name")[0].value,
            jsonemail : element.parentElement.getElementsByClassName("sample-email")[0].value,
            jsonstatus : element.parentElement.getElementsByClassName("sample-status")[0].value
        }
        console.log(jsonObject)
        var jsonString = JSON.stringify(jsonObject);
        console.log(jsonString)
        var jsonId = element.parentElement.getElementsByClassName("sample-id")[0].value;
        console.log(jsonId);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState ==4 && this.status == 200){
                var patchRequire = JSON.parse(this.responseText);
                console.log(patchRequire);
            }
        }
        xhttp.open("PATCH","https://gorest.co.in/public/v2/users/"+jsonId,true);
        xhttp.setRequestHeader("Accept","application/json");
        xhttp.setRequestHeader("Content-Type","application/json");
        xhttp.setRequestHeader("Authorization","Bearer 4a6079d24c290e3c77f93afc7dd15b6445819e96c24fcb360c6cafb4b40dc9be");
        xhttp.send(jsonString);
        patchedData();
    }
    function patchedData(){
        element.parentElement.getElementsByClassName("sample-name")[0].readOnly=true;
        element.parentElement.getElementsByClassName("sample-email")[0].readOnly=true;  
        element.innerText = "Edit";
    }
}
function deleteJSONData(ele){ 
    var deletingId = ele.parentElement.getElementsByClassName("sample-id")[0].value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE","https://gorest.co.in/public/v2/users/"+deletingId,true);
    xhttp.setRequestHeader("accept", "application/JSON");
    xhttp.setRequestHeader("Authorization","Bearer 4a6079d24c290e3c77f93afc7dd15b6445819e96c24fcb360c6cafb4b40dc9be");
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 ){
        if(this.status == 204){
            alert("Data successfully deleted");
        }else{
            alert("check Status");
        }
        }
    }
}
function postData(){
    var addForm = document.getElementById("formContainer");
    addForm.classList.remove("form-container");
    addForm.style.display = "flex";
    addForm.style.position = "relative";
    addForm.style.justifyContent = "center";
    addForm.style.zIndex = "20";
    postJSONData();
}
function postJSONData(){
    var addingData={
         postingname : document.getElementById("nameInput").value,
         postingemail : document.getElementById("emailInput").value,
         gender : "Female",
         postingstatus : "active"
    }
    var postData = JSON.stringify(addingData);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","https://gorest.co.in/public/v2/users",true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.setRequestHeader("Authorization","Bearer 4a6079d24c290e3c77f93afc7dd15b6445819e96c24fcb360c6cafb4b40dc9be");
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 ){
        if(this.status == 201){
            alert("Data posted successfully");
        }else{
            alert("check for status and readystatus");
        }
    }
    }
    xhttp.send(postData);
    console.log(postData);
}