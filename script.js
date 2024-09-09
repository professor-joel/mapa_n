// Aqui você pode adicionar alguma interatividade, se necessário
// Por exemplo, pode ocultar/mostrar seções dinamicamente conforme a navegação

function openModal(title, content) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-content').innerText = content;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar modal ao clicar fora dela
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}