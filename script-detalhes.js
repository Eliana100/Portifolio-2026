/* Dados dos projetos enriquecidos com informações técnicas e de design */
const dadosProjetos = {
  "nova-fit": {
    titulo: "Nova Fit",
    subtitulo: "Plataforma de Saúde, Exercícios e Acompanhamento Físico",
    categoria: "Desenvolvimento Web & UI",
    papel: "Desenvolvedora Front-end & UI Designer",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Figma", "Design Responsivo"],
    banner: "img/novafit-video.mp4",
    descricao: "O Nova Fit é um case voltado para a experiência de usuários que buscam manter rotinas de treino e bem-estar. A interface foi concebida no Figma com foco em usabilidade, clareza visual e acessibilidade, e desenvolvida no front-end priorizando performance e adaptabilidade a múltiplos dispositivos.",
    galeria: ["img/novafit-video.mp4", "img/capa_novafit.svg"],
    links: [
      { nome: "Protótipo no Figma", url: "https://www.figma.com", tipo: "figma" },
      { nome: "Repositório no GitHub", url: "https://github.com/Eliana100", tipo: "github" }
    ]
  },
  "moove": {
    titulo: "Moove",
    subtitulo: "Conceito de Startup para Mobilidade Urbana e Conexões",
    categoria: "Desenvolvimento Web & Front-end",
    papel: "Idealizadora & Desenvolvedora Front-end",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "UX Research", "Mobile First"],
    banner: "img/moove-1-home.png",
    descricao: "Projeto conceitual de startup focado em facilitar o deslocamento e a conexão de pessoas com serviços essenciais de transporte e agilidade urbana. Desenvolvido com código modular, arquitetura CSS moderna e foco total em velocidade de carregamento e experiência do usuário mobile.",
    galeria: [
      "img/moove-1-home.png",
      "img/moove-2-sobre.png",
      "img/moove-3-login.png",
      "img/moove-4-cadastro.png",
      "img/moove-5-recuperar-senha.png",
      "img/moove-6-resultado-calculo.png"
    ],
    links: [
      { nome: "Repositório no GitHub", url: "https://github.com/Eliana100", tipo: "github" }
    ]
  },
  "on-game": {
    titulo: "On Game",
    subtitulo: "Hub de Experiências, Notícias e Comunidade Gamer",
    categoria: "Desenvolvimento Web",
    papel: "Desenvolvedora Front-end",
    tecnologias: ["JavaScript", "CSS3 Moderno", "HTML5 Semântico", "UI Design"],
    banner: "img/capa_ongame2.png",
    descricao: "Aplicação interativa direcionada ao público gamer, reunindo novidades, lançamentos e destaques do universo dos jogos digitais. O design aposta em elementos visuais imersivos, contraste marcante e microinterações pensadas para engajar a comunidade.",
    galeria: ["img/capa_ongame2.png", "img/ongame.png"],
    links: [
      { nome: "Repositório no GitHub", url: "https://github.com/Eliana100", tipo: "github" }
    ]
  },
  "casas-bahia": {
    titulo: "Casas Bahia (Dev)",
    subtitulo: "Soluções e Estudo Prático de E-commerce",
    categoria: "Desenvolvimento Web",
    papel: "Desenvolvedora Front-end",
    tecnologias: ["HTML5", "CSS Grid & Flexbox", "JavaScript", "Acessibilidade"],
    banner: "img/casas.png",
    descricao: "Projeto com foco em arquitetura de interface e fluxos de navegação para plataformas de grande porte como o e-commerce das Casas Bahia. Foram aplicados conceitos de semântica, hierarquia de produtos e adaptação responsiva para facilitar o processo de compra do consumidor.",
    galeria: ["img/casas.png"],
    links: [
      { nome: "Repositório no GitHub", url: "https://github.com/Eliana100", tipo: "github" }
    ]
  },
  "nasa-space-apps": {
    titulo: "NASA Space Apps Challenge",
    subtitulo: "Solução Global com Dados Espaciais para Preservação da Biodiversidade",
    categoria: "Hackathon & Inovação",
    papel: "Desenvolvedora Front-end & Pesquisa",
    tecnologias: ["JavaScript", "HTML5", "CSS3", "APIs de Dados Espaciais", "UI Design"],
    banner: "img/cumaru.svg",
    descricao: "Projeto criado durante o NASA Space Apps Challenge 2025, um dos maiores hackathons do mundo. A aplicação explora dados de satélite da NASA para monitorar e propor soluções práticas voltadas à sustentabilidade, combate ao desmatamento e preservação de ecossistemas ameaçados.",
    galeria: ["img/cumaru.svg"],
    links: [
      { nome: "Página Oficial do Desafio", url: "https://spaceappschallenge.org/", tipo: "web" },
      { nome: "Repositório do Projeto", url: "https://github.com/Eliana100", tipo: "github" }
    ]
  },
  "freelance-zirighair": {
    titulo: "Zirighair",
    subtitulo: "Identidade Visual e Plataforma Digital para Salão & Estética",
    categoria: "UI/UX Design & Branding",
    papel: "UI/UX Designer",
    tecnologias: ["Figma", "Design System", "Prototipagem em Alta Fidelidade", "Branding"],
    banner: "img/zirighair-1-celular.png",
    descricao: "Projeto de design de produto e identidade visual desenvolvido para o salão Zirighair. O trabalho contemplou pesquisa com clientes, arquitetura de informação, criação de fluxo de agendamento online e prototipagem interativa no Figma com design elegante e minimalista.",
    galeria: [
      "img/zirighair-1-celular.png",
      "img/zirighair-2-cartao.png",
      "img/zirighair-3-sacolas.png",
      "img/zirighair-4-camisetas.png",
      "img/zirighair-5-caderneta.png",
      "img/zirighair-6-contrato.png",
      "img/zirighair-7-storys.png",
      "img/zirighair-8-instagram.png"
    ],
    links: [
      { nome: "Protótipo Completo no Figma", url: "https://www.figma.com", tipo: "figma" }
    ]
  },
  "casas-bahia-ux": {
    titulo: "ThermoKids (Casas Bahia UX)",
    subtitulo: "Pesquisa, Descoberta e Prototipação com Foco no Público Infantil",
    categoria: "UI/UX Design & Pesquisa",
    papel: "UX Researcher & UI Designer",
    tecnologias: ["Figma", "UX Research", "Personas", "Wireframes", "Testes de Usabilidade"],
    banner: "img/thermokids.svg",
    descricao: "Estudo de caso aprofundado em UX/UI com foco no aplicativo e ecossistema ThermoKids. Foram desenvolvidos mapas de empatia, jornadas de usuário e protótipos de alta fidelidade para garantir uma experiência acolhedora, divertida e intuitiva para pais e crianças.",
    galeria: ["img/thermokids.svg"],
    links: [
      { nome: "Estudo de Caso no Figma", url: "https://www.figma.com", tipo: "figma" }
    ]
  },
  "proa": {
    titulo: "Projeto Lunna (PROA)",
    subtitulo: "Plataforma Educacional Inclusiva unindo Design e Tecnologia",
    categoria: "UI/UX Design & Desenvolvimento",
    papel: "UI/UX Designer & Desenvolvedora",
    tecnologias: ["Figma", "Acessibilidade Digital", "HTML/CSS", "Design de Interação"],
    banner: "img/capa_lunna.svg",
    descricao: "Iniciativa desenvolvida no Instituto PROA conectando design centrado no ser humano e desenvolvimento web inclusivo. O projeto abordou recursos de acessibilidade, navegação por contraste e leitura facilitada para pessoas com diferentes necessidades educacionais.",
    galeria: ["img/capa_lunna.svg", "img/Matérias_Mapas.svg"],
    links: [
      { nome: "Apresentação no Behance", url: "https://www.behance.net", tipo: "behance" },
      { nome: "Repositório no GitHub", url: "https://github.com/Eliana100", tipo: "github" }
    ]
  }
};

