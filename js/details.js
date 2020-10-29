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
    if (loginedUser == null) {
        alert("you should be log in")
    }
}
else {
    alert("no sessionStorage storage ");
}
var productIndex = JSON.parse(localStorage.getItem('productIndex'));

$(document).ready(function () {
    function addProduct() {
        if (loginedUser == null) {
            alert("you should be log in")
        } else { 
        $.ajax({
            method: "GET",
            url: "/js/Api.txt",
            error: function () {
                $("body").html("<p>An error has occurred</p>");
            },
            success: function (responsBody) {
                let resArr = JSON.parse(responsBody);
                
                console.log(resArr);
                productIndex = JSON.parse(localStorage.getItem('productIndex'));
                for (var x = 0; x < users.length; x++) {
                    if (loginedUser[0].id == users[x].id) {
                        users[x].order.push(resArr[productIndex]);
                        UsersStorage.setItem('users', JSON.stringify(users));

                        alert("the product is add to your ");
                    }
                }
            },
        });
        }

    }
        $("#addProduct").click(addProduct);
});

$.ajax({
            method: "GET",
            url: "/js/Api.txt",
            error: function () {
                $("body").html("<p>An error has occurred</p>");
            },
            success: function (responsBody) {
                let resArr = JSON.parse(responsBody);
                mCLickedLap = resArr[productIndex]
                $(".detail__model--name p").text(mCLickedLap.Desc)
                $(".detail__model--name label").text(`By ${mCLickedLap.modelName}`)
                $(".detail__model--img img").attr("src", mCLickedLap.lapImg);
                $(".detail__info ul li:nth-child(1)").text(mCLickedLap.Desc)
                $(".detail__info ul li:nth-child(2)").text(`Type : ${mCLickedLap.type}`)
                $(".detail__info ul li:nth-child(3)").text(`Price : ${mCLickedLap.price}`)
                $(".detail__info ul li:nth-child(4)").text(`Review : ${mCLickedLap.review}`)

            },
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