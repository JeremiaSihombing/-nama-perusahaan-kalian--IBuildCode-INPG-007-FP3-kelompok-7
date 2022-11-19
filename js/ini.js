var butMess = document.getElementById("butMess")
butMess.addEventListener("click", function(event) {
    var email = $("#inEmail").val()
    var subject = $("#inSubject").val()
    var mess = $("#inMess").val()
        if (email == "" && subject == "" && mess == "") {
            alert ("please fill out the form first!")
        } else {
            alert ("Are you sure you want to send a message with : \nEmail : " + email + "\nSubject : " + subject + "\nMessage : " + mess)
            $("#inEmail").val("")
            $("#inSubject").val("")
            $("#inMess").val("")
        }
})