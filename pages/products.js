import Head from 'next/head';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import styles from '../styles/Products.module.css';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  
  const filteredProducts = selectedCategory === 'All Products'
    ? products
    : products.filter(p => p.category === selectedCategory);
  
  return (
    <>
      <Head>
        <title>Products - Studious Waffle</title>
        <meta name="description" content="Browse our collection of digital tools, design resources, and tech-inspired products for modern creators and developers." />
        <meta property="og:title" content="Products - Studious Waffle" />
        <meta property="og:description" content="Browse our collection of digital tools, design resources, and tech-inspired products." />
      </Head>

      <div className={styles.productsPage}>
        <div className="container">
          <header className={styles.pageHeader}>
            <h1>All Products</h1>
            <p>Discover our collection of premium digital products</p>
          </header>

          {/* Category Filter */}
          <div className={styles.filterSection}>
            <div className={styles.categoryFilters}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`${styles.categoryButton} ${
                    selectedCategory === category ? styles.active : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-3">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className={styles.emptyState}>
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
