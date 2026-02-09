import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Studious Waffle</h3>
            <p className={styles.footerDescription}>
              Creative, tech-inspired products that combine style and smart functionality.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Shop</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/products?category=Digital+Tools">Digital Tools</Link></li>
              <li><Link href="/products?category=Developer+Tools">Developer Tools</Link></li>
              <li><Link href="/products?category=Digital+Art">Digital Art</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/launch">Launch Template</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Connect</h4>
            <ul className={styles.footerLinks}>
              <li><a href="https://github.com/GeosCrypto/studious-waffle" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Studious Waffle. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
