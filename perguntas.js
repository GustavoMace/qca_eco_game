const niveis = {
  nivel1: [ // Nível 1: Resíduos e Reciclagem
    {
      n: 1,
      question: "Você separa o lixo reciclável do lixo comum?",
      options: [
        { text: "Sempre separo corretamente.", value: 0 },
        { text: "Às vezes separo.", value: -5 },
        { text: "Nunca separo.", value: -10, id: "nao_separa_lixo" }
      ]
    },
    {
      n: 2,
      question: "O que você faz com pilhas e baterias usadas?",
      options: [
        { text: "Levo em pontos de coleta.", value: 0 },
        { text: "Guardo, mas sem destino certo.", value: -5 },
        { text: "Jogo no lixo comum.", value: -10, id: "descarta_bateria_errado" }
      ]
    },
    {
      n: 3,
      question: "Como você lida com embalagens de alimentos?",
      options: [
        { text: "Limpo e separo para reciclagem.", value: 0 },
        { text: "Tiro o excesso e descarto.", value: -5 },
        { text: "Jogo fora sujas e misturadas.", value: -10 }
      ]
    },
    {
      n: 4,
      question: "Você reutiliza potes de vidro ou plástico?",
      options: [
        { text: "Sempre reutilizo.", value: 0 },
        { text: "Reutilizo às vezes.", value: -5 },
        { text: "Jogo fora após o uso.", value: -10 }
      ]
    },
    {
      n: 5,
      question: "Como você descarta óleo de cozinha usado?",
      options: [
        { text: "Entrego em pontos de coleta.", value: 0 },
        { text: "Reutilizo para economizar.", value: 0 },
        { text: "Jogo no lixo comum.", value: -5 },
        { text: "Despejo no ralo ou vaso.", value: -10, id: "oleo_ralo" }
      ]
    },
    {
      n: 6,
      question: "Você reutiliza folhas de papel de antes de jogar fora?",
      options: [
        { text: "Sempre reutilizo antes.", value: 0 },
        { text: "Reutilizo às vezes.", value: -5 },
        { text: "Não, jogo fora direto.", value: -10 }
      ]
    },
    {
      n: 7,
      question: "Como você se desfaz de roupas que não usa mais?",
      options: [
        { text: "Doo para o brechó.", value: 0 },
        { text: "Deixo guardado por anos.", value: -5 },
        { text: "Jogo fora.", value: -10 }
      ]
    },
    {
      n: 8,
      question: "Você imprime documentos desnecessários?",
      options: [
        { text: "Prefiro arquivos digitais.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim, sempre imprimo.", value: -10, id: "impressao_desnecessaria" }
      ]
    },
    {
      n: 9,
      question: "Você joga lixo fora na rua?",
      options: [
        { text: "Nunca, sempre procuro uma lixeira.", value: 0 },
        { text: "Às vezes, se não tem lixeira.", value: -5 },
        { text: "Sim.", value: -10, id: "lixo_na_rua" }
      ]
    },
    {
      n: 10,
      question: "Você utiliza sacolas plásticas com frequência?",
      options: [
        { text: "Sempre uso sacolas reutilizáveis.", value: 0 },
        { text: "Apenas quando esqueço as minhas reutilizáveis.", value: -5 },
        { text: "Sim.", value: -10 }
      ]
    }
  ],
  nivel2: [ // Nível 2: Água e Higiene
    {
      n: 1,
      question: "Quantos banhos você toma por dia?",
      options: [
        { text: "Um ou dois banhos apenas.", value: 0 },
        { text: "Mais de dois banhos para cuidar do meu corpo.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 2,
      question: "Você toma banhos longos, acima de 10 minutos?",
      options: [
        { text: "Não.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim.", value: -10, id: "banhos_longos" }
      ]
    },
    {
      n: 3,
      question: "Você escova os dentes com a torneira aberta?",
      options: [
        { text: "Nunca.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sempre.", value: -10, id: "torneira_dentes" },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 4,
      question: "Você reutiliza a água da máquina de lavar roupas?",
      options: [
        { text: "Sempre que posso.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Nunca.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 5,
      question: "Durante a louça, você deixa a torneira aberta o tempo todo?",
      options: [
        { text: "Não.", value: 0 },
        { text: "Apenas para enxaguar.", value: -5 },
        { text: "Sim.", value: -10, id: "torneira_louca" },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 6,
      question: "Você lava o carro com mangueira?",
      options: [
        { text: "Uso balde e pano.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 7,
      question: "Você conserta vazamentos de água assim que descobre?",
      options: [
        { text: "Sim, imediatamente.", value: 0 },
        { text: "Demoro um pouco.", value: -5 },
        { text: "Não dou muita atenção.", value: -10, id: "vazamento_ignorado" }
      ]
    },
    {
      n: 8,
      question: "Você reutiliza a água da chuva?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Nunca pensei nisso.", value: -10 }
      ]
    },
    {
      n: 9,
      question: "Você enche completamente a máquina de lavar antes de usar?",
      options: [
        { text: "Sim, até a capacidade máxima.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Não, lavo com poucas roupas mesmo.", value: -10, id: "maquina_meia_carga" },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 10,
      question: "Ao lavar calçadas, você usa balde ou mangueira?",
      options: [
        { text: "Só balde ou vassoura.", value: 0 },
        { text: "Ambos.", value: -5 },
        { text: "Mangueira.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    }
  ],
  nivel3: [ // Nível 3: Energia Elétrica
    {
      n: 1,
      question: "Você deixa luzes acesas em ambientes vazios?",
      options: [
        { text: "Não, apago sempre.", value: 0 },
        { text: "Às vezes esqueço.", value: -5 },
        { text: "Sim.", value: -10 }
      ]
    },
    {
      n: 2,
      question: "Você deixa o carregador do celular na tomada mesmo sem uso?",
      options: [
        { text: "Não, tiro sempre.", value: 0 },
        { text: "Às vezes esqueço.", value: -5 },
        { text: "Sempre.", value: -10, id: "carregador_na_tomada" }
      ]
    },
    {
      n: 3,
      question: "Você desliga o computador ou notebook quando não está usando?",
      options: [
        { text: "Sim, desligo corretamente.", value: 0 },
        { text: "Sempre coloco em modo de suspensão.", value: -5 },
        { text: "Não, deixo ligado direto.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 4,
      question: "Você usa ventilador ou ar-condicionado com frequência?",
      options: [
        { text: "Quase nunca.", value: 0 },
        { text: "Só em dias muito quentes.", value: -5 },
        { text: "Sim, todos os dias.", value: -10, id: "esfriamento_excessivo" }
      ]
    },
    {
      n: 5,
      question: "Você aproveita a luz natural durante o dia?",
      options: [
        { text: "Sim, sempre que for possível.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Não, ligo as lâmpadas de dia.", value: -10, id: "ignora_luz_natural" }
      ]
    },
    {
      n: 6,
      question: "Sua casa tem lâmpadas LED?",
      options: [
        { text: "Sim, todas ou quase todas.", value: 0 },
        { text: "Não, uso as tradicionais (incandescentes).", value: -10 }
      ]
    },
    {
      n: 7,
      question: "Você tira os aparelhos da tomada quando vai passeia muito ou viaja?",
      options: [
        { text: "Sim, sempre.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Nunca.", value: -10 }
      ]
    },
    {
      n: 8,
      question: "Você regula a temperatura da geladeira conforme o clima?",
      options: [
        { text: "Sim, sempre ajusto.", value: 0 },
        { text: "Às vezes ajusto.", value: -5 },
        { text: "Não, deixo no máximo sempre.", value: -10 }
      ]
    },
    {
      n: 9,
      question: "Você dorme com a TV ligada?",
      options: [
        { text: "Não, desligo antes de dormir.", value: 0 },
        { text: "Às vezes esqueço.", value: -5 },
        { text: "Sim.", value: -10, id: "tv_ligada" }
      ]
    },
    {
      n: 10,
      question: "Você desliga o chuveiro elétrico nos dias de calor?",
      options: [
        { text: "Sim, sempre.", value: 0 },
        { text: "Às vezes esqueço.", value: -5 },
        { text: "Nunca.", value: -10, id: "chuveiro_eletrico" }
      ]
    }
  ],
  nivel4: [ // Nível 4: Tecnologia e Eletrônicos
    {
      n: 1,
      question: "Você troca de celular mesmo quando o antigo ainda funciona?",
      options: [
        { text: "Não, só quando quebra.", value: 0 },
        { text: "Depende da situação.", value: -5 },
        { text: "Sim, gosto de trocar sempre.", value: -10, id: "troca_frequente" }
      ]
    },
    {
      n: 2,
      question: "Você joga eletrônicos quebrados no lixo comum?",
      options: [
        { text: "Não, levo em pontos de coleta.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim.", value: -10, id: "descarta_eletronico_errado" }
      ]
    },
    {
      n: 3,
      question: "Você compra eletrônicos usados?",
      options: [
        { text: "Sim, sempre que for possível.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Não, só novos.", value: -10 }
      ]
    },
    {
      n: 4,
      question: "Você deixa o computador ou notebook em modo de suspensão por horas?",
      options: [
        { text: "Não, desligo direto.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 5,
      question: "Você faz manutenção para prolongar a vida útil dos seus aparelhos?",
      options: [
        { text: "Sim, regularmente.", value: 0 },
        { text: "Só quando dá problema.", value: -5 },
        { text: "Não me preocupo.", value: -10, id: "sem_manutencao" }
      ]
    },
    {
      n: 6,
      question: "Você compra carregadores e cabos novos com frequência?",
      options: [
        { text: "Não, cuido bem.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim, troco direto.", value: -10, id: "cabos_novos" }
      ]
    },
    {
      n: 7,
      question: "Você deixa muitos aparelhos eletrônicos em modo de suspensão?",
      options: [
        { text: "Não, desligo na tomada.", value: 0 },
        { text: "Só alguns.", value: -5 },
        { text: "Sim, a maioria.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 8,
      question: "Você compartilha ou doa aparelhos antigos ainda funcionais?",
      options: [
        { text: "Sim, sempre que posso.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Nunca.", value: -10 }
      ]
    },
    {
      n: 9,
      question: "Você pesquisa sobre o impacto ambiental antes de comprar algum eletrônico?",
      options: [
        { text: "Sim, sempre.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Não.", value: -10 }
      ]
    },
    {
      n: 10,
      question: "Você já aprendeu algum hábito sustentável para o meio ambiente pela internet?",
      options: [
        { text: "Sim, já até pratiquei.", value: 0 },
        { text: "Já vi, mas nunca tentei.", value: -10, id: "praticar_habitos" }
      ]
    }
  ],
  nivel5: [ // Nível 5: Transporte e Mobilidade
    {
      n: 1,
      question: "Você usa o carro para trajetos curtos que poderiam ser feitos a pé?",
      options: [
        { text: "Não.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim, sempre.", value: -10, id: "carro_trajeto_curto" },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 2,
      question: "Você usa transporte coletivo quando possível?",
      options: [
        { text: "Sempre que dá.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Nunca.", value: -10 }
      ]
    },
    {
      n: 3,
      question: "Você dá carona ou compartilhar transporte?",
      options: [
        { text: "Sim, com frequência.", value: 0 },
        { text: "Raramente.", value: -5 },
        { text: "Nunca.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 4,
      question: "Você já considerou a usar bicicleta para o dia a dia?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Nunca.", value: -10, id: "ignora_bicicleta" },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 5,
      question: "Você faz manutenção regular no seu carro ou moto?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Só quando quebra.", value: -5 },
        { text: "Não.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 6,
      question: "Você dirigir com o pneu calibrado corretamente?",
      options: [
        { text: "Sim, sempre.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Nunca reparo.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 7,
      question: "Você deixa o carro ligado por muito tempo parado?",
      options: [
        { text: "Não.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim.", value: -10, id: "carro_ligado" },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 8,
      question: "Você participa de programas de carona ou mobilidade urbana?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Já ouvi falar.", value: -5 },
        { text: "Nunca.", value: -10 }
      ]
    },
    {
      n: 9,
      question: "Você usa aplicativos de transporte mesmo com transporte público disponível?",
      options: [
        { text: "Não.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim.", value: -10, id: "app_transporte" }
      ]
    },
    {
      n: 10,
      question: "Você anda a pé sempre que for possível?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Depende da distância.", value: -5 },
        { text: "Não gosto.", value: -10, id:"anda_de_pe" }
      ]
    }
  ],
  nivel6: [ // Nível 6: Consumo Consciente
    {
      n: 1,
      question: "Você compra muitas roupas, calçados e acessórios por moda?",
      options: [
        { text: "Não.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim, frequentemente.", value: -10, id:"moda" }
      ]
    },
    {
      n: 2,
      question: "Você usa ecobag (sacola reutilizável)?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Não, sempre pego sacolas novas.", value: -10, id: "ecobag" }
      ]
    },
    {
      n: 3,
      question: "Você evita comprar produtos com excesso de embalagem?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Não me importo.", value: -10 }
      ]
    },
    {
      n: 4,
      question: "Você verifica se o produto tem selo ambiental ou sustentável?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Nunca.", value: -10 }
      ]
    },
    {
      n: 5,
      question: "Você conserta coisas ao invés de descartar?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Depende do caso.", value: -5 },
        { text: "Não.", value: -10, id: "consertar_coisas" }
      ]
    },
    {
      n: 6,
      question: "Você compra alimentos em grande quantidade e deixa estragar?",
      options: [
        { text: "Não.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim.", value: -10 }
      ]
    },
    {
      n: 7,
      question: "Você já comprou algo e se arrependeu logo depois?",
      options: [
        { text: "Raramente.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sempre acontece.", value: -10, id: "arrependimento" }
      ]
    },
    {
      n: 8,
      question: "Você compra produtos locais e de pequenos produtores?",
      options: [
        { text: "Sempre que posso.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Nunca.", value: -10 }
      ]
    },
    {
      n: 9,
      question: "Você dá preferência a produtos duráveis e de qualidade?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Não.", value: -10, id:"produtos_duradouros" }
      ]
    },
    {
      n: 10,
      question: "Você compartilha ou doa coisas que não usa mais?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Não, deixo guardado.", value: -10 }
      ]
    }
  ],
  nivel7: [ // Nível 7: Alimentação
    {
      n: 1,
      question: "Você desperdiça comida em casa?",
      options: [
        { text: "Raramente.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim.", value: -10, id: "desperdicio_comida" }
      ]
    },
    {
      n: 2,
      question: "Você consome alimentos ultraprocessados com frequência?",
      options: [
        { text: "Evito ao máximo.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim.", value: -10 }
      ]
    },
    {
      n: 3,
      question: "Você dá preferência a frutas, legumes e verduras (frescas, saborosas)?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Não.", value: -10 }
      ]
    },
    {
      n: 4,
      question: "Você consome produtos orgânicos?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Quando posso.", value: -5 },
        { text: "Não.", value: -10 }
      ]
    },
    {
      n: 5,
      question: "Você já cultivou alimentos em casa (horta)?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Já pensei nisso.", value: -5 },
        { text: "Nunca tentei.", value: -10 }
      ]
    },
    {
      n: 6,
      question: "Você consome carne vermelha em excesso?",
      options: [
        { text: "Raramente.", value: 0 },
        { text: "Algumas vezes na semana.", value: -5 },
        { text: "Sim, quase todos os dias.", value: -10 },
        { text: "Nenhuma das alternativas acima.", value: 0 }
      ]
    },
    {
      n: 7,
      question: "Você lava alguns alimentos antes de consumir?",
      options: [
        { text: "Sim.", value: 0 },
        { text: "Às vezes esqueço.", value: -5 },
        { text: "Não.", value: -10, id: "lava_alimentos" }
      ]
    },
    {
      n: 8,
      question: "Você compra alimentos pela aparência e descarta os menos atraentes?",
      options: [
        { text: "Não, compro pelo bom estado.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Sim.", value: -10, id: "aparencia_alimentos" }
      ]
    },
    {
      n: 9,
      question: "Você compra alimentos de produtores locais ou feiras?",
      options: [
        { text: "Sempre que posso.", value: 0 },
        { text: "Às vezes.", value: -5 },
        { text: "Nunca.", value: -10, id: "alimentos_locais" }
      ]
    },
    {
      n: 10,
      question: "Você armazena alimentos corretamente para não estragar?",
      options: [
        { text: "Sim, organizo direitinho.", value: 0 },
        { text: "Às vezes erro.", value: -5 },
        { text: "Não me preocupo.", value: -10, id:"armazenar_alimentos" }
      ]
    }
  ]
}