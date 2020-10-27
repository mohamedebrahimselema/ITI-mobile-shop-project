//change username using  js  from local storage
//$(".placeholder_user p").text("Hello " + localStorage.getItem("usernameKey"));
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
    users = JSON.parse(sessionStorage.getItem('users'));
}
else {
    alert("no sessionStorage storage ");
}


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
        for (let i = 0; i < resArr.length; i++) {
            content += `
             <div class="card mt-2 ml-2" style="width: 15rem;">
                  <img class="card-img-top" src="./img/phone.jpg" alt="Card image cap" style=" width: auto;  height: 150px;" >
                   <hr>
              <div class="card-body text-center">
                 <h5 class="card-title" style="font-size: 1rem;">${resArr[i].modelName}</h5>
                        <p class="card-text text-left" style="font-size: 0.7rem;">${resArr[i].Desc}</p>
                       <button id="more" type="submit" class="btn  btn-block" onclick="productDetails(${i})">More</button>
                    </div>
                </div>
              </div>
      
          `;
        }
        $("#item_cards").append(content)
    },
});


function productDetails(productnumber) {
    localStorage.setItem("productnumber", productnumber);
    open("../details.html")
    console.log(details)
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