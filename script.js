<!DOCTYPE html>

<html class="dark" lang="pt-BR"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Sistema de Delivery Profissional - PIZZA NOCTURNA</title>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;700;800&amp;family=JetBrains+Mono:wght@500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-error-container": "#ffdad6",
                        "on-tertiary-container": "#002a53",
                        "surface-container-lowest": "#0e0e0e",
                        "secondary-fixed": "#ffdeac",
                        "on-tertiary": "#00315e",
                        "inverse-on-surface": "#313030",
                        "error": "#ffb4ab",
                        "tertiary-fixed-dim": "#a5c8ff",
                        "tertiary-fixed": "#d4e3ff",
                        "tertiary": "#a5c8ff",
                        "surface-container-highest": "#353534",
                        "surface-container-high": "#2a2a2a",
                        "outline": "#ad897e",
                        "secondary-fixed-dim": "#ffba38",
                        "on-secondary-fixed": "#281900",
                        "on-secondary-container": "#6a4800",
                        "outline-variant": "#5c4037",
                        "surface-elevated": "#18181B",
                        "surface-container-low": "#1c1b1b",
                        "surface-dim": "#131313",
                        "tertiary-container": "#2492ff",
                        "surface-bright": "#3a3939",
                        "on-primary-container": "#521300",
                        "on-surface-variant": "#e6beb2",
                        "error-container": "#93000a",
                        "inverse-primary": "#ae3200",
                        "surface-variant": "#353534",
                        "on-secondary-fixed-variant": "#604100",
                        "primary-fixed": "#ffdbd0",
                        "on-primary-fixed-variant": "#852400",
                        "primary-fixed-dim": "#ffb59e",
                        "on-primary": "#5e1700",
                        "on-secondary": "#432c00",
                        "secondary-container": "#feb300",
                        "background": "#131313",
                        "on-tertiary-fixed-variant": "#004785",
                        "on-surface": "#e5e2e1",
                        "surface": "#131313",
                        "primary-container": "#ff571a",
                        "surface-container": "#201f1f",
                        "surface-tint": "#ffb59e",
                        "on-tertiary-fixed": "#001c3a",
                        "on-error": "#690005",
                        "on-background": "#e5e2e1",
                        "inverse-surface": "#e5e2e1",
                        "pure-white": "#FFFFFF",
                        "charcoal-dark": "#0A0A0A",
                        "on-primary-fixed": "#3a0b00",
                        "secondary": "#ffd799",
                        "primary": "#ffb59e"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-desktop": "48px",
                        "container-max": "1280px",
                        "margin-mobile": "16px",
                        "gutter": "24px",
                        "base": "8px"
                    },
                    "fontFamily": {
                        "headline-md": ["Hanken Grotesk"],
                        "body-md": ["Hanken Grotesk"],
                        "body-lg": ["Hanken Grotesk"],
                        "display-lg-mobile": ["Hanken Grotesk"],
                        "label-caps": ["JetBrains Mono"],
                        "display-lg": ["Hanken Grotesk"]
                    },
                    "fontSize": {
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "display-lg-mobile": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "800"}],
                        "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "500"}],
                        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800"}]
                    }
                },
            },
        }
    </script>
<style>
        body {
            background-color: #0A0A0A;
            color: #e5e2e1;
            -webkit-font-smoothing: antialiased;
            min-height: max(884px, 100dvh);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(24, 24, 27, 0.7);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(173, 137, 126, 0.1);
        }
        .glow-button {
            box-shadow: 0 4px 20px rgba(255, 87, 26, 0.4);
        }
        .input-glow:focus {
            box-shadow: 0 0 10px rgba(255, 181, 158, 0.3);
            border-color: #ffb59e;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fadeIn 0.2s ease-out forwards;
        }
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #5c4037;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-track {
            background: #131313;
        }
    </style>
