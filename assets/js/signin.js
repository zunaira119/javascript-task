
let mydata = JSON.parse(localStorage.getItem('userTable'));

function validateLogin() {

    var username = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
for(var i=0; i<mydata.length; i++){

    if(username == mydata[i].userName && password == mydata[i].password){
      localStorage.setItem('loginInfo' , JSON.stringify(mydata[i]));
      sessionStorage.setItem(mydata[i].userName,mydata[i].password );
      alert("Login successfully");

      if (mydata[i].check == true) {
        window.location = "file:///Users/zunairajaved/Desktop/projects/task2/listing.html";
        }
          else
          {
             window.location = "file:///Users/zunairajaved/Desktop/projects/task2/profile.html";
          }
        }
        
    }
alert('record not found');
}