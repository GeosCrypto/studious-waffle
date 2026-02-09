import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🧇</span>
          <span className={styles.logoText}>Studious Waffle</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/launch" className={styles.navLink}>Launch</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
        </nav>
        
        <div className={styles.actions}>
          <Link href="/cart" className={styles.cartButton}>
            <span>🛒</span>
            <span className={styles.cartText}>Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
