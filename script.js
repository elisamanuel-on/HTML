// ============================================
// PORTFÓLIO CV - ELISAMA MANUEL
// Dados dinâmicos com JavaScript
// ============================================

console.log('Portfólio CV carregado!');

// ============================================
// 0. THEME TOGGLE (DARK/LIGHT MODE)
// ============================================

function initTheme() {
    console.log('Inicializando tema...');
    const toggleBtn = document.getElementById('toggleTheme');
    if (!toggleBtn) {
        console.warn('Botão toggle não encontrado!');
        return;
    }

    // Verificar preferência salva
    const savedTheme = localStorage.getItem('theme');
    console.log('Tema salvo:', savedTheme);
    
    // Definir tema inicial
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        toggleBtn.innerHTML = `<span class="theme-icon">☀️</span><span class="theme-text">Light</span>`;
        console.log('Tema Light carregado (salvo)');
    } else if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        toggleBtn.innerHTML = `<span class="theme-icon">🌙</span><span class="theme-text">Dark</span>`;
        console.log('🌙 Tema Dark carregado (salvo)');
    } else {
        // Se não houver preferência salva, verificar sistema
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        if (prefersLight) {
            document.body.classList.add('light-mode');
            toggleBtn.innerHTML = `<span class="theme-icon">☀️</span><span class="theme-text">Light</span>`;
            console.log('Tema Light carregado (sistema)');
        } else {
            document.body.classList.remove('light-mode');
            toggleBtn.innerHTML = `<span class="theme-icon">🌙</span><span class="theme-text">Dark</span>`;
            console.log('🌙 Tema Dark carregado (padrão)');
        }
    }

    // Evento de clique
    toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Toggle clicado!');
        
        const isLight = document.body.classList.toggle('light-mode');
        
        if (isLight) {
            this.innerHTML = `<span class="theme-icon">☀️</span><span class="theme-text">Light</span>`;
            localStorage.setItem('theme', 'light');
            console.log('☀️ Mudou para Light Mode');
        } else {
            this.innerHTML = `<span class="theme-icon">🌙</span><span class="theme-text">Dark</span>`;
            localStorage.setItem('theme', 'dark');
            console.log('🌙 Mudou para Dark Mode');
        }
    });

    console.log('Theme toggle inicializado com sucesso!');
}

// ============================================
// 1. DADOS - COMPETÊNCIAS TÉCNICAS
// ============================================
const competencias = [
    'Python', 'RPA (Automação)', 'Pandas', 'FastAPI',
    'HTML & CSS', 'JavaScript', 'SQLite', 'MongoDB', 'Git', 'Flask'
];

// ============================================
// 2. DADOS - EXPERIÊNCIA PROFISSIONAL
// ============================================
const experiencias = [
    {
        titulo: 'Técnica Especialista em Tecnologias e Programação',
        empresa: 'IEFP - Instituto de Emprego e Formação Profissional',
        periodo: '2025 - 2026',
        descricao: 'Formação intensiva em Python, Automação (RPA), Análise de Dados, Desenvolvimento Web e Programação de Sistemas de Informação.'
    },
    {
        titulo: 'Estrategista Comercial & Consultora de Imagem Corporativa',
        empresa: 'Perfil Azul – Prestadora de Serviços',
        periodo: 'Outubro 2025 – Dezembro 2025',
        descricao: 'Desenvolvimento de estratégias comerciais para fortalecer a presença e competitividade da marca.'
    },
    {
        titulo: 'Administradora e Editora Adjunta',
        empresa: 'Di Cuore Eventos, Lda., Luanda',
        periodo: 'Dezembro 2022 – Julho 2024',
        descricao: 'Suporte à gestão editorial e organização de conteúdos. Supervisão de equipa e coordenação de processos internos.'
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
// 4. DADOS - PROJETOS
// ============================================
const projetos = [
    { 
        id: '007', 
        titulo: 'Calculadora 4 Operações', 
        descricao: 'Calculadora com Soma, Subtração, Multiplicação e Divisão',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO007 - Calculadora/'
    },
    { 
        id: '008', 
        titulo: 'Tabuada Interativa', 
        descricao: 'Tabuada do 1 ao 10 com design moderno',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO008 - Tabuada/'
    },
    { 
        id: '009', 
        titulo: 'Registo de Utilizador', 
        descricao: 'Formulário com Nome, Idade, Curso e Escola',
        tag: 'HTML',
        caminho: 'projetos/EXERCICIO009 - Registo de Utilizador/'
    },
    { 
        id: '011', 
        titulo: 'Curiosidades Escondidas', 
        descricao: '3 curiosidades reveladas com clique',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO011 - Curiosidades Escondidas/'
    },
    { 
        id: '012', 
        titulo: 'Imagem Escondida', 
        descricao: 'Revelação com hover sobre a área',
        tag: 'CSS',
        caminho: 'projetos/EXERCICIO012 - Imagem Escondida/'
    },
    { 
        id: '013', 
        titulo: 'Calculadora com 4 Operações', 
        descricao: 'Soma, Subtração, Multiplicação e Divisão',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO013 - Calculadora com 4 Operações/'
    },
    { 
        id: '014', 
        titulo: 'Jogo da Adivinha', 
        descricao: 'Adivinhe o número entre 1 e 50',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO014 - Jogo da Adivinha/'
    },
    { 
        id: '017', 
        titulo: 'Números Primos', 
        descricao: 'Encontra todos os primos até N',
        tag: 'JavaScript',
        caminho: 'projetos/EXERCICIO017 - Números Primos/'
    },
    { 
        id: '018', 
        titulo: 'Jogo da Adivinha com Toggle', 
        descricao: 'Dark/Light Mode no jogo',
        tag: 'CSS',
        caminho: 'projetos/EXERCICIO018 - Jogo da Adivinha com Toggle/'
    },
    { 
        id: '019', 
        titulo: 'Breakpoints', 
        descricao: 'Layout responsivo com Media Queries',
        tag: 'CSS',
        caminho: 'projetos/EXERCICIO019 - Breakpoints/'
    }
];

// ============================================
// 5. FUNÇÕES PARA CARREGAR DADOS
// ============================================

function carregarCompetencias() {
    const container = document.getElementById('tagsContainer');
    if (!container) return;

    container.innerHTML = '';
    competencias.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = tech;
        container.appendChild(tag);
    });
    console.log(`${competencias.length} competências carregadas`);
}

