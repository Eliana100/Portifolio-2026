/* Configuração inicial */
// Respeita hash de navegação (como #projetos) ao retornar de outra página
if (window.location.hash) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const alvo = document.querySelector(window.location.hash);
      if (alvo) alvo.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  });
} else {
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
}

// Base de dados de cursos cadastrados.
const listaFormacao = [
  { tag: "Tecnólogo", curso: "Análise e Desenvolvimento de Sistemas", data: "Formação em 2027", instituicao: "USF" },
  { tag: "Hackathon", curso: "NASA Space Apps Challenge 2025", data: "Outubro 2025", instituicao: "NASA" },
  { tag: "UX/UI", curso: "Introdução ao Design de Interação", data: "72 horas", instituicao: "Eldorado" },
  { tag: "Formação", curso: "Java: Spring Framework e API Rest", data: "Concluído 2024", instituicao: "Alura" },
  { tag: "Hackathon", curso: "1ª Edição Hackathon Lab.AI", data: "20 horas", instituicao: "Instituto Joule" },
  { tag: "Fullstack", curso: "Desenvolvimento Web Full Stack", data: "Junho 2024", instituicao: "Instituto PROA" },
  { tag: "Inglês", curso: "General English - Level A1", data: "Dezembro 2025", instituicao: "EF Education" }
];

/* 1. Criação e renderização dos cursos */
// Constrói o HTML de cada curso.
function criarCard(item) {
  return `
    <div class="cartao-formacao" tabindex="0" aria-label="Formação: ${item.curso}">
      <p class="tag">${item.tag}</p>
      <h3 class="curso-nome">${item.curso}</h3>
      <div class="rodape-cartao">
        <p class="ano">${item.data}</p>
        <h3 class="universidade">${item.instituicao}</h3>
      </div>
    </div>
  `;
}

// Variáveis de controle de arrasto do carrossel.
let isInteracting = false;
let activeDragElement = null;
let isDraggingCarrossel = false; 

// Divide os cursos em duas fileiras e repete para criar ilusão de carrossel infinito.
function renderizarCursos() {
  const cima = document.getElementById('fileira-cima');
  const baixo = document.getElementById('fileira-baixo');

  if (!cima || !baixo) {
    console.warn("Elementos 'fileira-cima' ou 'fileira-baixo' não foram encontrados no DOM.");
    return;
  }

  const listaCima = listaFormacao.filter((_, idx) => idx % 2 === 0);
  const listaBaixo = listaFormacao.filter((_, idx) => idx % 2 !== 0);

  const repeticoes = 10;
  cima.innerHTML = Array(repeticoes).fill(listaCima).flat().map(criarCard).join('');
  baixo.innerHTML = Array(repeticoes).fill(listaBaixo).flat().map(criarCard).join('');
}

// Carrega os cursos ao iniciar a página.
renderizarCursos();

// Base de dados de projetos cadastrados com informações completas
const projetos = [
  {
    id: "nova-fit",
    titulo: "Nova Fit",
    categoria: "dev",
    categoriaLabel: "Desenvolvimento Web & UI",
    tags: ["HTML5", "CSS3", "JavaScript"],
    capa: "img/capa_novafit.svg",
  },
  {
    id: "moove",
    titulo: "Moove",
    categoria: "dev",
    categoriaLabel: "Startup & Front-end",
    tags: ["JavaScript", "HTML/CSS", "UX"],
    capa: "img/moove-1-home.png",
  },
  {
    id: "on-game",
    titulo: "On Game",
    categoria: "dev",
    categoriaLabel: "Plataforma Gamer",
    tags: ["JavaScript", "CSS3", "Front-end"],
    capa: "img/capa_ongame2.png",
  },
  {
    id: "casas-bahia",
    titulo: "Casas Bahia (Dev)",
    categoria: "dev",
    categoriaLabel: "E-commerce Front-end",
    tags: ["HTML5", "CSS Grid", "Responsivo"],
    capa: "img/casas.png",
  },
  {
    id: "nasa-space-apps",
    titulo: "NASA Space Apps",
    categoria: "dev",
    categoriaLabel: "Hackathon & Dados Espaciais",
    tags: ["Hackathon", "Web", "APIs"],
    capa: "img/cumaru.svg",
  },
  {
    id: "freelance-zirighair",
    titulo: "Zirighair",
    categoria: "ux",
    categoriaLabel: "UI/UX & Identidade Visual",
    tags: ["Figma", "Design System", "Mobile"],
    capa: "img/zirighair-1-celular.png",
  },
  {
    id: "casas-bahia-ux",
    titulo: "ThermoKids (Casas Bahia UX)",
    categoria: "ux",
    categoriaLabel: "Estudo de Caso UX/UI",
    tags: ["Figma", "Pesquisa UX", "Prototipagem"],
    capa: "img/thermokids.svg",
  },
  {
    id: "proa",
    titulo: "Projeto Lunna (PROA)",
    categoria: "ux",
    categoriaLabel: "UI/UX & Acessibilidade",
    tags: ["Figma", "UI Design", "Inclusão"],
    capa: "img/capa_lunna.svg",
  }
];