/* Lógica da página de detalhes */
const urlParams = new URLSearchParams(window.location.search);
const projetoId = urlParams.get('id') || 'nova-fit';
let imagemAtualIndex = 0;
let projeto = dadosProjetos[projetoId];

function renderizarProjetosRecomendados(idAtual) {
  const container = document.getElementById('grade-recomendados');
  if (!container) return;

  const projetoAtual = dadosProjetos[idAtual];
  const ehDev = projetoAtual && projetoAtual.categoria.toLowerCase().includes('desenvolvimento');

  // Filtra todos os outros projetos da base
  const outrosProjetos = Object.entries(dadosProjetos)
    .filter(([id]) => id !== idAtual)
    .map(([id, dados]) => ({ id, ...dados }));

  // Ordena para priorizar a mesma categoria ("mesmo gênero"), seguido por outros cases
  outrosProjetos.sort((a, b) => {
    const aMesmoGenero = a.categoria.toLowerCase().includes('desenvolvimento') === ehDev;
    const bMesmoGenero = b.categoria.toLowerCase().includes('desenvolvimento') === ehDev;
    if (aMesmoGenero && !bMesmoGenero) return -1;
    if (!aMesmoGenero && bMesmoGenero) return 1;
    return 0;
  });

  container.innerHTML = outrosProjetos.map(proj => {
    const tagsHtml = proj.tecnologias
      ? proj.tecnologias.slice(0, 3).map(t => `<span class="tag-recomendado">${t}</span>`).join('')
      : '';

    return `
      <article class="card-recomendado" tabindex="0" role="button" aria-label="Ver case ${proj.titulo}" onclick="window.location.href='projetos.html?id=${proj.id}'" onkeydown="if(event.key==='Enter') window.location.href='projetos.html?id=${proj.id}'">
        <div class="thumb-recomendado">
          <img src="${proj.banner}" alt="Capa do projeto ${proj.titulo}" loading="lazy" onerror="this.src='img/Capa_github.svg'">
          <div class="overlay-gradiente"></div>
        </div>
        <div class="info-recomendado">
          <span class="badge-recomendado">${proj.categoria}</span>
          <h3 class="titulo-card-recomendado">${proj.titulo}</h3>
          <p class="desc-card-recomendado">${proj.subtitulo || ''}</p>
          <div class="tags-recomendado">${tagsHtml}</div>
          <span class="cta-card-recomendado">Ver case completo &rarr;</span>
        </div>
      </article>
    `;
  }).join('');
}

