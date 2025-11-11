document.addEventListener('DOMContentLoaded', () => {
    voltarTopo();
    clicarCard();
})

function botoesHeader() {
    alert("Não disponível")
}

function voltarTopo() {
    document.getElementById('voltarTopo').addEventListener('click', () => {
        window.scroll({ top: 0, behavior: 'smooth' })
    })
}

function clicarCard() {
    const elementos = document.querySelectorAll('card')
    elementos.forEach(
        addEventListener('click', () => {
            alert('Não temos itens nessa seção')
        })
    )
}