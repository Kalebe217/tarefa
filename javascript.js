document.addEventListener('DOMContentLoaded', sumario)
function sumario() {
    const listaPassos = document.createElement('ol')
    document.body.prepend(listaPassos)
    const nPassos = document.querySelectorAll('h2')
    for (let i = 0; i < nPassos.length; i++) {
        const elementos = criarLista(`#h2${i + 1}`, nPassos[i].textContent)
        listaPassos.appendChild(elementos)
        enumerarH2(nPassos[i], i + 1)
    }
}
function criarLista(ref, link) {
    const li = document.createElement('li')
    const mkLink = fazerLink(ref, link)
    li.appendChild(mkLink)
    return li
}
function fazerLink(href, link) {
    const mkLink = document.createElement('a')
    mkLink.setAttribute('href', href)
    mkLink.textContent = link
    return mkLink
}
function enumerarH2(elemento, num) {
    elemento.textContent = `${num}. ${elemento.textContent}`
    elemento.id = `h2${num}`
    const inicio = fazerLink('#', 'inicio')
    botaoRetorno(elemento, inicio)
}
function botaoRetorno(elemento, ref) {
    const nextElement = elemento.nextElementSibling
    elemento.parentElement.insertBefore(ref, nextElement)
}