/* Variáveis globais de controle das barras de progresso */
let devDimensions = { maxRange: 0 };
let uxDimensions = { maxRange: 0 };

/* 2. Carregamento dos projetos (dev e ux) */
// Monta os cards dos projetos e insere no DOM com sobreposição rica de informações.
function renderizarProjetos() {
    const devContainer = document.getElementById('carrossel-dev');
    const uxContainer = document.getElementById('carrossel-ux');

    let htmlDev = '';
    let htmlUx = '';

    projetos.forEach(proj => {
        const tagsHtml = proj.tags ? proj.tags.map(t => `<span class="tag-projeto">${t}</span>`).join('') : '';
        const cardHTML = `
            <div class="cartao-projeto" tabindex="0" role="button" aria-label="Ver case do projeto ${proj.titulo}" onclick="irParaDetalhes('${proj.id}')" onkeydown="if(event.key === 'Enter') irParaDetalhes('${proj.id}')">
                <img src="${proj.capa}" alt="Capa do projeto ${proj.titulo}" draggable="false" loading="lazy" onerror="this.src='./img/Capa_github.svg'">
                <div class="sobreposicao-projeto">
                    <span class="categoria-badge">${proj.categoriaLabel}</span>
                    <h3 class="titulo-projeto">${proj.titulo}</h3>
                    <div class="tags-container">${tagsHtml}</div>
                    <div class="cta-ver-projeto">Ver projeto completo <span>&rarr;</span></div>
                </div>
            </div>
        `;

        if (proj.categoria === 'dev') htmlDev += cardHTML;
        else htmlUx += cardHTML;
    });

    const repeticoes = 8;
    if (devContainer) devContainer.innerHTML = Array(repeticoes).fill(htmlDev).join('');
    if (uxContainer) uxContainer.innerHTML = Array(repeticoes).fill(htmlUx).join('');

    // Atualiza as barras de progresso sempre que os projetos forem renderizados
    const totalDev = projetos.filter(p => p.categoria === 'dev').length;
    const totalUx = projetos.filter(p => p.categoria === 'ux').length;
    criarSegmentosProgresso('progress-dev', totalDev);
    criarSegmentosProgresso('progress-ux', totalUx);
    updateProgressBarDimensions();
}

// Redireciona para a tela de detalhes do projeto.
function irParaDetalhes(id) {
    if (isDraggingCarrossel) return; // Impede clique acidental enquanto estiver arrastando
    window.location.href = `projetos.html?id=${id}`;
}

renderizarProjetos();

/* 2.1 Integração com a API do GitHub */
async function buscarProjetosGitHub() {
    const usuario = 'Eliana100'; // Seu nome de usuário no GitHub
    try {
        const resposta = await fetch(`https://api.github.com/users/${usuario}/repos?sort=updated&per_page=100`);
        if (!resposta.ok) throw new Error('Não foi possível buscar os repositórios');
        
        const repos = await resposta.json();
        
        // Filtra os repositórios que possuem a tag (tópico) "portfolio"
        const reposPortfolio = repos.filter(repo => repo.topics && repo.topics.includes('portfolio'));
        
        reposPortfolio.forEach(repo => {
            // Evita duplicatas caso o ID já exista na constante estática 'projetos'
            if (!projetos.find(p => p.id === repo.name)) {
                projetos.push({
                    id: repo.name,
                    titulo: repo.name.replace(/[-_]/g, ' ').toUpperCase(),
                    // Se tiver o tópico 'ux', vai pro carrossel UX, senão Dev
                    categoria: repo.topics.includes('ux') ? 'ux' : 'dev',
                    categoriaLabel: repo.topics.includes('ux') ? 'UI/UX Design' : 'Desenvolvimento Web',
                    tags: repo.language ? [repo.language] : ['GitHub'],
                    // Tenta puxar uma imagem 'capa.png' direto do seu repositório.
                    // Se não tiver, o 'onerror' da tag img vai colocar a imagem padrão.
                    capa: `https://raw.githubusercontent.com/${usuario}/${repo.name}/main/capa.png`
                });
            }
        });

        // Re-renderiza os carrosséis com os projetos estáticos + os dinâmicos do GitHub
        renderizarProjetos();

    } catch (erro) {
        console.error('Erro na integração com o GitHub:', erro);
    }
}

