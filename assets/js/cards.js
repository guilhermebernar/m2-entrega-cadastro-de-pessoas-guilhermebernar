export {makeCards}

const aside = document.querySelector("aside")
const card  = document.createElement('ul')

aside.appendChild(card)

function makeCards(pessoa){
    card.innerHTML = ""

    for(let i = 0; i < pessoa.length; i++){
        const li = document.createElement('li')

        const name        = pessoa[i].nome
        const email       = pessoa[i].eMail
        const cargo       = pessoa[i].cargo

        const div         = document.createElement('div')
        const tgName      = document.createElement('p')
        const tgEmail     = document.createElement('p')
        const tgCargo     = document.createElement('p')

        tgName.innerHTML  = `${name}`
        tgEmail.innerHTML = `${email}`
        tgCargo.innerHTML = `${cargo}`

        div.appendChild(tgName)
        div.appendChild(tgEmail)
        div.appendChild(tgCargo)

        li.appendChild(div)
        card.appendChild(li)
    }
}