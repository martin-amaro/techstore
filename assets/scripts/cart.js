const products = [
    {
        name: 'Portatil HP',
        price: 899000,
        category: 'portatil',
        image: 'item1.webp'
    },

    {
        name: 'Portatil DELL 352',
        price: 2102000,
        category: 'portatil',
        image: 'item2.webp'
    },

    {
        name: 'Portatil DELL 352',
        price: 2102000,
        category: 'portatil',
        image: 'item2.webp'
    },

    {
        name: 'Portatil HP 240',
        price: 800000,
        category: 'portatil',
        image: 'item3.webp'
    },

    {
        name: 'Mouse Logitech',
        price: 20000,
        category: 'mouse',
        image: 'item4.webp'
    },

    {
        name: 'Mouse 2024 Pro',
        price: 32000,
        category: 'mouse',
        image: 'item5.webp'
    },

    {
        name: 'Mouse Gamer RGB',
        price: 50000,
        category: 'mouse',
        image: 'item6.webp'
    },

    {
        name: 'Keyboard Logi FSP',
        price: 22000,
        category: 'keyboard',
        image: 'item7.webp'
    },

    {
        name: 'Keyboard Unitec Gamer',
        price: 40000,
        category: 'keyboard',
        image: 'item8.webp'
    },

    {
        name: 'Keyboard Logi Gamepad',
        price: 40000,
        category: 'keyboard',
        image: 'item9.webp'
    },

    {
        name: 'Headphone Generic',
        price: 22000,
        category: 'headphone',
        image: 'item10.webp'
    },

    {
        name: 'Apple AirPods',
        price: 2400000,
        category: 'headphone',
        image: 'item11.webp'
    },

    {
        name: 'JBL Headphones',
        price: 1200000,
        category: 'headphone',
        image: 'item12.webp'
    },
]


const productsArea = document.querySelector('.product-list__area')

function showProducts() {
    products.forEach(e => {
        addProduct(e.name, e.category, e.price, e.image)
    });
    //productsArea.innerHTML += `<h1>Hola</h1>`
}

function addProduct(name, category, price, image) {
    const template = `
    <article class="product-list__item">
        <div class="product-list__item-figure">
            <img class="product-list__item-image" src="assets/images/products/${image}" alt="">
        </div>

        <div class="product-list__item-info">
            <h2 class="product-list__item-title">${name}</h2>
            <h3 class="product-list__item-category">${category}</h3>
            <p class="product-list__item-price">$ ${Intl.NumberFormat().format(price)}</p>
        </div>
    </article>
    `
    productsArea.innerHTML += template;
}

window.addEventListener('load', function() {
    showProducts();

});
