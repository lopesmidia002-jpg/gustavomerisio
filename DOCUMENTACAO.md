# DOCUMENTAÇÃO TÉCNICA — LANDING PAGE BRASA STUDIO

## 1. Visão Geral do Projeto

A landing page da **Brasa Studio** é uma aplicação web estática de altíssima fidelidade visual, desenvolvida para proporcionar uma experiência imersiva e cinematográfica inspirada em ateliês e estúdios de design de luxo.

O projeto foi concebido com foco em:
- **Zero Dependências Pesadas:** HTML5 semântico, CSS3 com variáveis nativas e JavaScript ES6+ puro.
- **Performance e SEO:** Renderização ultrarrápida, lazy loading nativo em imagens, metatags Open Graph completas e WAI-ARIA para acessibilidade.
- **Execução 100% no Docker:** Toda a infraestrutura roda através de contêineres Docker leves baseados em Nginx Alpine.

---

## 2. Arquitetura e Estrutura de Arquivos

```text
asserts/
├── .agents/
│   └── rules/
│       └── project_rules.md              # Regras locais de persistência de memória
├── assets/
│   ├── images/
│   │   ├── hero-craft-object.jpg         # Fotografia de destaque da primeira dobra
│   │   ├── sobre-artisan.jpg             # Retrato vertical de artesão no ateliê (Sobre)
│   │   ├── result-casa-ocre.jpg          # Vaso cerâmico artesanal (Resultados)
│   │   ├── result-torra-rubi.jpg         # Café especial com crema e grãos (Resultados)
│   │   ├── result-ambar-joias.jpg        # Anel de ouro em rocha vulcânica (Resultados)
│   │   ├── process-workbench.jpg         # Mãos na bancada de ateliê (Processo)
│   │   ├── why-revisoes.jpg              # Mural de mockups no estúdio (Por que a Brasa)
│   │   ├── why-pedidos.jpg               # Escultura fluida de vidro âmbar 3D (Por que a Brasa)
│   │   ├── why-preco.jpg                 # Caderno de projetos e esboços (Por que a Brasa)
│   │   ├── why-retorno.jpg               # Ampulheta de latão e vidro (Por que a Brasa)
│   │   ├── why-publicacao.jpg            # Mãos digitando em laptop (Por que a Brasa)
│   │   ├── portfolio-casa-ocre-wide.jpg  # Prateleira de cerâmica panorâmica (Portfólio)
│   │   ├── portfolio-torra-rubi-wide.jpg # Embalagens kraft de café panorâmico (Portfólio)
│   │   └── portfolio-lume-wide.jpg       # Showroom de arquitetura panorâmico (Portfólio)
│   └── icons/                            # Biblioteca de ícones SVG customizados
├── css/
│   └── style.css                         # Sistema de design, tokens, reset, botões, cards, seções 1 a 7
├── js/
│   └── main.js                           # Lógica de interações (header scroll, mobile drawer, acessibilidade)
├── docker-compose.yml                    # Orquestração do ambiente local com live reload
├── Dockerfile                            # Imagem de produção/desenvolvimento Nginx Alpine
├── nginx.conf                            # Configuração otimizada de servidor com gzip e cache
├── index.html                            # Estrutura HTML5 semântica completa
├── GEMINI.md                             # Memória de regras operacionais para o agente
├── PROMPT.md                             # Especificações detalhadas e prompt master
├── CONTEXTO.md                           # Contexto, dados de marca e inventário de textos
├── PASSOS.md                             # Checklist interativo de passos por prioridade
└── DOCUMENTACAO.md                       # Esta documentação técnica
```

---

## 3. Guia de Execução 100% no Docker

### Pré-requisitos
- Docker Engine e Docker Compose instalados na máquina.

### Comandos de Operação

1. **Iniciar a aplicação no Docker (modo background):**
   ```bash
   docker compose up -d --build
   ```

