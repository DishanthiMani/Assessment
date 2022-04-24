document.cookie = ("Bearer=eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjI2NGViZjA0LWE1YTQtNDc2Ni1iMTkxLWM4NTUyNTk3MGJkZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjUwNjg1MDAwLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NTA2ODg2MDAsImlhdCI6MTY1MDY4NTAwMCwiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.F8FVjdb7SbLKf_x3Y8qsJH5Vri_wJYRF4lgOS0jVNlFNnc0Pn4PILQrUweSNmUkof21kn3HceNT7k8sXYX2CmaS89k0_2ukSMkjQr7U8FLnV6ClastQUT--PFGZlfzJnX1PeYTxCGr-dOOpsrGecf2zmUDLyDMf9k7BGrD3B1Fh06sKR3fgNlnVS9yKdyyHjJZv44Y40MB-sVq86BLkGkjzPuYq7mlpPONVXZt9OA4iwyTyClHvmEXpH5dYBsIqDeQGzvlL7YPFfnsnpaAt99xsQz0v5SbYEXWV4aDwd-rKkl5qkp0QVMmbvnOw3YG6zUPrseNJEW8DOnEcdVaUa6Q");
var id;
var indexPage = "http://localhost/expense/Assessment/html/index.html";

function load() {
 getEmployeeName();
}

function getEmployeeName() {

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost/ec/employees",true);
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Accept","application/JSON");
    xhttp.setRequestHeader("Authorization","Bearer "+ document.cookie.split("=")[1]);
    xhttp.setRequestHeader("identity",document.cookie.split("=")[1]);
    xhttp.send();
    xhttp.onload = function() {
        if(this.status == 200) { 
            var employeelist = JSON.parse(this. responseText);
           employeelist.dropdownList.forEach(employee => {
               var option = document.createElement("option");
               option.value = employee.id;
               var text = document.createTextNode(employee.name);
               option.appendChild(text);
               document.getElementById('selectName').appendChild(option);
           });
           getPaymentType();
        }
    }
    
}

 function getPaymentType() {

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","../paymenttype.json",true);
    xhttp.setRequestHeader("Accept","application/JSON");
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Authorization","Bearer"+ document.cookie.split("=")[1]);
    xhttp.setRequestHeader("identity",document.cookie.split("=")[1]);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            getCurrencyType();
            var paymentlist = JSON.parse(this.responseText);
            paymentlist.ledgerTemplates.forEach(paymenttype => {
                var option = document.createElement("option");
                option.value = paymenttype.id;
                var text = document.createTextNode(paymenttype.name);
                option.appendChild(text);
                document.getElementById("paymenttypeName").appendChild(option);
            });
        }
    }

}

function getCurrencyType() {

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost/ec/currencies", true);
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Accept","application/JSON");
    xhttp.setRequestHeader("Authorization","Bearer"+document.cookie.split("=")[1]);
    xhttp.setRequestHeader("identity",document.cookie.split("=")[1]);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
                paymentMethod();
                var currencies = JSON.parse(this.responseText);
                currencies.currencyList.forEach(currency =>{
                var option = document.createElement("option");
                option.value = currency.currencyCode;
                var text = document.createTextNode(currency.currencyName);
                option.appendChild(text);
                document.getElementById("currencyType").appendChild(option);
            });
        }
    }

}

function paymentMethod() {

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost/ec/paymentMethod",true);
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Accept","application/JSON");
    xhttp.setRequestHeader("Authorization","Bearer" +document.cookie.split("=")[1]);
    xhttp.setRequestHeader("identity",document.cookie.split("=")[1]);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            displayEditpage();
            var paymentmethod = JSON.parse(this.responseText);
            paymentmethod.dropdownList.forEach(method =>{
                var option = document.createElement("option");
                option.value = method.id;
                var text = document.createTextNode(method.name);
                option.appendChild(text);
                document.getElementById("paymentMethod").appendChild(option);
            });
        }
    }
}

function dateRestriction() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; 
    var yyyy = today.getFullYear();
    if(dd < 11) {
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
                mm = '0' + mm;
        }   
        today = yyyy + '-' + mm + '-' + dd;
        document.getElementById("paymentDate").setAttribute("max", today );
    }
    else {
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
                mm = '0' + mm;
        }
        today = yyyy + '-' + mm + '-' + 10;
        document.getElementById("paymentDate").setAttribute("max", today);   
    }
    // if (dd < 10) {
    //    dd = '0' + dd;
    // }
    // if (mm < 10) {
    //    mm = '0' + mm;
    // }    
    // today = yyyy + '-' + mm + '-' + dd;
    // document.getElementById("paymentDate").setAttribute("max", today);
}

