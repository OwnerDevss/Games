const questions = [
       // Cuidados com a pele
    {
        question: "Qual é o principal benefício do uso de séruns faciais?",
        answers: [
            "Reduzir a oleosidade da pele",
            "Proporcionar alta concentração de ativos",
            "Proteger contra raios UV",
            "Promover o crescimento de pelos faciais"
        ],
        correct: 1
    },
    {
        question: "Qual é a função principal do ácido salicílico em cosméticos?",
        answers: [
            "Hidratar profundamente",
            "Tratar acne e oleosidade",
            "Reduzir linhas finas",
            "Proteger contra raios UV"
        ],
        correct: 1
    },
    {
        question: "O que o colágeno faz pela pele?",
        answers: [
            "Aumenta a oleosidade",
            "Melhora a elasticidade e firmeza",
            "Reduz a sensibilidade",
            "Remove manchas"
        ],
        correct: 1
    },
    {
        question: "Qual ingrediente é mais indicado para hidratação intensa?",
        answers: [
            "Ácido glicólico",
            "Ácido hialurônico",
            "Enxofre",
            "Retinol"
        ],
        correct: 1
    },
    {
        question: "Qual é o objetivo do peeling químico?",
        answers: [
            "Remover células mortas e estimular renovação celular",
            "Hidratar profundamente a pele",
            "Proteger contra raios solares",
            "Reduzir a oleosidade da pele"
        ],
        correct: 0
    },

    // Tratamentos estéticos
    {
        question: "O que é a Criolipólise?",
        answers: [
            "Um tratamento para acne",
            "Redução de gordura localizada com baixas temperaturas",
            "Um tipo de peeling profundo",
            "Uma técnica de depilação"
        ],
        correct: 1
    },
    {
        question: "Qual é o foco principal do microagulhamento?",
        answers: [
            "Hidratar a pele",
            "Estimular colágeno e elastina",
            "Reduzir a oleosidade",
            "Clarear manchas"
        ],
        correct: 1
    },
    {
        question: "A drenagem linfática é indicada para:",
        answers: [
            "Reduzir toxinas e inchaços",
            "Hidratar profundamente",
            "Proteger contra raios UV",
            "Ativar o crescimento capilar"
        ],
        correct: 0
    },
    {
        question: "Qual é a principal função do laser CO2 fracionado?",
        answers: [
            "Estimular colágeno e tratar cicatrizes",
            "Proteger contra raios UV",
            "Promover hidratação intensa",
            "Tratar acne ativa"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de radiofrequência utilizada em estética?",
        answers: [
            "Estimula colágeno e elastina, melhorando a firmeza da pele",
            "Reduz a oleosidade da pele",
            "Remove células mortas",
            "Protege contra manchas"
        ],
        correct: 0
    },

    // Maquiagem
    {
        question: "Qual é a função principal do primer na maquiagem?",
        answers: [
            "Realçar a cor da base",
            "Preparar a pele e prolongar a duração da maquiagem",
            "Proteger contra raios UV",
            "Hidratar profundamente"
        ],
        correct: 1
    },
    {
        question: "Qual é o tipo de base mais indicado para peles oleosas?",
        answers: [
            "Base cremosa",
            "Base líquida hidratante",
            "Base com efeito matte",
            "BB cream"
        ],
        correct: 2
    },
    {
        question: "O que significa maquiagem HD?",
        answers: [
            "Maquiagem de alta definição",
            "Maquiagem à base de água",
            "Maquiagem para peles sensíveis",
            "Maquiagem com proteção UV"
        ],
        correct: 0
    },
    {
        question: "Qual é a principal função do pó translúcido?",
        answers: [
            "Adicionar cor ao rosto",
            "Fixar a maquiagem e controlar a oleosidade",
            "Hidratar a pele durante o dia",
            "Proteger contra raios solares"
        ],
        correct: 1
    },
    {
        question: "Qual é o objetivo do contorno facial na maquiagem?",
        answers: [
            "Realçar os olhos",
            "Definir e destacar características do rosto",
            "Hidratar a pele",
            "Uniformizar o tom da pele"
        ],
        correct: 1
    },

    // Cuidados com o cabelo
    {
        question: "Qual é a função do shampoo antirresíduos?",
        answers: [
            "Hidratar profundamente os fios",
            "Remover acúmulo de produtos e impurezas",
            "Fortalecer os cabelos",
            "Proteger contra raios UV"
        ],
        correct: 1
    },
    {
        question: "O que é cronograma capilar?",
        answers: [
            "Uma sequência de cuidados com hidratação, nutrição e reconstrução",
            "Um tipo de alisamento capilar",
            "Uma técnica de coloração",
            "Um método para corte de pontas"
        ],
        correct: 0
    },
    {
        question: "Qual é a função principal da queratina nos cabelos?",
        answers: [
            "Colorir os fios",
            "Reconstruir e fortalecer os fios",
            "Hidratar profundamente",
            "Reduzir o frizz"
        ],
        correct: 1
    },
    {
        question: "O que são silicones em produtos capilares?",
        answers: [
            "Ingredientes que promovem maciez e brilho",
            "Ativos que estimulam o crescimento capilar",
            "Substâncias para clarear os fios",
            "Produtos para hidratação profunda"
        ],
        correct: 0
    },
    {
        question: "Qual é o benefício do uso de óleos capilares?",
        answers: [
            "Hidratação, nutrição e proteção contra o ressecamento",
            "Aumento da oleosidade do couro cabeludo",
            "Clareamento dos fios",
            "Fixação do penteado"
        ],
        correct: 0
    },

    // Tendências e curiosidades
    {
        question: "O que é um cosmético vegano?",
        answers: [
            "Um cosmético que não contém ingredientes de origem animal",
            "Um cosmético sem conservantes",
            "Um cosmético à base de ervas",
            "Um cosmético com alta concentração de ativos"
        ],
        correct: 0
    },
    {
        question: "Qual é o conceito de beleza clean?",
        answers: [
            "Beleza natural com menos uso de produtos artificiais",
            "Maquiagem com cores vibrantes",
            "Estilo de beleza focado em alta cobertura",
            "Uso exclusivo de produtos de luxo"
        ],
        correct: 0
    },
    {
        question: "O que é um cosmético sustentável?",
        answers: [
            "Produto que respeita o meio ambiente em sua produção",
            "Produto com alta concentração de ativos",
            "Produto que não possui fragrância",
            "Produto que é vendido em embalagens grandes"
        ],
        correct: 0
    },
    {
        question: "Qual é a principal tendência em cuidados com a pele atualmente?",
        answers: [
            "Uso de produtos multifuncionais",
            "Foco exclusivo em tratamentos anti-idade",
            "Redução do uso de cosméticos",
            "Protetores solares coloridos"
        ],
        correct: 0
    },
    {
        question: "O que significa a sigla K-beauty?",
        answers: [
            "Produtos de beleza coreanos",
            "Produtos de beleza para crianças",
            "Produtos de beleza de alta cobertura",
            "Produtos de beleza com proteção UV"
        ],
        correct: 0
    },
    {
        question: "Qual a principal função do ácido retinóico em tratamentos de pele?",
        answers: [
            "Clarear manchas e estimular a renovação celular",
            "Hidratar profundamente a pele",
            "Reduzir a sensibilidade da pele",
            "Aumentar a produção de melanina"
        ],
        correct: 0
    },
    {
        question: "Qual é o principal benefício dos antioxidantes em cosméticos?",
        answers: [
            "Proteger a pele contra danos causados por radicais livres",
            "Aumentar a oleosidade da pele",
            "Promover o crescimento de pelos",
            "Hidratar a pele profundamente"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de 'bichectomia'?",
        answers: [
            "Remoção cirúrgica da gordura das bochechas para afinar o rosto",
            "Tratamento para clarear manchas na pele",
            "Peeling químico profundo",
            "Massagem facial para reduzir rugas"
        ],
        correct: 0
    },
    {
        question: "Qual é o principal objetivo da técnica de luz pulsada?",
        answers: [
            "Tratamento para manchas, acne e rejuvenescimento da pele",
            "Hidratação intensa",
            "Estimular o crescimento capilar",
            "Proteger a pele contra raios solares"
        ],
        correct: 0
    },
    {
        question: "Qual é a função da vitamina E em cosméticos?",
        answers: [
            "Hidratar e proteger contra danos oxidativos",
            "Reduzir a produção de sebo",
            "Fortalecer a barreira da pele",
            "Promover o clareamento imediato"
        ],
        correct: 0
    },
    {
        question: "Como o ácido mandélico é utilizado em tratamentos estéticos?",
        answers: [
            "Para tratar acne e clarear manchas",
            "Para estimular o crescimento capilar",
            "Para proteger contra danos solares",
            "Para hidratar profundamente"
        ],
        correct: 0
    },
    {
        question: "Qual é o principal benefício do óleo de rosa mosqueta na pele?",
        answers: [
            "Clarear manchas e melhorar a elasticidade da pele",
            "Estimular o crescimento de pelos",
            "Controlar a produção de sebo",
            "Fortalecer a barreira cutânea"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de eletroterapia em estética?",
        answers: [
            "Uso de correntes elétricas para estimular e tratar a pele",
            "Hidratação intensa com equipamentos específicos",
            "Tratamento a laser para rejuvenescimento",
            "Massagem facial para promover relaxamento"
        ],
        correct: 0
    },
    {
        question: "Qual é a função principal do ácido lático em cosméticos?",
        answers: [
            "Esfoliar suavemente e hidratar a pele",
            "Reduzir a sensibilidade da pele",
            "Proteger contra raios UV",
            "Estímulo do crescimento capilar"
        ],
        correct: 0
    },
    {
        question: "O que significa o termo 'fotodermatologia'?",
        answers: [
            "Estudo dos efeitos da luz na pele",
            "Tratamento com luz pulsada",
            "Técnica de hidratação profunda",
            "Uso de ácidos para clarear manchas"
        ],
        correct: 0
    },
    {
        question: "Qual é o objetivo do tratamento com peeling enzimático?",
        answers: [
            "Promover renovação celular com enzimas naturais",
            "Clarear manchas profundas",
            "Hidratar intensamente",
            "Proteger contra raios UV"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de camuflagem estética?",
        answers: [
            "Uso de maquiagem para disfarçar imperfeições na pele",
            "Tratamento para acne severa",
            "Hidratação intensa com ativos naturais",
            "Redução de oleosidade"
        ],
        correct: 0
    },
    {
        question: "Qual é o benefício do ácido tranexâmico em cosméticos?",
        answers: [
            "Clarear manchas e uniformizar o tom da pele",
            "Hidratar profundamente",
            "Proteger contra raios UV",
            "Aumentar a produção de melanina"
        ],
        correct: 0
    },
    {
        question: "O que é a terapia com LED em estética?",
        answers: [
            "Tratamento com luzes específicas para regeneração da pele",
            "Hidratação intensa com equipamentos",
            "Técnica de massagem facial",
            "Proteção contra danos solares"
        ],
        correct: 0
    },
    {
        question: "Qual é o benefício do ácido kójico em tratamentos de pele?",
        answers: [
            "Clareamento de manchas e uniformização do tom da pele",
            "Hidratação intensa",
            "Redução de oleosidade",
            "Proteção contra raios UV"
        ],
        correct: 0
    },
    {
        question: "O que significa o termo 'skinimalismo' em cuidados com a pele?",
        answers: [
            "Reduzir o uso de produtos e focar no essencial",
            "Intensificar o uso de ativos químicos",
            "Aumentar a frequência de esfoliações",
            "Usar apenas produtos caseiros"
        ],
        correct: 0
    },
    {
        question: "Qual ingrediente é mais comum em produtos anti-idade?",
        answers: [
            "Retinol",
            "Ácido salicílico",
            "Enxofre",
            "Água micelar"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de nanoterapia em estética?",
        answers: [
            "Uso de partículas nanométricas para penetração profunda na pele",
            "Tratamento com microagulhas",
            "Uso de luz pulsada para clarear manchas",
            "Hidratação intensa com ácidos"
        ],
        correct: 0
    },
    {
        question: "Qual é o principal objetivo da técnica de carboxiterapia?",
        answers: [
            "Melhorar a circulação e reduzir celulites",
            "Proteger contra raios UV",
            "Hidratar profundamente a pele",
            "Estimular o crescimento capilar"
        ],
        correct: 0
    },
    {
        question: "Qual é a função do uso de probióticos em cosméticos?",
        answers: [
            "Equilibrar a microbiota da pele",
            "Clarear manchas",
            "Reduzir a oleosidade",
            "Estimular colágeno"
        ],
        correct: 0
    },
    {
        question: "O que é o conceito de 'clean beauty'?",
        answers: [
            "Produtos feitos com ingredientes naturais e seguros",
            "Produtos com alta concentração de ativos",
            "Produtos à base de água",
            "Produtos exclusivamente veganos"
        ],
        correct: 0
    },
    {
        question: "Qual é o objetivo do tratamento com fios de PDO?",
        answers: [
            "Lifting facial sem cirurgia",
            "Hidratação profunda",
            "Clareamento de manchas",
            "Redução de oleosidade"
        ],
        correct: 0
    },
    {
        question: "O que faz o ácido azelaico na pele?",
        answers: [
            "Trata acne e clareia manchas",
            "Hidrata profundamente",
            "Protege contra raios UV",
            "Estimula o crescimento de pelos"
        ],
        correct: 0
    },
    {
        question: "Qual é o foco principal da técnica de peeling de diamante?",
        answers: [
            "Esfoliação mecânica para renovação celular",
            "Hidratação intensa",
            "Proteção contra raios UV",
            "Redução de oleosidade"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de 'brow lamination'?",
        answers: [
            "Alinhar e fixar os pelos das sobrancelhas",
            "Colorir as sobrancelhas",
            "Remover pelos indesejados",
            "Hidratar a pele ao redor da sobrancelha"
        ],
        correct: 0
    },
    {
        question: "O que o ácido ferúlico faz na pele?",
        answers: [
            "Potencializa a ação de antioxidantes como a vitamina C",
            "Hidrata profundamente",
            "Estimula o crescimento capilar",
            "Controla a oleosidade da pele"
        ],
        correct: 0
    },
    {
        question: "Qual é o principal benefício da esfoliação enzimática?",
        answers: [
            "Remoção de células mortas de forma suave",
            "Hidratação intensa",
            "Proteção contra raios solares",
            "Clareamento imediato"
        ],
        correct: 0
    },
    {
        question: "Qual é a função do ácido láctico em cosméticos?",
        answers: [
            "Esfoliação suave e hidratação",
            "Redução de oleosidade",
            "Proteção contra raios UV",
            "Estimular o crescimento capilar"
        ],
        correct: 0
    },
    {
        question: "O que significa o termo 'multimasking' em cuidados com a pele?",
        answers: [
            "Uso de diferentes máscaras faciais ao mesmo tempo para tratar áreas específicas da pele",
            "Uso de várias camadas de uma mesma máscara",
            "Aplicação de máscaras faciais por um período prolongado",
            "Uso de máscaras faciais com ingredientes naturais"
        ],
        correct: 0
    },
    {
        question: "Qual é o principal objetivo do uso de boosters em skincare?",
        answers: [
            "Potencializar a ação de outros produtos",
            "Hidratar profundamente",
            "Proteger contra raios UV",
            "Estimular colágeno"
        ],
        correct: 0
    },
    {
        question: "O que são peptídeos em cosméticos?",
        answers: [
            "Aminoácidos que auxiliam na regeneração e firmeza da pele",
            "Ativos que clareiam manchas",
            "Ingredientes para proteger contra raios UV",
            "Substâncias que estimulam o crescimento capilar"
        ],
        correct: 0
    },
    {
        question: "Qual é o benefício do ácido fítico em cosméticos?",
        answers: [
            "Clareamento suave e ação antioxidante",
            "Hidratação intensa",
            "Proteção contra raios UV",
            "Redução de oleosidade"
        ],
        correct: 0
    },
    {
        question: "O que é o conceito de 'skip-care'?",
        answers: [
            "Reduzir a quantidade de produtos usados na rotina de skincare, focando no essencial",
            "Aumentar a frequência de aplicação de produtos",
            "Realizar esfoliações mais frequentes",
            "Usar apenas produtos naturais"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de 'slugging' em cuidados com a pele?",
        answers: [
            "Aplicar uma camada de vaselina ou pomada oclusiva para evitar perda de hidratação",
            "Realizar uma esfoliação profunda",
            "Aplicar várias camadas de hidratante",
            "Usar máscaras faciais diariamente"
        ],
        correct: 0
    },
    {
        question: "Qual é o objetivo principal do uso de ácido glicólico em cosméticos?",
        answers: [
            "Promover esfoliação e renovação celular",
            "Hidratar profundamente",
            "Reduzir a produção de sebo",
            "Proteger contra raios UV"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de 'glow up' em estética?",
        answers: [
            "Conjunto de práticas para melhorar a aparência geral da pele e rosto",
            "Aplicação de maquiagem com efeito brilhante",
            "Uso de ácidos para clarear manchas",
            "Técnica de hidratação intensa"
        ],
        correct: 0
    },
    {
        question: "Qual é o benefício do ácido málico em cosméticos?",
        answers: [
            "Esfoliação suave e hidratação",
            "Estimular o crescimento capilar",
            "Proteger contra raios UV",
            "Reduzir a oleosidade da pele"
        ],
        correct: 0
    },
    {
        question: "O que significa 'dermopigmentação'?",
        answers: [
            "Técnica de pigmentação da pele para fins estéticos ou corretivos",
            "Uso de ácidos para clarear manchas",
            "Tratamento para acne severa",
            "Hidratação intensa"
        ],
        correct: 0
    },
    {
        question: "Qual é a função das ceramidas em produtos para pele?",
        answers: [
            "Fortalecer a barreira cutânea e reter hidratação",
            "Clarear manchas",
            "Estimular colágeno",
            "Proteger contra raios UV"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de 'tightlining' em maquiagem?",
        answers: [
            "Aplicação do lápis ou delineador na linha d'água superior",
            "Uso de delineador para criar um efeito dramático",
            "Preenchimento total da pálpebra com sombra",
            "Aplicação de máscara de cílios apenas nas pontas"
        ],
        correct: 0
    },
    {
        question: "Qual é o objetivo do uso de ácido lipoico em cosméticos?",
        answers: [
            "Ação antioxidante e combate ao envelhecimento",
            "Hidratação intensa",
            "Proteger contra raios UV",
            "Reduzir a oleosidade"
        ],
        correct: 0
    },
    {
        question: "O que significa o termo 'double cleansing'?",
        answers: [
            "Rotina de limpeza facial em dois passos: óleo de limpeza e sabonete facial",
            "Aplicação de máscaras faciais duas vezes ao dia",
            "Esfoliação seguida de hidratação",
            "Clareamento seguido de proteção solar"
        ],
        correct: 0
    },
    {
        question: "Qual é o principal objetivo do uso de vitamina B5 em produtos para pele?",
        answers: [
            "Hidratar e estimular a regeneração da pele",
            "Clarear manchas",
            "Proteção contra raios UV",
            "Reduzir a oleosidade"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de 'soap brows'?",
        answers: [
            "Uso de sabão para fixar e modelar as sobrancelhas",
            "Clareamento das sobrancelhas",
            "Hidratação da pele ao redor das sobrancelhas",
            "Técnica para engrossar os pelos das sobrancelhas"
        ],
        correct: 0
    },
    {
        question: "Qual é o principal objetivo dos produtos com niacinamida?",
        answers: [
            "Reduzir manchas e controlar a oleosidade",
            "Hidratar profundamente a pele",
            "Proteger contra raios UV",
            "Estimular o crescimento capilar"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de camuflagem paramédica?",
        answers: [
            "Uso de pigmentação para disfarçar cicatrizes e manchas",
            "Hidratação profunda para peles sensíveis",
            "Peeling químico para clareamento",
            "Massagem facial para redução de rugas"
        ],
        correct: 0
    },
    {
        question: "Qual é o benefício dos óleos essenciais em tratamentos estéticos?",
        answers: [
            "Promover relaxamento e benefícios terapêuticos",
            "Hidratar profundamente",
            "Clarear manchas na pele",
            "Proteger contra raios UV"
        ],
        correct: 0
    },
    {
        question: "O que significa o termo 'microblading'?",
        answers: [
            "Técnica de preenchimento semipermanente das sobrancelhas",
            "Tratamento para clarear manchas na pele",
            "Uso de ácidos para esfoliação",
            "Massagem facial para reduzir linhas finas"
        ],
        correct: 0
    },
    {
        question: "Qual é o objetivo principal do uso de ácido tranexâmico?",
        answers: [
            "Clarear manchas e tratar melasma",
            "Hidratar profundamente",
            "Proteger contra raios UV",
            "Reduzir a oleosidade da pele"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de 'baking' na maquiagem?",
        answers: [
            "Aplicação de pó translúcido para fixar a maquiagem e iluminar áreas específicas",
            "Uso de base em camadas",
            "Esfoliação antes da maquiagem",
            "Hidratação intensa antes da base"
        ],
        correct: 0
    },
    {
        question: "O que é a técnica de 'cut crease' em maquiagem?",
        answers: [
            "Delinear de forma marcante o côncavo dos olhos",
            "Clarear a área abaixo dos olhos",
            "Aplicar sombra nas pálpebras superiores",
            "Usar máscara de cílios nas laterais"
        ],
        correct: 0
    },
    {
        question: "Qual é o principal objetivo do uso de ácido mandélico?",
        answers: [
            "Tratar acne e clarear manchas",
            "Hidratar profundamente",
            "Reduzir a oleosidade",
            "Proteger contra raios UV"
        ],
        correct: 0
    },
    {
        question: "O que é o conceito de 'glass skin'?",
        answers: [
            "Pele com aparência radiante, hidratada e translúcida",
            "Pele com acabamento matte",
            "Uso de maquiagem brilhante",
            "Tratamento de clareamento intenso"
        ],
        correct: 0
    },
    {
        question: "Qual é o benefício do ácido salicílico em peles oleosas?",
        answers: [
            "Controlar a oleosidade e tratar acne",
            "Hidratar profundamente",
            "Estimular colágeno",
            "Proteger contra raios UV"
        ],
        correct: 0
    },
    {
        question: "O que significa o termo 'strobing' na maquiagem?",
        answers: [
            "Técnica de realçar os pontos altos do rosto com iluminador",
            "Contorno facial intenso",
            "Uso de máscara facial antes da maquiagem",
            "Aplicação de pó translúcido em todo o rosto"
        ],
        correct: 0
    },
    {
        question: "O que são prebióticos em cosméticos?",
        answers: [
            "Substâncias que alimentam a microbiota da pele",
            "Ativos clareadores",
            "Hidratantes intensos",
            "Proteção contra raios UV"
        ],
        correct: 0
    },
    {
        question: "O que é o tratamento com ácido ascórbico?",
        answers: [
            "Uso de vitamina C para clarear a pele e combater o envelhecimento",
            "Hidratação intensa",
            "Redução de oleosidade",
            "Proteção contra raios solares"
        ],
        correct: 0
    }

];


// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Função para selecionar 20 perguntas aleatórias
function getRandomQuestions() {
    shuffleArray(questions);
    return questions.slice(0, 20);
}

// Variáveis globais
let currentQuestionIndex = 0;
let score = 0; // Armazena a pontuação
let incorrectAnswers = []; // Armazena as respostas incorretas
let selectedQuestions = getRandomQuestions(); // Seleciona 20 perguntas aleatórias

// Elementos do DOM
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result");
const restartButton = document.getElementById("restart-button");

// Iniciar o quiz
function startQuiz() {
    // Limpa o localStorage para um novo quiz
    localStorage.removeItem("incorrectAnswers");
    localStorage.removeItem("totalQuestions");

    currentQuestionIndex = 0;
    score = 0; // Reseta a pontuação ao reiniciar o quiz
    incorrectAnswers = []; // Reseta as respostas incorretas
    selectedQuestions = getRandomQuestions(); // Seleciona novas 20 perguntas
    showQuestion();
}

// Exibir a pergunta atual
function showQuestion() {
    resetState();
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    const shuffledAnswers = [...currentQuestion.answers];
    shuffleArray(shuffledAnswers);
    shuffledAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer, currentQuestion));
        answerButtons.appendChild(button);
    });
}

// Resetar o estado da interface
function resetState() {
    nextButton.classList.add("hide");
    resultContainer.classList.add("hide");
    questionElement.classList.remove("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Selecionar uma resposta e destacar a opção escolhida
function selectAnswer(button, selectedAnswer, currentQuestion) {
    // Remove o destaque de todas as respostas
    Array.from(answerButtons.children).forEach((btn) => {
        btn.classList.remove("selected");
    });

    // Destaca a resposta clicada
    button.classList.add("selected");

    // Verifica a resposta correta
    const correctAnswer = currentQuestion.answers[currentQuestion.correct];
    if (selectedAnswer === correctAnswer) {
        score++; // Incrementa a pontuação se a resposta estiver correta
    } else {
        // Adiciona a resposta incorreta à lista
        incorrectAnswers.push({
            question: currentQuestion.question,
            selectedAnswer: selectedAnswer,
            correctAnswer: correctAnswer
        });
    }

    nextButton.classList.remove("hide"); // Exibe o botão "Próxima"
}

// Exibir a próxima pergunta ou o resultado final
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Exibir o resultado final
function showResult() {
    resetState();
    questionElement.classList.add("hide");

    // Salvar respostas incorretas e total de perguntas no localStorage
    localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
    localStorage.setItem("totalQuestions", selectedQuestions.length);

    // Exibir a pontuação correta
    resultText.textContent = `Você acertou ${score} de ${selectedQuestions.length} perguntas!`;
    resultContainer.classList.remove("hide");
}

// Eventos
nextButton.addEventListener("click", showNextQuestion);
restartButton.addEventListener("click", startQuiz);

// Inicializar o quiz
startQuiz();
