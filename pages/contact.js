import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Studious Waffle</title>
        <meta name="description" content="Get in touch with Studious Waffle for support, questions, or feedback." />
      </Head>

      <div className={styles.contactPage}>
        <div className="container">
          <div className={styles.header}>
            <h1>Contact Us</h1>
            <p>We&apos;d love to hear from you</p>
          </div>

          <div className={styles.content}>
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h3>📧 Email Support</h3>
                <p>For product support and general inquiries:</p>
                <a href="mailto:support@studiouswaffle.com">support@studiouswaffle.com</a>
              </div>

              <div className={styles.infoCard}>
                <h3>💬 Community</h3>
                <p>Join our community for discussions and updates:</p>
                <a href="https://github.com/GeosCrypto/studious-waffle" target="_blank" rel="noopener noreferrer">GitHub Discussions</a>
              </div>

              <div className={styles.infoCard}>
                <h3>🐛 Bug Reports</h3>
                <p>Found a bug or have a feature request?</p>
                <a href="https://github.com/GeosCrypto/studious-waffle/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a>
              </div>

              <div className={styles.infoCard}>
                <h3>📚 Documentation</h3>
                <p>Need help getting started?</p>
                <Link href="/docs">View Documentation</Link>
              </div>
            </div>

            <div className={styles.faq}>
              <h2>Frequently Asked Questions</h2>
              
              <div className={styles.faqItem}>
                <h3>How do I purchase a product?</h3>
                <p>Click &quot;Buy Now&quot; on any product page to be redirected to our secure Gumroad checkout.</p>
              </div>

              <div className={styles.faqItem}>
                <h3>What payment methods do you accept?</h3>
                <p>We accept all major credit cards and PayPal through Gumroad&apos;s secure payment system.</p>
              </div>

              <div className={styles.faqItem}>
                <h3>How do I access my purchased products?</h3>
                <p>After purchase, you&apos;ll receive an instant email from Gumroad with download links.</p>
              </div>

              <div className={styles.faqItem}>
                <h3>Do you offer refunds?</h3>
                <p>Yes, we offer refunds within 30 days if you&apos;re not satisfied. Contact us at the email above.</p>
              </div>

              <div className={styles.faqItem}>
                <h3>Can I use products for commercial projects?</h3>
                <p>Yes! All products include commercial usage rights unless otherwise specified.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