function carregarExperiencias() {
    const container = document.getElementById('experienciaContainer');
    if (!container) return;

    container.innerHTML = '';
    experiencias.forEach(exp => {
        const div = document.createElement('div');
        div.className = 'experiencia-item';
        div.innerHTML = `
            <div class="titulo">${exp.titulo}</div>
            <div class="empresa">${exp.empresa}</div>
            <div class="periodo">${exp.periodo}</div>
            <div class="descricao">${exp.descricao}</div>
        `;
        container.appendChild(div);
    });
    console.log(`${experiencias.length} experiências carregadas`);
}

function carregarFormacao() {
    const container = document.getElementById('formacaoContainer');
    if (!container) return;

    container.innerHTML = '';
    formacao.forEach(item => {
        const div = document.createElement('div');
        div.className = 'formacao-item';
        div.innerHTML = `
            <div class="titulo">${item.curso}</div>
            <div class="empresa">${item.instituicao}</div>
            <div class="periodo">${item.periodo}</div>
        `;
        container.appendChild(div);
    });
    console.log(`${formacao.length} formações carregadas`);
}

function carregarProjetos() {
    const container = document.getElementById('projetosContainer');
    if (!container) return;

    container.innerHTML = '';
    projetos.forEach(proj => {
        const div = document.createElement('a');
        div.className = 'projeto-card';
        div.href = proj.caminho + 'index.html';
        div.target = '_blank';
        div.innerHTML = `
            <div class="projeto-numero">#${proj.id}</div>
            <h3>${proj.titulo}</h3>
            <p>${proj.descricao}</p>
            <span class="projeto-tag">${proj.tag}</span>
            <span class="projeto-link"> Ver Projeto →</span>
        `;
        container.appendChild(div);
    });
    console.log(`${projetos.length} projetos carregados`);
}

// ============================================
// 6. FUNÇÃO PARA FORMULÁRIO DE CONTACTO
// ============================================
function configurarFormulario() {
    const form = document.getElementById('contactoForm');
    const feedback = document.getElementById('feedback');
    if (!form) return;

    form.addEventListener('submit', function(e) {
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

        feedback.className = 'feedback sucesso';
        feedback.textContent = `Mensagem enviada com sucesso, ${nome}! Entrarei em contacto em breve.`;
        this.reset();

        console.log(`Mensagem de ${nome} (${email}): ${assunto}`);
    });
    console.log('Formulário configurado');
}

// ============================================
// 7. INICIALIZAR TUDO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando...');
    initTheme();
    carregarCompetencias();
    carregarExperiencias();
    carregarFormacao();
    carregarProjetos();
    configurarFormulario();
    
    console.log('Portfólio CV completamente carregado!');
    console.log('Clique no para alternar entre Dark e Light Mode');
});