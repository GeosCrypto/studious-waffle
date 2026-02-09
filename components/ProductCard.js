import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className={`card ${styles.productCard}`}>
      <div className={styles.imageWrapper}>
        <img 
          src={product.image} 
          alt={product.name}
          className={styles.productImage}
        />
        {product.featured && (
          <span className={styles.badge}>Featured</span>
        )}
      </div>
      <div className={styles.productContent}>
        <div className={styles.category}>{product.category}</div>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.productFooter}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.buyButton}>View Details →</span>
        </div>
      </div>
    </Link>
  );
}
