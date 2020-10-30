const emailRegx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRGEX = /^(\d+-?)+\d+$/;

$(document).ready(function () {
  
function solution() {
    // person option is checked
    $("#type_person").change(function () {
        if (this.checked) {
            //Do stuff
            alert("type person is checked");
            if ($("#first_name").val().length === 0 || $("#last_name").val().length === 0) {
                alert("frist name and last name should be non empty");
                return false;
            }
            if (!(emailRegx.test(String($("#email").val()).toLowerCase()))) {
                alert("email : is fault");
                return false;
            }
        }
    });

    // company option is checked
    $("#type_company").change(function () {
        if (this.checked) {
            //Do stuff
            alert("type company is checked");
            if ($("#company_name").val().length === 0) {
                alert("company name should be non empty");
                return false;
            }

            if ($("#phone").val().length === 0) {
                alert("phone should be non empty");
                return false;
            } else if ($("#phone").val().length < 6) {
                alert("phone should have at least 6 digit");
                return false;
            } else {
                if (phoneRGEX.test($("#phone").val())) {
                    alert("phone: is correct");
                    return true;
                } else {
                    return false;
                }
            }
        }
    });

}