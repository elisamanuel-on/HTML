// ============================================
// PORTFÓLIO CV - ELISAMA MANUEL
// Dados dinâmicos com JavaScript
// ============================================

console.log('Portfólio CV carregado!');

// ============================================
// ÍCONES SVG (substituem emojis — cor herdada via currentColor)
// ============================================
const ICONES = {
    sol: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    lua: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
};

// ============================================
// 0. THEME TOGGLE (DARK/LIGHT MODE)
// ============================================

function initTheme() {
    const toggleBtn = document.getElementById('toggleTheme');
    if (!toggleBtn) return;

    const savedTheme = localStorage.getItem('theme');

    function aplicar(tema) {
        const claro = tema === 'light';
        document.body.classList.toggle('light-mode', claro);
        toggleBtn.innerHTML = `<span class="theme-icon">${claro ? ICONES.sol : ICONES.lua}</span><span class="theme-text">${claro ? 'Light' : 'Dark'}</span>`;
    }

    if (savedTheme === 'light' || savedTheme === 'dark') {
        aplicar(savedTheme);
    } else {
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        aplicar(prefersLight ? 'light' : 'dark');
    }

    toggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const isLight = document.body.classList.toggle('light-mode');
        aplicar(isLight ? 'light' : 'dark');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// ============================================
// 1. DADOS - COMPETÊNCIAS TÉCNICAS
// ============================================
const competencias = [
    'Python', 'RPA (Automação)', 'Pandas', 'FastAPI', 'Flask', 'Dash',
    'HTML & CSS', 'JavaScript', 'SQLite', 'MongoDB', 'Git', 'Machine Learning'
];

// Competências complementares (gestão/negócio) — reforça a transição de carreira
const competenciasComplementares = [
    'Excel Avançado', 'SAP (ERP)', 'Canva (Design)', 'Gestão de Projetos', 'Atendimento ao Cliente'
];

// ============================================
// 2. DADOS - EXPERIÊNCIA PROFISSIONAL (completo, do CV)
// ============================================
const experiencias = [
    {
        titulo: 'Estrategista Comercial & Consultora de Imagem Corporativa',
        empresa: 'Perfil Azul – Prestadora de Serviços',
        periodo: 'Outubro 2025 – Dezembro 2025',
        descricao: 'Desenvolvimento de estratégias comerciais para fortalecer a presença e competitividade da marca. Consultoria em imagem corporativa e posicionamento de mercado.'
    },
    {
        titulo: 'Comercial / Call Center',
        empresa: 'Fitness Up, Famalicão',
        periodo: 'Dezembro 2024 – Fevereiro 2025',
        descricao: 'Gestão e desenvolvimento do relacionamento com clientes. Atendimento direto, resolução de reclamações e apoio comercial.'
    },
    {
        titulo: 'Administradora e Editora Adjunta',
        empresa: 'Di Cuore Eventos, Lda., Luanda',
        periodo: 'Dezembro 2022 – Julho 2024',
        descricao: 'Suporte à gestão editorial e organização de conteúdos. Supervisão de equipa e coordenação de processos internos.'
    },
    {
        titulo: 'Directora do Departamento de Formação',
        empresa: 'CEDE – Centro de Desenvolvimento Empresarial, Luanda',
        periodo: 'Fevereiro 2022 – Novembro 2022',
        descricao: 'Supervisão de equipa, gestão de programas e implementação de ações de capacitação.'
    },
    {
        titulo: 'Estágio de Contabilista Sénior',
        empresa: 'Infocontabil Consultoria SU LDA, Luanda',
        periodo: 'Novembro 2021 – Janeiro 2022',
        descricao: 'Análises financeiras e preparação de demonstrativos contábeis. Apoio na tomada de decisões estratégicas.'
    },
    {
        titulo: 'Assistente Administrativa',
        empresa: 'Miragos Empreendimentos LDA, Luanda',
        periodo: 'Junho 2018 – Novembro 2018',
        descricao: 'Atendimento ao cliente, vendas de serviços e gestão de comunicação. Apoio na organização de eventos e coordenação de stock.'
    },
    {
        titulo: 'Assistente de Contabilidade',
        empresa: 'Escritório de Contabilidade e Consultoria Dr. Rui Manuel, Luanda',
        periodo: 'Março 2017 – Abril 2018',
        descricao: 'Organização financeira, apoio administrativo e controlo de documentos.'
    }
];

// ============================================
// 3. DADOS - FORMAÇÃO ACADÉMICA
// ============================================
const formacao = [
    {
        curso: 'Técnico Especialista em Tecnologias e Programação de Sistemas de Informação',
        instituicao: 'IEFP – Instituto de Emprego e Formação Profissional',
        periodo: '2025 – 2026'
    },
    {
        curso: 'Licenciatura em Finanças e Contabilidade',
        instituicao: 'Universidade Independente de Angola',
        periodo: '2018 – 2022'
    },
    {
        curso: 'Curso Técnico em Finanças',
        instituicao: 'Instituto Médio de Administração e Gestão, Luanda',
        periodo: '2014 – 2017'
    }
];

// ============================================
// 4. DADOS - PROJETOS (com miniatura real de cada um)
// ============================================
const projetos = [
    {
        id: '007',
        titulo: 'Calculadora 4 Operações',
        descricao: 'Calculadora com Soma, Subtração, Multiplicação e Divisão',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO007 - Calculadora/',
        imagem: 'imagens/projetos/007-calculadora.jpg'
    },
    {
        id: '008',
        titulo: 'Tabuada Interativa',
        descricao: 'Tabuada do 1 ao 10 com design moderno',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO008 - Tabuada/',
        imagem: 'imagens/projetos/008-tabuada.jpg'
    },
    {
        id: '009',
        titulo: 'Registo de Utilizador',
        descricao: 'Formulário com Nome, Idade, Curso e Escola',
        tag: 'HTML',
        caminho: 'projetos/EXERCICIO009 - Registo de Utilizador/',
        imagem: 'imagens/projetos/009-registo-utilizador.jpg'
    },
    {
        id: '011',
        titulo: 'Curiosidades Escondidas',
        descricao: '3 curiosidades reveladas com clique',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO011 - Curiosidades Escondidas/',
        imagem: 'imagens/projetos/011-curiosidades.jpg'
    },
    {
        id: '012',
        titulo: 'Imagem Escondida',
        descricao: 'Revelação com hover sobre a área',
        tag: 'CSS',
        caminho: 'projetos/EXERCICIO012 - Imagem Escondida/',
        imagem: 'imagens/projetos/012-imagem-escondida.jpg'
    },
    {
        id: '013',
        titulo: 'Calculadora com 4 Operações',
        descricao: 'Soma, Subtração, Multiplicação e Divisão',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO013 - Calculadora com 4 Operações/',
        imagem: 'imagens/projetos/013-calculadora-4-operacoes.jpg'
    },
    {
        id: '014',
        titulo: 'Jogo da Adivinha',
        descricao: 'Adivinhe o número entre 1 e 50',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO014 - Jogo da Adivinha/',
        imagem: 'imagens/projetos/014-jogo-adivinha.jpg'
    },
    {
        id: '017',
        titulo: 'Números Primos',
        descricao: 'Encontra todos os primos até N',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO017 - Números Primos/',
        imagem: 'imagens/projetos/017-numeros-primos.jpg'
    },
    {
        id: '018',
        titulo: 'Jogo da Adivinha com Toggle',
        descricao: 'Dark/Light Mode no jogo',
        tag: 'CSS',
        caminho: 'projetos/EXERCICIO018 - Jogo da Adivinha com Toggle/',
        imagem: 'imagens/projetos/018-jogo-adivinha-toggle.jpg'
    },
    {
        id: '019',
        titulo: 'Breakpoints',
        descricao: 'Layout responsivo com Media Queries',
        tag: 'CSS',
        caminho: 'projetos/EXERCICIO019 - Breakpoints/',
        imagem: 'imagens/projetos/019-breakpoints.jpg'
    }
];

// ============================================
// 5. FUNÇÕES PARA CARREGAR DADOS
// ============================================

function carregarCompetencias() {
    const container = document.getElementById('tagsContainer');
    if (container) {
        container.innerHTML = '';
        competencias.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = tech;
            container.appendChild(tag);
        });
    }

    const numero = document.getElementById('numeroTech');
    if (numero) numero.textContent = `+${competencias.length}`;

    const extra = document.getElementById('tagsExtraContainer');
    if (extra) {
        extra.innerHTML = '';
        competenciasComplementares.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tag tag-secundaria';
            tag.textContent = tech;
            extra.appendChild(tag);
        });
    }
}

