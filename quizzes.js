document.addEventListener("DOMContentLoaded", () => {
  // Elementos principais do quiz
  const quizBox = document.querySelector(".quiz_box");
  const resultBox = document.querySelector(".result_box");
  const perguntaTexto = document.getElementById("perguntaTexto");
  const opcoesContainer = document.getElementById("opcoes");
  const proximaBtn = document.getElementById("proximaPergunta");
  const encerrarBtn = document.getElementById("encerrarQuiz");
  const pontuacaoFinal = document.getElementById("pontuacaoFinal");
  const dicasFinal = document.getElementById("dicasFinal");
  const compartilharBtn = document.getElementById("compartilharResultado");

  // Variáveis de controle
  let perguntas = [];
  let indice = 0;
  let pontuacao = 100;
  let respostasErradas = [];
  let alternativaSelecionada = null;
  let nivelAtual = null;

  // Função chamada quando um nível é iniciado (via menu.js)
  window.iniciarQuiz = (nivel) => {
    perguntas = (typeof niveis !== "undefined" && niveis[`nivel${nivel}`]) || [];
    if (perguntas.length === 0) {
      alert("Erro ao carregar as perguntas.");
      return;
    }

    // Reinicia variáveis para o novo quiz
    indice = 0;
    pontuacao = 100;
    respostasErradas = [];
    alternativaSelecionada = null;
    nivelAtual = nivel;

    document.querySelector(".menu-inicial").classList.add("hidden");
    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");

    mostrarPergunta();
  };

  // Exibe a pergunta atual com as alternativas
  function mostrarPergunta() {
    const pergunta = perguntas[indice];
    perguntaTexto.innerText = pergunta.n + ". " + pergunta.question;

    opcoesContainer.innerHTML = "";
    alternativaSelecionada = null;

    pergunta.options.forEach((opt, i) => {
      const letra = String.fromCharCode(65 + i); // A, B, C...
      const btn = document.createElement("button");
      btn.className = "opcao";
      btn.innerText = `${letra}) ${opt.text}`;
      btn.onclick = () => selecionarOpcao(btn, opt);
      opcoesContainer.appendChild(btn);
    });

    proximaBtn.disabled = true;
  }

  // Quando uma alternativa é selecionada
  function selecionarOpcao(botao, opt) {
    alternativaSelecionada = { opt, botao };

    // Remove seleção anterior
    document.querySelectorAll(".opcao").forEach(btn => btn.classList.remove("selecionado"));
    botao.classList.add("selecionado");

    proximaBtn.disabled = false;
  }

  // Avança para a próxima pergunta ou finaliza o quiz
  proximaBtn.onclick = () => {
    if (alternativaSelecionada) {
      const { opt } = alternativaSelecionada;

      pontuacao += opt.value || 0;

      // Se a resposta for errada, registra para mostrar dica
      if (opt.id && opt.value < 0) {
        respostasErradas.push(opt.id);
      }
    }

    if (indice < perguntas.length - 1) {
      indice++;
      mostrarPergunta();
    } else {
      finalizarQuiz();
    }
  };

  // Mostra a tela final com pontuação e dicas
  function finalizarQuiz() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    // Frase personalizada conforme a pontuação
    let fraseFinal = "";
    if (pontuacao >= 90) {
      fraseFinal = "🌱 Excelente! Sua consciência ambiental é incrível! Continue assim! 💚";
    } else if (pontuacao >= 60) {
      fraseFinal = "💡 Muito bom! Mas existe algumas atitudes para melhorar. 🗿";
    } else {
      fraseFinal = "🚨 Atenção! Pequenas mudanças podem causar grande impacto. ⚠️";
    }

    pontuacaoFinal.innerText = `${fraseFinal}\n\nSua pontuação final foi: ${pontuacao}%`;

    // Gera dicas com base nos erros
    const unicas = [...new Set(respostasErradas)];
    let dicasText = "";
    unicas.forEach(id => {
      if (dicasEspecificas[id]) {
        dicasText += `• ${dicasEspecificas[id]}\n`;
      }
    });

    dicasFinal.innerText = dicasText || "🔥 Você mandou bem demais! Nenhuma dica por enquanto.";

    // Salva progresso no localStorage
    const progresso = JSON.parse(localStorage.getItem("progressoQCA") || "{}");
    const dataAtual = new Date().toLocaleDateString();

    progresso[`nivel${nivelAtual}`] = {
      pontuacao: pontuacao,
      data: dataAtual,
      timestamp: Date.now()
    };

    localStorage.setItem("progressoQCA", JSON.stringify(progresso));
  }

  // Botão para encerrar e retornar ao menu
  encerrarBtn.onclick = () => {
    resultBox.classList.add("hidden");

    // Verifica se todos os 7 níveis foram concluídos
    const progressoStr = localStorage.getItem("progressoQCA");
    let concluiuTudo = false;

    if (progressoStr) {
      const progresso = JSON.parse(progressoStr);
      const niveisConcluidos = [1,2,3,4,5,6,7].filter(n => {
        const nivel = progresso[`nivel${n}`];
        return nivel && typeof nivel.pontuacao === "number";
      });
      concluiuTudo = niveisConcluidos.length === 7;
    }

    // Mostra tela de encerramento se todos foram feitos
    if (concluiuTudo && nivelAtual === 7) {
      document.getElementById("telaEncerramento").classList.add("visivel");
      document.querySelector(".menu-inicial")?.classList.remove("hidden");
      document.getElementById("niveisBox")?.classList.remove("hidden");
    } else {
      document.querySelector(".menu-inicial").classList.remove("hidden");
      location.reload();
    }
  };

  // Função de copiar o resultado para o clipboard para compartilhar 
  if (compartilharBtn) {
    compartilharBtn.addEventListener("click", () => {
        const texto = `🌱 Minha pontuação de consciência ambiental foi ${pontuacao}% no QCA!\n🧠 Descubra a sua também: https://gustavomace.github.io/qca_eco_game`;
        
        // Copia o texto para a área de transferência
        navigator.clipboard.writeText(texto).then(() => {
            // Cria uma notificação visual temporária
            const aviso = document.createElement("div");
            aviso.innerText = "✅ Compartilhamento copiado para a área de transferência!";
            aviso.style.position = "fixed";
            aviso.style.bottom = "20px";
            aviso.style.left = "50%";
            aviso.style.transform = "translateX(-50%)";
            aviso.style.background = "#73b21a";
            aviso.style.color = "#fff";
            aviso.style.padding = "10px 20px";
            aviso.style.borderRadius = "8px";
            aviso.style.zIndex = "9999";
            aviso.style.fontWeight = "bold";
            document.body.appendChild(aviso);

            // Remove o aviso depois de 3 segundos
            setTimeout(() => {
                aviso.remove();
            }, 3000);
        }).catch(err => {
            alert("❌ Não foi possível copiar o compartilhamento. Tente manualmente.");
            console.error(err);
        });
    });
}

  // Atalhos de teclado (A, B, C, D e Enter)
  document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    const opcoes = document.querySelectorAll(".opcao");

    if (opcoes.length && "abcd".includes(key)) {
      const idx = "abcd".indexOf(key);
      if (opcoes[idx]) opcoes[idx].click();
    }

    if (e.key === "Enter" && !proximaBtn.disabled && !proximaBtn.classList.contains("hidden")) {
      proximaBtn.click();
    }
  });
});

