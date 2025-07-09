const botao = document.getElementById('meuBotao');
const paragrafo = document.getElementById('mensagem');
const caixa = document.getElementById('caixa-colorida');

// 2. Adiciona o ouvinte de clique ao botão
botao.addEventListener('click', function() {
    // 3. Altera o texto dentro do parágrafo
    paragrafo.textContent = 'O texto foi alterado com sucesso pelo JavaScript!';
    paragrafo.classList.toggle('ativo'); 
    caixa.style.backgroundColor = '#3498db'; // Um tom de azul

    botao.textContent = 'Já fui clicado!';

    // 4. Desabilita o botão
    botao.disabled = true;
});



