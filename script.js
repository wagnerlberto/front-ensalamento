window.onload = function() { 
  console.log('>>>PASSOU POR AQUI<<<');
  
  const btnPrincipal = document.querySelector('#btn-principal');
  const btnMatutino = document.querySelector('#btn-matutino');
  const sectionMensagemHome = document.querySelector('#section-mensagem-home');
  const sectionListaSalas = document.querySelector('#section-lista-salas');

  let salas = [
    {
      disciplina: "CMF Sistema Digestório, Endócrino e Renal (FISIOTERAPIA, ENFERMAGEM)",
      diaDaSemana: "6ªf",
      sala: "C6",
      professor: "JOÃO"
    },
    {
      disciplina: "Cien. Morfofuncionais do Aparelho Locomotor - Membros Infer. e Coluna Vertebral (FISIOTERAPIA)",
      diaDaSemana: "3ªf",
      sala: "B4",
      professor: "MAGDA"
    },
    {
      disciplina: "Cien. Morfofuncionais do Aparelho Locomotor - Membros Infer. e Coluna Vertebral (FISIOTERAPIA)",
      diaDaSemana: "3ªf",
      sala: "B4",
      professor: "MAGDA"
    },
    {
      disciplina: "Cien. Morfofuncionais do Aparelho Locomotor - Membros Infer. e Coluna Vertebral (FISIOTERAPIA)",
      diaDaSemana: "3ªf",
      sala: "B4",
      professor: "MAGDA"
    },
    {
      disciplina: "Cien. Morfofuncionais do Aparelho Locomotor - Membros Infer. e Coluna Vertebral (FISIOTERAPIA)",
      diaDaSemana: "3ªf",
      sala: "B4",
      professor: "MAGDA"
    },
    {
      disciplina: "Cien. Morfofuncionais do Aparelho Locomotor - Membros Infer. e Coluna Vertebral (FISIOTERAPIA)",
      diaDaSemana: "3ªf",
      sala: "B4",
      professor: "MAGDA"
    }
  ];

  function atualizarPrincipal() {
    // Mostrar mensagem de boas vindas
    sectionMensagemHome.style.display = "";
    // Esconder lista de salas
    sectionListaSalas.style.display = "none";
    btnPrincipal.style.backgroundColor = "Khaki";
    btnMatutino.style.backgroundColor = "orange";
  }

  function atualizarMatutino() {
    // Esconder mensagem de boas vindas
    sectionMensagemHome.style.display = "none";
    // Mostrar lista de salas
    sectionListaSalas.style.display = "";
    btnPrincipal.style.backgroundColor = "orange";
    btnMatutino.style.backgroundColor = "Khaki";
  }

  btnPrincipal.addEventListener('click', () => {
    atualizarPrincipal();
  });

  btnMatutino.addEventListener('click', () => {
    atualizarMatutino();
    // Atualizar lista de salas
    atualizarLista(salas);
  });
  
  const criarSala = (sala) => {
    return `
      <article class='articleLinhaTabela'>
        <div class='disciplinaLinhaTabela'>${sala.disciplina}</div>
        <span class='diaDaSemanaLinhaTabela'>${sala.diaDaSemana}</span>
        <span class='professorLinhaTabela'>${sala.professor}</span>
        <div class='salaLinhaTabela'>${sala.sala}</div>
      </article> 
    `;
  }

  const atualizarLista = (salas) => {
    let output = "";

    for(let sala of salas)
      output += criarSala(sala);

    document
    .querySelector('.articleLinhaTabela')
    .innerHTML += output;
  }

  atualizarPrincipal();
  // atualizarMatutino();

}