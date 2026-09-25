// ⚠️ Altere para a URL de produção da sua API na Vercel após o deploy do backend
const API_URL = 'https://SEU-BACKEND.vercel.app/api/hotwheels';

const grid = document.getElementById('grid');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const emptyEl = document.getElementById('empty');

function formatarPreco(valor) {
  const numero = Number(valor) || 0;
  return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function criarCard(item) {
  const card = document.createElement('div');
  card.className = 'card';

  const imagemFallback = 'https://via.placeholder.com/300x200?text=Sem+Foto';

  card.innerHTML = `
    <div class="card-img">
      <img src="${item.foto}" alt="${item.marca} ${item.modelo}" onerror="this.onerror=null;this.src='${imagemFallback}'">
    </div>
    <div class="card-body">
      <span class="card-marca">${item.marca}</span>
      <h3 class="card-modelo">${item.modelo}</h3>
      <p class="card-preco">${formatarPreco(item.preco)}</p>
    </div>
  `;

  return card;
}

async function carregarColecao() {
  try {
    const resposta = await fetch(API_URL);

    if (!resposta.ok) {
      throw new Error(`Erro na API: ${resposta.status}`);
    }

    const dados = await resposta.json();

    loadingEl.classList.add('hidden');

    if (!Array.isArray(dados) || dados.length === 0) {
      emptyEl.classList.remove('hidden');
      return;
    }

    const fragmento = document.createDocumentFragment();
    dados.forEach((item) => fragmento.appendChild(criarCard(item)));
    grid.appendChild(fragmento);
  } catch (err) {
    loadingEl.classList.add('hidden');
    errorEl.classList.remove('hidden');
    console.error('Falha ao carregar a coleção:', err);
  }
}

carregarColecao();
