var butSee = document.getElementById("butSeeWork")
butSee.addEventListener("click", function(event) {
    alert("Please click the 'SEE OUR WORK' button after this, if you want to see our company's projects, thank you!")
})

var email = document.getElementById("outEmail")
var subject = document.getElementById("outSubject")
var msg = document.getElementById("outMsg")

document.getElementById("inEmail").value = email.innerText
document.getElementById("inSubject").value = subject.innerText
document.getElementById("inMsg").value = msg.innerText

function handleSubmit(event) {
    var inputEmail = document.getElementById("inEmail")
    var inputSubject = document.getElementById("inSubject")
    var inputMsg = document.getElementById("inMsg")

    document.getElementById("outEmail").innerText = inputEmail.value
    document.getElementById("outSubject").innerText = inputSubject.value
    document.getElementById("outMsg").innerText = inputMsg.value
    const formIn = document.getElementById("form")
        const display = formIn.style.display
        if (display == "block") {
            formIn.style.display = "none"
        } else {
            formIn.style.display = "block"
        }
    event.preventDefault()
}

const buttonSend = document.getElementById("sendMess")
buttonSend.addEventListener("click", function() {
    const formIn = document.getElementById("form")
    const display = formIn.style.display
    if (display == "block") {
        formIn.style.display = "none"
    } else {
        formIn.style.display = "block"
    }
})
// $(document).ready(function() {
//     $("#iniBut").click(function(event) {
//         var name = $("#name").val()
//         if(name == "") {
//             alert("silahkan isi form!")
//         } else {
//             //untuk mencetak
//             $("#out").html(name)

//             //ini untuk inputnya menjadi kosong
//             $("#name").val("")
//         }
        
//     })
// });