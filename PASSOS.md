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


