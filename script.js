window.onload = function() { 
  // console.log('>>>PASSOU POR AQUI<<<');
  
  // Usar o URL abaixo em produção
  // const urlBase = "https://back-ensalamento.onrender.com";
  const urlBase = "http://localhost:3000";

  const btnPrincipal = document.querySelector('#btn-principal');
  const sectionMensagemHome = document.querySelector('#section-mensagem-home');
  const btnMatutino = document.querySelector('#btn-matutino');
  const sectionProcura = document.querySelector('#section-procura');
  const edtProcura = document.querySelector('#edt-procura');
  const carregandoMessage = document.querySelector('#carregando-message');
  const btnProcurar = document.querySelector('#btn-procurar');
  const sectionListaSalas = document.querySelector('#section-lista-salas');

  function atualizarPrincipal() {
    // Mostrar mensagem de boas vindas
    sectionMensagemHome.style.display = "";
    // Esconder mensagem de carregando
    carregandoMessage.style.display = "none";
    // Esconder barra de pesquisa
    sectionProcura.style.display = "none";
    // Esconder lista de salas
    sectionListaSalas.style.display = "none";
    // Colorir botão ativo
    btnPrincipal.style.backgroundColor = "Khaki";
    // Descolorir botões inativos
    btnMatutino.style.backgroundColor = "orange";
  }

  function atualizarMatutino() {
    // Esconder mensagem de boas vindas
    sectionMensagemHome.style.display = "none";
    // Mostrar barra de pesquisa
    sectionProcura.style.display = "";
    // Mostrar lista de salas
    sectionListaSalas.style.display = "";
    // Colorir botão ativo
    btnMatutino.style.backgroundColor = "Khaki";
    // Descolorir botões inativos
    btnPrincipal.style.backgroundColor = "orange";
  }

  btnPrincipal.addEventListener('click', () => {
    // Montar página principal
    atualizarPrincipal();
  });

  const criarSala = (sala) => {
    return `
      <article class='articleLinhaTabela'>
        <div class='disciplinaLinhaTabela'>${sala.disciplina}</div>
        <span class='dia-da-semana__LinhaTabela'>${sala.dia_da_semana}</span>
        <span class='professorLinhaTabela'>${sala.professor}</span>
        <div class='salaLinhaTabela'>${sala.sala}</div>
      </article> 
    `;
  }

  async function atualizarLista () {
    // Mostrar mensagem de carregando
    carregandoMessage.style.display = "";

    const param = `/${edtProcura.value}`;
    const path = `/ensalamentoM`;
    const endPoint = `${urlBase}${path}${param}`;
    const res = await fetch(`${endPoint}`);
    const data = await res.json();

    let output = "";
    for(let sala of data)
      output += criarSala(sala);

    document
    .querySelector('#section-lista-salas')
    .innerHTML = output;

    // Esconder mensagem de carregando
    carregandoMessage.style.display = "none";
  }

  btnMatutino.addEventListener('click', () => {
    // Montar página matutino
    atualizarMatutino();
  });
  
  btnProcurar.addEventListener('click', () => {
    // Atualizar lista de salas
    atualizarLista();
  });

  // Iniciar
  // Montar página principal
  atualizarPrincipal();

}