const products = [
    {
        id: 'casual-1',
        name: '頂級經典 T 恤',
        category: 'casual',
        categoryName: '休閒服飾',
        price: 45,
        image: 'assets/images/casual_tshirt.png',
        description: '採用最高級的重磅棉質打造，我們的經典 T 恤提供無與倫比的舒適度與極簡風格。非常適合日常穿搭。'
    },
    {
        id: 'casual-2',
        name: '原色鑲邊丹寧牛仔褲',
        category: 'casual',
        categoryName: '休閒服飾',
        price: 185,
        image: 'assets/images/casual_jeans.png',
        description: '正宗原色鑲邊丹寧布料，剪裁出現代完美版型。這些牛仔褲將會優雅地陳化，創造出專屬於您生活方式的獨特洗色。'
    },
    {
        id: 'casual-3',
        name: '必備套頭連帽衫',
        category: 'casual',
        categoryName: '休閒服飾',
        price: 95,
        image: 'assets/images/casual_hoodie.png',
        description: '對休閒必備單品的昇華詮釋。我們的重磅棉質連帽衫具有寬鬆的版型和極其柔軟的刷毛內裡。'
    },
    {
        id: 'casual-4',
        name: '奢華珠地網眼 Polo 衫',
        category: 'casual',
        categoryName: '休閒服飾',
        price: 75,
        image: 'assets/images/casual_polo.png',
        description: '以超柔軟、透氣的珠地網眼布料與能全天保持形狀的精緻領口重新演繹經典 Polo 衫。'
    },
    {
        id: 'formal-1',
        name: '炭灰色羊毛西裝',
        category: 'formal',
        categoryName: '正式服飾',
        price: 650,
        image: 'assets/images/formal_suit.png',
        description: '剪裁的傑作。這套兩件式西裝由頂級義大利羊毛製成，具有現代、立體的輪廓。'
    },
    {
        id: 'formal-2',
        name: '挺括白色正裝襯衫',
        category: 'formal',
        categoryName: '正式服飾',
        price: 110,
        image: 'assets/images/formal_shirt.png',
        description: '正裝的基礎。由高支數埃及棉量身定制，帶來奢華觸感與完美無瑕的外觀。'
    },
    {
        id: 'formal-3',
        name: '海軍藍訂製長褲',
        category: 'formal',
        categoryName: '正式服飾',
        price: 140,
        image: 'assets/images/formal_trousers.png',
        description: '百搭且精緻的正裝長褲，具有俐落的垂墜感、平口設計與精準的縫線。'
    },
    {
        id: 'formal-4',
        name: '經典海軍藍西裝外套',
        category: 'formal',
        categoryName: '正式服飾',
        price: 320,
        image: 'assets/images/formal_blazer.png',
        description: '衣櫥中不可或缺的標誌性單品。我們的海軍藍西裝外套提供卓越的多功能性，以銳利的線條和高級細節提升任何裝扮。'
    },
    {
        id: 'jewelry-1',
        name: '計時碼錶銀色腕錶',
        category: 'jewelry',
        categoryName: '飾品',
        price: 450,
        image: 'assets/images/jewelry_watch.png',
        description: '結合堅固工程設計與精緻美學的宣言時計。配備精準的自動機芯與藍寶石水晶玻璃。'
    },
    {
        id: 'jewelry-2',
        name: '極簡鈦金屬戒指',
        category: 'jewelry',
        categoryName: '飾品',
        price: 85,
        image: 'assets/images/jewelry_ring.png',
        description: '時尚、耐用且非常輕盈。這款鈦金屬戒指為您的日常造型提供現代、低調的風格。'
    },
    {
        id: 'jewelry-3',
        name: '編織皮革與精鋼手鍊',
        category: 'jewelry',
        categoryName: '飾品',
        price: 65,
        image: 'assets/images/jewelry_bracelet.png',
        description: '頂級編織皮革與拋光不鏽鋼五金在這款充滿陽剛氣息的當代配件中相遇。'
    },
    {
        id: 'acc-1',
        name: '全粒面皮革皮帶',
        category: 'accessories',
        categoryName: '配件',
        price: 90,
        image: 'assets/images/acc_belt.png',
        description: '這款必備的正裝皮帶由單塊全粒面皮革製成，並搭配經典的銀色扣環。'
    },
    {
        id: 'acc-2',
        name: '絲綢幾何圖案領帶',
        category: 'accessories',
        categoryName: '配件',
        price: 60,
        image: 'assets/images/acc_tie.png',
        description: '這款 100% 純絲領帶帶有優雅、低調的幾何圖案，為您的西裝增添一絲圖案點綴。'
    },
    {
        id: 'acc-3',
        name: '經典雙摺皮夾',
        category: 'accessories',
        categoryName: '配件',
        price: 120,
        image: 'assets/images/acc_wallet.png',
        description: '時尚而實用。由頂級皮革製成，隨著時間推移會呈現出豐富的光澤，具有充足的卡槽和纖薄的外型。'
    },
    {
        id: 'other-1',
        name: 'Elegance Noir 男士香水',
        category: 'others',
        categoryName: '其它類',
        price: 135,
        image: 'assets/images/other_perfume.png',
        description: '精緻的標誌性香氛，前調為佛手柑，中調為辛香木質，基調為持久的琥珀香。'
    },
    {
        id: 'other-2',
        name: '金色鏡框飛行員太陽眼鏡',
        category: 'others',
        categoryName: '其它類',
        price: 160,
        image: 'assets/images/other_sunglasses.png',
        description: '永恆風格遇上現代防護。這些飛行員太陽眼鏡配備高級偏光鏡片和輕巧耐用的金色鏡框。'
    }
];
