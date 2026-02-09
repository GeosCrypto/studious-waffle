import Head from 'next/head';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts, products } from '../data/products';
import styles from '../styles/Home.module.css';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <>
      <Head>
        <title>Studious Waffle - Tech-Inspired Digital Products</title>
        <meta name="description" content="Your go-to online store for creative, tech-inspired products that combine style and smart functionality. Digital tools, design resources, and more." />
        <meta property="og:title" content="Studious Waffle - Tech-Inspired Digital Products" />
        <meta property="og:description" content="Your go-to online store for creative, tech-inspired products that combine style and smart functionality." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Creative Digital Products<br />
              <span className={styles.heroGradient}>For Modern Creators</span>
            </h1>
            <p className={styles.heroDescription}>
              Discover unique digital tools, design resources, and tech-inspired products
              that combine style with smart functionality. Perfect for creators, developers, and innovators.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/products" className="btn btn-primary">
                Browse Products
              </Link>
              <Link href="/launch" className="btn btn-secondary">
                Launch Template
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🚀</div>
              <h3>Instant Delivery</h3>
              <p>Get your digital products immediately after purchase via Gumroad</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>💎</div>
              <h3>Premium Quality</h3>
              <p>Carefully curated and tested products for professionals</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔄</div>
              <h3>Free Updates</h3>
              <p>All products include lifetime updates and improvements</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>💬</div>
              <h3>Support</h3>
              <p>Dedicated support to help you get the most from your purchase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.productsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Featured Products</h2>
            <p>Our most popular digital products handpicked for you</p>
          </div>
          <div className="grid grid-3">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link href="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Get Started?</h2>
            <p>Browse our collection and find the perfect tools for your creative journey</p>
            <Link href="/products" className="btn btn-primary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