// Inicia a busca assim que a página carregar
buscarProjetosGitHub();

/* 3. Menu mobile e navegação */
// Alterna o menu mobile em telas menores.
const menuHamburguer = document.querySelector('.menu-hamburguer');
const navbar = document.querySelector('.navbar');

if (menuHamburguer && navbar) {
  menuHamburguer.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuHamburguer.classList.toggle('active');
  });

  // Fecha o menu mobile ao selecionar qualquer link de navegação
  const linksNavMobile = navbar.querySelectorAll('a');
  linksNavMobile.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      menuHamburguer.classList.remove('active');
    });
  });
}

/* 4. Física e arrasto dos carrosséis */
// Lógica de arrasto horizontal para os carrosséis.
function setupDragToScroll(wrapper) {
    let isDown = false;
    let startX;
    let scrollLeftStart;

    const animatedElements = wrapper.querySelectorAll('.cards-cima, .cards-baixo');

    wrapper.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - wrapper.offsetLeft;
      scrollLeftStart = wrapper.scrollLeft;
      animatedElements.forEach(el => el.style.animationPlayState = 'paused');
    });

    wrapper.addEventListener('mouseleave', () => {
      if (isDown) {
        isDown = false;
        setTimeout(() => {
          animatedElements.forEach(el => el.style.animationPlayState = 'running');
        }, 1500);
      }
    });

    wrapper.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        setTimeout(() => isDraggingCarrossel = false, 50); 
        setTimeout(() => {
          animatedElements.forEach(el => el.style.animationPlayState = 'running');
        }, 1500);
      }
    });

    wrapper.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      isDraggingCarrossel = true; 
      const x = e.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 1.5;
      wrapper.scrollLeft = scrollLeftStart - walk;
    });

    // Suporte para eventos de toque em dispositivos móveis.
    wrapper.addEventListener('touchstart', () => {
      animatedElements.forEach(el => el.style.animationPlayState = 'paused');
    }, { passive: true });

    wrapper.addEventListener('touchend', () => {
      setTimeout(() => {
        animatedElements.forEach(el => el.style.animationPlayState = 'running');
      }, 1500);
    }, { passive: true });
}

// Habilita o arrasto em todos os containers de cards.
const todosWrappers = document.querySelectorAll('.container-cards');
todosWrappers.forEach(wrapper => {
  setupDragToScroll(wrapper);
});

/* 5. Observador de animações (intersection observer) */
// Aplica a classe visible nos elementos quando entram na tela.
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

const sobreWrapper = document.querySelector('.container-sobre .wrapper');
const sobreTexto = document.querySelector('.container-sobre .texto');

if (sobreWrapper) observer.observe(sobreWrapper);
if (sobreTexto) observer.observe(sobreTexto);

const conhecimentoTitulo = document.querySelector('.container-conhecimento .titulos');
if (conhecimentoTitulo) observer.observe(conhecimentoTitulo);

// Aplica efeito cascata nas pílulas de conhecimento.
const skillPills = document.querySelectorAll('.pilula-habilidade');
skillPills.forEach((pill, index) => {
  pill.style.transitionDelay = `${index * 0.04}s`;
  observer.observe(pill);
});

