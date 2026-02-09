import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Docs.module.css';

export default function Docs() {
  return (
    <>
      <Head>
        <title>Documentation - Studious Waffle</title>
        <meta name="description" content="Complete setup and customization guide for Studious Waffle e-commerce platform" />
      </Head>

      <div className={styles.docsPage}>
        <div className="container">
          <div className={styles.docsHeader}>
            <h1>Documentation</h1>
            <p>Everything you need to know about setup, customization, and deployment</p>
          </div>

          <div className={styles.docsContent}>
            <aside className={styles.sidebar}>
              <nav className={styles.nav}>
                <a href="#getting-started">Getting Started</a>
                <a href="#installation">Installation</a>
                <a href="#customization">Customization</a>
                <a href="#products">Managing Products</a>
                <a href="#gumroad">Gumroad Integration</a>
                <a href="#deployment">Deployment</a>
                <a href="#seo">SEO Optimization</a>
              </nav>
            </aside>

            <main className={styles.mainContent}>
              <section id="getting-started" className={styles.section}>
                <h2>Getting Started</h2>
                <p>
                  Welcome to Studious Waffle! This e-commerce platform is built with Next.js and designed
                  to be fast, SEO-friendly, and easy to customize. It integrates seamlessly with Gumroad
                  for payment processing.
                </p>
              </section>

              <section id="installation" className={styles.section}>
                <h2>Installation</h2>
                <p>Follow these steps to set up the project:</p>
                
                <h3>Prerequisites</h3>
                <ul>
                  <li>Node.js 18+ installed</li>
                  <li>npm or yarn package manager</li>
                  <li>Git for version control</li>
                </ul>

                <h3>Setup Steps</h3>
                <div className={styles.codeBlock}>
                  <pre><code>{`# Clone the repository
git clone https://github.com/GeosCrypto/studious-waffle.git
cd studious-waffle

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start`}</code></pre>
                </div>
                <p>The site will be available at <code>http://localhost:3000</code></p>
              </section>

              <section id="customization" className={styles.section}>
                <h2>Customization</h2>
                
                <h3>Branding</h3>
                <p>Update your brand identity in the following files:</p>
                <ul>
                  <li><code>components/Header.js</code> - Update logo and site name</li>
                  <li><code>components/Footer.js</code> - Update footer content and links</li>
                  <li><code>styles/globals.css</code> - Customize colors and fonts</li>
                </ul>

                <h3>Color Scheme</h3>
                <p>Edit the CSS variables in <code>styles/globals.css</code>:</p>
                <div className={styles.codeBlock}>
                  <pre><code>{`:root {
  --primary-color: #6366f1;
  --primary-dark: #4f46e5;
  --secondary-color: #8b5cf6;
  /* ... more colors */
}`}</code></pre>
                </div>

                <h3>Typography</h3>
                <p>
                  The site uses system fonts by default. To use custom fonts, add them to
                  <code>pages/_document.js</code> and update the font-family in <code>globals.css</code>.
                </p>
              </section>

              <section id="products" className={styles.section}>
                <h2>Managing Products</h2>
                <p>Products are managed in <code>data/products.js</code>.</p>

                <h3>Adding a New Product</h3>
                <div className={styles.codeBlock}>
                  <pre><code>{`{
  id: 7,
  name: "Your Product Name",
  slug: "your-product-slug",
  description: "Short description",
  longDescription: "Detailed description...",
  price: 29.99,
  gumroadUrl: "https://gumroad.com/l/your-product",
  image: "https://example.com/image.jpg",
  category: "Your Category",
  featured: true,
  tags: ["tag1", "tag2"]
}`}</code></pre>
                </div>

                <h3>Product Fields</h3>
                <ul>
                  <li><strong>id:</strong> Unique identifier (number)</li>
                  <li><strong>name:</strong> Product name displayed everywhere</li>
                  <li><strong>slug:</strong> URL-friendly version (lowercase, hyphens)</li>
                  <li><strong>description:</strong> Short description for cards</li>
                  <li><strong>longDescription:</strong> Full product details</li>
                  <li><strong>price:</strong> Product price in USD</li>
                  <li><strong>gumroadUrl:</strong> Your Gumroad product link</li>
                  <li><strong>image:</strong> Product image URL</li>
                  <li><strong>category:</strong> Product category</li>
                  <li><strong>featured:</strong> Show on homepage (boolean)</li>
                  <li><strong>tags:</strong> Array of tags for filtering</li>
                </ul>
              </section>

              <section id="gumroad" className={styles.section}>
                <h2>Gumroad Integration</h2>
                <p>
                  This platform uses Gumroad for payment processing. Each product links directly
                  to your Gumroad product page.
                </p>

                <h3>Setup Gumroad Products</h3>
                <ol>
                  <li>Create a Gumroad account at <a href="https://gumroad.com" target="_blank" rel="noopener">gumroad.com</a></li>
                  <li>Create products for each item in your store</li>
                  <li>Copy the product URL (e.g., <code>https://gumroad.com/l/product-name</code>)</li>
                  <li>Add the URL to the <code>gumroadUrl</code> field in your product data</li>
                </ol>

                <h3>Why Gumroad?</h3>
                <ul>
                  <li>✓ Secure payment processing</li>
                  <li>✓ Automatic digital delivery</li>
                  <li>✓ Customer management</li>
                  <li>✓ Analytics and reporting</li>
                  <li>✓ No monthly fees (only transaction fee)</li>
                </ul>
              </section>

              <section id="deployment" className={styles.section}>
                <h2>Deployment</h2>
                
                <h3>Deploy to Vercel (Recommended)</h3>
                <ol>
                  <li>Push your code to GitHub</li>
                  <li>Go to <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a></li>
                  <li>Import your repository</li>
                  <li>Vercel will auto-detect Next.js and deploy</li>
                </ol>

                <h3>Deploy to Netlify</h3>
                <ol>
                  <li>Build the site: <code>npm run export</code></li>
                  <li>Deploy the <code>out</code> folder to Netlify</li>
                  <li>Or connect your Git repository for automatic deploys</li>
                </ol>

                <h3>GitHub Actions</h3>
                <p>
                  The repository includes GitHub Actions for automated deployment. Configure your
                  deployment secrets in your repository settings.
                </p>
              </section>

              <section id="seo" className={styles.section}>
                <h2>SEO Optimization</h2>
                <p>The platform is built with SEO best practices:</p>

                <h3>Built-in Features</h3>
                <ul>
                  <li>✓ Meta tags for all pages</li>
                  <li>✓ Open Graph tags for social sharing</li>
                  <li>✓ Semantic HTML structure</li>
                  <li>✓ Fast page loads</li>
                  <li>✓ Mobile-responsive design</li>
                  <li>✓ Clean, crawlable URLs</li>
                </ul>

                <h3>Customizing SEO</h3>
                <p>Update meta tags in each page&apos;s <code>Head</code> component:</p>
                <div className={styles.codeBlock}>
                  <pre><code>{`<Head>
  <title>Your Page Title</title>
  <meta name="description" content="Your description" />
  <meta property="og:title" content="Your Page Title" />
  <meta property="og:description" content="Your description" />
</Head>`}</code></pre>
                </div>

                <h3>Best Practices</h3>
                <ul>
                  <li>Keep titles under 60 characters</li>
                  <li>Keep descriptions under 160 characters</li>
                  <li>Use descriptive, keyword-rich content</li>
                  <li>Add alt text to all images</li>
                  <li>Use proper heading hierarchy (H1, H2, H3)</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>Need Help?</h2>
                <p>
                  If you have questions or need assistance, feel free to reach out:
                </p>
                <ul>
                  <li>📧 Email support</li>
                  <li>💬 GitHub Issues</li>
                  <li>📚 Community forums</li>
                </ul>
                <div className={styles.ctaBox}>
                  <p>Ready to start selling?</p>
                  <Link href="/products" className="btn btn-primary">
                    Browse Products
                  </Link>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
