// Dados iniciais mockados (Simulação de Banco de Dados)
let pedidos = [
    { id: 1024, itens: "1x Margherita Premium, 1x Coca-Cola", endereco: "Av. Paulista, 1000 - Apto 42", total: 51.90, status: "Pendente" },
    { id: 1023, itens: "2x Pepperoni Especial", endereco: "Rua Augusta, 540", total: 99.80, status: "Preparando" }
];

let cupons = [
    { codigo: "PREMIUM10", valor: 10.00, ativo: true },
    { codigo: "BOASVINDAS", valor: 5.00, ativo: true },
    { codigo: "PIZZAFREE", valor: 15.00, ativo: false }
];

// Reutilizando os mesmos produtos da aba do cliente para sincronização conceitual
let produtosAdmin = [
    { id: 1, nome: "Margherita Premium", preco: 45.90, imagem: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=500" },
    { id: 2, nome: "Pepperoni Especial", preco: 49.90, imagem: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500" },
    { id: 3, nome: "Quatro Queijos di Parma", preco: 54.90, imagem: "https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=500" }
];

// --- 1. CONTROLE DE AUTENTICAÇÃO (LOGIN) ---
const formLogin = document.getElementById("form-login");
const telaLogin = document.getElementById("tela-login");
const painelPrincipal = document.getElementById("painel-principal");
const erroLogin = document.getElementById("erro-login");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.getElementById("login-usuario").value;
    const senha = document.getElementById("login-senha").value;

    if (usuario === "admin" && senha === "123456") {
        telaLogin.classList.add("hidden");
        painelPrincipal.classList.remove("hidden");
        inicializarPainel();
    } else {
        erroLogin.classList.remove("hidden");
    }
});

document.getElementById("btn-logout").addEventListener("click", () => {
    window.location.reload();
});

// --- 2. NAVEGAÇÃO DE ABAS DINÂMICA ---
const botoesMenu = document.querySelectorAll("#menu-navegacao button");
const secoesAbas = document.querySelectorAll("main > section");

botoesMenu.forEach(botao => {
    botao.addEventListener("click", () => {
        const abaAlvo = botao.getAttribute("data-id") || botao.getAttribute("data-aba");

        // Altera visual dos botões do menu
        botoesMenu.forEach(b => {
            b.className = "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-left text-gray-400 hover:bg-gray-800 hover:text-white";
        });
        botao.className = "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm text-left bg-red-600 text-white";

        // Altera visibilidade das seções
        secoesAbas.forEach(secao => {
            if (secao.id === `aba-${abaAlvo}`) {
                secao.classList.remove("hidden");
            } else {
                secao.classList.add("hidden");
            }
        });
    });
});

// --- 3. INICIALIZAÇÃO DE COMPONENTES ---
function inicializarPainel() {
    renderizarPedidos();
    renderizarProdutos();
    renderizarCupons();
    inicializarGraficos();
}

// --- 4. ENGINE DE PEDIDOS ---
function renderizarPedidos() {
    const tabela = document.getElementById("tabela-pedidos");
    tabela.innerHTML = "";
    
    pedidos.forEach(p => {
        const tr = document.createElement("tr");
        tr.className = "border-b hover:bg-gray-50/80 transition-all";
        
        let badgeColor = p.status === "Pendente" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700";
        if (p.status === "Concluído") badgeColor = "bg-green-100 text-green-700";

        tr.innerHTML = `
            <td class="p-4 font-bold text-gray-900">#${p.id}</td>
            <td class="p-4 font-medium">${p.itens}</td>
            <td class="p-4 text-xs text-gray-500 max-w-xs truncate">${p.endereco}</td>
            <td class="p-4 font-bold text-gray-900">R$ ${p.total.toFixed(2)}</td>
            <td class="p-4"><span class="px-2.5 py-1 rounded-full text-xs font-semibold ${badgeColor}">${p.status}</span></td>
            <td class="p-4 text-right space-x-1">
                ${p.status !== "Concluído" ? `<button onclick="avancarStatus(${p.id})" class="bg-gray-900 hover:bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded-lg transition-all"><i class="fa-solid fa-arrow-right"></i></button>` : ""}
            </td>
        `;
        tabela.appendChild(tr);
    });
    document.getElementById("badge-pedidos").textContent = pedidos.filter(p => p.status !== "Concluído").length;
}

window.avancarStatus = (id) => {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido.status === "Pendente") pedido.status = "Preparando";
    else if (pedido.status === "Preparando") pedido.status = "Concluído";
    renderizarPedidos();
};

