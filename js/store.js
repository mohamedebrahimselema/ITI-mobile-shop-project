//change username using  js  from local storage
//$(".placeholder_user p").text("Hello " + localStorage.getItem("usernameKey"));


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
                       <button id="more" type="submit" class="btn  btn-block">More</button>
                    </div>
                </div>
              </div>
      
          `;
        }
        $("#item_cards").append(content)
    },
});
