document.addEventListener("DOMContentLoaded", function(event) {
    console.log("A página foi carregada.");

    // Recuperar o id do motorista do localStorage
    var id_motorista = localStorage.getItem("id_motorista");



    console.log("ID do motorista:", id_motorista);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'lista_busca.json', true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var dados = JSON.parse(xhr.responseText);

            // Encontrar a carona correspondente ao id_motorista
            var carona = dados.lista_caronas

            for (let i = 0; i < carona.length; i++) {
                            
                if (carona[i].id == id_motorista) {
                    exibirDadosCarona(carona[i]);
                } else {
                    console.log("Nenhuma carona encontrada para o motorista selecionado.");
                }
                
            }




        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.send();
});

// Função para exibir os dados da carona na página
function exibirDadosCarona(carona) {
    var localizacao_passageiro = localStorage.getItem("localizacao_passageiro");

    
    var lista_motoristas = document.createElement("div");
    lista_motoristas.classList.add("info_viagens");

    // Preencher os dados dinamicamente com base na carona
    lista_motoristas.innerHTML = `

    <h5><strong>Informações da Viagem:</strong></h5>

    <div class="container_infos">
        <p>Placa:</p>
        <p>${carona.placa}</p>
    </div>
    <div class="container_infos">
        <p>Carro:</p>
        <p>${carona.carro}</p>
    </div>
    <div class="container_infos">
        <p>Partida:</p>
        <p>${carona.partida}</p>
    </div>
    <div class="container_infos">
        <p>Ponto de Encontro:</p>
        <p>`+localizacao_passageiro+`</p>
    </div>
    <div class="container_infos">
        <p>Destino:</p>
        <p>${carona.destino}</p>
    </div>
    <div class="container_infos">
        <p>Nome Do Motorista:</p>
        <p>${carona.nome_motorista}</p>
    </div>
    <div class="container_infos">
        <p>Data Da Viagem:</p>
        <p>${carona.data}</p>
    </div>
    <div class="container_infos">
        <p>horario Da Viagem:</p>
        <p>${carona.hora}</p>
    </div>`;

    document.getElementById("lista-caronas").appendChild(lista_motoristas);
}

