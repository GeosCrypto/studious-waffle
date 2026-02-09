import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Cart.module.css';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Shopping Cart - Studious Waffle</title>
        <meta name="description" content="Review your cart and checkout with Gumroad" />
      </Head>

      <div className={styles.cartPage}>
        <div className="container">
          <h1 className={styles.pageTitle}>Shopping Cart</h1>
          
          <div className={styles.cartContent}>
            <div className={styles.emptyCart}>
              <div className={styles.emptyIcon}>🛒</div>
              <h2>Your cart is empty</h2>
              <p>Browse our products and add items to your cart. All purchases are processed securely through Gumroad.</p>
              <Link href="/products" className="btn btn-primary">
                Browse Products
              </Link>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h3>How Checkout Works</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>1️⃣</div>
                <h4>Choose Your Product</h4>
                <p>Browse our collection and select the products you want</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>2️⃣</div>
                <h4>Click &quot;Buy Now&quot;</h4>
                <p>You&apos;ll be redirected to Gumroad&apos;s secure checkout</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>3️⃣</div>
                <h4>Complete Payment</h4>
                <p>Pay securely with credit card or PayPal</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>4️⃣</div>
                <h4>Instant Access</h4>
                <p>Download your digital products immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
