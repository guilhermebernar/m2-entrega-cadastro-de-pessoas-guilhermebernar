import {makeCards} from "./cards.js"

let register = []

class Person{
    constructor(nome, snome, nasc, eMail, contato, telefone, cargo){
        this.nome     = nome;
        this.snome    = snome;
        this.nasc     = nasc;
        this.eMail    = eMail;
        this.contato  = contato;
        this.telefone = telefone;
        this.cargo    = cargo;
    }
}

function create(){
    const name        = document.querySelector("input[name=nome]");
    const sname       = document.querySelector("input[name=sobrenome]");
    const bDate       = document.querySelector("input[name=dataNascimento]");
    const email       = document.querySelector("input[name=email]");
    const contact     = document.querySelector("input[name=contato]");
    const tel         = document.querySelector("input[name=telefone]");
    const position    = document.querySelector("select[name=cargo]");

    const newPerson   = new Person(name.value, 
                                 sname.value, 
                                 bDate.value, 
                                 email.value, 
                                 contact.value, 
                                 tel.value, 
                                 position.value
                                )
    
    return newPerson;
}

const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    register.push(create())  
    console.log(register)
    makeCards(register)
    }
)






