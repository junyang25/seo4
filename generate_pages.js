const fs = require('fs');

const pages = {
    'about.html': {title: 'About Us', h1: 'About AURA', content: '<p class="detail-desc" style="max-width:800px; margin:0 auto; text-align:center;">AURA is a premium menswear brand dedicated to modern elegance and timeless style. Founded on the principles of quality craftsmanship and contemporary design, we offer a curated selection of apparel and accessories for the discerning gentleman.</p>'},
    'casual.html': {title: 'Casual Wear', h1: '休閒服飾 (Casual Wear)', content: '<div id="casual-products" class="product-grid"></div>'},
    'formal.html': {title: 'Formal Wear', h1: '正式服飾 (Formal Wear)', content: '<div id="formal-products" class="product-grid"></div>'},
    'jewelry.html': {title: 'Jewelry', h1: '飾品 (Jewelry)', content: '<div id="jewelry-products" class="product-grid"></div>'},
    'accessories.html': {title: 'Accessories', h1: '配件 (Accessories)', content: '<div id="accessories-products" class="product-grid"></div>'},
    'others.html': {title: 'Others', h1: '其它類 (Others)', content: '<div id="others-products" class="product-grid"></div>'},
    'contact.html': {title: 'Contact Us', h1: '聯絡我們 (Contact Us)', content: `
        <form id="contactForm" class="contact-form animate-fade-up">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name" required>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Your Email" required>
            </div>
            <div class="form-group">
                <textarea class="form-control" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="btn" style="width: 100%;">Send Message</button>
        </form>
    `},
    'product.html': {title: 'Product Details', h1: '', content: '<div id="product-detail-container" class="product-detail"></div>'}
};

const template = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | AURA Premium Menswear</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <header>
        <nav class="nav-container">
            <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="AURA Logo">
            </a>
            <div class="nav-links">
                <a href="index.html">首頁 (Home)</a>
                <a href="about.html">公司簡介 (About)</a>
                <a href="casual.html">休閒服飾 (Casual)</a>
                <a href="formal.html">正式服飾 (Formal)</a>
                <a href="jewelry.html">飾品 (Jewelry)</a>
                <a href="accessories.html">配件 (Accessories)</a>
                <a href="others.html">其它類 (Others)</a>
                <a href="contact.html">聯絡我們 (Contact)</a>
            </div>
        </nav>
    </header>

    <main>
        <div class="page-header">
            <h1 class="animate-fade-up">{h1}</h1>
        </div>
        <section class="container">
            {content}
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2026 AURA Menswear. All rights reserved.</p>
        </div>
    </footer>

    <script src="assets/js/data.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>`;

for (const [filename, data] of Object.entries(pages)) {
    let html = template.replace('{title}', data.title).replace('{content}', data.content);
    if (!data.h1) {
        html = html.replace('<div class="page-header">\n            <h1 class="animate-fade-up">{h1}</h1>\n        </div>', '');
    } else {
        html = html.replace('{h1}', data.h1);
    }
    fs.writeFileSync(filename, html);
}
