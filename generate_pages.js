const fs = require('fs');

const pages = {
    'about.html': {title: '關於我們', h1: '關於 AURA', content: '<p class="detail-desc" style="max-width:800px; margin:0 auto; text-align:center;">AURA 是一個致力於現代優雅與永恆風格的頂級男裝品牌。我們秉持著優質工藝與當代設計的原則，為有品味的男士提供精選的服飾與配件。</p>'},
    'casual.html': {title: '休閒服飾', h1: '休閒服飾', content: '<div id="casual-products" class="product-grid"></div>'},
    'formal.html': {title: '正式服飾', h1: '正式服飾', content: '<div id="formal-products" class="product-grid"></div>'},
    'jewelry.html': {title: '飾品', h1: '飾品', content: '<div id="jewelry-products" class="product-grid"></div>'},
    'accessories.html': {title: '配件', h1: '配件', content: '<div id="accessories-products" class="product-grid"></div>'},
    'others.html': {title: '其它類', h1: '其它類', content: '<div id="others-products" class="product-grid"></div>'},
    'contact.html': {title: '聯絡我們', h1: '聯絡我們', content: `
        <form id="contactForm" class="contact-form animate-fade-up">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="您的姓名" required>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="您的電子郵件" required>
            </div>
            <div class="form-group">
                <textarea class="form-control" placeholder="您的訊息" required></textarea>
            </div>
            <button type="submit" class="btn" style="width: 100%;">發送訊息</button>
        </form>
    `},
    'product.html': {title: '產品詳情', h1: '', content: '<div id="product-detail-container" class="product-detail"></div>'}
};

const template = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | AURA 頂級男裝</title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
    <header>
        <nav class="nav-container">
            <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt="AURA Logo">
            </a>
            <div class="nav-links">
                <a href="index.html">首頁</a>
                <a href="about.html">公司簡介</a>
                <a href="casual.html">休閒服飾</a>
                <a href="formal.html">正式服飾</a>
                <a href="jewelry.html">飾品</a>
                <a href="accessories.html">配件</a>
                <a href="others.html">其它類</a>
                <a href="contact.html">聯絡我們</a>
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
            <p>&copy; 2026 AURA 頂級男裝. 保留所有權利。</p>
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
