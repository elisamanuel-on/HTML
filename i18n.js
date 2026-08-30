// ============================================
// I18N.JS — Sistema de tradução (PT / EN / ES / FR)
// Motor partilhado por todas as páginas do site
// ============================================

const IDIOMAS_SUPORTADOS = ['pt', 'en', 'es', 'fr'];

const TRADUCOES = {
    pt: {
        nav_perfil: 'Perfil',
        nav_portfolio: 'Portfólio',
        nav_terminal: 'Terminal',
        nav_contacto: 'Contacto',

        theme_dark: 'Escuro',
        theme_light: 'Claro',

        hero_badge: 'Dev em Formação',
        hero_subtitulo: 'Desenvolvedora em Formação • Tecnologias de Informação',
        hero_p1: 'Com uma base sólida em <strong>Finanças e Contabilidade</strong> e uma transição estratégica para a área tecnológica, atualmente sou Técnica Especialista em <strong>Tecnologias e Programação de Sistemas de Informação</strong> no IEFP.',
        hero_p2: 'Especializo-me em <strong>Python, Automação de Processos (RPA), Análise de Dados e Desenvolvimento Web</strong>. A minha missão é aliar a experiência em gestão e negócios com competências técnicas para criar soluções inovadoras.',
        hero_btn_cv: 'Descarregar CV',
        hero_btn_projetos: 'Ver Projetos →',
        stat_projetos: 'Projetos',
        stat_tecnologias: 'Tecnologias',
        stat_experiencias: 'Experiências',
        tags_extra_label: 'Também trago experiência em:',

        titulo_experiencia: 'Experiência Profissional',
        titulo_formacao: 'Formação Académica',

        footer_tagline: 'Tecnologias e Programação de Sistemas de Informação',
        voltar_inicio: '← Voltar ao Início',

        portfolio_titulo: 'MEUS PROJETOS',
        portfolio_subtitulo: 'Clique num projeto para ver o código-fonte e demonstração',
        portfolio_footer: 'Todos os projetos foram desenvolvidos durante a formação em <strong>Programação Web (Client-Side)</strong>',
        projeto_ver: 'Ver Projeto →',

        contacto_titulo: 'CONTACTO',
        contacto_subtitulo: 'Entre em contacto para oportunidades profissionais',
        form_label_nome: 'Nome Completo',
        form_label_email: 'Email',
        form_label_assunto: 'Assunto',
        form_label_mensagem: 'Mensagem',
        form_placeholder_nome: 'Pode ser o primeiro e o último',
        form_placeholder_email: 'Escreva o seu email',
        form_placeholder_assunto: 'Escreva o que pretende',
        form_placeholder_mensagem: 'Escreva a sua mensagem...',
        form_btn_enviar: 'Enviar Mensagem',
        form_erro_campos: 'Por favor, preencha todos os campos!',
        form_enviando: 'A enviar...',
        form_sucesso: 'Mensagem enviada com sucesso, {nome}! Entrarei em contacto em breve.',
        form_erro_envio: 'Não foi possível enviar agora. Tenta novamente ou escreve para elisamanueljob@gmail.com.',

        card_email: 'Email',
        card_telefone: 'Telefone',
        card_localizacao: 'Localização',
        card_linkedin: 'LinkedIn',
        card_github: 'GitHub',
        card_instagram: 'Instagram',
        card_ver_perfil: 'Ver Perfil',
        card_ver_repositorios: 'Ver Repositórios',

        term_hint_prefixo: 'experimenta:'
    },
    en: {
        nav_perfil: 'Profile',
        nav_portfolio: 'Portfolio',
        nav_terminal: 'Terminal',
        nav_contacto: 'Contact',

        theme_dark: 'Dark',
        theme_light: 'Light',

        hero_badge: 'Dev in Training',
        hero_subtitulo: 'Developer in Training • Information Technology',
        hero_p1: 'With a solid background in <strong>Finance and Accounting</strong> and a strategic move into tech, I am currently a Specialist Technician in <strong>Information Systems Technology and Programming</strong> at IEFP (Portuguese Institute for Employment and Vocational Training).',
        hero_p2: 'I specialize in <strong>Python, Process Automation (RPA), Data Analysis and Web Development</strong>. My mission is to combine management and business experience with technical skills to build innovative solutions.',
        hero_btn_cv: 'Download CV',
        hero_btn_projetos: 'View Projects →',
        stat_projetos: 'Projects',
        stat_tecnologias: 'Technologies',
        stat_experiencias: 'Roles',
        tags_extra_label: 'I also bring experience in:',

        titulo_experiencia: 'Professional Experience',
        titulo_formacao: 'Education',

        footer_tagline: 'Information Systems Technology and Programming',
        voltar_inicio: '← Back to Home',

        portfolio_titulo: 'MY PROJECTS',
        portfolio_subtitulo: 'Click a project to see the source code and live demo',
        portfolio_footer: 'All projects were built during Web Programming (Client-Side) training',
        projeto_ver: 'View Project →',

        contacto_titulo: 'CONTACT',
        contacto_subtitulo: 'Get in touch about professional opportunities',
        form_label_nome: 'Full Name',
        form_label_email: 'Email',
        form_label_assunto: 'Subject',
        form_label_mensagem: 'Message',
        form_placeholder_nome: 'First and last name is fine',
        form_placeholder_email: 'Enter your email',
        form_placeholder_assunto: 'What is this about?',
        form_placeholder_mensagem: 'Write your message...',
        form_btn_enviar: 'Send Message',
        form_erro_campos: 'Please fill in all fields!',
        form_enviando: 'Sending...',
        form_sucesso: 'Message sent successfully, {nome}! I will get back to you soon.',
        form_erro_envio: "Couldn't send it right now. Please try again or email elisamanueljob@gmail.com.",

        card_email: 'Email',
        card_telefone: 'Phone',
        card_localizacao: 'Location',
        card_linkedin: 'LinkedIn',
        card_github: 'GitHub',
        card_instagram: 'Instagram',
        card_ver_perfil: 'View Profile',
        card_ver_repositorios: 'View Repositories',

        term_hint_prefixo: 'try:'
    },
    es: {
        nav_perfil: 'Perfil',
        nav_portfolio: 'Portafolio',
        nav_terminal: 'Terminal',
        nav_contacto: 'Contacto',

        theme_dark: 'Oscuro',
        theme_light: 'Claro',

        hero_badge: 'Dev en Formación',
        hero_subtitulo: 'Desarrolladora en Formación • Tecnologías de la Información',
        hero_p1: 'Con una base sólida en <strong>Finanzas y Contabilidad</strong> y una transición estratégica hacia el área tecnológica, actualmente soy Técnica Especialista en <strong>Tecnologías y Programación de Sistemas de Información</strong> en el IEFP (Instituto portugués de Empleo y Formación Profesional).',
        hero_p2: 'Me especializo en <strong>Python, Automatización de Procesos (RPA), Análisis de Datos y Desarrollo Web</strong>. Mi misión es combinar la experiencia en gestión y negocios con competencias técnicas para crear soluciones innovadoras.',
        hero_btn_cv: 'Descargar CV',
        hero_btn_projetos: 'Ver Proyectos →',
        stat_projetos: 'Proyectos',
        stat_tecnologias: 'Tecnologías',
        stat_experiencias: 'Experiencias',
        tags_extra_label: 'También aporto experiencia en:',

        titulo_experiencia: 'Experiencia Profesional',
        titulo_formacao: 'Formación Académica',

        footer_tagline: 'Tecnologías y Programación de Sistemas de Información',
        voltar_inicio: '← Volver al Inicio',

        portfolio_titulo: 'MIS PROYECTOS',
        portfolio_subtitulo: 'Haz clic en un proyecto para ver el código fuente y la demo',
        portfolio_footer: 'Todos los proyectos fueron desarrollados durante la formación en <strong>Programación Web (Client-Side)</strong>',
        projeto_ver: 'Ver Proyecto →',

        contacto_titulo: 'CONTACTO',
        contacto_subtitulo: 'Ponte en contacto para oportunidades profesionales',
        form_label_nome: 'Nombre Completo',
        form_label_email: 'Correo Electrónico',
        form_label_assunto: 'Asunto',
        form_label_mensagem: 'Mensaje',
        form_placeholder_nome: 'Puede ser el nombre y el apellido',
        form_placeholder_email: 'Escribe tu correo electrónico',
        form_placeholder_assunto: 'Escribe el motivo',
        form_placeholder_mensagem: 'Escribe tu mensaje...',
        form_btn_enviar: 'Enviar Mensaje',
        form_erro_campos: '¡Por favor, completa todos los campos!',
        form_enviando: 'Enviando...',
        form_sucesso: '¡Mensaje enviado con éxito, {nome}! Me pondré en contacto pronto.',
        form_erro_envio: 'No se pudo enviar en este momento. Inténtalo de nuevo o escribe a elisamanueljob@gmail.com.',

        card_email: 'Correo',
        card_telefone: 'Teléfono',
        card_localizacao: 'Ubicación',
        card_linkedin: 'LinkedIn',
        card_github: 'GitHub',
        card_instagram: 'Instagram',
        card_ver_perfil: 'Ver Perfil',
        card_ver_repositorios: 'Ver Repositorios',

        term_hint_prefixo: 'prueba:'
    },
    fr: {
        nav_perfil: 'Profil',
        nav_portfolio: 'Portfolio',
        nav_terminal: 'Terminal',
        nav_contacto: 'Contact',

        theme_dark: 'Sombre',
        theme_light: 'Clair',

        hero_badge: 'Dev en Formation',
        hero_subtitulo: 'Développeuse en Formation • Technologies de l\'Information',
        hero_p1: 'Avec une solide base en <strong>Finance et Comptabilité</strong> et une transition stratégique vers le domaine technologique, je suis actuellement Technicienne Spécialiste en <strong>Technologies et Programmation des Systèmes d\'Information</strong> à l\'IEFP (Institut portugais de l\'Emploi et de la Formation Professionnelle).',
        hero_p2: 'Je me spécialise en <strong>Python, Automatisation des Processus (RPA), Analyse de Données et Développement Web</strong>. Ma mission est d\'allier l\'expérience en gestion et en affaires à des compétences techniques pour créer des solutions innovantes.',
        hero_btn_cv: 'Télécharger le CV',
        hero_btn_projetos: 'Voir les Projets →',
        stat_projetos: 'Projets',
        stat_tecnologias: 'Technologies',
        stat_experiencias: 'Expériences',
        tags_extra_label: "J'apporte aussi de l'expérience en :",

        titulo_experiencia: 'Expérience Professionnelle',
        titulo_formacao: 'Formation Académique',

        footer_tagline: 'Technologies et Programmation des Systèmes d\'Information',
        voltar_inicio: "← Retour à l'Accueil",

        portfolio_titulo: 'MES PROJETS',
        portfolio_subtitulo: 'Cliquez sur un projet pour voir le code source et la démo',
        portfolio_footer: 'Tous les projets ont été développés pendant la formation en <strong>Programmation Web (Client-Side)</strong>',
        projeto_ver: 'Voir le Projet →',

        contacto_titulo: 'CONTACT',
        contacto_subtitulo: 'Contactez-moi pour des opportunités professionnelles',
        form_label_nome: 'Nom Complet',
        form_label_email: 'E-mail',
        form_label_assunto: 'Sujet',
        form_label_mensagem: 'Message',
        form_placeholder_nome: 'Prénom et nom suffisent',
        form_placeholder_email: 'Entrez votre e-mail',
        form_placeholder_assunto: 'Quel est l\'objet du message ?',
        form_placeholder_mensagem: 'Écrivez votre message...',
        form_btn_enviar: 'Envoyer le Message',
        form_erro_campos: 'Merci de remplir tous les champs !',
        form_enviando: 'Envoi en cours...',
        form_sucesso: 'Message envoyé avec succès, {nome} ! Je vous recontacterai bientôt.',
        form_erro_envio: "Impossible d'envoyer pour le moment. Réessayez ou écrivez à elisamanueljob@gmail.com.",

        card_email: 'E-mail',
        card_telefone: 'Téléphone',
        card_localizacao: 'Localisation',
        card_linkedin: 'LinkedIn',
        card_github: 'GitHub',
        card_instagram: 'Instagram',
        card_ver_perfil: 'Voir le Profil',
        card_ver_repositorios: 'Voir les Dépôts',

        term_hint_prefixo: 'essaie :'
    }
};