function payoutCheckbox() {

    if(document.getElementById("payoutCheckbox").checked) {
        payoutCheckbox.value = "Yes";
        return true;
    }else {
        payoutCheckbox.value = "No";
        return false;
    }
}

function postJSONData() {

    var expenseData = {
        attachments : [],
        amount : parseFloat(document.getElementById("totalAmount").value),
        currency: {
            currencyCode : document.getElementById("currencyType").value,
        },
        employee : {
            userId : parseInt(document.getElementById("selectName").value),
        },
        paymentType : {
            id : parseInt(document.getElementById("paymenttypeName").value),
        },
        paymentMethod : {
            id : parseInt(document.getElementById("paymentMethod").value),
        },
        invoiceDate : document.getElementById("paymentDate").value,
        name : document.getElementById("expenseType").value,  
        notes: document.getElementById("expenseNotes").value,
        payoutWithSalary : payoutCheckbox(),
        lineItems : [],
        dimensions :[]   
    }

    var expensePostData = JSON.stringify(expenseData);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://localhost/ec/expense",true);
    xhttp.setRequestHeader("companyID","14");
    xhttp.setRequestHeader("Authorization","Bearer "+document.cookie.split("=")[1]);
    xhttp.setRequestHeader("content-type","application/JSON");
    xhttp.setRequestHeader("identity","Bearer "+document.cookie.split("=")[1]);
    xhttp.send(expensePostData);
    xhttp.onload = function(){
        if(this.readyState == 4 && this.status == 200){
                getExpenseData();
        }
    }
    
}

function getExpenseData() {

                   var display = new URL("http://localhost/expense/Assessment/html/expensepage.html");
                   window.location.href = display;
}

function loadExpenseData() {

    var stringData = JSON.stringify({});
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://localhost/ec/expenses/stage/Inbox?count=10&offset=0",true);
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Accept","application/JSON");
    xhttp.setRequestHeader("content-type","application/JSON");
    xhttp.setRequestHeader("Authorization","Bearer "+document.cookie.split("=")[1]);
    xhttp.setRequestHeader("identity","Bearer "+document.cookie.split("=")[1]);
    xhttp.send(stringData);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                var require = JSON.parse(xhttp.responseText);
                for(i=0;i<require.expenses.length;i++){
                    var formDiv = document.createElement("div");
                    formDiv.setAttribute("class","form-div");
                    formDiv.setAttribute("id","form-div"+i);
                    var employee = document.createElement("label");
                    employee.setAttribute("for","employee-Id"+i);
                    employee.innerText = "Employee ID";
                    formDiv.append(employee);
                    employee.style.display = "none";
                    var employeeInput = document.createElement("input");
                    employeeInput.setAttribute("class","id-input");
                    employeeInput.setAttribute("id","id-input"+i);
                    employeeInput.value = require.expenses[i].id;
                    formDiv.append(employeeInput);
                    employeeInput.style.display = "none";
                    var expenseName = document.createElement("label");
                    expenseName.setAttribute("for","expense-name");
                    expenseName.innerText = "Expense Name";
                    formDiv.append(expenseName);
                    var expenseInput = document.createElement("input");
                    expenseInput.setAttribute("id","expense-name"+i);
                    expenseInput.setAttribute("class","expense-name");
                    expenseInput.value = require.expenses[i].name;
                    expenseInput.readOnly = "true";
                    formDiv.append(expenseInput);
                    var employeeName = document.createElement("label");
                    employeeName.setAttribute("for","employee-name");
                    employeeName.innerText = "Employee";
                    formDiv.append(employeeName);
                    var nameInput = document.createElement("input");
                    nameInput.setAttribute("class","name-input");
                    nameInput.setAttribute("id","name-input"+i);
                    nameInput.value = require.expenses[i].employee.name;
                    nameInput.readOnly = "true";
                    formDiv.append(nameInput);
                    var paymentdate = document.createElement("label");
                    paymentdate.setAttribute("for","paymentdate");
                    paymentdate.innerText = "Payment Date";
                    formDiv.append(paymentdate);
                    var dateInput = document.createElement("input");
                    dateInput.setAttribute("class","date-input");
                    dateInput.setAttribute("id","dateInput"+i);
                    dateInput.value = dateFormat(require.expenses[i].invoiceDate.split("T")[0]);
                    dateInput.readOnly = "true";
                    formDiv.append(dateInput);
                    var total = document.createElement("label");
                    total.setAttribute("for","totalamount");
                    total.innerText = "Amount";
                    formDiv.append(total);
                    var totalInput = document.createElement("input");
                    totalInput.setAttribute("class","total-amount");
                    totalInput.setAttribute("id","total-amount"+i);
                    totalInput.value = require.expenses[i].amount;
                    totalInput.readOnly = "true";
                    formDiv.append(totalInput);
                    var childDiv = document.createElement("div");
                    childDiv.setAttribute("class","button-div");
                    formDiv.appendChild(childDiv);
                    var editButton = document.createElement("button");
                    editButton.setAttribute("id","editButton"+i);
                    editButton.setAttribute("class","edit-button");
                    editButton.setAttribute("onclick","editData(this)");
                    editButton.innerText = "Edit"
                    childDiv.append(editButton);
                    var deleteButton = document.createElement("button");
                    deleteButton.setAttribute("id","deleteButton"+i);
                    deleteButton.setAttribute("class","delete-button");
                    deleteButton.setAttribute("onclick","confirmAction()");
                    deleteButton.innerText = "Delete"
                    childDiv.append(deleteButton);
                    document.getElementsByClassName("expense-cards")[0].appendChild(formDiv);
                }
            }
        }
    }
   
}

