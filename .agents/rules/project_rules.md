# Regras do Projeto Brasa Studio

Este arquivo define as diretrizes perpétuas de memória operacional para o projeto Brasa Studio.

## 1. Atualização Contínua de Documentação (Obrigatória)
Ao final de **CADA** feat, fix, etapa ou alteração realizada:
- Atualizar imediatamente `DOCUMENTACAO.md` com detalhes técnicos e novos componentes.
- Atualizar `PASSOS.md`, marcando os passos concluídos com `[x]` e mantendo a lista em ordem de prioridade.
- Atualizar `CONTEXTO.md` caso novos dados, tokens ou ativos tenham sido introduzidos.

## 2. Controle Rigoroso de Passos
- **REGRA CRÍTICA:** Só inicie o próximo passo quando o usuário solicitar expressamente ("só inicie o próximo passo quando eu pedir").
- Aguarde a validação do usuário antes de avançar para a etapa seguinte.

## 3. Mensagens de Commit Semântico
- Ao final de **CADA** implementação, feat, ajuste ou correção, forneça sempre no final da resposta um bloco de texto com a sugestão de commit semântico pronto (formato Conventional Commits, ex: `feat: ...`, `fix: ...`, `docs: ...`).

## 4. Execução 100% no Docker
- Todo o ciclo de execução, desenvolvimento e visualização da landing page deve rodar 100% em contêineres Docker.
- Mantenha `docker-compose.yml` e `Dockerfile` sempre funcionais e validados.

## 5. Fidelidade Estética e Visual
- Fundo ultra-escuro (#050505), cartões com profundidade (#0B0B0B / #101010), bordas sutis (#222222), texto suave (#F5F3EF) e destaque âmbar/laranja (#FF4B19).
- Tipografia editorial geométrica (Manrope/Inter).
- Fotografia cinematográfica com iluminação baixa, tons quentes e acabamento artesanal de luxo.
