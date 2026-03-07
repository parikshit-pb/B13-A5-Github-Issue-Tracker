const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click",() => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    if( username === "admin" && password === "admin123") {
        alert("Login successfull");
        window.location.href = "main.html";
    }else {
        alert("Invalid credentials!")
    }
})