// Dicas específicas associadas aos IDs das alternativas erradas
const dicasEspecificas = {
  // Nível 1: Resíduos e Reciclagem
  nao_separa_lixo: "♻️ Separar lixo reciclável é um hábito simples que ajuda muito o planeta!",
  descarta_bateria_errado: "🔋 Pilhas e baterias devem ser descartadas em pontos de coleta para evitar contaminação do solo.",
  oleo_ralo: "🛢️ Nunca jogue óleo no ralo! Ele contamina a água. Armazene e entregue em pontos de coleta.",
  impressao_desnecessaria: "📄 Evite imprimir documentos desnecessários. Prefira o digital!",
  lixo_na_rua: "🚯 Jogar lixo na rua entope bueiros e polui o ambiente. Guarde até encontrar uma lixeira.",
  // Nível 2: Água e Higiene
  banhos_longos: "🛁 Reduzir o tempo do banho ajuda a economizar litros de água por dia.",
  torneira_dentes: "🪥 Fechar a torneira enquanto escova pode economizar até 12 litros por minuto.",
  torneira_louca: "🧽 Ensaboe tudo primeiro e só abra a torneira para enxaguar.",
  vazamento_ignorado: "🔨 Um simples vazamento pode desperdiçar milhares de litros em um mês.",
  maquina_meia_carga: "👕 Usar a lavadora cheia otimiza o consumo de água e energia.",
  // Nível 3: Energia Elétrica
  carregador_na_tomada: "🔌 Carregadores ligados consomem energia mesmo sem uso.",
  esfriamento_excessivo: "🌬️ Esfriamento excessivo pode ressecar as vias respiratórias, além de consumir bastante energia. Use apenas quando for necessário.",
  ignora_luz_natural: "☀️ Abra janelas e cortinas para reduzir o uso de lâmpadas durante o dia.",
  tv_ligada: "📺 Sempre desligue a TV para evitar consumo de energia desnecessário antes de dormir.",
  chuveiro_eletrico: "🚿 Nos dias quentes, desligue a resistência elétrica do chuveiro.",
  // Nível 4: Tecnologia e Eletrônicos
  troca_frequente: "📱 Evite o consumo por impulso. Prolongar o uso do aparelho reduz lixo eletrônico.",
  descarta_eletronico_errado: "🖥️ E-lixo contém metais pesados e deve ser descartado corretamente.",
  sem_manutencao: "🪛 Faça manutenções em seus aparelhos para prolongar a vida útil deles, e também para não acumular.",
  cabos_novos: "🖱️ Cuide bem de seus acessórios para não ter excessos de compras.",
  praticar_habitos: "🛜 Pesquise pela internet, aprendendo e praticando hábitos sustentáveis que ajuda o meio ambiente.",
  // Nível 5: Transporte e Mobilidade
  carro_trajeto_curto: "🛣️ Evite usar carro para distâncias curtas. Caminhar faz bem e não polui.",
  ignora_bicicleta: "🚲 A bicicleta é econômica, saudável e ecológica.",
  carro_ligado: "🚗 Evite deixar o carro ligado sempre, gasta combustível e prejudica o ar.",
  app_transporte: "🚕 Tente procurar algum transporte público disponível que puder!",
  anda_de_pe: "🚶 Pelo menos ande para lugares mais próximos.",
  // Nível 6: Consumo Consciente
  moda: "🪤 Não fique muito preso em moda, pode gerar excessos de compras.",
  ecobag: "🛍️ Ecobags são reutilizáveis e evitam milhares de sacolas no lixo.",
  consertar_coisas: "🛠️ Sempre conserte as suas coisas no máximo que puder!",
  arrependimento: "🧠 Pense duas vezes antes de comprar algo.",
  produtos_duradouros: "🛡️ Nem tudo precisa ser bonito, compre produtos que duram mais tempo para evitar desperdícios.",
  // Nível 7: Alimentação
  desperdicio_comida: "🍽️ Planejar refeições ajuda a evitar o desperdício.",
  lava_alimentos: "💧 Lave bem os alimentos para ter refeições mais saudáveis.",
  aparencia_alimentos: "🥦 Os alimentos ignorados pela aparência são desperdiçados.",
  alimentos_locais: "⛺ Compre alimentos de locais pertos pois são frescos e baratos.",
  armazenar_alimentos: "🫙 Armazene alimentos para não estragar mais rápido."
}
