document.cookie = ("Bearer=eyJraWQiOiJhZm5VVTd6STJzdk1ISEcydkl3eE44enlxU0NXck1NNSttUDUxYTZcL0Uydz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJhdWQiOiI3dDgwNzYzN3Q5bmdwYmI1ZHZrOWIwbXV0NSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjhjYmJkNDM5LTcwZTgtNGUzYi1hM2Q2LWQyODEwMzllM2JmYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ5MzEwMTEzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tXC9ldS1ub3J0aC0xXzZzMGFMblZFRSIsImNvZ25pdG86dXNlcm5hbWUiOiJjNzRjYjg0OS0xNDQ5LTQ0YWUtYmU3YS0wNGU0OTRhNDczYmIiLCJleHAiOjE2NDkzMzk3NzUsImlhdCI6MTY0OTMzNjE3NSwiZW1haWwiOiJnb3V0aGFtQHppcml1cy5pbiJ9.A7I2JYRAuuQJ4ytbIiVGvnPMIKoMLCVQAUSSZWX7OIySaDNEYUks9RD43N0Lrol8WM3ttWyzNeUrhGxCil0bv2Ns4mxJr98pfoBvfi-y3a12oqD3kfbaEVMs60uUONIjTMIcRWZhPkuSDC_gFT4FKEHxDbsKzjqTPXZ-IzQuul-3W8Wyf4EmWG-9mc0FWiFFUdatVkQhiTVpYGepfdDtAYYjy4m37_t-AElV1-IPMtqkKwBFD7Hbn_a9U3HgE2g2S5JraMI3aqH3Ek71G1kkKxWD_HXGl_5OwcuaghfYRBVfzWbEwGzOHkqfPQakokCwG0T7jDD04YYEMVLjRsZPxw");

getEmployeeName();
getPaymentType();
function getEmployeeName(){

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
               var text = document.createTextNode(employee.name);
               option.appendChild(text);
               document.getElementById('selectName').appendChild(option);
           });
        }
    }
    
}
function getPaymentType(){

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET","http://localhost/ec/paymentMethod",true);
    //xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Accept","application/JSON");
    xhttp.setRequestHeader("companyId","14");
    xhttp.setRequestHeader("Authorization","Bearer"+ document.cookie.split("=")[1]);
    xhttp.setRequestHeader("identity",document.cookie.split("=")[1]);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.status == 200){
            var paymentlist = JSON.parse(this.responseText);
            paymentlist.ledgerTemplates.forEach(paymenttype =>{
                var option = document.createElement("option");
                var text = document.createTextNode(paymenttype.name);
                option.appendChild(text);
                document.getElementById("paymenttypeName").appendChild(option);
            });
        }
    }

}