function carregarExperiencias() {
    const container = document.getElementById('experienciaContainer');
    if (!container) return;

    container.innerHTML = '';
    experiencias.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'experiencia-item reveal';
        div.innerHTML = `
            <div class="titulo">${exp.titulo}</div>
            <div class="empresa">${exp.empresa}</div>
            <div class="periodo">${exp.periodo}</div>
            <div class="descricao">${exp.descricao}</div>
        `;
        container.appendChild(div);
    });
}

function carregarFormacao() {
    const container = document.getElementById('formacaoContainer');
    if (!container) return;

    container.innerHTML = '';
    formacao.forEach(item => {
        const div = document.createElement('div');
        div.className = 'formacao-item reveal';
        div.innerHTML = `
            <div class="titulo">${item.curso}</div>
            <div class="empresa">${item.instituicao}</div>
            <div class="periodo">${item.periodo}</div>
        `;
        container.appendChild(div);
    });
}

function carregarProjetos() {
    const container = document.getElementById('projetosContainer');
    if (!container) return;

    container.innerHTML = '';
    projetos.forEach(proj => {
        const div = document.createElement('a');
        div.className = 'projeto-card reveal';
        div.href = proj.caminho + 'index.html';
        div.target = '_blank';
        div.innerHTML = `
            <div class="projeto-thumb">
                <img src="${proj.imagem}" alt="Captura do projeto ${proj.titulo}" loading="lazy">
                <span class="projeto-thumb-tag">${proj.tag}</span>
            </div>
            <div class="projeto-body">
                <div class="projeto-numero">#${proj.id}</div>
                <h3>${proj.titulo}</h3>
                <p>${proj.descricao}</p>
                <span class="projeto-link">Ver Projeto →</span>
            </div>
        `;
        container.appendChild(div);
    });
}

