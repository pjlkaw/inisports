document.addEventListener('DOMContentLoaded', () => {
    voltarTopo();
    clicarCard();
})

function botoesHeader() {
    alert("Não disponível")
}

function voltarTopo() {
    const voltarTopoBtn = document.getElementById('voltarTopo')
    if (voltarTopoBtn) {
        voltarTopoBtn.addEventListener('click', () => {
            window.scroll({ top: 0, behavior: 'smooth' })
        });
    }
}

function clicarCard() {
    const elementos = document.querySelectorAll('.card'); 
    elementos.forEach(elemento => {
        elemento.addEventListener('click', () => { 
            alert('Não temos itens nessa seção');
        });
    });
}