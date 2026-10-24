# PLANO DE EXECUÇÃO EM PASSOS — BRASA STUDIO

> **REGRA DE CONDUTA:** Só inicie o próximo passo quando o usuário solicitar explicitamente ("só inicie o próximo passo quando eu pedir").
> A cada passo concluído, marque automaticamente o checkbox correspondente `[x]`, atualize `DOCUMENTACAO.md` e `CONTEXTO.md`, e forneça a mensagem de commit correspondente.

---

## Tabela de Progresso por Prioridade

- [x] **Passo 0: Inicialização e Governança do Projeto**
  - Configuração de memória e regras (`GEMINI.md`, `.agents/rules/project_rules.md`).
  - Criação dos arquivos canônicos: `PROMPT.md`, `CONTEXTO.md`, `PASSOS.md` e `DOCUMENTACAO.md`.
  - Estruturação do ambiente Docker (`Dockerfile`, `docker-compose.yml`, `nginx.conf`).
  - Criação do esqueleto base de diretórios (`/css`, `/js`, `/assets/images`).
  - Validação da inicialização do Docker.

- [x] **Passo 1: Sistema de Design Global e Fundação Visual**
  - Implementação completa de `css/style.css` com todos os tokens CSS (cores #050505, #0B0B0B, #FF4B19, gradientes de brasa, bordas, sombras).
  - Tipografia editorial geométrica Google Fonts (Manrope 400/500/600/700).
  - Utilitários de grid, flexbox, clamp() responsivo e reset CSS moderno.
  - Criação dos ícones SVG vetorizados (`flame.svg`, `sparkle.svg`, `arrow-up-right.svg`, `check.svg`, `star.svg`, badges de parceiros).
  - Subida do contêiner Docker na porta 3000 e validação de live reload no ar.

- [x] **Passo 2: Cabeçalho (Header / Nav) e Hero Section de Alto Impacto**
  - Header fixo com efeito glassmorphism escuro (`rgba(5, 5, 5, 0.82)`), logotipo Brasa Studio com ícone de chama, navegação e botão CTA `Fale com a gente`.
  - Menu responsivo com drawer/hambúrguer no mobile e controle de teclado (Esc) e toque.
  - Hero com etiqueta `[NOVO] Agenda aberta para 2027`, título editorial com quebra de linhas e destaque laranja vibrante em *"marcas criativas."*.
  - Subtítulo explicativo, botões `Começar um projeto` (branco) e `Conheça a Brasa` (translúcido), e barra de 4 ícones de marcas parceiras.
  - Composição visual à direita com fotografia de objeto artesanal cerâmico em iluminação chiaroscuro, vinheta de integração escura e estrela geométrica flutuante de 4 pontas (`✦`) com pulso luminoso.

- [x] **Passo 3: Seção Editorial "Sobre a Brasa" e Métricas de Resultados**
  - Seção em 2 colunas com fotografia cinematográfica vertical de artesão/designer em bancada com luz quente de ateliê (`assets/images/sobre-artisan.jpg`).
  - Coluna de conteúdo com tag `• Sobre a Brasa`, título *"Marcas mais fortes, impressões que ficam."*, texto descritivo autoral, checklist com ícones de estrela/faísca, botão `Como trabalhamos` e avaliação 5 estrelas (`Nota 4,9 dada por 86 clientes`).
  - Seção de resultados com título central *"Resultados que aparecem no caixa e na marca."*, subtítulo e botão `Agendar 15 minutos`.
  - Grade de 3 cartões de destaque com fotografias cinematográficas, badges de clientes e métricas de crescimento:
    - `Casa Ocre` (Vaso cerâmico artesanal, `+38% em vendas online`, `22x mais recompra`).
    - `Torra Rubi` (Xícara de café especial e grãos tostados, `+37% no custo por lead`, `+45% em pedidos B2B`).
    - `Âmbar Joias` (Anel artesanal de ouro em rocha vulcânica, `+64% de visitas qualificadas`, `+28% no ticket médio`).

- [x] **Passo 4: Processo "Do briefing ao ar" e Diferenciais de Estúdio**
  - Seção assimétrica com 3 cartões de etapas sequenciais (`Imersão`, `Criação`, `Entrega`) com ícones dedicados, badges de etapa, tags e botão de ação `Agendar conversa` com ornamento de faísca.
  - Fotografia cinematográfica em alta resolução da bancada de ateliê com amostras de materiais táteis, cartelas de cores e cadernos de esboço (`assets/images/process-workbench.jpg`).
  - Grade 3x2 com 6 cartões de recursos de estúdio grande (`Marca que vende`, `Sistema editável`, `Código leve`, `Direção de arte`, `Prazo combinado`, `Pensado para o celular`) com microinterações em hover e setas indicadoras diagonais.

- [x] **Passo 5: Apresentação "Por que a Brasa" e Portfólio Panorâmico Largo**
  - Barra de 11 etiquetas / chips de capacidades e diferenciais (`Experiência fluida`, `Mais conversão`, `Carregamento rápido`, `SEO técnico`, `Acessível`, etc.) com botão `Fale agora`.
  - Grade assimétrica de 5 cartões editoriais com fotografias cinematográficas tratadas:
    - `Revisões com método` (Mural de mockups e tipografia).
    - `Pedidos sem fila` (Escultura fluida de vidro âmbar 3D com dupla de botões).
    - `Preço sem surpresa` (Caderno artesanal de projetos e esboços).
    - `Retorno rápido` (Ampulheta de latão e vidro com areia dourada).
    - `Publicação assistida` (Mãos digitando código em laptop no estúdio escuro).
  - Seção de portfólio em formato panorâmico largo com 3 blocos empilhados verticalmente, barras de progresso bicolores sincronizadas, tags de categoria e metadados de cliente e ano:
    - `Casa Ocre` · `2026` (Prateleira de cerâmica autoral, progresso 65%).
    - `Torra Rubi` · `2026` (Embalagens kraft em balcão de torrefação, progresso 82%).
    - `Lume Arquitetura` · `2025` (Showroom de arquitetura com mesa de maquete iluminada, progresso 50%).

- [x] **Passo 6: Seção de Serviços Completos e Galeria de Detalhes 2x3**
  - Seção de serviços em 2 colunas com retrato do profissional na bancada (`assets/images/services-professional.jpg`) e 3 cartões completos de soluções (`Site sob medida`, `Identidade completa`, `Lançamento integrado`) com preços, prazos, ícones SVG temáticos e checklists de entregáveis.
  - Banner de autoridade central com iluminação ambiente radial *"O parceiro criativo de marcas em crescimento."* e botão `Ver como trabalhamos`.
  - Galeria de detalhes 2x3 com 6 fotografias originais extraídas em alta resolução (`gallery-pottery.jpg`, `gallery-coffee.jpg`, `gallery-storefront.jpg`, `gallery-necklace.jpg`, `gallery-cyclist.jpg`, `gallery-textiles.jpg`), overlay sutil em hover e modal Lightbox acessível com suporte a clique e tecla Escape.

- [x] **Passo 7: Planos Mensais, Depoimentos e FAQ Interativo**
  - Seção de planos com 2 cartões de pacotes mensais (`Essencial` a R$ 3.900/mês com preço original riscado de R$ 4.600 e `Estúdio` a R$ 8.900/mês com borda destacada e bússola orbital), badges `Mais escolhido` / `Recomendado`, comparativo de entregas e botão de contratação.
  - Seção de depoimentos com banner de autoridade, barra de marcas parceiras com indicador visual e grid 3x2 de 6 avaliações reais com fotos de perfil originais dos clientes (`avatar-helena.jpg`, `avatar-rafael.jpg`, `avatar-livia.jpg`, `avatar-caio.jpg`, `avatar-marina.jpg`, `avatar-otavio.jpg`), estrelas âmbar, citações e dados institucionais.
  - Acordeão interativo de FAQ com 6 perguntas essenciais, transição suave de abertura/fechamento, rotação do ícone `+` em 45 graus e acessibilidade completa por teclado (WAI-ARIA).

- [x] **Passo 8: CTA Final "Vamos Conversar", Rodapé Completo e Validação 100% Docker**
  - Bloco de conversão final com iluminação radial âmbar/brasa profunda (`#0B0705`), título de alto impacto *"Cada projeto é uma brasa que a gente acende junto."*, formulário de captura de lead com validação nativa e mensagem de confirmação.
  - Rodapé escuro (`#050505`) completo com logo institucional, formulário de assinatura da carta semanal, links organizados em categorias (`Páginas` e `Estúdio`), miniatura do Showreel 2026 com claquete cinematográfica (`showreel-thumb.jpg`) e botão suave "Voltar ao topo".
  - Refinamento de microinterações com `IntersectionObserver` para revelação suave (`reveal-on-scroll`) ao rolar a página, respeitando `prefers-reduced-motion`.
  - Otimização completa de SEO, semântica HTML5, acessibilidade WAI-ARIA e lazy loading nativo.
  - Validação completa de execução 100% no Docker (`http://localhost:3000`) com status HTTP 200 para todas as páginas e assets estáticos.

- [x] **Passo 9: Calibração de Fidelidade Extrema com o Modelo Visual (Canopy Angular, Iluminação Hero e Brasas no CTA)**
  - Análise comparativa pixel a pixel contra `Brasa-Studio-·-Estúdio-criativo-de-marca-site-e-campanha-10-23-2026_06_56_PM.png` e o modelo fotográfico enviado (`media_1792800381748.png`).
  - Implementação dos dosséis angulares em trapézio invertido (`.section-header-canopy`) nos 5 cabeçalhos de seções centrais (`#resultados`, `#diferenciais`, `#portfolio`, `#galeria` e `#depoimentos`) com `clip-path: polygon(0 0, 100% 0, 88% 100%, 12% 100%)`, degradê acetinado escuro `#1C0E08`, bordas âmbar de 1px e luz de palco interna.
  - Expansão e enriquecimento da iluminação atmosférica no canto superior direito da Hero (`.hero-section::before` com raio de 920px e `body::before` com 65vw) reproduzindo a assinatura de ateliê cinematográfico.
  - Aperfeiçoamento do efeito de brasa incandescente no bloco de conversão CTA Final (`.cta-card`) com reflexo radial de calor e fagulhas emanando da base do cartão.
  - Validação completa 100% no Docker através do Chrome headless (1600x18000) e teste automatizado de 52 assets estáticos retornando HTTP 200 OK.

- [x] **Passo 10: Criação do README.md, .gitignore e Publicação no Repositório Remoto GitHub**
  - Criação do arquivo canônico `.gitignore` ignorando arquivos de rascunho temporários (`scratch/`), logs, arquivos de SO e caches.
  - Criação do script permanente de verificação automatizada `scripts/verify_all.py`.
  - Criação do `README.md` completo, com badges, tabela das 15 seções, arquitetura visual, guia Docker e métricas de acessibilidade.
  - Configuração do remote origin (`https://github.com/lopesmidia002-jpg/gustavomerisio.git`).
  - Commit inicial e sincronização bem-sucedida da branch `main` no GitHub.
- [x] **Passo 11: Alinhamento Pixel a Pixel da Hero com o Modelo Visual (Bússola Orbital, Frame de Vídeo, Badges em Bloco e Header)**
  - Divisor vertical no cabeçalho entre o logo e a navegação (`.header-divider`), agrupando logo e links de navegação à esquerda e botão de ação com brilho âmbar à direita.
  - Substituição da barra simples de parceiros por 4 cartões/tiles escuros de marcas parceiras (`.hero-partner-card`), medindo 58x58px, raio 14px, fundo acetinado `#0E0E0E` e borda de 1px com os símbolos `O` (círculo espesso), `▲` (triângulo sólido), `⬭` (cápsula dividida) e `≈` (dupla onda fluida).
  - Substituição da imagem do vaso cerâmico pelo frame de vídeo cinematográfico autêntico do modelo (`.hero-video-frame`, raio 18px, proporção 16:11) com iluminação chiaroscuro, vaso cerâmico e botão circular Play com vidro fosco e interação tátil.
- [x] **Passo 12: Atualização do Logotipo Oficial da Chama (Identidade Visual Autêntica)**
  - Vetorização precisa do novo ícone de chama (`assets/icons/flame.svg`) a partir do modelo autêntico fornecido.
  - Silhueta orgânica de duas pontas: língua secundária curvada à esquerda e língua principal alongada à direita com ápice em âmbar luminoso.
  - Núcleo de brasa escura (`#66220D`) com difusão sutil e degradê vertical quente (`#FFAE3B` no topo até `#CC3208` na base).
  - Propagação automática em todos os 5 pontos de aplicação da marca (cabeçalho desktop, menu mobile drawer, cartão de planos, rodapé institucional e favicon).
  - Validação 100% Docker com status HTTP 200 em todos os 53 assets estáticos via `verify_all.py`.

- [x] **Passo 13: Alinhamento Pixel a Pixel da Seção "Sobre a Brasa" com a Foto Autêntica do Designer**
  - Substituição da foto gerada pela fotografia autêntica de alta resolução do modelo original (`assets/images/sobre-artisan.jpg`, designer em bancada com laptop, amostras de cores e iluminação de ateliê).
  - Moldura com raio de 22px, proporção 4:5 e linha de brilho de brasa incandescente na base do cartão (`.sobre-image-wrap::after`).
  - Adição do divisor horizontal sutil (`.sobre-divider`) acima da lista de diferenciais.
  - Criação do ícone vetorial de selo verificado com checkmark escuro sobre roseta laranja (`assets/icons/badge-check.svg`).
  - Linha de ação inferior com botão `Como trabalhamos`, divisor vertical translúcido e 5 estrelas brancas acompanhadas da nota `4,9 dada por 86 clientes`.
- [x] **Passo 14: Auditoria de Formatação, Correção Estrutural de Tags HTML, Sintaxe CSS e Menu Mobile**
  - Auditoria estrutural completa do `index.html` com parser automatizado (`scripts/check_formatting.py`):
    - Identificadas e corrigidas seções abertas sem fechamento (`</section>`) em `#portfolio` e `#faq`.
    - Adicionado identificador `id="topo"` na tag `<body>`, sanando links e âncoras de retorno ao topo.
    - Validação de 100% das âncoras internas (10/10) e 100% dos atributos `alt` de acessibilidade em imagens.
  - Correção sintática e de cascata no `css/style.css`:
    - Adicionado fechamento de chave `}` na media query `@media (max-width: 640px)` na linha 2000, eliminando a retenção indevida das seções 8 a 14 dentro do escopo móvel.
  - Aperfeiçoamento da responsividade e navegação móvel:
    - Ocultação da navegação desktop (`.nav-desktop`) e divisor (`.header-divider`) em telas `<= 900px`.
    - Ativação e exibição do botão hambúrguer `.btn-menu-mobile` e estilos completos para o menu lateral retrátil (`.mobile-drawer` e `.mobile-drawer-overlay`).
    - Ocultação do botão secundário de contato em telas ultrapequenas `<= 520px` para garantir visual 100% limpo, equilibrado e sem transbordamento horizontal.
  - Validação 100% no Docker com headless Chrome (viewports desktop e mobile 375x812) e `verify_all.py` (53 assets com status HTTP 200 OK).

- [x] **Passo 15: Calibração Pixel a Pixel da Seção "Sobre a Brasa" com a Fotografia Original do Artesão e Símbolos de Marcas**
  - Integração da fotografia autêntica de alta resolução do artesão de ateliê com avental, bancada de couro/madeira, luminária de latão e cadernos de projeto (`assets/images/sobre-artisan.jpg`).
  - Remoção da barra de brilho inferior intrusiva da moldura (`.sobre-image-wrap::after`), deixando a borda limpa, acetinada e com curvatura exata de raio 20px.
  - Calibração de tipografia e quebras de linha: título `Marcas mais fortes,\nimpressões que ficam.` e parágrafo descritivo em 3 linhas com largura máxima de 470px.
  - Botão de ação `Como trabalhamos` com brilho de brasa quente emanando da base (`box-shadow: 0 4px 20px rgba(255, 75, 25, 0.42)`), divisor vertical translúcido e bloco de 5 estrelas brancas.
  - Alinhamento dos 3 símbolos vetoriais de marcas parceiras com o modelo autêntico: `Casa Ocre` com círculo pontilhado (`☉`), `Torra Rubi` com triângulo vazado (`△`) e `Âmbar Joias` com três colunas clássicas romanas (`Ⅲ`).
  - Validação 100% no Docker com inspeção visual por captura de tela e aprovação nos testes `check_formatting.py` e `verify_all.py` (53 assets HTTP 200).

- [x] **Passo 16: Calibração de Fidelidade Extrema do Cabeçalho Dossel Angular da Seção Resultados (`#resultados`)**
  - Criação do fundo vetorial escalável SVG em trapézio angular (`assets/images/canopy-trapezoid.svg`) com `preserveAspectRatio="none"` e `vector-effect="non-scaling-stroke"`, eliminando falhas de renderização ou corte de bordas por `clip-path`.
  - Geometria matemática exata proporcional ao modelo visual: topo com 1000 unidades, base com 760 unidades (proporção 76% idêntica aos 506px/666px medidos no modelo de 1024px) e linhas laterais inclinadas a ~13-15°.
  - Traçado nítido de 1.2px nas bordas chanfradas (`rgba(255, 75, 25, 0.22)`) e linha horizontal de conexão âmbar de 1.5px na base (`rgba(255, 75, 25, 0.40)`).
  - Iluminação atmosférica superior âmbar (`radial-gradient`) com difusão sutil e gradiente vertical em marrom escuro acetinado (`#261209` a `#070403`).
  - Iluminação ambiental radial no canto superior direito de fundo (`.results-section::before` com raio de 55vw e luz âmbar suave).
  - Tag pill `• Resultados` com fundo translúcido sutil (`rgba(255, 255, 255, 0.04)`), borda âmbar fina e ponto circular brilhante (`#FF4B19`).
  - Tipografia de alta precisão: título em duas linhas limpas (`Resultados que aparecem\nno caixa e na marca.`), subtítulo com quebra exata (`Cada entrega nasce com um objetivo claro e um jeito de medir. Veja alguns\nnúmeros de projetos recentes.`) e botão pílula `Agendar 15 minutos` com brilho inferior suave (`box-shadow: 0 4px 22px rgba(255, 75, 25, 0.45)`).
  - Validação 100% no Docker com captura visual via headless Chrome CDP e aprovação completa em `check_formatting.py` (0 erros) e `verify_all.py` (53 assets HTTP 200).

- [x] **Passo 17: Redimensionamento e Calibração de Fidelidade Extrema da Bússola Orbital Radiante (`.hero-compass-wrap`)**
  - Redução das dimensões do ornamento da bússola de 220x220px para 154x154px (proporção exata de ~150px medida na referência visual do ateliê).
  - Ajuste de ancoragem no canto inferior direito do vídeo frame (`right: -66px; bottom: -46px;`), posicionando o centro da estrela exatamente 9px para dentro da borda direita e 28px acima da base do vídeo, como no modelo original.
  - Refinamento do vetor `assets/icons/compass-star.svg`:
    - Estrela de 4 pontas curvada em curvas de Bézier esguias (`d="M 100 48 C 100 84 84 100 48 100..."`), com ápices afilados que ultrapassam sutilmente o círculo sólido interno (`r=42`), mantendo o centro do diamante compacto e sem embaçamento excessivo.
    - Anel externo pontilhado (`r=62`, `stroke-dasharray="2 4.5"`), anel interno contínuo (`r=42`) e eixos cardinais de mira estendidos com traçado fino e nítido.
    - Filtro de brilho sutil com desfoque refinado (`stdDeviation="2.5"`), eliminando distorções de escala e superexposição.
  - Validação 100% no Docker com captura via headless Chrome CDP e aprovação completa em `check_formatting.py` (0 erros) e `verify_all.py` (53 assets HTTP 200).

- [x] **Passo 18: Calibração de Fidelidade Extrema da Coluna Hero (Tipografia, Quebra do Subtítulo, Badge e Cartões de Marcas)**
  - Calibração do badge de status (`.hero-badge-wrap`): cápsula com borda suave `rgba(255, 75, 25, 0.32)`, pílula interna `NOVO` em vermelho-laranja sólido `#FF4B19` com cantos redondos `border-radius: var(--radius-pill)` e tipografia neutra em off-white `#C4C2BC` para "Agenda aberta para 2027".
  - Título editorial (`.hero-title`): `Design que acende` em branco puro com espaçamento entre letras reduzido (`letter-spacing: -0.03em`) e `marcas criativas.` em laranja brasa sólido `#FF4B19` sem degradê ou atenuação.
  - Subtítulo (`.hero-description`): quebra de linha milimétrica em 3 linhas com tags responsivas (`Identidade, site e campanha para negócios criativos que<br class="hero-sub-break">querem presença memorável, com método claro e acabamento<br class="hero-sub-break">de ateliê.`), cor editorial cinza quente `#8C8A85` e largura máxima de 540px.
  - Cartões de marcas parceiras (`.hero-partner-card`): redimensionamento para 52x52px, cantos arredondados de 12px, fundo acetinado `#0C0C0C`, borda sutil de 1px e gap de 12px (`0.75rem`).
  - Criação de 4 ícones vetoriais SVG autênticos dedicados para a Hero:
    - `assets/icons/hero-brand-circle.svg`: anel circular limpo e espesso `O` (sem ponto central).
    - `assets/icons/hero-brand-triangle.svg`: triângulo sólido preenchido em branco puro `▲`.
    - `assets/icons/hero-brand-capsule.svg`: cápsula dividida com cúpula superior e barra inferior arredondada `⬭`.
    - `assets/icons/hero-brand-wave.svg`: dupla onda fluida com pontas arredondadas `≈`.
  - Confinamento da iluminação atmosférica âmbar (`.hero-section::before`) no quadrante superior direito sobre o vídeo frame e o compasso orbital, garantindo contraste puro e fundo preto profundo `#050505` atrás da coluna de texto à esquerda.
  - Validação 100% no Docker com headless Chrome CDP, 0 erros no `check_formatting.py` e 57/57 assets estáticos com status HTTP 200 OK via `verify_all.py`.

