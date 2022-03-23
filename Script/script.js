function myFunction() {
    var password = document.getElementById("pass");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
  function toggle(){
    var togglePassword = document.querySelector('#toggle');
    var password = document.querySelector('#pword');
    var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.className = togglePassword.className === "fa fa-eye-slash"?"fa fa-eye":"fa fa-eye-slash" ;
  }
  function confirmtoggle(){
    var togglecPassword = document.querySelector('#confirmtoggle');
    var confirmpassword = document.querySelector('#confirmpass');
    var type = confirmpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmpassword.setAttribute('type', type);
    console.log(togglecPassword.className)
    togglecPassword.className = togglecPassword.className == "fa fa-eye-slash"?"fa fa-eye":"fa fa-eye-slash" ;
  }
function validate(){
/*var name = document.getElementById("name").value;
var dob = document.getElementById("dob").value;
var email = document.getElementById("email").value;
var mobile = document.getElementById("mobile").value;
var password = document.getElementById("pword").value;
var confirmpassword = document.getElementById("confirmpass").value;*/
var status = document.getElementById('male').checked?"male":"female";
var validation = true;
if(!document.forms.checkValidity()){
    validation = false;
}
}
function regexp(){
        var nametest = /^[A-z]{,25}$/gi;
        var name = document.getElementById("name").value;
        var namevalidate = document.getElementById("nameerror");
        if(nametest.test(name))
        {
            namevalidate.classList.add("errormessage");
        }else{
           namevalidate.classList.remove("errormessage");
            namevalidate.style.color = "red";
        }

    }
    var emailtest = /^[a-z0-9\._-]{4,15}@[a-z]{2,6}\.[a-z]{2,4}$/;
    var email = document.getElementById("email");
    var emailvalidate = document.getElementById("emailerror");
    if(emailtest.test(email))
    {
        emailvalidate.classList.add("errormessage");
    }else{
        emailvalidate.classList.remove("errormessage");
        emailvalidate.style.color = "red";
    }


function booking(){
var checkbox = document.getElementById("check");
var save=document.getElementById("savedetails");
save.disabled=checkbox.checked?false:true;

}