// ============================================
// 6. FUNÇÃO PARA FORMULÁRIO DE CONTACTO
// ============================================
// URL da tua Google Apps Script (envia diretamente para o teu Gmail)
const ENDPOINT_CONTACTO = 'https://script.google.com/macros/s/AKfycbzU4jTMhs1rTK_YFIyQLqb0Nx59TZDRwHQRbk-Dc3pU2vOEfGWT-slohAxcQnPinAk6/exec';

function configurarFormulario() {
    const form = document.getElementById('contactoForm');
    const feedback = document.getElementById('feedback');
    if (!form) return;

    const botao = form.querySelector('.btn-enviar');
    const textoOriginalBotao = botao ? botao.textContent : '';

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const assunto = document.getElementById('assunto').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !email || !assunto || !mensagem) {
            feedback.className = 'feedback erro';
            feedback.textContent = 'Por favor, preencha todos os campos!';
            return;
        }

        if (botao) {
            botao.disabled = true;
            botao.textContent = 'A enviar...';
        }

        const dados = new FormData();
        dados.append('nome', nome);
        dados.append('email', email);
        dados.append('assunto', assunto);
        dados.append('mensagem', mensagem);

        fetch(ENDPOINT_CONTACTO, {
            method: 'POST',
            body: dados,
            mode: 'no-cors' // o Apps Script não devolve CORS; assumimos sucesso se não houver erro de rede
        })
            .then(() => {
                feedback.className = 'feedback sucesso';
                feedback.textContent = `Mensagem enviada com sucesso, ${nome}! Entrarei em contacto em breve.`;
                form.reset();
            })
            .catch(() => {
                feedback.className = 'feedback erro';
                feedback.textContent = 'Não foi possível enviar agora. Tenta novamente ou escreve para elisamanueljob@gmail.com.';
            })
            .finally(() => {
                if (botao) {
                    botao.disabled = false;
                    botao.textContent = textoOriginalBotao;
                }
            });
    });
}

// ============================================
// 7. ANIMAÇÃO AO FAZER SCROLL (reveal)
// ============================================
function iniciarScrollReveal() {
    const alvo = document.querySelectorAll('.reveal');
    if (!alvo.length) return;

    if (!('IntersectionObserver' in window)) {
        alvo.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    alvo.forEach(el => observer.observe(el));
}

// ============================================
// 8. INICIALIZAR TUDO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    carregarCompetencias();
    carregarExperiencias();
    carregarFormacao();
    carregarProjetos();
    configurarFormulario();

    // marca as secções estáticas para a animação de scroll também
    document.querySelectorAll('section, .hero-cta, .contactos-grid, .contacto-form').forEach(el => {
        el.classList.add('reveal');
    });

    iniciarScrollReveal();

    document.body.classList.add('pagina-pronta');
});