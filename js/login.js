UsersStorage = window.localStorage;
myStorage = window.sessionStorage;

let usernameInput = "s";
let passwordInput = 1;
var users = [{
    id: 0,
    username: "",
    password: "",
    order: []
}];
var loginedUser = {
    id: 0,
    username: "",
    password: "",
    order: []
};
if (storageAvailable('localStorage')) {
      alert("local storage is there");
    users = JSON.parse(localStorage.getItem('users'));
    console.log(users);
}
else {
    alert("no local storage ");
}

//users.setAttribute('id', this.id++);

$(document).ready(function () {
function signin() {
    var nameKey = usernameInput;
    var password = passwordInput;

    var loginfailed = true;
   
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === nameKey && users[i].password === password) {
            alert("user name and password is correct");
            loginedUser = [{
                id: users[i].id,
                username: users[i].username,
                password: users[i].password,
                order: users[i].order
            }];
            myStorage.setItem('loginedUser', JSON.stringify(loginedUser));
            console.log(`user name is ${users[i].username}`);

            loginfailed = false;
            openStore();
            break;
        }
    }
    if (loginfailed) {
        alert("user name and password is wrong");
        console.log("user name and password is wrong");
    }

}


    $("#login-anchor").click(signin);
});



function openStore() {
    open("../store.html");
}






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