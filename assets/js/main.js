// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 17, 21, 0.9)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(15, 17, 21, 0.7)';
        header.style.boxShadow = 'none';
    }
});

// Render Products Function
function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(p => p.category === category);
    }

    container.innerHTML = filteredProducts.map(product => `
        <a href="product.html?id=${product.id}" class="product-card animate-fade-up">
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-category">${product.categoryName}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
            </div>
        </a>
    `).join('');
}

// Render Product Detail
function renderProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const container = document.getElementById('product-detail-container');
    
    if (!container) return;

    const product = products.find(p => p.id === productId);

    if (product) {
        document.title = `${product.name} | AURA 頂級男裝`;
        container.innerHTML = `
            <div class="detail-img-wrapper animate-fade-up">
                <img src="${product.image}" alt="${product.name}" class="detail-img">
            </div>
            <div class="detail-info animate-fade-up" style="animation-delay: 0.2s">
                <span class="product-category" style="font-size: 1rem; margin-bottom: 1rem;">${product.categoryName}</span>
                <h1>${product.name}</h1>
                <div class="detail-price">$${product.price}</div>
                <p class="detail-desc">${product.description}</p>
                <button class="btn" onclick="alert('已加入購物車！')">加入購物車</button>
            </div>
        `;
    } else {
        container.innerHTML = `<h1>找不到商品</h1><p>您尋找的商品不存在。</p><a href="index.html" class="btn" style="margin-top: 20px;">返回首頁</a>`;
    }
}

// Initialize Pages
document.addEventListener('DOMContentLoaded', () => {
    // Current page path
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path.endsWith('/')) {
        renderProducts('all', 'home-products');
    } else if (path.includes('casual.html')) {
        renderProducts('casual', 'casual-products');
    } else if (path.includes('formal.html')) {
        renderProducts('formal', 'formal-products');
    } else if (path.includes('jewelry.html')) {
        renderProducts('jewelry', 'jewelry-products');
    } else if (path.includes('accessories.html')) {
        renderProducts('accessories', 'accessories-products');
    } else if (path.includes('others.html')) {
        renderProducts('others', 'others-products');
    } else if (path.includes('product.html')) {
        renderProductDetail();
    }

    // Contact form
    const form = document.getElementById('contactForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('訊息發送成功！我們將盡快與您聯絡。');
            form.reset();
        });
    }
});