function ehVideo(url) {
  return typeof url === 'string' && /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
}

function renderizarMidiaPrincipal(midiaSrc, projetoAtual) {
  const bannerContainer = document.getElementById('projeto-banner');
  if (!bannerContainer) return;

  // Transição de saída suave
  bannerContainer.style.opacity = '0';

  setTimeout(() => {
    bannerContainer.scrollTop = 0;

    if (ehVideo(midiaSrc)) {
      bannerContainer.classList.remove('modo-scroll-longo');
      bannerContainer.innerHTML = `
        <div class="wrapper-video-projeto">
          <video id="video-destaque" src="${midiaSrc}" controls autoplay loop muted playsinline>
            Seu navegador não suporta reprodução de vídeos HTML5.
          </video>
        </div>
      `;
    } else {
      bannerContainer.innerHTML = `
        <div class="wrapper-imagem-projeto" title="Clique para ver em tela cheia">
          <img id="img-destaque" src="${midiaSrc}" alt="${projetoAtual?.titulo || 'Projeto'}" onerror="this.src='img/Capa_github.svg'">
        </div>
      `;

      const imgTemp = new Image();
      imgTemp.src = midiaSrc;
      imgTemp.onload = () => {
        const proporcao = imgTemp.naturalHeight / (imgTemp.naturalWidth || 1);
        if (proporcao > 1.25) {
          // Imagem comprida (Figma full-page) -> rolagem vertical suave do design
          bannerContainer.classList.add('modo-scroll-longo');
        } else {
          bannerContainer.classList.remove('modo-scroll-longo');
        }
      };
    }

    // Transição de entrada suave
    bannerContainer.style.opacity = '1';
  }, 160);
}

