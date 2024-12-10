window.onload = function() { 
  console.log('>>>PASSOU POR AQUI<<<');
  
  const btnPrincipal = document.querySelector('#btn-principal');
  const carregandoMessage = document.querySelector('#carregando-message');
  const btnMatutino = document.querySelector('#btn-matutino');
  const sectionMensagemHome = document.querySelector('#section-mensagem-home');
  const sectionListaSalas = document.querySelector('#section-lista-salas');
  // Usar o URL abaixo em produção
  // const urlBack = "https://back-ensalamento.onrender.com";
  const urlBack = "http://localhost:3000";

  function atualizarPrincipal() {
    // Mostrar mensagem de boas vindas
    sectionMensagemHome.style.display = "";
    carregandoMessage.style.display = "none";
    // Esconder lista de salas
    sectionListaSalas.style.display = "none";
    btnPrincipal.style.backgroundColor = "Khaki";
    btnMatutino.style.backgroundColor = "orange";
  }

  function atualizarMatutino() {
    // Esconder mensagem de boas vindas
    sectionMensagemHome.style.display = "none";
    carregandoMessage.style.display = "";
    // Mostrar lista de salas
    sectionListaSalas.style.display = "";
    btnPrincipal.style.backgroundColor = "orange";
    btnMatutino.style.backgroundColor = "Khaki";
  }

  btnPrincipal.addEventListener('click', () => {
    atualizarPrincipal();
    carregandoMessage.style.display = "none";
  });

  async function pegarTodasAsSalas() {
    const endPoint = `${urlBack}/ensalamentoM`;
    const res = await fetch(`${endPoint}`);
    // console.log(res);

    const data = await res.json();
    // console.log(data);

    return data;
  }

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
    // let salas = [
    //   {
    //     disciplina: "CMF Sistema Digestório, Endócrino e Renal (FISIOTERAPIA, ENFERMAGEM)",
    //     diaDaSemana: "6ªf",
    //     sala: "C6",
    //     professor: "JOÃO"
    //   },
    //   {
    //     disciplina: "Cien. Morfofuncionais do Aparelho Locomotor - Membros Infer. e Coluna Vertebral (FISIOTERAPIA)",
    //     diaDaSemana: "3ªf",
    //     sala: "B4",
    //     professor: "MAGDA"
    //   },
    //   {
    //     disciplina: "Cien. Morfofuncionais do Aparelho Locomotor - Membros Infer. e Coluna Vertebral (FISIOTERAPIA)",
    //     diaDaSemana: "3ªf",
    //     sala: "B4",
    //     professor: "MAGDA"
    //   },
    //   {
    //     disciplina: "Cien. Morfofuncionais do Aparelho Locomotor - Membros Infer. e Coluna Vertebral (FISIOTERAPIA)",
    //     diaDaSemana: "3ªf",
    //     sala: "B4",
    //     professor: "MAGDA"
    //   },
    //   {
    //     disciplina: "Cien. Morfofuncionais do Aparelho Locomotor - Membros Infer. e Coluna Vertebral (FISIOTERAPIA)",
    //     diaDaSemana: "3ªf",
    //     sala: "B4",
    //     professor: "MAGDA"
    //   },
    //   {
    //     disciplina: "Cien. Morfofuncionais do Aparelho Locomotor - Membros Infer. e Coluna Vertebral (FISIOTERAPIA)",
    //     diaDaSemana: "3ªf",
    //     sala: "B4",
    //     professor: "MAGDA"
    //   }
    // ];

    const endPoint = `${urlBack}/ensalamentoM`;
    const res = await fetch(`${endPoint}`);
    // console.log(res);

    const data = await res.json();
    // console.log(data);

    let output = "";

    for(let sala of data)
      output += criarSala(sala);

    document
    .querySelector('#section-lista-salas')
    .innerHTML = output;
  }

  btnMatutino.addEventListener('click', () => {
    atualizarMatutino();
    // Atualizar lista de salas
    atualizarLista();
    carregandoMessage.style.display = "none";
  });
  
  atualizarPrincipal();
  // atualizarMatutino();

}