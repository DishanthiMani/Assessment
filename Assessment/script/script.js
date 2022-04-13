document.cookie = ("Bearer=eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImM4ZDcxNjljLTVkYzktNGEyYS1iNjhhLWFlYmEyOWYxYzIwNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ5Njc3MjEyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NDk2ODA4MTIsImlhdCI6MTY0OTY3NzIxMiwiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.MPVs1n2kWidMTlCpXtLzY3NzcnpWZcI3jrEC7WptS6LjRvcfmOC_vr-woTA7LhfBwc96rvuv9pkArX4IVsBCn0IXYL2ynWUgpTYRMKxGM7bLa0mbiQiWScq6-gTNtfrzR835z32o_EwpZL2D2GkAqjY1Vuaizc7D5ZMF9_hyhWOipwXN7BRGSrepD-pScOBl2tkbsPeSig-K4In6b-C9BbQks6GHVoDvCgV5rjBLSoz3xlRXkODz5ZeP-av4vt6H8JJUu3vVteXi9-QxroMjVOHQ6n3KBPznHz_fsZx0uBXn-15ymHeobBD7x37AI7cIyC-yQ7u4GY-_eYHDhbe9dQ");
var id;

async function getEmployeeName(){

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET","http://localhost/ec/employees",true);
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Accept","application/JSON");
    xhttp.setRequestHeader("Authorization","Bearer "+ document.cookie.split("=")[1]);
    xhttp.setRequestHeader("identity",document.cookie.split("=")[1]);
    xhttp.send();
    xhttp.onload = function(){
        if(this.status == 200) { 
            var employeelist = JSON.parse(this. responseText);
           employeelist.dropdownList.forEach(employee => {
               var option = document.createElement("option");
               option.value = employee.id;
               var text = document.createTextNode(employee.name);
               option.appendChild(text);
               document.getElementById('selectName').appendChild(option);
           });
        }
    }
    
}
async function getPaymentType(){

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET","../paymenttype.json",true);
    xhttp.setRequestHeader("Accept","application/JSON");
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Authorization","Bearer"+ document.cookie.split("=")[1]);
    xhttp.setRequestHeader("identity",document.cookie.split("=")[1]);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            var paymentlist = JSON.parse(this.responseText);
            paymentlist.ledgerTemplates.forEach(paymenttype =>{
                var option = document.createElement("option");
                option.value = paymenttype.id;
                var text = document.createTextNode(paymenttype.name);
                option.appendChild(text);
                document.getElementById("paymenttypeName").appendChild(option);
            });
        }
    }

}
async function getCurrencyType(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost/ec/currencies", true);
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Accept","application/JSON");
    xhttp.setRequestHeader("Authorization","Bearer"+document.cookie.split("=")[1]);
    xhttp.setRequestHeader("identity",document.cookie.split("=")[1]);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
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
async function paymentMethod(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost/ec/paymentMethod",true);
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Accept","application/JSON");
    xhttp.setRequestHeader("Authorization","Bearer" +document.cookie.split("=")[1]);
    xhttp.setRequestHeader("identity",document.cookie.split("=")[1]);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
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
function payoutCheckbox(){
    if(document.getElementById("payoutCheckbox").checked){
        payoutCheckbox.value = "Yes";
        return true;
    }else{
        payoutCheckbox.value = "No";
        return false;
    }
}
function postJSONData(){
    var expenseData = {
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
        notes: "",
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
function getExpenseData(){
                   var display = new URL("http://localhost/expense/html/expensepage.html");
                   window.location.href = display;
}
function loadExpenseData(){
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
                    dateInput.setAttribute("class","dateInput");
                    dateInput.setAttribute("id","dateInput"+i);
                    dateInput.value = require.expenses[i].invoiceDate.split("T")[0];
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
                    deleteButton.setAttribute("onclick","deleteData(this)");
                    deleteButton.innerText = "Delete"
                    childDiv.append(deleteButton);
                    document.getElementsByClassName("expense-cards")[0].appendChild(formDiv);
                }
            }
        }
    }
}
function deleteData(element){
    var deleteData = element.parentElement.parentElement.getElementsByClassName("id-input")[0].value;
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
                alert("Data deleted successfully");
            document.getElementsByClassName("expense-cards")[0].innerHTML = "";
            loadExpenseData();
        }
        }
    }
}
function editData(req){
    var editdata = req.parentElement.parentElement.getElementsByClassName("id-input")[0].value;
    var url = new URL(`http://localhost/expense/html/index.html?id=${editdata}`);
    window.location.href = url;
}
function displayEditpage(){
    var param = new URLSearchParams(window.location.search);
    if(param.get("id") != null ){
        id = param.get("id");
        document.getElementById("saveData").value = "Edit";
        var expenseid = param.get("id");
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET","http://localhost/ec/expenses/"+expenseid,"true");
        xhttp.setRequestHeader("companyId","14");
        xhttp.setRequestHeader("Authorization","Bearer "+document.cookie.split("=")[1]);
        xhttp.setRequestHeader("identity", "Bearer "+document.cookie.split("=")[1]);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){
                    var response = JSON.parse(this.responseText);
                    document.getElementById("selectName").value = response.expense.employee.userId;
                    document.getElementById("expenseType").value = response.expense.name;
                    document.getElementById("paymenttypeName").value = parseInt( response.expense.paymentType.id);
                    document.getElementById("paymentMethod").value = response.expense.paymentMethod.id;
                    document.getElementById("paymentDate").value = response.expense.invoiceDate.split("T")[0];
                    document.getElementById("payoutCheckbox").value = response.expense.payoutWithSalary;
                    document.getElementById("totalAmount").value = response.expense.amount;
                    document.getElementById("currencyType").value = response.expense.currency.currencyCode;  
                }
            }
        }
    }
}
function putMethod(){

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
        "employee" : {
            "userId" : parseInt(document.getElementById("selectName").value),
        },
        paymentType : {
            id : parseInt(document.getElementById("paymenttypeName").value),
        },
        paymentMethod : {
            id : parseInt(document.getElementById("paymentMethod").value),
        },
        invoiceDate : document.getElementById("paymentDate").value,
        name : document.getElementById("expenseType").value,  
        notes: "",
        payoutWithSalary : payoutCheckbox(),
        lineItems : [],
        dimensions :[]   
    }
    putReq.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                alert("Data edited succesfully");
                getExpenseData();
            }
        }
    }
    var putstringData = JSON.stringify(putData);
    putReq.send(putstringData);   
}
function editAndSave(element){
    if(element.value == "Save"){
        postJSONData();
    }else{
        putMethod();
    }

}
function addNewData(){
    var url = new URL("http://localhost/expense/html/index.html");
    window.location.href = url;
}
function cancelEdit(){
    var url = new URL("http://localhost/expense/html/expensepage.html");
    window.location.href = url;
}
