# Brasa Studio — Estúdio Criativo de Marca, Site e Campanha

![Docker](https://img.shields.io/badge/Docker-100%25-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-Alpine-009639?style=for-the-badge&logo=nginx&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Semântico-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla%20Design%20Tokens-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B%20Modular-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Design](https://img.shields.io/badge/Design-Estética%20Dark%20Premium-FF4B19?style=for-the-badge)

Landing page premium desenvolvida com fidelidade visual extrema à identidade artística da **Brasa Studio**. Uma experiência imersiva e contemporânea para estúdios de design, produtos autorais, objetos de luxo e marcas em crescimento, unindo direção de arte sofisticada, método claro e acabamento de ateliê.

---

## 🌟 Destaques Visuais e Direção Artística

- **Paleta de Cores de Alto Contraste:**
  - Fundo principal: preto profundo quase absoluto (`#050505`).
  - Superfícies dos cartões: acabamento acetinado em grafite (`#0B0B0B` e `#101010`) com bordas sutis (`rgba(255, 255, 255, 0.08)`).
  - Acentos em Laranja Brasa (`#FF4B19`) e Âmbar (`#FF8C38`) aplicados em botões, indicadores, linhas de progresso e ornamentos.
- **Tipografia Editorial:**
  - Fonte geométrica moderna [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts) com pesos 400 a 800, títulos esculturais e microtextos com hierarquia refinada.
- **Assinatura Visual de Palco (Dossel Angular em Trapézio Invertido):**
  - Cabeçalhos de seção com geometria chanfrada (`.section-header-canopy` com `clip-path: polygon(0 0, 100% 0, 88% 100%, 12% 100%)`), degradê acetinado em marrom queimado e luz de palco superior âmbar.
- **Iluminação Atmosférica & Chiaroscuro:**
  - Halo ambiental na primeira dobra (Hero) emanando do canto superior direito e iluminação radial de calor e fagulhas no bloco final de conversão (CTA).
- **Fotografia Autoral de Alta Resolução:**
  - Iluminação direcionada quente sobre cerâmica artesanal, torrefação de café especial, joalheria em ouro texturizado e bancadas táteis de criação.

---

## 🧭 Estrutura Completa das 15 Seções Mapeadas

| Seção | Elemento | Descrição Técnica e Conteúdo |
| :--- | :--- | :--- |
| **01** | **Cabeçalho & Nav** | Header fixo glassmorphism (`rgba(5, 5, 5, 0.82)`), logo com ícone de chama, links âncora, botão `Fale com a gente` e menu gaveta móvel com suporte a teclado (Esc). |
| **02** | **Hero Section** | Selo `[NOVO] Agenda aberta para 2027`, título editorial com destaque em *"marcas criativas."*, botões duplos de ação, barra de parceiros e fotografia de cerâmica com estrela decorativa flutuante de 4 pontas (`✦`). |
| **03** | **Sobre a Brasa** | Composição assimétrica em 2 colunas com foto vertical do artesão no torno (`sobre-artisan.jpg`), tag `• Sobre a Brasa`, checklist e avaliação social de 4,9 estrelas por 86 clientes. |
| **04** | **Resultados em Destaque** | Dossel angular com tag `• Resultados`, título, botão `Agendar 15 minutos` e grade de 3 cases: `Casa Ocre` (+38% vendas), `Torra Rubi` (+45% pedidos B2B) e `Âmbar Joias` (+64% visitas qualificadas). |
| **05** | **Processo ("Do briefing ao ar")** | 3 etapas sequenciais (`Imersão`, `Criação`, `Entrega`) com ícones dedicados, tags de etapa, botão `Agendar conversa` e fotografia cinematográfica da bancada de trabalho (`process-workbench.jpg`). |
| **06** | **Diferenciais de Estúdio** | Dossel angular com botão `Conheça a Brasa` e grade 3x2 com 6 recursos (`Marca que vende`, `Sistema editável`, `Código leve`, `Direção de arte`, `Prazo combinado`, `Pensado para o celular`). |
| **07** | **Apresentação ("Por que a Brasa")** | Linha de chips horizontais (`Experiência fluida`, `Mais conversão`, `SEO técnico`, etc.) e grid assimétrico de 5 cartões de valor (`Revisões com método`, `Pedidos sem fila`, `Preço sem surpresa`, `Retorno rápido`, `Publicação assistida`). |
| **08** | **Portfólio Panorâmico** | Dossel angular com botão `Pedir o portfólio completo` e 3 blocos cinematográficos widescreen (16:7) com barras de progresso sincronizadas: `Casa Ocre` (65%), `Torra Rubi` (82%) e `Lume Arquitetura` (50%). |
| **09** | **Serviços Completos** | Coluna esquerda com fotografia sticky do profissional na bancada (`services-professional.jpg`) e coluna direita com 3 pacotes (`Site sob medida` R$ 24k, `Identidade completa` R$ 16k, `Lançamento integrado` R$ 12k). |
| **10** | **Galeria de Detalhes 2x3** | Dossel angular *"O parceiro criativo de marcas em crescimento"* com grade 2x3 de 6 fotografias de texturas táteis e modal Lightbox interativo acessível. |
| **11** | **Planos Mensais** | 2 cartões de planos recorrentes: `Essencial` (R$ 3.900/mês — De R$ 4.600) e `Estúdio` (R$ 8.900/mês com badge `Mais escolhido` e ornamento celestial orbital). |
| **12** | **Depoimentos das Marcas** | Dossel angular com carrossel visual e grid 3x2 de 6 avaliações reais com fotos de perfil de fundadores, estrelas âmbar e citações completas. |
| **13** | **FAQ (Perguntas Frequentes)** | Layout em 2 colunas com acordeão interativo WAI-ARIA de 6 dúvidas essenciais, animações suaves e rotação de ícone `+` para `×`. |
| **14** | **Chamada Final (CTA)** | Cartão acetinado com degradê de brasa incandescente, título *"Cada projeto é uma brasa que a gente acende junto."* e formulário de captura de lead com validação nativa. |
| **15** | **Rodapé Completo** | Fundo `#050505`, manifesto, newsletter *"Assinar a carta"*, links organizados em categorias, teaser em miniatura do Showreel 2026 e botão suave "Voltar ao topo ↑". |

---

## 🚀 Execução 100% no Docker

O projeto roda integralmente encapsulado através do Docker e Docker Compose, utilizando um servidor **Nginx Alpine** leve e otimizado com suporte a gzip e cache headers.

### Pré-requisitos
- [Docker](https://www.docker.com/) e Docker Compose instalados.

### 1. Iniciar o projeto
Clone o repositório e execute na raiz:

```bash
docker compose up -d
```

### 2. Acessar a aplicação
Abra o navegador em:
👉 **[http://localhost:3000](http://localhost:3000)**

### 3. Comandos úteis

```bash
# Ver os logs do container
docker compose logs -f

# Reiniciar o serviço com live reload
docker compose restart

# Parar o container
docker compose down
```

---

## 🧪 Validação Automatizada de Assets e Status HTTP 200

Um script automatizado em Python verifica a integridade de todas as imagens, ícones SVG, estilos e scripts servidos pelo container:

```bash
python scripts/verify_all.py
```

> **Resultado:** 52/52 assets estáticos retornando `HTTP 200 OK` de forma consistente e sem dependências quebradas.

---

## 📂 Estrutura do Repositório

```text
├── assets/
│   ├── icons/            # 15 ícones SVG vetorizados (flame, sparkle, stars, checks, marcas)
│   └── images/           # 18 fotografias em alta resolução tratadas com chiaroscuro
├── css/
│   └── style.css         # Sistema de design global, design tokens e utilitários
├── js/
│   └── main.js           # Lógica do menu móvel, acordeão FAQ, Lightbox e reveal animations
├── scripts/
│   └── verify_all.py     # Script de validação automatizada de integridade via Docker
├── .agents/              # Regras operacionais do projeto e habilidades
├── .impeccable/          # Configuração do fluxo de design contextual Impeccable
├── Dockerfile            # Imagem Nginx Alpine leve
├── docker-compose.yml    # Orquestração do serviço na porta 3000:80
├── nginx.conf            # Configuração otimizada do Nginx com gzip e MIME types
├── index.html            # Estrutura HTML5 semântica e acessível
├── CONTEXTO.md           # Memória de dados editoriais, planos e depoimentos
├── DOCUMENTACAO.md       # Documentação técnica aprofundada de engenharia e UI
├── PASSOS.md             # Histórico de passos concluídos e governança
├── PRODUCT.md            # Definição e princípios de produto (Impeccable schema 1)
├── PROMPT.md             # Especificação e briefing original de alta fidelidade
└── README.md             # Visão geral, instruções e documentação do repositório
```

---

## ♿ Acessibilidade, Performance e SEO

- **HTML5 Semântico:** `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, com apenas uma tag `<h1>` principal e hierarquia estrita de `<h2>` e `<h3>`.
- **WAI-ARIA Completo:** Atributos `aria-expanded`, `aria-controls`, `aria-hidden` e controle por teclado (tecla `Escape` fecha o menu e o modal Lightbox; suporte a navegação por `Tab` e `Enter`).
- **Otimização de Carregamento:** Atributo `fetchpriority="high"` no Hero e `loading="lazy"` com dimensões explícitas (`width` e `height`) em todas as imagens para evitar *Cumulative Layout Shift* (CLS).
- **Respeito ao Usuário:** Media query `@media (prefers-reduced-motion: reduce)` desativa transições e efeitos de pulso luminoso para usuários que preferem movimento reduzido.

---

## 📄 Licença

Desenvolvido para **Brasa Studio** · Todos os direitos reservados © 2026.
