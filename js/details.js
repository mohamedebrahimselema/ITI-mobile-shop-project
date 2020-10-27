UsersStorage = window.localStorage;
myStorage = window.sessionStorage;

var users = [{
    id: 0,
    username: "",
    password: "",
    order: []
}];
var loginedUser;
if (storageAvailable('localStorage')) {
    alert("local storage is there");
    users = JSON.parse(localStorage.getItem('users'));
}
else {
    alert("no local storage ");
}

if (storageAvailable('sessionStorage')) {
    alert("sessionStorage is there");
    loginedUser = JSON.parse(sessionStorage.getItem('loginedUser'));
}
else {
    alert("no sessionStorage storage ");
}
var productIndex = JSON.parse(localStorage.getItem('productIndex'));

$(document).ready(function () {
    function addProduct() {

        
        $.ajax({
            method: "GET",
            url: "/js/Api.txt",
            error: function () {
                $("body").html("<p>An error has occurred</p>");
            },
            success: function (responsBody) {
                let resArr = JSON.parse(responsBody);
                let content = "";
                console.log(resArr);
                productIndex = JSON.parse(localStorage.getItem('productIndex'));
                for (var x = 0; x < users.length; x++) {
                    if (loginedUser[0].id == users[x].id) {
                        users[x].order.push(resArr[productIndex]);
                    }
                }
            },
        });

    }
        $("#addProduct").click(addProduct);
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