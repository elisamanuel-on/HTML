// ============================================
// TERMINAL-CORE.JS
// Motor partilhado: animação de boot (index) + terminal interativo (terminal.html)
// ============================================

/* ---------- Utilitário: escreve texto letra a letra ---------- */
function escreverLinha(el, texto, velocidade = 18) {
    return new Promise(resolve => {
        let i = 0;
        el.textContent = '';
        const intervalo = setInterval(() => {
            el.textContent += texto[i];
            i++;
            if (i >= texto.length) {
                clearInterval(intervalo);
                resolve();
            }
        }, velocidade);
    });
}

function pausa(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* ============================================
   BOOT SEQUENCE (index.html)
   ============================================ */
const BOOT_LINHAS = [
    { prompt: 'elisama@portfolio:~$ ', comando: 'whoami', saida: ['Elisama Manuel — Desenvolvedora em Formação'] },
    { prompt: 'elisama@portfolio:~$ ', comando: 'cat sobre.txt', saida: ['Python · RPA · Análise de Dados · Desenvolvimento Web', 'Em transição de Finanças & Contabilidade para Tecnologia.'] },
    { prompt: 'elisama@portfolio:~$ ', comando: 'ls projetos/', saida: ['10 projetos encontrados. A carregar portfólio...'] },
    { prompt: 'elisama@portfolio:~$ ', comando: './iniciar_site.sh', saida: ['[██████████████████████████] 100%', 'Portfólio pronto.'] }
];

async function correrBoot() {
    const overlay = document.getElementById('bootOverlay');
    const corpo = document.getElementById('bootCorpo');
    if (!overlay || !corpo) return;

    // Visitantes que já viram o boot nesta sessão não esperam de novo
    if (sessionStorage.getItem('bootVisto') === 'sim') {
        overlay.remove();
        document.body.classList.add('pagina-pronta');
        return;
    }

    document.body.classList.add('boot-ativo');

    for (const linha of BOOT_LINHAS) {
        const linhaPrompt = document.createElement('div');
        linhaPrompt.className = 'boot-linha';
        const spanPrompt = document.createElement('span');
        spanPrompt.className = 'boot-prompt';
        spanPrompt.textContent = linha.prompt;
        const spanComando = document.createElement('span');
        linhaPrompt.appendChild(spanPrompt);
        linhaPrompt.appendChild(spanComando);
        corpo.appendChild(linhaPrompt);

        await escreverLinha(spanComando, linha.comando, 28);
        await pausa(150);

        for (const saida of linha.saida) {
            const linhaSaida = document.createElement('div');
            linhaSaida.className = 'boot-saida';
            linhaSaida.textContent = saida;
            corpo.appendChild(linhaSaida);
            await pausa(180);
        }
        await pausa(220);
    }

    await pausa(350);
    overlay.classList.add('boot-fade');
    sessionStorage.setItem('bootVisto', 'sim');
    setTimeout(() => {
        overlay.remove();
        document.body.classList.remove('boot-ativo');
        document.body.classList.add('pagina-pronta');
    }, 500);
}

function configurarBotaoSaltar() {
    const btn = document.getElementById('bootSaltar');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const overlay = document.getElementById('bootOverlay');
        if (!overlay) return;
        sessionStorage.setItem('bootVisto', 'sim');
        overlay.remove();
        document.body.classList.remove('boot-ativo');
        document.body.classList.add('pagina-pronta');
    });
}

/* ============================================
   TERMINAL INTERATIVO (terminal.html)
   ============================================ */