function preencherPagina(projetoAtual) {
  if (!projetoAtual) return;

  // Atualiza título da aba e título principal no corpo da página
  document.title = `${projetoAtual.titulo} | Eliana Silva`;
  
  const elTitulo = document.getElementById('titulo-pagina');
  if (elTitulo) elTitulo.innerText = projetoAtual.titulo;

  const elSubtitulo = document.getElementById('projeto-subtitulo');
  if (elSubtitulo) elSubtitulo.innerText = projetoAtual.subtitulo || '';

  const elCatBadge = document.getElementById('projeto-categoria-badge');
  if (elCatBadge) elCatBadge.innerText = projetoAtual.categoria || 'Case';

  const elPapel = document.getElementById('projeto-papel');
  if (elPapel) elPapel.innerText = projetoAtual.papel || 'Desenvolvedora / Designer';

  const elCat = document.getElementById('projeto-categoria');
  if (elCat) elCat.innerText = projetoAtual.categoria || 'Geral';

  // Tags de tecnologias
  const elTags = document.getElementById('projeto-tags');
  if (elTags) {
    elTags.innerHTML = '';
    const techs = projetoAtual.tecnologias || [];
    techs.forEach(tech => {
      const pill = document.createElement('span');
      pill.className = 'pill-tech-detalhes';
      pill.innerText = tech;
      elTags.appendChild(pill);
    });
  }

  // Descrição
  const elDesc = document.getElementById('projeto-descricao');
  if (elDesc) elDesc.innerText = projetoAtual.descricao || '';

  // Renderiza a mídia principal (reconhece vídeo ou imagem longa automaticamente)
  renderizarMidiaPrincipal(projetoAtual.banner, projetoAtual);

  // Galeria de miniaturas
  const galeriaSecao = document.getElementById('secao-galeria');
  const galeriaContainer = document.getElementById('projeto-galeria');
  const btnPrev = document.getElementById('btn-seta-prev');
  const btnNext = document.getElementById('btn-seta-next');

  // Resolução inteligente da galeria: suporta lista manual ou gerador por prefixo
  let galeriaValida = [];
  if (projetoAtual.galeria && projetoAtual.galeria.length > 0) {
    galeriaValida = projetoAtual.galeria;
  } else if (projetoAtual.fotosAutomaticas) {
    const { prefixo, total, ext = 'png' } = projetoAtual.fotosAutomaticas;
    for (let i = 1; i <= total; i++) {
      galeriaValida.push(`${prefixo}${i}.${ext}`);
    }
    projetoAtual.galeria = galeriaValida;
  } else {
    galeriaValida = [projetoAtual.banner];
  }

  // Se tiver apenas 1 imagem/vídeo, ocultamos as setas e miniaturas redundantes
  if (galeriaValida.length <= 1) {
    if (galeriaSecao) galeriaSecao.style.display = 'none';
    if (btnPrev) btnPrev.style.display = 'none';
    if (btnNext) btnNext.style.display = 'none';
  } else {
    if (galeriaSecao) galeriaSecao.style.display = 'flex';
    if (btnPrev) btnPrev.style.display = 'flex';
    if (btnNext) btnNext.style.display = 'flex';

    if (galeriaContainer) {
      galeriaContainer.innerHTML = '';
      galeriaValida.forEach((midiaSrc, idx) => {
        const item = document.createElement('div');
        item.className = `item-miniatura ${idx === imagemAtualIndex ? 'ativa' : ''}`;
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `Visualizar mídia ${idx + 1} de ${galeriaValida.length}`);

        if (ehVideo(midiaSrc)) {
          item.innerHTML = `
            <div class="thumb-video-card">
              <svg class="icone-play-thumb" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              <span class="label-video-thumb">Vídeo</span>
            </div>
          `;
        } else {
          item.innerHTML = `<img src="${midiaSrc}" alt="${projetoAtual.titulo} - Mídia ${idx + 1}" onerror="this.src='img/Capa_github.svg'">`;
        }

        item.addEventListener('click', () => trocarImagem(idx));
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            trocarImagem(idx);
          }
        });
        galeriaContainer.appendChild(item);
      });
    }
  }

  // Links do projeto com botões bem estilizados
  const linksContainer = document.getElementById('lista-links');
  if (linksContainer) {
    linksContainer.innerHTML = '';
    const links = projetoAtual.links || [];

    if (links.length === 0) {
      linksContainer.innerHTML = '<li class="item-link-vazio">Recursos adicionais serão adicionados em breve.</li>';
    } else {
      links.forEach(l => {
        const li = document.createElement('li');
        li.className = 'item-link-projeto';

        const ehUrlValida = l.url && l.url.trim() !== '' && l.url !== '#';
        
        if (ehUrlValida) {
          li.innerHTML = `
            <span class="nome-recurso">${l.nome}</span>
            <a href="${l.url}" class="botao-link-acao" target="_blank" rel="noopener noreferrer">
              Acessar <span>&rarr;</span>
            </a>
          `;
        } else {
          li.innerHTML = `
            <span class="nome-recurso">${l.nome}</span>
            <span class="badge-em-breve">Disponível em breve</span>
          `;
        }
        linksContainer.appendChild(li);
      });
    }
  }

  // Renderiza a seção estilo streaming com sugestões de outros cases
  renderizarProjetosRecomendados(projetoId);
}

