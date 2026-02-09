import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Launch.module.css';

export default function Launch() {
  return (
    <>
      <Head>
        <title>Launch Template - Studious Waffle</title>
        <meta name="description" content="Professional launch page template for your product releases, sales, and promotions." />
        <meta property="og:title" content="Launch Template - Studious Waffle" />
      </Head>

      {/* Hero Section */}
      <section className={styles.launchHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.badge}>🚀 New Launch</div>
            <h1 className={styles.heroTitle}>
              Launch Your Product<br />
              <span className={styles.gradient}>With Impact</span>
            </h1>
            <p className={styles.heroDescription}>
              Professional landing page template designed for maximum conversions.
              Perfect for product launches, sales campaigns, and special promotions.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/products" className="btn btn-primary">
                Get Started
              </Link>
              <a href="#features" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>1,000+</div>
              <div className={styles.statLabel}>Downloads</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4.9★</div>
              <div className={styles.statLabel}>Average Rating</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features} id="features">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Everything You Need</h2>
            <p>All the features to make your launch successful</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Lightning Fast</h3>
              <p>Optimized for speed and performance on all devices</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Mobile Ready</h3>
              <p>Looks perfect on phones, tablets, and desktops</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3>Easy Customize</h3>
              <p>Simple to customize with your brand and content</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💳</div>
              <h3>Payment Ready</h3>
              <p>Integrated with Gumroad for seamless transactions</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔍</div>
              <h3>SEO Optimized</h3>
              <p>Built-in SEO best practices for better visibility</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <h3>Analytics Ready</h3>
              <p>Track your launch performance with ease</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Simple Pricing</h2>
            <p>One-time payment, lifetime access</p>
          </div>
          <div className={styles.pricingCard}>
            <div className={styles.pricingHeader}>
              <h3>Launch Template</h3>
              <div className={styles.price}>
                <span className={styles.priceAmount}>$29</span>
                <span className={styles.priceLabel}>USD</span>
              </div>
            </div>
            <ul className={styles.pricingFeatures}>
              <li>✓ Complete launch page template</li>
              <li>✓ Mobile responsive design</li>
              <li>✓ Gumroad integration</li>
              <li>✓ SEO optimized structure</li>
              <li>✓ Easy customization</li>
              <li>✓ Documentation included</li>
              <li>✓ Lifetime updates</li>
              <li>✓ Email support</li>
            </ul>
            <Link href="/products" className={`btn btn-primary ${styles.pricingButton}`}>
              Get Template Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Launch?</h2>
            <p>Start building your successful product launch today</p>
            <Link href="/products" className="btn btn-primary">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
