UsersStorage = window.localStorage;

if (storageAvailable('localStorage')) {
  //  alert("local storage is there");
}
else {
  //  alert("no local storage ");
}
var user =  {
    id: 0,
    username: "",
    password: "",
    order: []
}

var users = [{
    id: 0,
    username: "",
    password: "",
    order: []
}];

//users.setAttribute('id', this.id++);




function register(nameKey, password) {
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
}


function login(nameKey, password) {
    var loginfailed = true;
   
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === nameKey && users[i].password === password) {
            alert("user name and password is correct");
            console.log("user name and password is correct");
            loginfailed = false;
            break;
        }
    }
    if (loginfailed) {
        alert("user name and password is wrong");
        console.log("user name and password is wrong");
    }

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