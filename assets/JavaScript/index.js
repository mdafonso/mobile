for (let index = 0; index < 10; index++) {
    const lista = document.getElementById("testes");
    const lista_motoristas = document.createElement("div");

    // Adicionando a classe "lista_caronas" ao elemento div
    lista_motoristas.classList.add("lista_caronas");

    lista_motoristas.innerHTML = `
        <div class="informacoes_lista">
            <span>Motorista: Nome</span>
            <span>Destino: Rua 00000</span>
            <span>Data: 00/00/000</span>
            <span>Horario: 00:00</span>
        </div>
        <div class="botoes_lista">

            <button id="botaoCarregar" type="button" class="btn btn-buscar" onclick="exibirPopup()" >Agendar</button>
        </div>
        
        <div id="circuloCarregamento" class="loader"></div>

        <div id="popup" class="popup">
            <span class="popup-text">Seu pedido foi enviado para o motorista, aguarde a confirmação!</span>
        </div>
    
        <div id="fundoTela" class="fundo-tela"></div>`;

    lista.appendChild(lista_motoristas);
};




function BuscarCarona() {
    // Selecionar o elemento que deseja mostrar/esconder
    var lista = document.getElementById("testes");

    // Verificar se o estilo atual do elemento é "none"
    if (lista.style.display != "flex") {
        // Se for "none", alterar para "flex" para mostrar o elemento
        lista.style.display = "flex";
    } else {
        // Caso contrário, alterar para "none" para esconder o elemento
        lista.style.display = "none";
    }
}

function exibirPopup() {
    // Exibir o círculo de carregamento
    document.getElementById("circuloCarregamento").style.display = "block";
    document.getElementById("fundoTela").style.display = "block"; // Exibir o fundo da tela

    // Após 2 segundos, exibir o popup de confirmação
    setTimeout(function() {
        
        document.getElementById("circuloCarregamento").style.display = "none"; // Esconder o círculo de carregamento
        document.getElementById("fundoTela").style.display = "none"; // Esconder o fundo da tela
        window.location.href = "confirmação.html";
    }, 2000);

    



}



