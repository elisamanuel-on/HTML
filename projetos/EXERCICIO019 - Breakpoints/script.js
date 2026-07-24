// ============================================
// EXERCÍCIO 019 - BREAKPOINTS
// ============================================

console.log('Breakpoints carregado!');

const breakpointEl = document.getElementById('breakpointAtual');

function atualizarBreakpoint() {
    const largura = window.innerWidth;
    let breakpoint = '';

    if (largura <= 600) {
        breakpoint = 'Mobile';
    } else if (largura <= 1024) {
        breakpoint = 'Tablet';
    } else {
        breakpoint = 'Desktop';
    }

    breakpointEl.textContent = breakpoint;
    console.log(`Largura: ${largura}px - ${breakpoint}`);
}

// Atualizar ao carregar e ao redimensionar
window.addEventListener('load', atualizarBreakpoint);
window.addEventListener('resize', atualizarBreakpoint);

console.log('Indicador de breakpoint ativo!');
console.log('Redimensione a janela para ver as mudanças');