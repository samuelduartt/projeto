funcion logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    console.log(email.value+senha.value);

    if(email.value == "admin@admin.com && senha.value == "admin){
        localStorage.setitem("acesso", true);

        window.location.href = "http://127.0.0.1:5500/js/index.html";
    }else{
        alert("Usuario ou senha invalidos!");
    }

}