// Alterna a imagem ou vídeo principal com transição suave
function trocarImagem(index) {
  if (!projeto || !projeto.galeria || projeto.galeria.length === 0) return;

  imagemAtualIndex = index;
  renderizarMidiaPrincipal(projeto.galeria[index], projeto);

  // Sincroniza visualmente as miniaturas sem mexer na rolagem vertical da página
  sincronizarMiniaturas(index);
}

// Rola apenas a barra de miniaturas horizontalmente, sem nunca mover a página do usuário
function sincronizarMiniaturas(index) {
  const thumbs = document.querySelectorAll('.item-miniatura');
  thumbs.forEach((t, i) => {
    if (i === index) t.classList.add('ativa');
    else t.classList.remove('ativa');
  });

  const containerMiniaturas = document.getElementById('projeto-galeria');
  if (containerMiniaturas && thumbs[index]) {
    const thumb = thumbs[index];
    const centroContainer = containerMiniaturas.clientWidth / 2;
    const centroThumb = thumb.offsetLeft + (thumb.clientWidth / 2);
    containerMiniaturas.scrollTo({
      left: centroThumb - centroContainer,
      behavior: 'smooth'
    });
  }
}

// Navega entre as mídias da galeria
function scrollGaleria(direcao) {
  if (!projeto || !projeto.galeria || projeto.galeria.length <= 1) return;
  
  imagemAtualIndex += direcao;
  if (imagemAtualIndex < 0) imagemAtualIndex = projeto.galeria.length - 1;
  else if (imagemAtualIndex >= projeto.galeria.length) imagemAtualIndex = 0;

  trocarImagem(imagemAtualIndex);
}

/* Gesto de deslizar (Swipe) no banner como em redes sociais */
function inicializarSwipeBanner() {
  const banner = document.getElementById('projeto-banner');
  if (!banner) return;

  let touchStartX = 0;
  let touchStartY = 0;
  let isSwiping = false;

  banner.addEventListener('touchstart', (e) => {
    if (ehVideo(projeto?.galeria?.[imagemAtualIndex])) return;
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    isSwiping = true;
  }, { passive: true });

  banner.addEventListener('touchend', (e) => {
    if (!isSwiping || ehVideo(projeto?.galeria?.[imagemAtualIndex])) return;
    isSwiping = false;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;

    // Deslize horizontal (> 35px)
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        scrollGaleria(1); // Deslizou para esquerda -> próxima
      } else {
        scrollGaleria(-1); // Deslizou para direita -> anterior
      }
    }
  }, { passive: true });

  // Arrasto com mouse no desktop
  let mouseStartX = 0;
  let mouseStartY = 0;
  let isMouseDown = false;
  let hasDragged = false;

  banner.addEventListener('mousedown', (e) => {
    if (ehVideo(projeto?.galeria?.[imagemAtualIndex])) return;
    isMouseDown = true;
    hasDragged = false;
    mouseStartX = e.clientX;
    mouseStartY = e.clientY;
  });

  banner.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    if (Math.abs(e.clientX - mouseStartX) > 12) {
      hasDragged = true;
    }
  });

  banner.addEventListener('mouseup', (e) => {
    if (!isMouseDown) return;
    isMouseDown = false;
    const deltaX = e.clientX - mouseStartX;
    const deltaY = e.clientY - mouseStartY;

    if (hasDragged && Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        scrollGaleria(1);
      } else {
        scrollGaleria(-1);
      }
    }
  });

  // Clique simples na imagem -> abre em tela cheia com zoom
  banner.addEventListener('click', (e) => {
    if (hasDragged) {
      hasDragged = false;
      return;
    }
    if (ehVideo(projeto?.galeria?.[imagemAtualIndex])) return;
    abrirLightbox();
  });
}

