<!DOCTYPE html>

<html class="dark" lang="pt-BR"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Checkout Final Profissional</title>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;700;800&amp;family=JetBrains+Mono:wght@500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface": "#131313",
                        "surface-container-highest": "#353534",
                        "secondary-fixed-dim": "#ffba38",
                        "tertiary-fixed": "#d4e3ff",
                        "on-secondary": "#432c00",
                        "surface-variant": "#353534",
                        "on-primary-container": "#521300",
                        "primary": "#ffb59e",
                        "secondary-container": "#feb300",
                        "on-primary": "#5e1700",
                        "surface-container": "#201f1f",
                        "background": "#131313",
                        "primary-fixed-dim": "#ffb59e",
                        "on-tertiary-fixed": "#001c3a",
                        "error": "#ffb4ab",
                        "on-tertiary-fixed-variant": "#004785",
                        "surface-container-high": "#2a2a2a",
                        "on-surface": "#e5e2e1",
                        "secondary-fixed": "#ffdeac",
                        "tertiary-fixed-dim": "#a5c8ff",
                        "surface-container-lowest": "#0e0e0e",
                        "inverse-on-surface": "#313030",
                        "on-secondary-fixed-variant": "#604100",
                        "charcoal-dark": "#0A0A0A",
                        "primary-container": "#ff571a",
                        "tertiary-container": "#2492ff",
                        "on-surface-variant": "#e6beb2",
                        "on-error-container": "#ffdad6",
                        "surface-elevated": "#18181B",
                        "pure-white": "#FFFFFF",
                        "secondary": "#ffd799",
                        "inverse-primary": "#ae3200",
                        "outline": "#ad897e",
                        "on-background": "#e5e2e1",
                        "surface-container-low": "#1c1b1b",
                        "on-tertiary": "#00315e",
                        "on-tertiary-container": "#002a53",
                        "on-primary-fixed": "#3a0b00",
                        "primary-fixed": "#ffdbd0",
                        "surface-bright": "#3a3939",
                        "on-primary-fixed-variant": "#852400",
                        "on-secondary-container": "#6a4800",
                        "inverse-surface": "#e5e2e1",
                        "on-secondary-fixed": "#281900",
                        "on-error": "#690005",
                        "surface-dim": "#131313",
                        "surface-tint": "#ffb59e",
                        "outline-variant": "#5c4037",
                        "tertiary": "#a5c8ff",
                        "error-container": "#93000a"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-desktop": "48px",
                        "gutter": "24px",
                        "base": "8px",
                        "margin-mobile": "16px",
                        "container-max": "1280px"
                    },
                    "fontFamily": {
                        "display-lg-mobile": ["Hanken Grotesk"],
                        "display-lg": ["Hanken Grotesk"],
                        "label-caps": ["JetBrains Mono"],
                        "body-md": ["Hanken Grotesk"],
                        "body-lg": ["Hanken Grotesk"],
                        "headline-md": ["Hanken Grotesk"]
                    },
                    "fontSize": {
                        "display-lg-mobile": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "800"}],
                        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                        "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "500"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "700"}]
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
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  
        /* Custom scrollbar and animations from DOCUMENT_15 */
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
<header class="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20">
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform" data-icon="menu">menu</button>
<h1 class="font-display-lg-mobile text-display-lg-mobile md:text-display-lg font-extrabold tracking-tighter text-primary">PIZZA NOCTURNA</h1>
</div>
<div class="flex items-center gap-6">
<span class="hidden md:flex font-label-caps text-label-caps text-primary tracking-widest uppercase">Carrinho Ativo</span>
<button class="material-symbols-outlined text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform" data-icon="shopping_cart">shopping_cart</button>
</div>
</header>
<main class="mt-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter animate-fade-in">
<!-- Left Column: Items & Totals -->
<section class="lg:col-span-7 flex flex-col gap-6">
<h2 class="font-headline-md text-headline-md text-on-surface">Seu Pedido</h2>
<!-- Pizza Items List -->
<div class="flex flex-col gap-4">
<!-- Item 1 -->
<div class="glass-panel rounded-xl p-4 flex items-center gap-4 group">
<div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="A top-down macro shot of a delicious Calabresa pizza with smoky sausage slices, melted premium mozzarella, and artisanal tomato sauce. The lighting is moody and warm, emphasizing the textures of the crispy crust and glistening oils. High-contrast culinary photography style with dark charcoal background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAx3QVJhTOPY5JSjiysXZWCCZ1x1rk4pPrT0FOQMe6fxqQWOjtXZ3hVC2M9O3adt6s4GtLWLIUEje0264G_NxKfH2FZcnGl-EpvhdYHB4LtH6EXodToClVNs9p0M1jGg4_yNyxsCSugJVvbucwAmDrsgtYq4l0wLAy6EhC8wXwfiUAZ0wHFgKL4RW7YhCdAyWSHDqzWeDdD99ysOoQV1fZ2UEH5Ixvcf6wrKQR-gq1SYdyDKn2fgRT"/>
</div>
<div class="flex-grow">
<div class="flex justify-between items-start">
<h3 class="font-headline-md text-body-lg text-on-surface">1x Calabresa</h3>
<span class="font-label-caps text-secondary-fixed-dim">R$ 49,90</span>
</div>
<p class="text-on-surface-variant text-sm mt-1">Molho artesanal, queijo premium e calabresa especial.</p>
<div class="flex items-center gap-4 mt-2">
<div class="flex items-center bg-surface-container rounded-full px-2 py-1 gap-3">
<button class="material-symbols-outlined text-secondary-container text-lg" data-icon="remove">remove</button>
<span class="font-label-caps">1</span>
<button class="material-symbols-outlined text-secondary-container text-lg" data-icon="add">add</button>
</div>
<button class="text-error font-label-caps text-[10px] uppercase tracking-wider">Remover</button>
</div>
</div>
</div>
<!-- Item 2 -->
<div class="glass-panel rounded-xl p-4 flex items-center gap-4 group">
<div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
<img class="w-full h-full object-cover" data-alt="A vibrant Portuguesa pizza featuring ham, sliced hard-boiled eggs, rings of fresh onion, and green olives. The cheese is bubbly and golden-brown. Shot in a high-end restaurant aesthetic with dramatic side-lighting and a deep black stone background. Culinary detail focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZFC4d1ZraNanz_4IZmEfdcqFNNAFJqxQqKrpi5KgQPVdTLNY3xqZlhk2yqN6QAXbqZ75rqB1vlIOoAd8uF5vRGdkTdE5y1O7oyRrgLHxlVXJ8AWXcSeQrlC6uGMmi_7I5ddd6ldWaMOZhyBBTDflTjEeldS8RaVXGZxPY9TfzNsaSk8wQ6lEYBwM0ITfaAD1ZhlDPvDM3YgTweuZLntqjRLnKlFnZDGaJ-RyrvdqVBLdqXLnX1VZS"/>
</div>
<div class="flex-grow">
<div class="flex justify-between items-start">
<h3 class="font-headline-md text-body-lg text-on-surface">1x Portuguesa</h3>
<span class="font-label-caps text-secondary-fixed-dim">R$ 57,90</span>
</div>
<p class="text-on-surface-variant text-sm mt-1">Presunto, ovos, cebola e queijo premium.</p>
<div class="flex items-center gap-4 mt-2">
<div class="flex items-center bg-surface-container rounded-full px-2 py-1 gap-3">
<button class="material-symbols-outlined text-secondary-container text-lg" data-icon="remove">remove</button>
<span class="font-label-caps">1</span>
<button class="material-symbols-outlined text-secondary-container text-lg" data-icon="add">add</button>
</div>
<button class="text-error font-label-caps text-[10px] uppercase tracking-wider">Remover</button>
</div>
</div>
</div>
</div>
<!-- Summary -->
<div class="glass-panel rounded-xl p-6 mt-4">
<div class="space-y-3">
<div class="flex justify-between text-on-surface-variant">
<span>Subtotal</span>
<span>R$ 107,80</span>
</div>
<div class="flex justify-between text-on-surface-variant">
<span>Taxa de Entrega</span>
<span class="text-secondary-fixed-dim">R$ 7,00</span>
</div>
<div class="h-px bg-outline-variant/20 my-2"></div>
<div class="flex justify-between text-on-surface font-bold text-xl">
<span>Total</span>
<span class="text-primary-fixed-dim">R$ 114,80</span>
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
<form class="flex flex-col gap-5">
<div class="space-y-1.5">
<label class="font-label-caps text-[10px] text-outline uppercase">Rua / Logradouro</label>
<input class="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none input-glow transition-all border-outline-variant/20" placeholder="Ex: Av. Paulista" type="text"/>
</div>
<div class="grid grid-cols-3 gap-4">
<div class="space-y-1.5 col-span-1">
<label class="font-label-caps text-[10px] text-outline uppercase">Número</label>
<input class="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none input-glow transition-all border-outline-variant/20" placeholder="123" type="text"/>
</div>
<div class="space-y-1.5 col-span-2">
<label class="font-label-caps text-[10px] text-outline uppercase">Bairro</label>
<input class="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none input-glow transition-all border-outline-variant/20" placeholder="Centro" type="text"/>
</div>
</div>
<div class="space-y-1.5">
<label class="font-label-caps text-[10px] text-outline uppercase">Ponto de Referência</label>
<input class="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none input-glow transition-all border-outline-variant/20" placeholder="Próximo ao mercado..." type="text"/>
</div><div class="space-y-1.5">
<label class="font-label-caps text-[10px] text-outline uppercase">Observações</label>
<textarea class="w-full bg-surface-container border border-outline-variant/30 rounded-lg p-3 text-on-surface placeholder:text-on-surface-variant/40 outline-none input-glow transition-all min-h-[100px] border-outline-variant/20 mt-1" placeholder="Ex: Sem cebola, campainha com defeito..."></textarea>
</div>
<div class="mt-4">
<button class="w-full bg-primary-container text-on-primary-fixed-variant font-bold py-4 px-6 rounded-full flex items-center justify-center gap-3 glow-button hover:opacity-90 active:scale-95 transition-all shadow-lg" type="button">
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
<footer class="mt-20 w-full py-12 px-margin-mobile bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/10">
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
<nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-safe px-4 bg-surface/90 dark:bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 shadow-lg shadow-primary-container/10 rounded-t-xl">
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary-container transition-colors active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="local_pizza">local_pizza</span>
<span class="font-label-caps text-label-caps">Menu</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary-container transition-colors active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="favorite">favorite</span>
<span class="font-label-caps text-label-caps">Favorites</span>
</a>
<a class="flex flex-col items-center justify-center text-primary font-bold active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span class="font-label-caps text-label-caps">Orders</span>
</a>
<a class="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary-container transition-colors active:scale-90 transition-transform" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-label-caps text-label-caps">Profile</span>
</a>
</nav>
<script>
        // Simple quantity micro-interaction
        document.querySelectorAll('.flex.items-center.bg-surface-container').forEach(counter => {
            const minusBtn = counter.querySelector('[data-icon="remove"]');
            const plusBtn = counter.querySelector('[data-icon="add"]');
            const label = counter.querySelector('.font-label-caps');

            plusBtn.addEventListener('click', () => {
                let val = parseInt(label.textContent);
                label.textContent = val + 1;
            });

            minusBtn.addEventListener('click', () => {
                let val = parseInt(label.textContent);
                if (val > 1) label.textContent = val - 1;
            });
        });
    </script>
</body></html>
