import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Legal.module.css';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Studious Waffle</title>
        <meta name="description" content="Terms of Service for Studious Waffle" />
      </Head>

      <div className={styles.legalPage}>
        <div className="container">
          <div className={styles.header}>
            <h1>Terms of Service</h1>
            <p className={styles.updated}>Last updated: February 9, 2026</p>
          </div>

          <div className={styles.content}>
            <section>
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using Studious Waffle, you agree to be bound by these Terms of Service.
                If you disagree with any part of these terms, you may not access our website or services.
              </p>
            </section>

            <section>
              <h2>Products and Services</h2>
              <p>
                Studious Waffle offers digital products for sale. All products are delivered digitally
                through our payment processor, Gumroad. Product descriptions, pricing, and availability
                are subject to change without notice.
              </p>
            </section>

            <section>
              <h2>Payment and Purchases</h2>
              <ul>
                <li>All purchases are processed through Gumroad</li>
                <li>Prices are listed in USD unless otherwise stated</li>
                <li>Payment must be completed before product delivery</li>
                <li>You are responsible for providing accurate payment information</li>
              </ul>
            </section>

            <section>
              <h2>Licenses and Usage Rights</h2>
              <p>
                When you purchase a digital product from Studious Waffle:
              </p>
              <ul>
                <li>You receive a non-exclusive, non-transferable license to use the product</li>
                <li>Commercial use is permitted unless explicitly stated otherwise</li>
                <li>You may not resell, redistribute, or share the products</li>
                <li>Products may not be used in any illegal or unethical manner</li>
              </ul>
            </section>

            <section>
              <h2>Refund Policy</h2>
              <p>
                We offer refunds within 30 days of purchase if you&apos;re not satisfied with your product.
                To request a refund, please <Link href="/contact">contact us</Link> with your order details.
                Refunds are processed through Gumroad and may take 5-10 business days.
              </p>
            </section>

            <section>
              <h2>Intellectual Property</h2>
              <p>
                All content on Studious Waffle, including text, graphics, logos, and software, is the
                property of Studious Waffle or its content suppliers and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2>Disclaimer of Warranties</h2>
              <p>
                Our products and services are provided &quot;as is&quot; without warranties of any kind. We do not
                guarantee that products will meet your specific requirements or that they will be error-free.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                Studious Waffle shall not be liable for any indirect, incidental, special, or consequential
                damages arising from your use of our products or services.
              </p>
            </section>

            <section>
              <h2>User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use our website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our website</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2>Updates to Products</h2>
              <p>
                We may provide updates, improvements, or modifications to our digital products.
                While we strive to maintain backward compatibility, we cannot guarantee it.
              </p>
            </section>

            <section>
              <h2>Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services immediately,
                without prior notice, for conduct that we believe violates these Terms of Service
                or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section>
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of
                any changes by updating this page. Your continued use of our website after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2>Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with applicable laws,
                without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2>Contact Information</h2>
              <p>
                For questions about these Terms of Service, please <Link href="/contact">contact us</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
