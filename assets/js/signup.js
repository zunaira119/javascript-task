
let temp=[];
const storeData = (e) => {
    e.preventDefault();
    let temp1 = JSON.parse(localStorage.getItem('userTable'));
console.log(temp1);
     $.getJSON("http://jsonip.com/?callback=?", function (data) {
    let arrdata = {
        id: new Date().getUTCMilliseconds(),
        userName:document.getElementById('userName').value,
        password:document.getElementById('password').value,
        email:document.getElementById('email').value,
        phone:document.getElementById('phone').value,
        user_ip:data.ip,
        User_agent:navigator.userAgent,
        check:false,
    }
    temp.push(arrdata);
    temp1.push(temp);
    document.forms[0].reset();
localStorage.setItem('userTable' , JSON.stringify(temp1));
 window.location = "file:///Users/zunairajaved/Desktop/projects/task2/signin.html";
 alert("Register successfully");
});
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signup').addEventListener('click',storeData);

});
  function logout()
  {
    sessionStorage.clear();
    window.location = "file:///Users/zunairajaved/Desktop/projects/task2/signin.html";

  }