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
            <button type="button" class="btn btn-success" onclick="BuscarCarona()">Entre em contato!<img class="whatsapp" style="padding-left: 5px;" alt="" src="img/whatsapp.png" /></button>
            <button type="button" class="btn btn-success" onclick="BuscarCarona()">Agendar</button>
        </div>`;

    lista.appendChild(lista_motoristas);
}
