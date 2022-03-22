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
    togglePassword.className = togglePassword.className = "fa fa-eye-slash"?"fa fa-eye":"fa fa-eye-slash" ;
  }
  function confirmtoggle(){
    var togglecPassword = document.querySelector('#confirmtoggle');
    var confirmpassword = document.querySelector('#confirmpass');
    var typ = confirmpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmpassword.setAttribute('type', typ);
    togglecPassword.className = togglecPassword.className = "fa fa-eye-slash"?"fa fa-eye":"fa fa-eye-slash" ;
  }
function validate(){
var name = document.getElementById("name").value;
var dob = document.getElementById("dob").value;
var email = document.getElementById("email").value;
var mobile = document.getElementById("mobile").value;
var password = document.getElementById("pword").value;
var confirmpassword = document.getElementById("confirmpass").value;
var status = document.getElementById('Married').checked?"Married":"Single";
var validation = true;
if(!document.forms[0].checkValidity()){
    validation = false;
}
}
function regexp(){
    function testname(){
        var nametest = name.match(/^[A-z]{,15}/gi);
        if(nametest= name)

    }

}
function booking(){
var checkbox = document.getElementById("check");
var save=document.getElementById("savedetails");
save.disabled=checkbox.checked?false:true;
}