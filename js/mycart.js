UsersStorage = window.localStorage;
myStorage = window.sessionStorage;
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
alert("local storage is there");
users = JSON.parse(localStorage.getItem('users'));
console.log(users);


alert("sessionStorage is there");
loginedUser = JSON.parse(sessionStorage.getItem('loginedUser'));
if (loginedUser == null) {
    alert("you should be log in")
}

var mobileArr;
userId = loginedUser[0].id;
for (var x = 0; x < users.length; x++) {
    if (userId == users[x].id) {
        mobileArr = users[x].order;
    }
}

let resArr = mobileArr;
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
