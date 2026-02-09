import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { products, getProductBySlug } from '../../data/products';
import styles from '../../styles/ProductDetail.module.css';

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  
  const product = getProductBySlug(slug);
  
  if (!product) {
    return (
      <div className={styles.notFound}>
        <div className="container">
          <h1>Product Not Found</h1>
          <p>The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/products" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Head>
        <title>{product.name} - Studious Waffle</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.name} - Studious Waffle`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles.productDetail}>
        <div className="container">
          <Link href="/products" className={styles.backLink}>
            ← Back to Products
          </Link>

          <div className={styles.productGrid}>
            {/* Product Image */}
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>
                <img src={product.image} alt={product.name} />
              </div>
            </div>

            {/* Product Info */}
            <div className={styles.infoSection}>
              <div className={styles.category}>{product.category}</div>
              <h1 className={styles.productTitle}>{product.name}</h1>
              <p className={styles.shortDescription}>{product.description}</p>
              
              <div className={styles.price}>
                <span className={styles.priceAmount}>${product.price}</span>
                <span className={styles.priceLabel}>One-time payment</span>
              </div>

              {/* Gumroad Buy Button */}
              <div className={styles.buySection}>
                <a 
                  href={product.gumroadUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`btn btn-primary ${styles.buyButton}`}
                >
                  Buy Now with Gumroad
                </a>
                <p className={styles.secureNote}>
                  🔒 Secure payment processed by Gumroad
                </p>
              </div>

              {/* Features */}
              <div className={styles.features}>
                <h3>What&apos;s Included:</h3>
                <ul>
                  <li>✓ Instant digital delivery</li>
                  <li>✓ Lifetime access to all files</li>
                  <li>✓ Free future updates</li>
                  <li>✓ Commercial usage rights</li>
                  <li>✓ Email support</li>
                </ul>
              </div>

              {/* Tags */}
              <div className={styles.tags}>
                {product.tags.map(tag => (
                  <span key={tag} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className={styles.detailsSection}>
            <h2>Product Details</h2>
            <p>{product.longDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = products.map(product => ({
    params: { slug: product.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {}
  };
}
