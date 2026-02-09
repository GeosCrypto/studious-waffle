import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Legal.module.css';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Studious Waffle</title>
        <meta name="description" content="Privacy Policy for Studious Waffle" />
      </Head>

      <div className={styles.legalPage}>
        <div className="container">
          <div className={styles.header}>
            <h1>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: February 9, 2026</p>
          </div>

          <div className={styles.content}>
            <section>
              <h2>Introduction</h2>
              <p>
                At Studious Waffle, we respect your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard your information when you visit
                our website or make a purchase.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>
              <p>We collect minimal information necessary to provide our services:</p>
              <ul>
                <li><strong>Purchase Information:</strong> When you buy products through Gumroad, they handle all payment and personal information according to their privacy policy.</li>
                <li><strong>Usage Data:</strong> We may collect anonymous usage statistics to improve our website.</li>
                <li><strong>Contact Information:</strong> Email addresses provided for support purposes.</li>
              </ul>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <p>We use collected information for:</p>
              <ul>
                <li>Processing and delivering your purchases</li>
                <li>Providing customer support</li>
                <li>Improving our website and services</li>
                <li>Sending important updates about your purchases</li>
              </ul>
            </section>

            <section>
              <h2>Third-Party Services</h2>
              <p>
                We use <strong>Gumroad</strong> for payment processing. When you make a purchase, you&apos;re
                redirected to Gumroad&apos;s secure platform. Please review <a href="https://gumroad.com/privacy" target="_blank" rel="noopener noreferrer">Gumroad&apos;s Privacy Policy</a> for
                information about how they handle your data.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your information. However, no method
                of transmission over the Internet is 100% secure. We use Gumroad&apos;s secure payment processing
                to ensure your financial information is protected.
              </p>
            </section>

            <section>
              <h2>Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can control cookie
                settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Request correction of your data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes
                by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please <Link href="/contact">contact us</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
