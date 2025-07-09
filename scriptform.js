// Aguarda o DOM estar completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os elementos do HTML com os quais vamos interagir
    const userForm = document.getElementById('user-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const tableBody = document.getElementById('user-list-body');

    // Adiciona um "ouvinte" para o evento de 'submit' do formulário
    userForm.addEventListener('submit', function(event) {
        
        // 1. Impede o comportamento padrão do formulário (que é recarregar a página)
        event.preventDefault();

        // 2. Captura os valores dos campos de input, removendo espaços em branco
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // 3. Validação simples para garantir que os campos não estão vazios
        if (name === '' || email === '') {
            alert('Por favor, preencha todos os campos.');
            return; // Interrompe a execução da função se a validação falhar
        }

        // 4. Cria os novos elementos da tabela (linha e células)
        const newRow = document.createElement('tr'); // Cria uma nova linha <tr>

        // Insere o HTML das células (td) dentro da nova linha
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td><button class="delete-btn">Excluir</button></td>
        `;

        // 5. Adiciona a nova linha ao corpo da tabela
        tableBody.appendChild(newRow);

        // 6. Limpa os campos do formulário para a próxima entrada
        userForm.reset();
        
        // Opcional: foca no primeiro campo para facilitar a digitação
        nameInput.focus();
    });

    // Adiciona um "ouvinte" ao corpo da tabela para lidar com cliques nos botões de exclusão
    // Isso usa a técnica de "event delegation" para funcionar com botões adicionados dinamicamente
    tableBody.addEventListener('click', function(event) {
        // Verifica se o elemento clicado tem a classe 'delete-btn'
        if (event.target.classList.contains('delete-btn')) {
            // Pega o elemento 'tr' (a linha da tabela) pai do botão e o remove
            const rowToRemove = event.target.closest('tr');
            rowToRemove.remove();
        }
    });

});