/* ---------- Estado ---------- */
let idiomaAtual = detetarIdioma();

function detetarIdioma() {
    const guardado = localStorage.getItem('idioma');
    if (guardado && IDIOMAS_SUPORTADOS.includes(guardado)) return guardado;

    const nav = (navigator.language || navigator.userLanguage || 'pt').slice(0, 2).toLowerCase();
    return IDIOMAS_SUPORTADOS.includes(nav) ? nav : 'pt';
}

/* Devolve a tradução de uma chave no idioma atual (com fallback para PT) */
function t(chave) {
    return (TRADUCOES[idiomaAtual] && TRADUCOES[idiomaAtual][chave]) || TRADUCOES.pt[chave] || chave;
}

/* Escolhe o valor certo de um objeto multi-idioma tipo { pt:'', en:'', es:'', fr:'' } */
function L(obj) {
    if (!obj) return '';
    return obj[idiomaAtual] || obj.pt || '';
}

function aplicarTraducoes() {
    document.documentElement.lang = idiomaAtual;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const chave = el.getAttribute('data-i18n');
        el.innerHTML = t(chave);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    atualizarBotoesIdioma();
    document.dispatchEvent(new CustomEvent('idiomaAlterado', { detail: idiomaAtual }));
}

function mudarIdioma(novoIdioma) {
    if (!IDIOMAS_SUPORTADOS.includes(novoIdioma) || novoIdioma === idiomaAtual) return;
    idiomaAtual = novoIdioma;
    localStorage.setItem('idioma', novoIdioma);
    aplicarTraducoes();
}

function atualizarBotoesIdioma() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('ativo', btn.dataset.lang === idiomaAtual);
    });
}

function configurarSeletorIdioma() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => mudarIdioma(btn.dataset.lang));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    configurarSeletorIdioma();
    aplicarTraducoes();
});