// --- 5. ENGINE DE PRODUTOS ---
function renderizarProdutos() {
    const grid = document.getElementById("grid-admin-produtos");
    grid.innerHTML = "";

    produtosAdmin.forEach(prod => {
        const div = document.createElement("div");
        div.className = "bg-white p-4 rounded-2xl border shadow-sm flex items-center gap-4";
        div.innerHTML = `
            <img src="${prod.imagem}" class="w-16 h-16 rounded-xl object-cover">
            <div class="flex-1">
                <h4 class="font-bold text-gray-900 text-sm">${prod.nome}</h4>
                <p class="text-sm font-semibold text-red-600 mt-0.5">R$ ${prod.preco.toFixed(2)}</p>
            </div>
            <button onclick="deletarProduto(${prod.id})" class="text-gray-400 hover:text-red-500 p-2"><i class="fa-solid fa-trash-can"></i></button>
        `;
        grid.appendChild(div);
    });
}

document.getElementById("btn-novo-produto").addEventListener("click", () => {
    const nome = prompt("Nome da Pizza:");
    const preco = parseFloat(prompt("Preço (ex: 45.90):"));
    if (nome && preco) {
        produtosAdmin.push({
            id: Date.now(),
            nome,
            preco,
            imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500"
        });
        renderizarProdutos();
    }
});

window.deletarProduto = (id) => {
    produtosAdmin = produtosAdmin.filter(p => p.id !== id);
    renderizarProdutos();
};

// --- 6. ENGINE DE CUPONS ---
const formCupom = document.getElementById("form-cupom");
formCupom.addEventListener("submit", (e) => {
    e.preventDefault();
    const codigo = document.getElementById("cupom-codigo").value.trim().toUpperCase();
    const valor = parseFloat(document.getElementById("cupom-valor").value);

    if (codigo && valor) {
        cupons.push({ codigo, valor, ativo: true });
        formCupom.reset();
        renderizarCupons();
    }
});

function renderizarCupons() {
    const tabela = document.getElementById("tabela-cupons");
    tabela.innerHTML = "";

    cupons.forEach(cupom => {
        const tr = document.createElement("tr");
        tr.className = "border-b hover:bg-gray-50/80 transition-all";
        tr.innerHTML = `
            <td class="p-4 font-mono font-bold text-gray-900">${cupom.codigo}</td>
            <td class="p-4 font-semibold text-green-600">R$ ${cupom.valor.toFixed(2)}</td>
            <td class="p-4">
                <span class="px-2 py-0.5 text-xs font-medium rounded-full ${cupom.ativo ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}">
                    ${cupom.ativo ? 'Ativo' : 'Inativo'}
                </span>
            </td>
            <td class="p-4 text-right">
                <button onclick="alternarCupom('${cupom.codigo}')" class="text-xs font-semibold ${cupom.ativo ? 'text-red-500 hover:text-red-700' : 'text-green-500 hover:text-green-700'}">
                    ${cupom.ativo ? 'Desativar' : 'Ativar'}
                </button>
            </td>
        `;
        tabela.appendChild(tr);
    });
    document.getElementById("dash-total-cupons").textContent = cupons.filter(c => c.ativo).length;
}

window.alternarCupom = (codigo) => {
    const cupom = cupons.find(c => c.codigo === codigo);
    cupom.ativo = !cupom.ativo;
    renderizarCupons();
};

// --- 7. ANALYTICS (GRÁFICOS CHART.JS) ---
function inicializarGraficos() {
    // Gráfico de Linhas (Faturamento Mensal)
    const ctxVendas = document.getElementById('chart-vendas').getContext('2d');
    new Chart(ctxVendas, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Faturamento (R$)',
                data: [12000, 14500, 13200, 16800, 19400, 22000],
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                tension: 0.3,
                fill: true
            }]
        },
        options: { responsive: true }
    });

    // Gráfico de Pizza/Donut (Mais vendidos)
    const ctxProdutos = document.getElementById('chart-produtos').getContext('2d');
    new Chart(ctxProdutos, {
        type: 'doughnut',
        data: {
            labels: ['Margherita', 'Pepperoni', '4 Queijos', 'Frango/Catupiry'],
            datasets: [{
                data: [45, 30, 15, 10],
                backgroundColor: ['#dc2626', '#f59e0b', '#3b82f6', '#10b981']
            }]
        },
        options: { responsive: true }
    });
}
