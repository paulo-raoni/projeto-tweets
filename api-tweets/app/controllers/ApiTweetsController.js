exports.getTweets = async (req, res) => {
  const tweetsGerados = geraTweets();
  console.info("Retornando tweets: ", JSON.stringify(tweetsGerados));
  return res.status(200).send(tweetsGerados);
};

const geraTweets = () => {
  const qtdTweets = 50;
  const tweetList = [];

  const tweetPostList = [
    [
      "Caros colegas,",
      "Por outro lado,",
      "Não podemos esquecer que",
      "Do mesmo modo,",
      "A prática mostra que",
      "Nunca é demais insistir que",
      "A experiência mostra que",
      "É fundamental ressaltar que",
      "O incentivo ao avanço tecnológico, assim como",
      "Assim mesmo,",
    ],
    [
      "a execução deste projeto",
      "a complexidade dos estudos efetuados",
      "a atual estrutura de organização",
      "o novo modelo estrutural aqui preconizado",
      "o desenvolvimento de formas distintas de atuação",
      "a constante divulgação das informações",
      "a consolidação das estruturas",
      "a análise dos diversos resultados",
      "o início do programa de formação de atitudes",
      "a expansão de nossa atividade",
    ],
    [
      "nos obriga à análise",
      "cumpre um papel essencial na formulação",
      "auxilia a preparação e a estruturação",
      "contribui para a correta determinação",
      "assume importantes posições na definição",
      "facilita a definição",
      "prejudica a percepção da importância",
      "oferece uma boa oportunidade de verificação",
      "acarreta um processo de reformulação",
      "exige precisão e definição",
    ],
    [
      "das nossas opções de desenvolvimento futuro.",
      "das nossas metas financeiras e administrativas.",
      "das atitudes e das atribuições da diretoria.",
      "das novas proposições.",
      "das opções básicas para o sucesso do programa.",
      "do nosso sistema de formação de quadros.",
      "das condições apropriadas para os negócios.",
      "dos índices pretendidos.",
      "das formas de ação.",
      "dos conceitos de participação geral.",
    ],
  ];

  const usuarioList = [
    [
      "luiz",
      "laisa",
      "lucas",
      "silvana",
      "ana",
      "joao",
      "amarildo",
      "armando",
      "paulo",
      "denilson",
      "ronaldo",
      "glauce",
      "debora",
      "melissa",
    ],
    [
      "-silva",
      "_lobato",
      "-oliveira",
      "Jucá",
      "-Bezerra",
      "_Costa",
      "-dos-santos",
      "-dos-anjos",
      "Cunha",
    ],
  ];

  const hashTagList = [
    "#CSGO",
    "#D&D",
    "#CanetaAzul",
    "#TodosContraCOVID",
    "#RockIsMyLife",
    "#Programador",
    "#Cafe",
    "#PlaystationEhMelhorQueXBOX",
    "#TheLastOfUs",
    "#CS1.6",
    "#Gamer",
    "#JavascriptEhVida",
    "#NodeEhVida",
    "#SQL",
    "#NoSQL",
    "#MySQL",
    "#SQLServer",
  ];

  for (let indiceTweet = 0; indiceTweet < qtdTweets; indiceTweet++) {
    tweetList[indiceTweet] = { usuario: "", tweetPost: "", hashTag: "" };

    for (let i = 0; i < 4; i++) {
      tweetList[indiceTweet].tweetPost += tweetPostList[i][Math.floor(Math.random() * tweetPostList[i].length)] + " ";
    }

    for (let j = 0; j < 2; j++) {
      tweetList[indiceTweet].usuario += usuarioList[j][Math.floor(Math.random() * usuarioList[j].length)];
    }

    tweetList[indiceTweet].hashTag = hashTagList[Math.floor(Math.random() * hashTagList.length)];
  }

  return tweetList;
};