function iniciarTerminalInterativo() {
    const output = document.getElementById('termOutput');
    const input = document.getElementById('termInput');
    const janela = document.getElementById('termJanela');
    if (!output || !input) return;

    const historico = [];
    let indiceHistorico = -1;

    function imprimir(texto = '', classe = '') {
        const linha = document.createElement('div');
        linha.className = 'term-linha' + (classe ? ' ' + classe : '');
        linha.innerHTML = texto;
        output.appendChild(linha);
        janela.scrollTop = janela.scrollHeight;
    }

    function imprimirPrompt(comando) {
        imprimir(`<span class="term-prompt">elisama@portfolio:~$</span> ${comando}`, 'term-echo');
    }

    const COMANDOS = {
        help: () => {
            imprimir('Comandos disponíveis:');
            imprimir('  sobre        — quem sou eu');
            imprimir('  skills       — tecnologias que domino');
            imprimir('  experiencia  — percurso profissional');
            imprimir('  projetos     — lista de projetos');
            imprimir('  contacto     — como falar comigo');
            imprimir('  cv           — descarregar o meu CV');
            imprimir('  github / linkedin — abrir perfis');
            imprimir('  clear        — limpar o ecrã');
        },
        sobre: () => {
            imprimir('Elisama Manuel — Desenvolvedora em Formação.');
            imprimir('Transição de Finanças &amp; Contabilidade para Tecnologia.');
            imprimir('Foco em Python, Automação (RPA), Análise de Dados e Web.');
        },
        skills: () => {
            imprimir('Python · RPA · Pandas · FastAPI · Flask · Dash');
            imprimir('SQLite · MongoDB · Git · HTML/CSS · JavaScript · Machine Learning');
        },
        experiencia: () => {
            imprimir('7 experiências profissionais — ver perfil completo em');
            imprimir('<a href="index.html#experiencia">index.html#experiencia</a>');
        },
        projetos: () => {
            imprimir('10 projetos disponíveis → <a href="portfolio.html">portfolio.html</a>');
        },
        contacto: () => {
            imprimir('email: elisamanueljob@gmail.com');
            imprimir('tel:   +351 913 516 395');
            imprimir('mais em <a href="contacto.html">contacto.html</a>');
        },
        cv: () => {
            imprimir('A descarregar CV...');
            const a = document.createElement('a');
            a.href = 'cv/Elisama-Manuel-CV.pdf';
            a.download = '';
            document.body.appendChild(a);
            a.click();
            a.remove();
        },
        github: () => {
            imprimir('A abrir github.com/elisamanuel-on ...');
            window.open('https://github.com/elisamanuel-on', '_blank');
        },
        linkedin: () => {
            imprimir('A abrir LinkedIn...');
            window.open('https://www.linkedin.com/in/elisama-manuel-49025117a/', '_blank');
        },
        whoami: () => imprimir('elisama'),
        date: () => imprimir(new Date().toLocaleString('pt-PT')),
        clear: () => { output.innerHTML = ''; },
        banner: mostrarBanner,
        'sudo contrata-me': () => {
            imprimir('[sudo] password for recrutador: ********');
            imprimir('[OK] Acesso concedido. A processar candidatura...');
            imprimir('Envia um email para elisamanueljob@gmail.com');
        }
    };

    function mostrarBanner() {
        imprimir('┌─────────────────────────────┐');
        imprimir('│   ELISAMA MANUEL — TERMINAL  │');
        imprimir('│   escreve "help" para começar│');
        imprimir('└─────────────────────────────┘');
    }

    function executar(comandoBruto) {
        const comando = comandoBruto.trim();
        imprimirPrompt(comandoBruto);
        if (!comando) return;

        historico.push(comandoBruto);
        indiceHistorico = historico.length;

        const chave = comando.toLowerCase();
        if (COMANDOS[chave]) {
            COMANDOS[chave]();
        } else {
            imprimir(`comando não encontrado: ${comando}. escreve "help" para a lista de comandos.`, 'term-erro');
        }
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            executar(input.value);
            input.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (indiceHistorico > 0) {
                indiceHistorico--;
                input.value = historico[indiceHistorico];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (indiceHistorico < historico.length - 1) {
                indiceHistorico++;
                input.value = historico[indiceHistorico];
            } else {
                indiceHistorico = historico.length;
                input.value = '';
            }
        }
    });

    janela.addEventListener('click', () => input.focus());

    mostrarBanner();
    input.focus();
}

document.addEventListener('DOMContentLoaded', function () {
    correrBoot();
    configurarBotaoSaltar();
    iniciarTerminalInterativo();
});