</head>
<body class="font-body-md text-body-md overflow-x-hidden pb-32">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20">
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-primary hover:opacity-80 transition-opacity active:scale-95" data-icon="menu">menu</button>
<h1 class="font-display-lg-mobile text-display-lg-mobile md:text-display-lg font-extrabold tracking-tighter text-primary">PIZZA NOCTURNA</h1>
</div>
<div class="flex items-center gap-6">
<span class="hidden md:flex font-label-caps text-label-caps text-primary tracking-widest uppercase">Checkout Profissional</span>
<div class="relative">
<button class="material-symbols-outlined text-primary hover:opacity-80 transition-opacity active:scale-95" data-icon="shopping_cart">shopping_cart</button>
<span class="absolute -top-2 -right-2 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center hidden" id="cart-count">0</span>
</div>
</div>
</header>
<main class="mt-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter animate-fade-in">
<!-- Left Column: Items List -->
<section class="lg:col-span-7 flex flex-col gap-6">
<h2 class="font-headline-md text-headline-md text-on-surface">Seu Pedido</h2>
<div class="flex flex-col gap-4" id="cart-items-container">
<!-- Items will be injected here by JS -->
<div class="text-on-surface-variant/60 text-center py-12 glass-panel rounded-xl">
<p>Seu carrinho está vazio.</p>
</div>
</div>
<!-- Summary Table -->
<div class="glass-panel rounded-xl p-6">
<div class="space-y-3">
<div class="flex justify-between text-on-surface-variant">
<span>Subtotal</span>
<span id="summary-subtotal">R$ 0,00</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>Taxa de Entrega</span>
<span class="text-secondary-fixed-dim" id="summary-delivery">R$ 7,00</span>
</div>
<div class="h-px bg-outline-variant/20 my-2"></div>
<div class="flex justify-between text-on-surface font-bold text-xl">
<span>Total</span>
<span class="text-primary-fixed-dim" id="summary-total">R$ 7,00</span>
</div>
</div>
</div>
</section>
<!-- Right Column: Delivery Form -->
<aside class="lg:col-span-5 flex flex-col gap-6">
<div class="glass-panel rounded-2xl p-6 sticky top-24">
<div class="flex items-center gap-2 mb-6">
<span class="material-symbols-outlined text-primary" data-icon="local_shipping">local_shipping</span>
<h2 class="font-headline-md text-headline-md text-on-surface">Endereço de Entrega</h2>
</div>
<form class="flex flex-col gap-5" id="delivery-form">
<div class="space-y-1.5">
<label class="font-label-caps text-[10px] text-outline uppercase">Rua / Logradouro</label>
<input class="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none input-glow transition-all border-outline-variant/20" id="form-street" placeholder="Ex: Av. Paulista" required="" type="text"/>
</div>
<div class="grid grid-cols-3 gap-4">
<div class="space-y-1.5 col-span-1">
<label class="font-label-caps text-[10px] text-outline uppercase">Número</label>
<input class="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none input-glow transition-all border-outline-variant/20" id="form-number" placeholder="123" required="" type="text"/>
</div>
<div class="space-y-1.5 col-span-2">
<label class="font-label-caps text-[10px] text-outline uppercase">Bairro</label>
<input class="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none input-glow transition-all border-outline-variant/20" id="form-neighborhood" placeholder="Centro" required="" type="text"/>
</div>
</div>
<div class="space-y-1.5">
<label class="font-label-caps text-[10px] text-outline uppercase">Ponto de Referência</label>
<input class="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none input-glow transition-all border-outline-variant/20" id="form-reference" placeholder="Próximo ao mercado..." type="text"/>
</div>
<div class="space-y-1.5">
<label class="font-label-caps text-[10px] text-outline uppercase">Observações</label>
<textarea class="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none input-glow transition-all min-h-[100px] border-outline-variant/20 mt-1" id="form-observations" placeholder="Ex: Sem cebola, campainha com defeito..."></textarea>
</div>
<div class="mt-4">
<button class="w-full bg-primary-container text-on-primary-fixed-variant font-bold py-4 px-6 rounded-full flex items-center justify-center gap-3 glow-button hover:opacity-90 active:scale-95 transition-all shadow-lg" id="btn-finish" type="submit">
<span class="material-symbols-outlined" data-icon="chat">chat</span>
<span class="font-headline-md text-body-lg">Finalizar Pedido via WhatsApp</span>
</button>
<p class="text-center text-[10px] text-on-surface-variant/60 font-label-caps uppercase mt-4 tracking-widest">Atendimento 24h para noites sem sono</p>
</div>
</form>
</div>
</aside>
</main>
<!-- Footer -->
<footer class="mt-20 w-full py-12 px-margin-mobile bg-surface-container-lowest border-t border-outline-variant/10">
<div class="flex flex-col items-center gap-base max-w-container-max mx-auto text-center">
<h2 class="font-display-lg text-display-lg text-primary mb-4">PIZZA NOCTURNA</h2>
<div class="flex flex-wrap justify-center gap-8 mb-8">
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Our Story</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Store Locator</a>
<a class="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
</div>
<p class="font-body-md text-body-md text-on-surface-variant opacity-60">© 2024 PIZZA NOCTURNA. CRAFTED FOR THE NIGHT.</p>
</div>
</footer>
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-safe px-4 bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 shadow-lg rounded-t-xl">
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary-container transition-colors active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="local_pizza">local_pizza</span>
<span class="font-label-caps text-label-caps">Menu</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary-container transition-colors active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="favorite">favorite</span>
<span class="font-label-caps text-label-caps">Favoritos</span>
</a>
<a class="flex flex-col items-center justify-center text-primary font-bold active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span class="font-label-caps text-label-caps">Pedidos</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary-container transition-colors active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-label-caps text-label-caps">Perfil</span>
</a>
</nav>
<script>
        // Data derived from user Document_18 and source professional screen
        const menuItems = [
            {
                id: 'p1',
                name: 'Pizza Calabresa',
                price: 49.90,
                desc: 'Molho artesanal, queijo premium e calabresa especial.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAx3QVJhTOPY5JSjiysXZWCCZ1x1rk4pPrT0FOQMe6fxqQWOjtXZ3hVC2M9O3adt6s4GtLWLIUEje0264G_NxKfH2FZcnGl-EpvhdYHB4LtH6EXodToClVNs9p0M1jGg4_yNyxsCSugJVvbucwAmDrsgtYq4l0wLAy6EhC8wXwfiUAZ0wHFgKL4RW7YhCdAyWSHDqzWeDdD99ysOoQV1fZ2UEH5Ixvcf6wrKQR-gq1SYdyDKn2fgRT'
            },
            {
                id: 'p2',
                name: 'Pizza Portuguesa',
                price: 57.90,
                desc: 'Presunto, ovos, cebola e queijo premium.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZFC4d1ZraNanz_4IZmEfdcqFNNAFJqxQqKrpi5KgQPVdTLNY3xqZlhk2yqN6QAXbqZ75rqB1vlIOoAd8uF5vRGdkTdE5y1O7oyRrgLHxlVXJ8AWXcSeQrlC6uGMmi_7I5ddd6ldWaMOZhyBBTDflTjEeldS8RaVXGZxPY9TfzNsaSk8wQ6lEYBwM0ITfaAD1ZhlDPvDM3YgTweuZLntqjRLnKlFnZDGaJ-RyrvdqVBLdqXLnX1VZS'
            },
            {
                id: 'p3',
                name: 'Pizza Frango Catupiry',
                price: 54.90,
                desc: 'Frango desfiado temperado com catupiry cremoso.',
                img: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1200&auto=format&fit=crop'
            }
        ];

        // Initial Cart (simulating persistence or initial state)
        let cart = [
            { id: 'p1', qty: 1 },
            { id: 'p2', qty: 1 }
        ];
        
        const deliveryFee = 7.00;

        function updateUI() {
            const container = document.getElementById('cart-items-container');
            const cartCount = document.getElementById('cart-count');
            
            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="text-on-surface-variant/60 text-center py-12 glass-panel rounded-xl">
                        <p>Seu carrinho está vazio.</p>
                    </div>
                `;
                cartCount.classList.add('hidden');
                document.getElementById('summary-subtotal').textContent = 'R$ 0,00';
                document.getElementById('summary-total').textContent = 'R$ 7,00';
                return;
            }

            cartCount.classList.remove('hidden');
            cartCount.textContent = cart.reduce((acc, item) => acc + item.qty, 0);

            container.innerHTML = '';
            let subtotal = 0;

            cart.forEach((cartItem, index) => {
                const product = menuItems.find(m => m.id === cartItem.id);
                if (!product) return;
                
                const itemTotal = product.price * cartItem.qty;
                subtotal += itemTotal;

                const itemHtml = `
                    <div class="glass-panel rounded-xl p-4 flex items-center gap-4 group animate-fade-in">
                        <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img class="w-full h-full object-cover" src="${product.img}" alt="${product.name}"/>
                        </div>
                        <div class="flex-grow">
                            <div class="flex justify-between items-start">
                                <h3 class="font-headline-md text-body-lg text-on-surface">${cartItem.qty}x ${product.name}</h3>
                                <span class="font-label-caps text-secondary-fixed-dim">R$ ${itemTotal.toFixed(2)}</span>
                            </div>
                            <p class="text-on-surface-variant text-sm mt-1">${product.desc}</p>
                            <div class="flex items-center gap-4 mt-2">
                                <div class="flex items-center bg-surface-container rounded-full px-2 py-1 gap-3">
                                    <button class="material-symbols-outlined text-secondary-container text-lg" onclick="changeQty(${index}, -1)">remove</button>
                                    <span class="font-label-caps">${cartItem.qty}</span>
                                    <button class="material-symbols-outlined text-secondary-container text-lg" onclick="changeQty(${index}, 1)">add</button>
                                </div>
                                <button class="text-error font-label-caps text-[10px] uppercase tracking-wider hover:underline" onclick="removeItem(${index})">Remover</button>
                            </div>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', itemHtml);
            });

            document.getElementById('summary-subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
            document.getElementById('summary-total').textContent = `R$ ${(subtotal + deliveryFee).toFixed(2)}`;
        }

        function changeQty(index, delta) {
            cart[index].qty += delta;
            if (cart[index].qty < 1) cart[index].qty = 1;
            updateUI();
        }

        function removeItem(index) {
            cart.splice(index, 1);
            updateUI();
        }

        // Handle WhatsApp Finish
        document.getElementById('delivery-form').addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (cart.length === 0) {
                alert("Adicione itens ao carrinho antes de finalizar!");
                return;
            }

            const street = document.getElementById('form-street').value;
            const number = document.getElementById('form-number').value;
            const neighborhood = document.getElementById('form-neighborhood').value;
            const reference = document.getElementById('form-reference').value;
            const observations = document.getElementById('form-observations').value;

            let orderText = "🍕 *NOVO PEDIDO - PIZZA NOCTURNA*\n\n";
            orderText += "*ITENS:*\n";
            
            let total = 0;
            cart.forEach(cartItem => {
                const product = menuItems.find(m => m.id === cartItem.id);
                const itemTotal = product.price * cartItem.qty;
                total += itemTotal;
                orderText += `• ${cartItem.qty}x ${product.name} - R$ ${itemTotal.toFixed(2)}\n`;
            });

            orderText += `\n*RESUMO:*\nSubtotal: R$ ${total.toFixed(2)}\nTaxa de Entrega: R$ ${deliveryFee.toFixed(2)}\n*TOTAL: R$ ${(total + deliveryFee).toFixed(2)}*\n\n`;
            orderText += `*ENTREGA:*\n📍 ${street}, ${number} - ${neighborhood}\n`;
            if (reference) orderText += `🗺️ Ref: ${reference}\n`;
            if (observations) orderText += `\n*OBSERVAÇÕES:* ${observations}`;

            const phone = "5511976794749"; // From Document_18
            const encodedText = encodeURIComponent(orderText);
            window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
        });

        // Initialize UI
        updateUI();
    </script>
</body></html>