/* 6. Aviso de cookies */
// Exibe o banner de cookies caso não tenha sido aceito anteriormente.
function initCookieBanner() {
  if (!localStorage.getItem('cookiesAceitos')) {
    const banner = document.createElement('div');
    banner.className = 'banner-cookies';
    banner.innerHTML = `
      <div class="texto-cookies">
        Usamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com o uso de cookies.
      </div>
      <button class="botao-cookies" aria-label="Aceitar cookies">Entendi</button>
    `;
    document.body.appendChild(banner);

    setTimeout(() => banner.classList.add('show'), 500);

    banner.querySelector('.botao-cookies').addEventListener('click', () => {
      localStorage.setItem('cookiesAceitos', 'true');
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 500); 
    });
  }
}

initCookieBanner();

/* 7. Lógica da barra de progresso dos projetos */

function criarSegmentosProgresso(containerId, totalItens) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = '';
  for (let i = 0; i < totalItens; i++) {
    html += '<div class="segmento-progresso"><div class="preenchimento-segmento"></div></div>';
  }
  container.innerHTML = html;
}

function updateProgressBarDimensions() {
  const devInner = document.getElementById('carrossel-dev');
  if (devInner && devInner.scrollWidth > 0) {
    devDimensions.maxRange = devInner.scrollWidth / 8;
  }
  const uxInner = document.getElementById('carrossel-ux');
  if (uxInner && uxInner.scrollWidth > 0) {
    uxDimensions.maxRange = uxInner.scrollWidth / 8;
  }
}

function updateProgressBar(wrapper, containerElement, dimensions, isReverse = false) {
  const inner = wrapper.querySelector('.projetos-carrossel');
  if (!inner || !containerElement) return;

  if (!dimensions.maxRange && inner.scrollWidth > 0) {
    dimensions.maxRange = inner.scrollWidth / 8;
  }

  if (!dimensions.maxRange) return;

  // Mapeia a translação aplicada pelo CSS de forma performática
  const style = window.getComputedStyle(inner);
  let translateX = 0;
  if (style.transform && style.transform !== 'none') {
    const matrix = new DOMMatrixReadOnly(style.transform);
    const m41 = matrix.m41 || 0;
    
    // No carrossel UX (scrollLeft), o CSS vai de -50% a 0, então a distância percorrida para frente é calculada a partir do offset
    if (isReverse) {
      translateX = (inner.scrollWidth / 2) - Math.abs(m41);
    } else {
      translateX = Math.abs(m41);
    }
  }

  const scrollLeft = wrapper.scrollLeft || 0;
  const totalPosition = Math.max(0, translateX + scrollLeft);

  let progress = 0;
  if (dimensions.maxRange > 0) {
    progress = (totalPosition % dimensions.maxRange) / dimensions.maxRange;
  }

  // Atualiza visualmente os segmentos de progresso
  const fills = containerElement.querySelectorAll('.preenchimento-segmento');
  const N = fills.length;
  fills.forEach((fill, i) => {
    const segmentProgress = Math.max(0, Math.min(1, progress * N - i));
    fill.style.transform = `scaleX(${segmentProgress})`;
  });
}

// Loop de atualização da barra de progresso com controle de taxa de quadros (throttle para poupar CPU)
let animationFrameId = null;
let lastProgressUpdate = 0;

function tickProgressBars(timestamp) {
  if (timestamp - lastProgressUpdate > 30) { // ~30fps suave e eficiente
    lastProgressUpdate = timestamp;

    const devWrapper = document.getElementById('carrossel-dev')?.parentElement;
    const devContainer = document.getElementById('progress-dev');
    if (devWrapper && devContainer) {
      updateProgressBar(devWrapper, devContainer, devDimensions, false);
    }

    const uxWrapper = document.getElementById('carrossel-ux')?.parentElement;
    const uxContainer = document.getElementById('progress-ux');
    if (uxWrapper && uxContainer) {
      updateProgressBar(uxWrapper, uxContainer, uxDimensions, true);
    }
  }

  animationFrameId = requestAnimationFrame(tickProgressBars);
}

// Executa a atualização da barra de progresso apenas quando a seção está visível.
const projectsSection = document.getElementById('projetos');
if (projectsSection) {
  const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateProgressBarDimensions();
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(tickProgressBars);
        }
      } else {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    });
  }, { threshold: 0.05 });

  projectsObserver.observe(projectsSection);
}

window.addEventListener('resize', () => {
  updateProgressBarDimensions();
});
