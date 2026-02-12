const products = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 100 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 150 },
    { id: 3, name: 'Product 3', category: 'Category A', price: 200 },
    { id: 4, name: 'Product 4', category: 'Category C', price: 250 },
    { id: 5, name: 'Product 5', category: 'Category B', price: 300 },
    { id: 6, name: 'Product 6', category: 'Category A', price: 350 },
    { id: 7, name: 'Product 7', category: 'Category C', price: 400 },
    { id: 8, name: 'Product 8', category: 'Category B', price: 450 },
    { id: 9, name: 'Product 9', category: 'Category A', price: 500 },
    { id: 10, name: 'Product 10', category: 'Category C', price: 550 },
    { id: 11, name: 'Product 11', category: 'Category B', price: 600 },
    { id: 12, name: 'Product 12', category: 'Category A', price: 650 },
    { id: 13, name: 'Product 13', category: 'Category C', price: 700 },
    { id: 14, name: 'Product 14', category: 'Category B', price: 750 },
    { id: 15, name: 'Product 15', category: 'Category A', price: 800 },
    { id: 16, name: 'Product 16', category: 'Category C', price: 850 },
    { id: 17, name: 'Product 17', category: 'Category B', price: 900 },
    { id: 18, name: 'Product 18', category: 'Category A', price: 950 },
    { id: 19, name: 'Product 19', category: 'Category C', price: 1000 },
    { id: 20, name: 'Product 20', category: 'Category B', price: 1050 },
    { id: 21, name: 'Product 21', category: 'Category A', price: 1100 },
    { id: 22, name: 'Product 22', category: 'Category C', price: 1150 },
    { id: 23, name: 'Product 23', category: 'Category B', price: 1200 },
    { id: 24, name: 'Product 24', category: 'Category A', price: 1250 },
    { id: 25, name: 'Product 25', category: 'Category C', price: 1300 },
    { id: 26, name: 'Product 26', category: 'Category B', price: 1350 },
    { id: 27, name: 'Product 27', category: 'Category A', price: 1400 },
    { id: 28, name: 'Product 28', category: 'Category C', price: 1450 },
    { id: 29, name: 'AI Image Generation Masterclass', category: 'Category B', price: 1500, image: 'https://images.unsplash.com/photo-1686191128892-c15baf4b85dd?w=800&h=600&fit=crop' },
    { id: 30, name: 'Product 30', category: 'Category A', price: 1550 },
    { id: 31, name: 'Product 31', category: 'Category C', price: 1600 },
    { id: 32, name: 'Product 32', category: 'Category B', price: 1650 },
    { id: 33, name: 'Product 33', category: 'Category A', price: 1700 },
    { id: 34, name: 'Product 34', category: 'Category C', price: 1750 },
    { id: 35, name: 'Product 35', category: 'Category B', price: 1800 },
    { id: 36, name: 'Product 36', category: 'Category A', price: 1850 },
    { id: 37, name: 'Product 37', category: 'Category C', price: 1900 },
    { id: 38, name: 'Product 38', category: 'Category B', price: 1950 }
];

function getProductBySlug(slug) {
    return products.find(product => product.name.toLowerCase().replace(/\s+/g, '-') === slug);
}

function getFeaturedProducts() {
    // Logic for retrieving featured products
    return products.slice(0, 5);
}

function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

function getBundles() {
    // Logic for retrieving bundles
    return products.filter(product => product.category === 'Bundle');
}

function getNewProducts() {
    // Logic for retrieving new products
    return products.slice(-5);
}

function getBestSellers() {
    // Logic for retrieving best sellers
    return products.slice(0, 10).sort((a, b) => b.price - a.price);
}

function getRelatedProducts(productId) {
    // Logic for retrieving related products
    return products.filter(product => product.id !== productId).slice(0, 3);
}

const categories = [
    { id: 1, name: 'Category A' },
    { id: 2, name: 'Category B' },
    { id: 3, name: 'Category C' }
];

module.exports = { products, getProductBySlug, getFeaturedProducts, getProductsByCategory, getBundles, getNewProducts, getBestSellers, getRelatedProducts, categories };