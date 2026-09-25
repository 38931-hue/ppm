# Contexto — hotwheels-frontend

## Objetivo
Exibir, em uma página estática, a listagem visual da coleção de Hot Wheels
cadastrada no backend (`hotwheels-api`), consumindo a API via fetch.

## Stack utilizada
- HTML + CSS + JavaScript puro (sem frameworks e sem build step)
- Deploy: Vercel (site estático)

## Status atual
- Página de listagem implementada com grid de cards responsivo (foto, marca,
  modelo e preço formatado em R$).
- Estados de carregando, coleção vazia e erro de conexão implementados.
- Identidade visual em laranja/azul/amarelo, inspirada nas cores da marca
  (sem uso de logos ou marcas registradas).
- Pendente: apontar `API_URL` em `js/script.js` para o domínio real do
  backend publicado, criar repositório GitHub e publicar na Vercel.

## Decisões técnicas
- Optou-se por JS puro (sem framework) por se tratar de uma tela única de
  listagem, mantendo o projeto leve e sem etapa de build.
- `onerror` na tag `<img>` troca automaticamente para uma imagem placeholder
  caso a URL da foto cadastrada esteja quebrada.

## URLs
- Repositório GitHub: _a definir após criação_
- Domínio Vercel (produção): _a definir após deploy_
- URL da API consumida: _atualizar em js/script.js e aqui após o deploy do backend_

## Pendências / problemas encontrados
- Nenhum problema até o momento. Próximo passo: publicar o backend, copiar a
  URL de produção para `API_URL` e então publicar o frontend.
