var login = document.querySelector('.login');
var password = document.querySelector('.key');
var botao = document.querySelector('.btn-login');


function showPassWord() {
    if(login.value !== "" && password.value !== "" ) {
        botao.disabled = false
    } else { 
        botao.disabled = true
    }
}

login.addEventListener("keyup",showPassWord);
password.addEventListener("keyup",showPassWord);

document.querySelector(".show-password").addEventListener("click", function () {
    if(this.classList[2] == "fa-eye-slash") {
        this.classList.remove("fa-eye-slash")
        this.classList.add("fa-eye")
        password.type = "text"
    } else {
        this.classList.remove("fa-eye")
        this.classList.add("fa-eye-slash")
        password.type = "password"
    }
})

function mostrarModal(modalid) {
    const modal = document.getElementById(modalid)
    const close = document.getElementById("close-btn")
    modal.classList.add('visible')
    close.addEventListener("click", () => {
        modal.classList.remove('visible')
    })

}

const modalBtn = document.getElementById("config")
modalBtn.addEventListener("click", function(){
    mostrarModal('modal')
})

function jogar() {
    const jogar = document.getElementById("jogar")
    jogar.classList.add('letsplay')
}

botao.addEventListener("click", function(){
    jogar()
})

function selectList() {
    const arrow = document.getElementById("arrow")
    const select = document.querySelector(".select-box")
    const list = document.getElementById("options-list")
    select.addEventListener("click", () => {
        arrow.classList.toggle('fa-caret-up')
        select.classList.toggle('select-open')
        list.classList.toggle('opened')
        
    })
}

selectList()

function langList() {
    const arrow = document.getElementById("arrow1")
    const select = document.querySelector(".language-box")
    const list = document.getElementById("#lang-lista")
    select.addEventListener("click", () => {
        arrow.classList.toggle('fa-caret-up')
        select.classList.toggle('select-open')
        list.classList.toggle('opened')
        
    })
}

langList()







