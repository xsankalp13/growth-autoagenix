'use client';

import React from 'react';
import styles from './privacy.module.css';

export default function PrivacyPage() {
    return (
        <main className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last Updated: January 20, 2026</p>

                <div className={styles.content}>
                    <section>
                        <h2 className={styles.subHeading}>1. Information We Collect</h2>
                        <p className={styles.text}>
                            At Growth Autoagenix, we collect information to provide better services to our brands and partners. The information we collect includes:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Contact Information:</strong> Name, email address, and business details when you book a call or contact us.</li>
                            <li className={styles.listItem}><strong>Business Data:</strong> Information about your brand, products, and affiliate requirements.</li>
                            <li className={styles.listItem}><strong>Technical Data:</strong> IP address, browser type, and usage patterns on our website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={styles.subHeading}>2. How We Use Information</h2>
                        <p className={styles.text}>
                            We use the collected information for the following purposes:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>To manage and automate your affiliate program.</li>
                            <li className={styles.listItem}>To communicate with you regarding program updates and results.</li>
                            <li className={styles.listItem}>To improve our proprietary AI tools and automated outreach systems.</li>
                            <li className={styles.listItem}>To ensure compliance with our service agreements.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={styles.subHeading}>3. Data Security</h2>
                        <p className={styles.text}>
                            We implement industry-standard security measures to protect your data. Your brand's internal sales data and influencer lists are treated with the highest level of confidentiality and are stored on secure servers with restricted access.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.subHeading}>4. Sharing of Information</h2>
                        <p className={styles.text}>
                            We do not sell your personal or business data to third parties. We only share information with:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Affiliate partners (only necessary product info to facilitate sales).</li>
                            <li className={styles.listItem}>Service providers who assist in our technical operations (e.g., hosting, tracking software).</li>
                            <li className={styles.listItem}>Legal authorities if required by law.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className={styles.subHeading}>5. Your Rights</h2>
                        <p className={styles.text}>
                            You have the right to access, correct, or delete your personal information. You can also opt-out of our newsletter or marketing communications at any time by contacting us directly.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.subHeading}>6. Changes to This Policy</h2>
                        <p className={styles.text}>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className={styles.subHeading}>7. Contact Us</h2>
                        <p className={styles.text}>
                            If you have any questions about this Privacy Policy, please contact us at hello@growthautoagenix.com.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
