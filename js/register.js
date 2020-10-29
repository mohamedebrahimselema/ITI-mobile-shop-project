UsersStorage = window.localStorage;
//window.onload = function () {
//    document.getElementById("register-anchor").onclick = function () {
//        validate()
//    };
//}

let users = [{
    id: 0,
    username: "",
    password: "",
    order: []
}];

if (storageAvailable('localStorage')) {
    alert("local storage is there");
    users = JSON.parse(localStorage.getItem('users'));
}
else {
    alert("no local storage ");
}

//users.setAttribute('id', this.id++);


$(document).ready(function () {
    function register() {

        var nameKey = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var isExist = false;
        var len  = users.length;
       

        for (var i = 0; i < len; i++) {
            if (users[i].username == nameKey) {
                alert("user is already exist");
                console.log("user is already exist");
                isExist = true;
            }

        }
        if (!isExist) {
            adduser(nameKey, password, len);
        }

    }

    $("#register-anchor").click(register);
});



function adduser(nameKey, password, len) {

    user = {
        id: len,
        username: nameKey,
        password: password,
        order: [],
        isOnline: false
    }
    users[len] = user;
    alert("user is registered");
    console.log("user is registered");
    UsersStorage.setItem('users', JSON.stringify(users));
    window.location.href = "login.html";
}



//function validate() {
//    var username = document.getElementById('username').value;
//    var phoneNumber = document.getElementById('PhoneNumber').value;
//    var userId = document.getElementById('userID').value;
//    var password = document.getElementById('password').value;
//    var repeatpassword = document.getElementById('repeatpassword').value;
//    var email = document.getElementById('Email').value;

//    var userNameResult;
//    var userNameRegx = /^[a-zA-Z0-9_]+$/;
//    var strongPasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//    var phoneRGEX = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
//    var IdReg = /^\d+$/;

//    if (!(password === repeatpassword)) {
//        alert("password doesn't match retype password");
//    } else if (!(strongPasswordRegex.test(password))) {

//        alert("password  is weak");

//    }

//    const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    if (!(emailRegx.test(String(email).toLowerCase()))) {
//        alert("email : is fault");
//    }

//    if (username.length > 10) {
//        userNameResult = userNameRegx.test(username);
//        alert("user name:  " + userNameResult);
//    } else {
//        alert("user name:  less than 10");
//    }


//    var IdResult = IdReg.test(userId);
//    alert("Id :" + IdResult);


//    var phoneResult = phoneRGEX.test(phoneNumber);
//    alert("phone:" + phoneResult);
//}











function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}