2. **Acessar a página no navegador:**
   - URL: [http://localhost:3000](http://localhost:3000)

3. **Verificar o status do contêiner:**
   ```bash
   docker compose ps
   ```

4. **Visualizar logs do servidor:**
   ```bash
   docker compose logs -f
   ```

5. **Parar a aplicação:**
   ```bash
   docker compose down
   ```

> **Live Reload / Volume Mount:** O arquivo `docker-compose.yml` mapeia o diretório local do projeto diretamente para `/usr/share/nginx/html`. Qualquer alteração salva nos arquivos `.html`, `.css` ou `.js` é refletida imediatamente no navegador, sem necessidade de rebuild.

---

## 4. Componentes Implementados

### 4.1. Header & Navegação Fixa (`.site-header`)
- **Backdrop Blur & Transparência:** Fundo em `rgba(5, 5, 5, 0.82)` com `backdrop-filter: blur(14px)` e transição suave ao rolar a página (`.is-scrolled`).
- **Agrupamento Esquerdo com Divisor:** Logotipo vetorial de chama orgânica de duas pontas (`assets/icons/flame.svg`) com núcleo de brasa escura e degradê quente, tipografia geométrica `brasa studio`, divisor vertical cinza translúcido (`.header-divider`) e links de navegação alinhados em sequência.
- **Botão de Conversão em Destaque:** Botão `Fale com a gente` no extremo direito com aura luminosa âmbar (`box-shadow: 0 4px 18px rgba(255, 75, 25, 0.28)`).
- **Menu Mobile Drawer (`#mobileDrawer`):** Painel lateral deslizante para telas menores que 900px, com bloqueio de scroll no body, fechamento via tecla `Escape`, clique no overlay ou toque no botão de fechar.

### 4.2. Hero Section (`.hero-section`)
- **Composição em Duas Colunas:** Layout assimétrico em CSS Grid (`1.15fr` x `0.85fr`).
- **Iluminação Atmosférica Volumétrica:** Feixe de luz radial quente no canto superior direito (`.hero-section::before`, 980x860px) com gradiente âmbar (#FF4B19 a transparente) e halo difuso à esquerda.
- **Microetiqueta Superior (`.hero-badge-wrap`):** Selo `NOVO` em laranja brasa com texto `Agenda aberta para 2027` em pílula escura acetinada.
- **Título Editorial Display:** Tamanho dinâmico `clamp(2.5rem, 5.2vw, 4.25rem)` com quebra de linha planejada e destaque cromático em *"marcas criativas."*.
- **Subtítulo & Ações:** Parágrafo descritivo e dupla de botões de ação (`.btn-secondary` branco e `.btn-ghost` translúcido grafite).
- **Cartões de Marcas Parceiras (`.hero-partner-card`):** Grade de 4 tiles escuros acetinados (58x58px, raio 14px, fundo `#0E0E0E`, borda sutil `1px solid rgba(255,255,255,0.09)`) contendo os símbolos gráficos espessos e nítidos:
  - `O` (`brand-circle.svg`): Círculo espesso vazado.
  - `▲` (`brand-triangle.svg`): Triângulo sólido minimalista.
  - `⬭` (`brand-column.svg`): Cápsula dividida com cúpula e barra horizontal.
  - `≈` (`brand-wave.svg`): Dupla onda estilizada fluida.
- **Cartão de Vídeo Cinematográfico (`.hero-video-frame`):** Proporção 16:11 com raio de 18px, iluminação chiaroscuro exibindo a peça artesanal cerâmica em ateliê, silhueta de câmera profissional e botão circular Play centralizado com vidro fosco (`backdrop-filter`) e interação táctil em hover.
- **Bússola Orbital Radiante (`.hero-compass-wrap` / `compass-star.svg`):** Ornamento geométrico avançado de 220x220px ancorado no canto inferior direito do vídeo com anel interno sólido, anel externo pontilhado, miras cardinais com marcações de eixos, 4 raios diagonais a 45° e estrela de 4 pontas curvada em degradê fogo com animação infinita de pulso luminescente (`subtleCompassGlow`).

### 4.3. Seção Editorial "Sobre a Brasa" (`.sobre-section`)
- **Composição em 2 Colunas Balanceadas:** Grid de proporção `0.95fr` x `1.05fr`.
- **Retrato Fotográfico Vertical Autêntico:** Fotografia original de alta resolução (`assets/images/sobre-artisan.jpg`, proporção 4:5, 470x583px) retratando o designer trabalhando em bancada de madeira com laptop e amostras de cores sob iluminação chiaroscuro de ateliê. Moldura com raio de 22px e linha de brilho de calor brasa incandescente na base do cartão (`.sobre-image-wrap::after`).
- **Apresentação de Método:** Microetiqueta `• Sobre a Brasa`, título editorial *"Marcas mais fortes, impressões que ficam."*, manifesto e linha divisória horizontal (`.sobre-divider`).
- **Checklist com Selos Verificados:** Dois diferenciais institucionais chave acompanhados do ícone vetorial de selo verificado com checkmark escuro sobre roseta laranja (`assets/icons/badge-check.svg`).
- **Linha de Ação & Avaliação Social:** Botão de ação primário `Como trabalhamos`, divisor vertical translúcido e bloco com 5 estrelas brancas acompanhadas do selo de nota `4,9 dada por 86 clientes`.

### 4.4. Resultados em Destaque (`.results-section`)
- **Header Centralizado:** Tag de categoria `• Resultados`, título de alto impacto e CTA `Agendar 15 minutos`.
- **Grade de 3 Cartões de Cases:**
  - `Casa Ocre`: Métrica de e-commerce (`+38% em vendas online`, `22x mais recompra`) com vaso cerâmico minimalista em luz chiaroscuro.
  - `Torra Rubi`: Métrica B2B (`+37% no custo por lead`, `+45% em pedidos B2B`) com café especial e grãos tostados sobre ardósia.
  - `Âmbar Joias`: Métrica de alto padrão (`+64% de visitas qualificadas`, `+28% no ticket médio`) com anel artesanal de ouro em rocha vulcânica.
- **Tratamento de Cards:** Fundo acetinado `#0B0B0B`, bordas de 1px com baixa opacidade, degradê de fusão na base das imagens e transição de elevação em hover.

### 4.5. Processo & Benefícios ("Do briefing ao ar" - `.process-section`)
- **Layout Assimétrico em 2 Colunas:** Conteúdo estruturado à esquerda e fotografia de bancada à direita (`process-workbench.jpg`).
- **3 Etapas Sequenciais:**
  - `Imersão` (Ícone de lupa, tag de etapa, diagnóstico e plano).
  - `Criação` (Ícone de caneta, tag de etapa, revisões semanais e protótipo).
  - `Entrega` (Ícone de foguete, tag de etapa, suporte pós-lançamento e guia).
- **Ação:** Botão `Agendar conversa` e ornamento de estrela geométrica âmbar.

### 4.6. Diferenciais de Estúdio (`.diferenciais-section`)
- **Header Editorial:** Tag `• Diferenciais`, título *"Recursos de estúdio grande com atenção de ateliê."* e CTA `Conheça a Brasa`.
- **Grade 3x2 (6 Cartões de Recursos):**
  - `Marca que vende` (Selo `PRO`, ícone de gráfico comercial).
  - `Sistema editável` (Ícone de camadas/módulos, arquivos vivos).
  - `Código leve` (Ícone de raio/velocidade, sem plugins pesados).
  - `Direção de arte` (Ícone de olho autoral, fotografia e cor personalizadas).
  - `Prazo combinado` (Selo `NOVO`, ícone de calendário, cronograma fechado).
  - `Pensado para o celular` (Ícone de smartphone, responsivo de verdade).

### 4.7. Apresentação Editorial "Por que a Brasa" (`.why-section`)
- **Linha de Chips / Etiquetas:** 11 tags com capacidades técnicas e botão `Fale agora`.
- **Grid Assimétrico de 5 Cartões:**
  - `Revisões com método`: Mural de mockups (`why-revisoes.jpg`).
  - `Pedidos sem fila`: Escultura fluida 3D de vidro âmbar (`why-pedidos.jpg`) com dupla de botões.
  - `Preço sem surpresa`: Caderno de projetos artesanal (`why-preco.jpg`).
  - `Retorno rápido`: Ampulheta artesanal de latão e vidro (`why-retorno.jpg`).
  - `Publicação assistida`: Mãos digitando código em estúdio escuro (`why-publicacao.jpg`).

### 4.8. Portfólio Panorâmico Largo (`.portfolio-section`)
- **Header Central:** Tag `• Portfólio`, título *"Projetos selecionados que acendem marcas."* e CTA `Pedir o portfólio completo`.
- **Pilha de 3 Blocos Panorâmicos de Cinema (Aspect Ratio 16:7):**
  - `Casa Ocre` · `2026`: E-commerce, Identidade, fotografia panorâmica de estúdio cerâmico (`portfolio-casa-ocre-wide.jpg`) e barra de progresso (65%).
  - `Torra Rubi` · `2026`: Marca, Embalagem, balcão rústico de torrefação (`portfolio-torra-rubi-wide.jpg`) e barra de progresso (82%).
  - `Lume Arquitetura` · `2025`: Site institucional, Direção de arte, showroom crepuscular (`portfolio-lume-wide.jpg`) e barra de progresso (50%).

- **Seção de Serviços Completos (`#servicos`):**
  - Layout assimétrico de 2 colunas com fotografia do profissional na mesa de luz em posição *sticky* (`assets/images/services-professional.jpg`, 494x504px) acompanhando a rolagem.
  - Coluna de pacotes editoriais com 3 cartões detalhados (`Site sob medida`, `Identidade completa`, `Lançamento integrado`), com badges de categoria, prazos de entrega semanais, faixas de investimento, ícones SVG dedicados (`icon-browser.svg`, `icon-palette.svg`, `icon-megaphone.svg`), checklist com checkmarks laranja e ornamento celestial/estrela orbital no card de destaque.

- **Banner Parceiro Criativo & Galeria de Detalhes 2x3 (`#galeria`):**
  - Banner central de autoridade *"O parceiro criativo de marcas em crescimento."* com duplo feixe de iluminação radial âmbar suave e botão de ação `Ver como trabalhamos`.
  - Galeria em grade 2x3 com 6 fotografias originais extraídas da direção de arte em alta fidelidade:
    1. `gallery-pottery.jpg`: Artesão no torno cerâmico com faíscas.
    2. `gallery-coffee.jpg`: Extração lenta de café especial V60.
    3. `gallery-storefront.jpg`: Fachada e vitrine noturna de ateliê com luz quente.
    4. `gallery-necklace.jpg`: Joalheria autoral em ouro sobre seda drapeada escura.
    5. `gallery-cyclist.jpg`: Estilo de vida urbano com ciclista na golden hour.
    6. `gallery-textiles.jpg`: Amostras de tecidos artesanais com tingimento natural dobradas.
  - Modal Lightbox nativo em JavaScript acessível por teclado (Enter, Espaço e Escape) e fechamento por clique fora da área útil.

- **Seção de Planos Mensais (`#planos`):**
  - Grade de 2 colunas com pacotes recorrentes para design contínuo pós-lançamento:
    1. `Essencial`: Ícone de chama (`flame.svg`), badge `Mais escolhido`, R$ 3.900/mês com valor de R$ 4.600 riscado em laranja, escopo de 8 peças/mês, 2 rodadas de ajustes e checklist de entregáveis.
    2. `Estúdio`: Ícone de diamante lapidado (`icon-gem.svg`), badge `Recomendado`, R$ 8.900/mês, escopo expandido de 24 peças/mês, ajustes sem limite, campanhas trimestrais, reuniões de pauta e bússola estelar orbital de fundo.

- **Seção de Depoimentos das Marcas (`#depoimentos`):**
  - Banner de autoridade *"O que dizem as marcas que passaram por aqui."*, barra com 4 ícones de marcas parceiras atendidas (`Casa Ocre`, `Torra Rubi`, `Lume Arquitetura`, `Âmbar Joias`) e botão `Ver portfólio`.
  - Grade 3x2 com 6 depoimentos reais com fotos circulares dos clientes em moldura âmbar suave (`avatar-helena.jpg`, `avatar-rafael.jpg`, `avatar-livia.jpg`, `avatar-caio.jpg`, `avatar-marina.jpg`, `avatar-otavio.jpg`), avaliação de 5 estrelas âmbar (`★★★★★`), citações editoriais e cargos/empresas.

- **Seção de Perguntas Frequentes (`#faq`):**
  - Divisor horizontal com brilho neon âmbar degradê suave.
  - Layout assimétrico de 2 colunas com cabeçalho sticky à esquerda e acordeão de 6 itens à direita (`Como começa`, `Prazo`, `Textos e fotos`, `Edição futura`, `Atendimento remoto`, `Entregáveis finais`).
  - Acordeão com interação nativa suave em JavaScript, rotação de 45° no ícone `+` e atributos de acessibilidade WAI-ARIA (`aria-expanded` e `aria-controls`).

- **Seção de Chamada Final / CTA (`#contato`):**
  - Card centralizado com iluminação radial âmbar/brasa profunda (`#0B0705`), tag `• Vamos conversar`, título editorial *"Cada projeto é uma brasa que a gente acende junto."* e formulário de conversão de e-mail com microinterações de foco e feedback assíncrono visual.

- **Rodapé Completo (`footer`):**
  - Layout escuro premium (`#050505`) dividido em 4 colunas principais:
    1. Marca institucional (logo Brasa Studio com ícone de chama), frase de manifesto e formulário de assinatura da carta semanal com feedback visual.
    2. Coluna `Páginas` com links âncora para navegação interna (`Início`, `Sobre`, `Portfólio`, `Contato`, `FAQ`).
    3. Coluna `Estúdio` com links diretos para as soluções (`Processo`, `Serviços`, `Planos`, `Depoimentos`).
    4. Coluna `Showreel 2026` com badge e miniatura de vídeo cinematográfica tratada ([showreel-thumb.jpg](file:///c:/Users/Nilto/OneDrive/Documentos/Projetos%20out26/gustavomerisio/asserts/assets/images/showreel-thumb.jpg)) com ícone de play.
  - Barra inferior com direitos autorais e botão com rolagem suave "Voltar ao topo".

- **Microinterações e Scroll Reveal:**
  - Animação de entrada suave via `IntersectionObserver` (`reveal-on-scroll`) para todos os cartões e blocos estruturais da página, com fallback gracioso e suporte a `prefers-reduced-motion`.

- **Integração Impeccable Design (`PRODUCT.md`):**
  - Inicialização do contexto durável do produto através do Impeccable CLI / Skill.
  - Criação de [PRODUCT.md](file:///c:/Users/Nilto/OneDrive/Documentos/Projetos%20out26/gustavomerisio/asserts/PRODUCT.md) estruturado com schema 1 (público-alvo ateliê/artesanal, posicionamento de autoridade, diretrizes de marca e princípios de produto).
  - Configuração do fluxo de design `buildPath: comp` em `.impeccable/config.json`.

### 4.14. Calibração Visual do Modelo de Referência (Passo 9)
- **Dossel Angular em Trapézio Invertido (`.section-header-canopy`):**
  - Implementado nas 5 seções centrais de maior impacto visual (`#resultados`, `#diferenciais`, `#portfolio`, `#galeria` e `#depoimentos`).
  - Geometria e corte chanfrado via `clip-path: polygon(0 0, 100% 0, 88% 100%, 12% 100%)` (responsivo para 95%/5% em mobile).
  - Fundo degradê acetinado em marrom queimado e carvão (`linear-gradient(180deg, rgba(28, 14, 8, 0.88) 0%, rgba(16, 9, 6, 0.62) 55%, rgba(8, 6, 5, 0.96) 100%)`).
  - Bordas superior e laterais chanfradas em âmbar (`1px solid rgba(255, 75, 25, 0.24)`), sombra externa e interna refletindo iluminação de palco de estúdio.
- **Assinatura Luminosa do Hero:**
  - Brilho atmosférico em `.hero-section::before` ampliado para 920x800px no canto superior direito (`rgba(255, 75, 25, 0.45)`), com difusão de 55px, reproduzindo o calor e chiaroscuro da fotografia original.
- **Efeito de Brasa Incandescente no CTA Final:**
  - Cartão `.cta-card` com gradiente radial elíptico ancorado na base central (`at 50% 98%` com `rgba(255, 85, 25, 0.58)`), criando a ilusão tátil de calor de lareira e fagulhas de ateliê.
- **Validação de Renderização:**
  - Captura automatizada full-page em resolução nativa (1600x18000px) e verificação de integridade 100% em Docker.

### 4.15. Documentação Canônica, Git e Publicação GitHub (Passo 10)
- **Arquivo `.gitignore`:**
  - Configurado para isolar diretórios de testes temporários (`scratch/`), dumps de comparação gráfica, arquivos do sistema operacional (`.DS_Store`, `Thumbs.db`) e caches.
- **Script Permanente `scripts/verify_all.py`:**
  - Script autônomo em Python mantido no repositório para assegurar a testabilidade contínua de status HTTP 200 de todos os 52 assets estáticos via Docker.
- **Arquivo `README.md` Completo:**
  - Visão geral completa do projeto, identidade visual, tabela detalhada das 15 seções, guia de início rápido via Docker Compose, instruções de verificação e métricas de acessibilidade/SEO.
- **Publicação no GitHub:**
  - Repositório remoto configurado em `https://github.com/lopesmidia002-jpg/gustavomerisio.git`, branch `main` sincronizada com sucesso.

### 4.16. Auditoria de Formatação, Correção de HTML, CSS e Responsividade Mobile (Passo 14)
- **Correção Estrutural de Tags HTML (`index.html`):**
  - Identificação e inserção dos fechamentos `</section>` ausentes nas seções `#portfolio` e `#faq`, restabelecendo a árvore semântica correta do DOM.
  - Inserção do atributo `id="topo"` na tag `<body>`, validando todos os destinos de links de retorno ao topo do cabeçalho e rodapé.
- **Correção de Sintaxe e Cascata CSS (`css/style.css`):**
  - Inclusão do fechamento de chave `}` na `@media (max-width: 640px)` na linha 2000, eliminando a captura indevida das seções 8 a 14 dentro do escopo móvel.
- **Sistema Completo do Menu Mobile Retrátil (Drawer):**
  - Estilização completa do container `.mobile-drawer`, overlay com backdrop-filter fosco `.mobile-drawer-overlay`, cabeçalho `.mobile-drawer-header`, botão de fechamento `.btn-drawer-close`, links móveis com indicador âmbar `.mobile-nav-link` e rodapé do drawer `.mobile-drawer-footer`.
  - Media queries de responsividade no cabeçalho: ocultação de `.nav-desktop` e `.header-divider` em viewports `<= 900px` com ativação de `.btn-menu-mobile`, e ocultação do botão secundário em `<= 520px` para evitar qualquer tipo de overflow horizontal em smartphones compactos.
- **Suite de Validação Automatizada (`scripts/check_formatting.py`):**
  - Parser autônomo em Python para verificação de balanceamento de tags HTML, verificação de existência de âncoras internas, presença obrigatória de `alt` em imagens e integridade de chaves/regras CSS (execução com 0 erros).

### 4.17. Calibração Pixel a Pixel da Seção "Sobre a Brasa" e Símbolos de Marcas (Passo 15)
- **Fotografia de Ateliê do Artesão:**
  - Substituição da fotografia em `assets/images/sobre-artisan.jpg` pelo arquivo autêntico de alta resolução do artesão de avental em bancada de couro/madeira com luminária de latão.
  - Ajuste de moldura para raio de 20px, eliminação da barra de brilho inferior intrusiva e adição de iluminação ambiente radial âmbar no fundo direito da seção (`.sobre-section::before`).
- **Harmonização Tipográfica e Microinterações:**
  - Ajuste na quebra de linha do título `Marcas mais fortes,\nimpressões que ficam.` e largura do parágrafo de 470px para diagramação em 3 linhas idêntica à referência visual.
  - Brilho de brasa quente emanando da base do botão de ação `Como trabalhamos` (`box-shadow: 0 4px 20px rgba(255, 75, 25, 0.42)`).
- **Vetorização Precisa dos Símbolos de Marcas Parceiras:**
  - `brand-circle.svg`: Círculo com ponto central luminoso (`☉`).
  - `brand-triangle.svg`: Triângulo vazado com traço de 2px (`△`).
  - `brand-column.svg`: Três colunas clássicas com traços serifados (`Ⅲ`).
- **Validação Completa no Docker:**
  - Testes `check_formatting.py` e `verify_all.py` 100% aprovados com 53 assets estáticos retornando HTTP 200 OK.

### 4.18. Calibração de Fidelidade Extrema do Dossel Angular de Resultados (Passo 16)
- **Fundo Vetorial Escalável em Trapézio Angular (`assets/images/canopy-trapezoid.svg`):**
  - Superação das limitações do `clip-path` (que cortava bordas e sombras de elementos filhos) através de um arquivo vetorial SVG dedicado com `preserveAspectRatio="none"` e `vector-effect="non-scaling-stroke"`.
  - Geometria calculada: topo de 1000 unidades, base conectada de 760 unidades (76% de largura, reproduzindo exatamente os 506px/666px do modelo visual em 1024px).
  - Traçado nítido de 1.2px nas laterais chanfradas (`rgba(255, 75, 25, 0.22)`) e traço de destaque horizontal na base com 1.5px (`rgba(255, 75, 25, 0.40)`).
  - Preenchimento em degradê vertical acetinado em marrom queimado escuro (`#261209` a `#070403`) com iluminação superior de palco em âmbar (`radial-gradient`).
- **Iluminação Atmosférica de Fundo:**
  - Inserção de pseudo-elemento `.results-section::before` com degradê radial âmbar de 55vw no canto superior direito, integrando a atmosfera escura do ateliê.
- **Tipografia e Botão de Ação:**
  - Tag pill `• Resultados` estilizada com fundo translúcido `rgba(255, 255, 255, 0.04)`, borda âmbar fina e ponto circular brilhante `#FF4B19`.
  - Título em duas linhas com tracking ajustado (`-0.025em`) e subtítulo com quebra responsiva exata (`Cada entrega nasce com um objetivo claro e um jeito de medir. Veja alguns\nnúmeros de projetos recentes.`).
  - Botão pílula `Agendar 15 minutos` com dimensões calibradas (`padding: 0.55rem 1.5rem`), tipografia limpa e brilho âmbar difuso na base (`box-shadow: 0 4px 22px rgba(255, 75, 25, 0.45)`).
- **Validação Automatizada:**
  - Aprovado no `check_formatting.py` (0 erros) e no `verify_all.py` (53 assets retornando HTTP 200 OK no Docker).

### 4.19. Redimensionamento e Calibração da Bússola Orbital Radiante (Passo 17)
- **Redução e Escala Proporcional:**
  - Ajuste de dimensões do ornamento `.hero-compass-wrap` de 220x220px para 154x154px, eliminando a desproporção visual em relação ao frame de vídeo cinematográfico.
  - Reposicionamento milimétrico na extremidade inferior direita do vídeo (`right: -66px; bottom: -46px;`), harmonizando o centro da estrela com o modelo original (9px para dentro da borda lateral e 28px acima da base).
- **Geometria Vetorial Fina (`assets/icons/compass-star.svg`):**
  - Redesenho da estrela radiante de 4 pontas com curvas de Bézier cúbicas esguias (`d="M 100 48 C 100 84 84 100 48 100..."`), garantindo cintura esbelta e pontas pontiagudas sem embaçamento excessivo.
  - Filtro de brilho calibrado com `stdDeviation="2.5"` e `drop-shadow(0 0 14px rgba(255, 75, 25, 0.45))` no CSS, preservando a nitidez dos anéis e das miras.
- **Validação Automatizada:**
  - Testes `check_formatting.py` (0 erros) e `verify_all.py` (53 assets HTTP 200) aprovados no Docker.

### 4.20. Calibração de Fidelidade Extrema da Coluna Hero (Passo 18)
- **Badge de Status Superior (`.hero-badge-wrap`):**
  - Ajuste de proporções e cantos: pílula interna `NOVO` em vermelho-laranja sólido `#FF4B19` com `border-radius: var(--radius-pill)`, padding `0.2rem 0.55rem` e tipografia neutra em off-white `#C4C2BC` para "Agenda aberta para 2027", com borda sutil `rgba(255, 75, 25, 0.32)`.
- **Tipografia do Título Editorial (`.hero-title`):**
  - `Design que acende` em branco puro `#FFFFFF` com `letter-spacing: -0.03em` e `line-height: 1.06`.
  - `marcas criativas.` em laranja brasa sólido `#FF4B19` (`background: none; -webkit-text-fill-color: #FF4B19`), eliminando qualquer degradê ou desbotamento.
- **Subtítulo com Quebra Milimétrica de 3 Linhas (`.hero-description`):**
  - Quebra de linha responsiva via `<br class="hero-sub-break">`:
    Linha 1: `Identidade, site e campanha para negócios criativos que`
    Linha 2: `querem presença memorável, com método claro e acabamento`
    Linha 3: `de ateliê.`
  - Cor editorial secundária cinza quente `#8C8A85`, `line-height: 1.55` e `max-width: 540px`.
- **Cartões de Marcas Parceiras Compactos (`.hero-partner-card`):**
  - Redimensionamento para 52x52px com cantos arredondados de 12px, fundo acetinado `#0C0C0C`, borda sutil de 1px e gap de 12px (`0.75rem`).
  - Criação de 4 ícones vetoriais SVG dedicados e autênticos:
    - `assets/icons/hero-brand-circle.svg`: anel circular limpo `O` com espessura de 2.6px (sem ponto central).
    - `assets/icons/hero-brand-triangle.svg`: triângulo sólido preenchido em branco `#FFFFFF` `▲`.
    - `assets/icons/hero-brand-capsule.svg`: cápsula dividida com cúpula superior e barra inferior arredondada `⬭`.
    - `assets/icons/hero-brand-wave.svg`: dupla onda sinusoidal paralela `≈`.
- **Iluminação Atmosférica Delimitada:**
  - Confinamento do degradê âmbar no topo direito da Hero (`.hero-section::before`), garantindo contraste puro com fundo preto profundo `#050505` atrás da coluna de conteúdo da esquerda.
- **Validação Automatizada:**
  - 100% no Docker, com 0 erros no `check_formatting.py` e todos os 57 assets estáticos retornando HTTP 200 OK via `verify_all.py`.

### 4.21. Expansão da Barra de Marcas Parceiras para 6 Cartões (Passo 19)
- **Vetorização e Inclusão de 2 Novos Símbolos Autênticos:**
  - `assets/icons/hero-brand-diamond.svg`: Losango vazado geométrico (`◇`) com rotação simétrica a 45 graus, traçado nítido de 2.8px em branco puro `#FFFFFF` e recorte interior proporcional.
  - `assets/icons/hero-brand-dots.svg`: Matriz simétrica 2x2 com 4 círculos preenchidos (`⸬`) com raio de 3.4px e espaçamento uniforme de 1.6px.
- **Padronização Visual Completa da Barra (`.hero-partners`):**
  - Todos os 6 cartões (`.hero-partner-card`) mantêm a mesma identidade de ateliê: dimensões 52x52px, cantos arredondados de 12px, fundo escuro acetinado `#0C0C0C`, borda sutil de 1px e gap horizontal de 12px (`0.75rem`).
  - Suporte responsivo com `flex-wrap: wrap` no CSS para telas pequenas, mantendo linha contínua e equilibrada no desktop.
- **Validação Automatizada:**
  - 100% no Docker, com 0 erros no `check_formatting.py` e todos os 59 assets estáticos retornando HTTP 200 OK via `verify_all.py`.

### 4.22. Fundo Estático Autêntico da Hero com Arco Âmbar e Granulação 35mm (Passo 20)
- **Imagem Atmosférica de Alta Resolução (`assets/images/hero-ambient-arc.jpg`, 2400x1200):**
  - Arco luminoso contínuo com ápice superior em laranja brasa (`#E45E20`), flanco direito em âmbar pêssego suave (`#F4A274`) e início em brasa queimada (`#A8380E`).
  - Granulação cinematográfica analógica de 35mm finamente sintetizada, conferindo acabamento tátil de estúdio autoral.
  - Quadrante esquerdo e base da imagem com transição suave para preto puro `#050505`, proporcionando contraste editorial absoluto para o bloco de texto, botões e os 6 cartões de parceiros.
- **Fundo Estático Exclusivo para a Seção Hero:**
  - Aplicação estrita na classe `.hero-section`: `background-image: url('../assets/images/hero-ambient-arc.jpg'); background-size: cover; background-attachment: scroll;`.
  - Desativação do antigo efeito dinâmico global `body::before` e do pseudo-elemento `.hero-section::before`, garantindo que o fundo permaneça fixo na primeira dobra e não vaze ou interfira nas demais seções da página.
- **Validação Automatizada:**
  - 100% no Docker, com 0 erros no `check_formatting.py` e todos os 61 assets estáticos retornando HTTP 200 OK via `verify_all.py`.

---

## 5. Acessibilidade e SEO

- **WAI-ARIA no Menu Móvel:** Atributos `aria-expanded` dinâmico no botão hambúrguer, `aria-controls="mobileDrawer"` e `aria-hidden` atualizados via JavaScript.
- **Hierarquia de Títulos:** Tag `<h1>` única no Hero, tags `<h2>` exclusivas para os títulos principais das seções e `<h3>` nos cartões.
- **Otimização de Carregamento:** Atributo `fetchpriority="high"` na primeira dobra e `loading="lazy"` em todas as imagens subsequentes.

---

## 6. Protocolo de Manutenção e Atualização

Ao realizar qualquer alteração no projeto:
1. Atualizar este arquivo (`DOCUMENTACAO.md`) com a descrição das novas implementações.
2. Atualizar o checklist em `PASSOS.md`, marcando os passos finalizados com `[x]`.
3. Manter o arquivo `CONTEXTO.md` sincronizado caso novos textos ou dados sejam criados.
4. Fornecer a mensagem de commit semântico correspondente ao final da entrega.