/* Lightbox: Visualização em Tela Cheia com Zoom */
function abrirLightbox() {
  if (!projeto || !projeto.galeria || projeto.galeria.length === 0) return;
  const midiaAtual = projeto.galeria[imagemAtualIndex];
  if (ehVideo(midiaAtual)) return;

  const modal = document.getElementById('modal-lightbox');
  const imgLightbox = document.getElementById('img-lightbox');
  const contador = document.getElementById('legenda-contador-lightbox');
  if (!modal || !imgLightbox) return;

  imgLightbox.src = midiaAtual;
  if (contador) {
    contador.innerText = `${imagemAtualIndex + 1} de ${projeto.galeria.length}`;
  }

  modal.classList.add('ativo');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function fecharLightbox() {
  const modal = document.getElementById('modal-lightbox');
  if (!modal) return;
  modal.classList.remove('ativo');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupLightboxEvents() {
  const modal = document.getElementById('modal-lightbox');
  const btnFechar = document.getElementById('btn-fechar-lightbox');
  const btnPrev = document.getElementById('btn-lightbox-prev');
  const btnNext = document.getElementById('btn-lightbox-next');

  if (btnFechar) btnFechar.addEventListener('click', fecharLightbox);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.id === 'conteudo-lightbox') {
        fecharLightbox();
      }
    });
  }

  const atualizarImgLightbox = () => {
    const img = document.getElementById('img-lightbox');
    const contador = document.getElementById('legenda-contador-lightbox');
    if (img && projeto?.galeria) {
      img.src = projeto.galeria[imagemAtualIndex];
      if (contador) contador.innerText = `${imagemAtualIndex + 1} de ${projeto.galeria.length}`;
    }
  };

  if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      scrollGaleria(-1);
      atualizarImgLightbox();
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      scrollGaleria(1);
      atualizarImgLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('ativo')) return;
    if (e.key === 'Escape') fecharLightbox();
    if (e.key === 'ArrowRight' && btnNext) btnNext.click();
    if (e.key === 'ArrowLeft' && btnPrev) btnPrev.click();
  });
}

// Inicialização
if (projeto) {
  preencherPagina(projeto);
} else if (projetoId) {
  buscarDetalhesNoGitHub(projetoId);
}

// Configura eventos de swipe no banner e lightbox
inicializarSwipeBanner();
setupLightboxEvents();

async function buscarDetalhesNoGitHub(id) {
  const usuario = 'Eliana100';
  try {
    const resposta = await fetch(`https://api.github.com/repos/${usuario}/${id}`);
    if (!resposta.ok) throw new Error('Repositório não encontrado no GitHub');
    
    const repo = await resposta.json();
    
    projeto = {
      titulo: repo.name.replace(/[-_]/g, ' ').toUpperCase(),
      subtitulo: repo.description || 'Projeto importado dinamicamente do GitHub',
      categoria: repo.topics && repo.topics.includes('ux') ? 'UI/UX Design' : 'Desenvolvimento Web',
      papel: 'Desenvolvedora',
      tecnologias: repo.language ? [repo.language] : ['Git', 'GitHub'],
      banner: `https://raw.githubusercontent.com/${usuario}/${repo.name}/main/capa.png`,
      descricao: repo.description || 'Projeto desenvolvido por Eliana Silva e integrado via GitHub API.',
      galeria: [`https://raw.githubusercontent.com/${usuario}/${repo.name}/main/capa.png`],
      links: [
        { nome: "Repositório no GitHub", url: repo.html_url, tipo: "github" },
        ...(repo.homepage ? [{ nome: "Deploy / Demonstração", url: repo.homepage, tipo: "deploy" }] : [])
      ]
    };
    
    preencherPagina(projeto);
  } catch (erro) {
    console.error(erro);
    const desc = document.getElementById('projeto-descricao');
    if (desc) desc.innerHTML = '<strong>Projeto não encontrado na base de dados.</strong>';
  }
}

// Comportamento do menu mobile no header
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

// Aviso de cookies unificado
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
