document.addEventListener("DOMContentLoaded", () => {
  // Elementos da interface
  const listaNiveis = document.getElementById("listaNiveis");
  const guia = document.getElementById("guiaQuiz");
  const iniciarBtn = document.getElementById("iniciarQuiz");
  const voltarBtn = document.getElementById("voltarGuia");
  const toggleNiveis = document.getElementById("toggleNiveis");
  const niveisBox = document.getElementById("niveisBox");
  const btnAjuda = document.getElementById("btnAjuda");
  const btnSobre = document.getElementById("btnSobre");
  const janelaAjuda = document.getElementById("janelaAjuda");
  const janelaSobre = document.getElementById("janelaSobre");
  const telaEncerramento = document.getElementById("telaEncerramento");

  let nivelSelecionado = null;
  const agora = Date.now();
  const MILIS_24H = 24 * 60 * 60 * 1000;

  // Recupera progresso salvo no navegador
  const progresso = JSON.parse(localStorage.getItem("progressoQCA") || "{}");

  // Criação da lista de níveis
  for (let i = 1; i <= 7; i++) {
    const li = document.createElement("li");
    li.className = "nivel";
    li.dataset.nivel = i;

    const nivelAtualInfo = progresso[`nivel${i}`];
    const nivelAnteriorInfo = progresso[`nivel${i - 1}`];

    if (nivelAtualInfo) {
      // Nível já concluído
      li.innerText = `Nível ${i}: ${temas[i - 1]} | Completado | Pontuação: ${nivelAtualInfo.pontuacao}%`;
      li.classList.add("completo");
    } else if (i === 1) {
      // Primeiro nível sempre disponível
      li.innerText = `Nível 1: ${temas[0]} | Disponível!`;
      li.classList.add("disponivel");
      li.onclick = () => {
        nivelSelecionado = 1;
        abrirGuia();
      };
    } else if (nivelAnteriorInfo && nivelAnteriorInfo.timestamp) {
      // Verifica se 24h se passaram desde o nível anterior
      const liberado = agora - nivelAnteriorInfo.timestamp >= MILIS_24H;

      if (liberado) {
        li.innerText = `Nível ${i}: ${temas[i - 1]} | Disponível!`;
        li.classList.add("disponivel");
        li.onclick = () => {
          nivelSelecionado = i;
          abrirGuia();
        };
      } else {
        const restanteMs = MILIS_24H - (agora - nivelAnteriorInfo.timestamp);
        const horas = Math.floor(restanteMs / (1000 * 60 * 60));
        const minutos = Math.ceil((restanteMs % (1000 * 60 * 60)) / (1000 * 60));
        li.innerText = `Nível ${i}: ${temas[i - 1]} | Aguarde ${horas}h e ${minutos}min`;
        li.classList.add("bloqueado");
      }
    } else {
      // Nível ainda bloqueado, anterior não concluído
      li.innerText = `Nível ${i}: ${temas[i - 1]} | Bloqueado, responda ao quiz anterior.`;
      li.classList.add("bloqueado");
    }

    listaNiveis.appendChild(li);
  }

  // Alterna a exibição da caixa de níveis
  toggleNiveis.onclick = () => {
    niveisBox.classList.toggle("hidden");
  };

  // Fecha guia e reseta seleção
  voltarBtn.onclick = () => {
    guia.classList.add("hidden");
    nivelSelecionado = null;
  };

  // Inicia o quiz ao clicar em "Começar"
  iniciarBtn.onclick = () => {
    if (nivelSelecionado !== null) {
      guia.classList.add("hidden");
      iniciarQuiz(nivelSelecionado);
    }
  };

  // Exibe janelas de ajuda e sobre
  btnAjuda.onclick = () => {
    janelaAjuda.classList.remove("hidden");
  };

  btnSobre.onclick = () => {
    janelaSobre.classList.remove("hidden");
  };

  document.getElementById("fecharAjuda").onclick = () => {
    janelaAjuda.classList.add("hidden");
  };

  document.getElementById("fecharSobre").onclick = () => {
    janelaSobre.classList.add("hidden");
  };

  // Verifica se todos os 7 níveis foram concluídos
  const concluiuTodos = [1, 2, 3, 4, 5, 6, 7].every(n => progresso[`nivel${n}`]);

  if (concluiuTodos) {
    telaEncerramento.classList.add("visivel");
  }
});

// Lista com os temas dos níveis
const temas = [
  "Resíduos e Reciclagem",
  "Água e Higiene",
  "Energia Elétrica",
  "Tecnologia e Eletrônicos",
  "Transporte e Mobilidade",
  "Consumo Consciente",
  "Alimentação"
];

// Exibe o guia do quiz antes de começar
function abrirGuia() {
  document.getElementById("guiaQuiz").classList.remove("hidden");
}