function confirmAction() {

    var confirmation = confirm("Are you sure to delete?")
    if(confirmation){
        deleteData();
    }
}

function deleteData() {

    var deleteData = document.getElementsByClassName("id-input")[0].value;
    var deleteReq = new XMLHttpRequest();
    deleteReq.open("DELETE","http://localhost/ec/expense/"+deleteData,true);
    deleteReq.setRequestHeader("Accept","application/JSON");
    deleteReq.setRequestHeader("companyId","14");
    deleteReq.setRequestHeader("Authorization","Bearer "+document.cookie.split("=")[1]);
    deleteReq.setRequestHeader("identity","Bearer "+document.cookie.split("=")[1]);
    deleteReq.send();
    deleteReq.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                var response = JSON.parse(this.responseText);
                alert(response.message);
                document.getElementsByClassName("expense-cards")[0].innerHTML = "";
                loadExpenseData();
            }
        }
    }
}

function dateFormat(dateOfPayment) {

    var dateObject = new Date(dateOfPayment);
    var dd = dateObject.getDate();
    var mm = dateObject.getMonth()+1;
    var year = dateObject.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
            mm = '0' + mm;
    }
    return mm + "-" + dd + "-" + year;
    
}

function editData(req) {

    var editdata = req.parentElement.parentElement.getElementsByClassName("id-input")[0].value;
    var url = new URL(indexPage+`?id=${editdata}`);
    window.location.href = url;
}

function displayEditpage() {

    var param = new URLSearchParams(window.location.search);
    if(param.get("id") != null ) {
        id = param.get("id");
        document.getElementById("saveData").value = "Update";
        var expenseid = param.get("id");
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET","http://localhost/ec/expenses/"+expenseid,"true");
        xhttp.setRequestHeader("companyId","14");
        xhttp.setRequestHeader("Authorization","Bearer "+document.cookie.split("=")[1]);
        xhttp.setRequestHeader("identity", "Bearer "+document.cookie.split("=")[1]);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4) {
                if(this.status == 200) {
                    var response = JSON.parse(this.responseText);
                    document.getElementById("selectName").value = response.expense.employee.userId;
                    document.getElementById("expenseType").value = response.expense.name;
                    document.getElementById("paymenttypeName").value = parseInt( response.expense.paymentType.id);
                    document.getElementById("paymentMethod").value = response.expense.paymentMethod.id;
                    document.getElementById("paymentDate").value = response.expense.invoiceDate.split("T")[0];
                    document.getElementById("payoutCheckbox").checked = response.expense.payoutWithSalary;
                    document.getElementById("expenseNotes").value = response.expense.notes;
                    document.getElementById("totalAmount").value = response.expense.amount;
                    fixedValue();
                    document.getElementById("currencyType").value = response.expense.currency.currencyCode;  
                }
            }
        }
    }
}

