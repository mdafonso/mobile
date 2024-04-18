

function BuscarCarona() {
    // Obter o destino inserido pelo usuário
    var destino = document.getElementById("destino").value.toLowerCase();
    var data = document.getElementById("data").value.toLowerCase();
    var hora = document.getElementById("hora").value.toLowerCase();

    // Fazer uma solicitação AJAX para carregar os dados do JSON
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'lista_busca.json', true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Parse do JSON para objeto JavaScript
            var dados = JSON.parse(xhr.responseText);

            // Limpar a lista de caronas antes de adicionar os resultados da busca
            var lista = document.getElementById("testes");
            lista.innerHTML = '';

            // Iterar sobre as caronas no JSON e adicionar aquelas que correspondem ao destino
            //dados.lista_caronas.forEach(function(caronas) {
            const caronas = dados.lista_caronas;
            
                for (let i = 0; i < caronas.length; i++) {

                
                if (caronas[i].destino.toLowerCase().includes(destino) && 
                    caronas[i].hora.toLowerCase().includes(hora) && 
                    caronas[i].data.toLowerCase().includes(data)) {


                    const lista_motoristas = document.createElement("div");
                    lista_motoristas.classList.add("lista_caronas");

                    // Preencher os dados dinamicamente com base no JSON
                    lista_motoristas.innerHTML = `
                        <div class="informacoes_lista">
                            <span>Motorista: ${caronas[i].nome_motorista}</span>
                            <span>Partida: ${caronas[i].partida}</span>
                            <span>Destino: ${caronas[i].destino}</span>
                            <span>Data: ${caronas[i].data}</span>
                            <span>Horario: ${caronas[i].hora}</span>
                        </div>
                        <div class="botoes_lista">
                            <button id="${i}" value="${i}" type="button" class="btn btn-buscar" onclick="exibirPopup()">Agendar</button>
                        </div>
                        <div id="circuloCarregamento" class="loader"></div>
                        <div id="fundoTela" class="fundo-tela"></div>`;

                    lista.appendChild(lista_motoristas);
                }
            };

            // Se não houver caronas correspondentes, exibir uma mensagem
            if (lista.children.length === 0) {
                lista.innerHTML = '<p>Não há caronas disponíveis para o destino selecionado.</p>';
            }
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error('Erro ao carregar o arquivo JSON.');
    };

    // Enviar a solicitação
    xhr.send();
}



function exibirPopup() {
    // Exibir o círculo de carregamento
    document.getElementById("circuloCarregamento").style.display = "block";
    document.getElementById("fundoTela").style.display = "block"; // Exibir o fundo da tela

    const idDoBotao = event.target.id;
    // Agora você pode usar o idDoBotao como quiser
    console.log("ID do botão clicado:", idDoBotao);

    // Após 2 segundos, exibir o popup de confirmação
    setTimeout(function() {
        localizacao_passageiro = document.getElementById("endereco").value;

        localStorage.setItem("localizacao_passageiro", localizacao_passageiro)
        localStorage.setItem("id_motorista", idDoBotao)
        document.getElementById("circuloCarregamento").style.display = "none"; // Esconder o círculo de carregamento
        document.getElementById("fundoTela").style.display = "none"; // Esconder o fundo da tela
        window.location.href = "confirmação.html";
    }, 2000);

    



}



