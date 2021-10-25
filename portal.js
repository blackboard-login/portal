// const users = [
//     { user: 'Jassim', pass: '123' },
//     { user: 'Abdulrahman', pass: '456' },
// ]

// const portalNav = () => {
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     let valid = false

//     users.map(u => {
//         if (u.user === username && u.pass === password)
//             valid = true
//     })

//     if (valid)
//         window.location.href = "./portal-A.html"
//     else
//         window.location.href = "./portal-B.html"
// }

let pass1 = "Middlesex123456"
let pass2 = "08-jun-2004"

function portalNav() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username, password);

if (username == "S02863448" && password == pass1){
    window.location.href = "./portal.html"
}
// else if (username == "6754908" && password == pass2){
//     window.location.href = "./portal-B.html"
// }
else {
    alert("Incorrect Password or Username")
}

// function TimeAlert(){
//     setTimeout(() => {
//         document.getElementById().href =""
//     }, timeout);
// }




    // switch (username){
    //     case "Ali": 
    //     window.location.href = "./portal-A.html"
    //         break;
        
    //     case "Ahmed": 
    //     window.location.href = "./portal-B.html"
    //         break;
    // }
}
