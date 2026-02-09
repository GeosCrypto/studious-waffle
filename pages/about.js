import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Studious Waffle</title>
        <meta name="description" content="Learn more about Studious Waffle and our mission to provide creative, tech-inspired digital products." />
      </Head>

      <div className={styles.aboutPage}>
        <div className="container">
          <div className={styles.hero}>
            <h1>About Studious Waffle</h1>
            <p className={styles.subtitle}>
              Your go-to online store for creative, tech-inspired products
            </p>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2>Our Mission</h2>
              <p>
                At Studious Waffle, we&apos;re passionate about creating and curating digital products
                that combine style with smart functionality. We believe that tools should not only
                work well but also inspire creativity and productivity.
              </p>
              <p>
                Whether you&apos;re a designer, developer, content creator, or entrepreneur, we&apos;re here
                to provide you with premium digital resources that help you work smarter and
                create better.
              </p>
            </section>

            <section className={styles.section}>
              <h2>What We Offer</h2>
              <div className={styles.offerings}>
                <div className={styles.offering}>
                  <h3>🎨 Digital Tools</h3>
                  <p>Premium templates, UI kits, and design resources for creators</p>
                </div>
                <div className={styles.offering}>
                  <h3>💻 Developer Resources</h3>
                  <p>Code snippets, libraries, and productivity tools for developers</p>
                </div>
                <div className={styles.offering}>
                  <h3>🤖 AI Products</h3>
                  <p>Cutting-edge AI tools and prompt libraries for modern workflows</p>
                </div>
                <div className={styles.offering}>
                  <h3>📚 Knowledge Products</h3>
                  <p>Guides, templates, and educational resources</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Why Choose Us?</h2>
              <ul className={styles.benefits}>
                <li><strong>Quality First:</strong> Every product is carefully tested and curated</li>
                <li><strong>Instant Delivery:</strong> Get your products immediately after purchase</li>
                <li><strong>Lifetime Access:</strong> Buy once, access forever with free updates</li>
                <li><strong>Secure Payments:</strong> All transactions processed through trusted Gumroad</li>
                <li><strong>Responsive Support:</strong> We&apos;re here to help you succeed</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Our Values</h2>
              <p>
                We&apos;re committed to transparency, quality, and customer satisfaction. Every product
                we offer goes through rigorous testing and quality checks. We believe in building
                long-term relationships with our customers by consistently delivering value.
              </p>
            </section>

            <section className={styles.ctaSection}>
              <h2>Ready to Get Started?</h2>
              <p>Explore our products and find the perfect tools for your creative journey</p>
              <div className={styles.ctaButtons}>
                <Link href="/products" className="btn btn-primary">
                  Browse Products
                </Link>
                <Link href="/docs" className="btn btn-secondary">
                  View Documentation
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
