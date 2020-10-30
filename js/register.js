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


function register() {

    var nameKey = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var isExist = false;
    var len = users.length;


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


$(document).ready(function () {

    function validation() {

        if ($("#username").val().length === 0) {
            alert("username should be non empty");
        } else if (!(emailRegx.test(String($("#username").val()).toLowerCase()))) {
            alert("email : is fault");
        } else if ($("#password").val().length < 6) {
            alert("password should be more than 6 letters");
        } else {
            register();
        }


    }
    $("#register-anchor").click(validation);
});











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