function putMethod() {

    var putReq = new XMLHttpRequest();
    putReq.open("PUT","http://localhost/ec/expense?id="+id,"true");
    putReq.setRequestHeader("companyId","14");
    putReq.setRequestHeader("content-type","application/JSON");
    putReq.setRequestHeader("Authorization","Bearer "+document.cookie.split("=")[1]);
    var putData = {
        attachments : [],
        amount : document.getElementById("totalAmount").value,
        currency: {
            currencyCode : document.getElementById("currencyType").value,
        },
        employee : {
            userId : parseInt(document.getElementById("selectName").value),
        },
        paymentType : {
            id : parseInt(document.getElementById("paymenttypeName").value),
        },
        paymentMethod : {
            id : parseInt(document.getElementById("paymentMethod").value),
        },
        invoiceDate : document.getElementById("paymentDate").value,
        name : document.getElementById("expenseType").value,  
        notes:document.getElementById("expenseNotes").value,
        payoutWithSalary : payoutCheckbox(),
        lineItems : [],
        dimensions :[]   
    }
    putReq.onreadystatechange = function() {
        if(this.readyState == 4) {
            if(this.status == 200) {
                var response = JSON.parse(this.responseText);
                alert(response.message);
                getExpenseData();
            }else {
                alert(response.message);
                postJSONData();
            }
        }
    }
    var putstringData = JSON.stringify(putData);
    putReq.send(putstringData);   
}

function fixedValue() {

    var paidAmount = document.getElementById("totalAmount").value;
    var amountPaid = parseFloat(paidAmount).toFixed(2);
    document.getElementById("totalAmount").value = amountPaid;
}

function formValidation() {
    // console.log("formValidation");
    // var nameField = document.getElementById("selectName");
    // var ExpenseNameField = document.getElementById("expenseType");
    // var paymentTypeField = document.getElementById("paymenttypeName");
    // var paymentMethodField = document.getElementById("paymentMethod");
    // var paymentDateField = document.getElementById("paymentDate");
    // var paymentAmountField = document.getElementById("totalAmount");
    // var currencyTypeField = document.getElementById("currencyType");

    // if(!nameField.checkValidity()) {
    //     var parentForm = document.getElementById("selectName").value;
    //     var nameSpan = document.createElement("span");
    //     nameSpan.innerText = "Select Employee Name";
    //     nameSpan.style.color = "red";
    //     parentForm.append(nameSpan);
    // } 
    // if(!ExpenseNameField.checkValidity()) {
    //     alert("Enter Expense Type");
    // }
    // if(!paymentTypeField.checkValidity()) {
    //     alert("Select Payment Type");
    // }
    // if(!paymentMethodField.checkValidity()) {
    //     alert("Select Payment Method");
    // }

    
    var formValidity = document.getElementById("expenseForm")
    if(formValidity.checkValidity()) {
        postJSONData();
    }else {
        alert("Fill required fields");
    }

}

function expenseName() {
    var nameReg = /^[a-zA-Z 0-9\.@#&]{4,15}$/;
    var expenseNameInput = document.getElementById("expenseType").value;
    var expenseSpan = document.getElementById("nameError");
    if(nameReg.test(expenseNameInput)) {
        expenseSpan.classList.add("name-error");
    }else {
        expenseSpan.classList.remove("name-error");
        expenseSpan.style.color = "red";
    }
}

function notesLimit() {
    var notesReg = /^[a-zA-Z 0-9\.@&#]{4,250}$/;
    var notesInput = document.getElementById("expenseNotes").value;
    var notesSpan = document.getElementById("notesError")
    if(notesReg.test(notesInput)){
            notesSpan.classList.add("notes-error");  
    }   else {
            notesSpan.classList.remove("notes-error");
            notesSpan.style.color = "red"; 
             
        }
}

function editAndSave(element) {
    if(element.value == "Save") {
          formValidation(); 
           
    }   else {
            putMethod();
        }

}

function addNewData() {

    var url = new URL(indexPage);
    window.location.href = url;
}

function cancelEdit() {
    var url = new URL("http://localhost/expense/Assessment/html/expensepage.html");
    window.location.href = url;
}

