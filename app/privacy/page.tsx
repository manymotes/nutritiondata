import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your data.`,
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  const lastUpdated = 'January 31, 2026'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Privacy Policy
      </h1>
      <p className="text-gray-600 mb-8">
        Last Updated: {lastUpdated}
      </p>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2>Introduction</h2>
          <p>
            Welcome to {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at {SITE_URL}.
          </p>
          <p>
            Please read this privacy policy carefully. By using our website, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our website.
          </p>
        </section>

        <section className="mb-12">
          <h2>1. Information We Collect</h2>

          <h3>1.1 Automatically Collected Information</h3>
          <p>
            When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
          </p>
          <ul>
            <li><strong>Log Data:</strong> IP address, browser type and version, operating system, pages visited, time and date of visit, time spent on pages, and other diagnostic data</li>
            <li><strong>Device Information:</strong> Device type, screen resolution, and device identifiers</li>
            <li><strong>Usage Data:</strong> How you navigate our website, which pages you view, and which links you click</li>
            <li><strong>Location Data:</strong> Approximate geographic location based on your IP address</li>
          </ul>

          <h3>1.2 Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
          </p>
          <p>
            Types of cookies we use:
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics)</li>
            <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements (Google AdSense)</li>
          </ul>

          <h3>1.3 Information You Provide</h3>
          <p>
            We do not require you to create an account or provide personal information to use our website. However, if you contact us via email, we collect:
          </p>
          <ul>
            <li>Your email address</li>
            <li>Your name (if provided)</li>
            <li>Any information you choose to include in your message</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect for the following purposes:
          </p>
          <ul>
            <li><strong>Provide and maintain our service:</strong> To operate and provide you with access to our nutrition database</li>
            <li><strong>Improve our website:</strong> To understand how users interact with our site and make improvements</li>
            <li><strong>Analytics:</strong> To monitor website traffic, user behavior, and performance metrics</li>
            <li><strong>Display advertisements:</strong> To show relevant advertisements through Google AdSense</li>
            <li><strong>Respond to inquiries:</strong> To reply to your questions or support requests</li>
            <li><strong>Comply with legal obligations:</strong> To meet legal and regulatory requirements</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>3. Third-Party Services</h2>
          <p>
            We use third-party services that may collect, monitor, and analyze information to improve our service and show relevant advertisements.
          </p>

          <h3>3.1 Google Analytics</h3>
          <p>
            We use Google Analytics to track and report website traffic. Google Analytics uses cookies to collect information about how visitors use our website. This information is used to compile reports and help us improve our website.
          </p>
          <p>
            Google&apos;s use of the data is governed by the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Google Privacy Policy</a>.
          </p>
          <p>
            You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Google Analytics Opt-out Browser Add-on</a>.
          </p>

          <h3>3.2 Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites on the Internet.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
          </p>
          <p>
            You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Google Ads Settings</a> or by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">www.aboutads.info</a>.
          </p>
          <p>
            For more information about Google&apos;s privacy practices, please visit the <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Google Privacy & Terms page</a>.
          </p>

          <h3>3.3 USDA FoodData Central</h3>
          <p>
            All nutrition data on our website is sourced from the USDA FoodData Central database, which is public domain information. We do not share any user data with the USDA.
          </p>
        </section>

        <section className="mb-12">
          <h2>4. How We Share Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> We share information with third-party service providers (Google Analytics, Google AdSense) who assist us in operating our website</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>5. Data Retention</h2>
          <p>
            We retain automatically collected information for as long as necessary to fulfill the purposes outlined in this privacy policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
          <p>
            Google Analytics and Google AdSense have their own data retention policies. For Google Analytics, data is typically retained for 26 months by default.
          </p>
        </section>

        <section className="mb-12">
          <h2>6. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information:
          </p>

          <h3>6.1 General Rights</h3>
          <ul>
            <li><strong>Right to Access:</strong> You can request information about the personal data we hold about you</li>
            <li><strong>Right to Rectification:</strong> You can request that we correct inaccurate information</li>
            <li><strong>Right to Erasure:</strong> You can request that we delete your personal information</li>
            <li><strong>Right to Object:</strong> You can object to our processing of your personal information</li>
            <li><strong>Right to Opt-Out:</strong> You can opt out of cookies and personalized advertising</li>
          </ul>

          <h3>6.2 California Residents (CCPA)</h3>
          <p>
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
          </p>
          <ul>
            <li>Right to know what personal information is collected</li>
            <li>Right to know if personal information is sold or disclosed</li>
            <li>Right to opt-out of the sale of personal information (we do not sell your information)</li>
            <li>Right to request deletion of personal information</li>
            <li>Right to non-discrimination for exercising your privacy rights</li>
          </ul>

          <h3>6.3 European Union Residents (GDPR)</h3>
          <p>
            If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>

          <h3>6.4 How to Exercise Your Rights</h3>
          <p>
            To exercise any of these rights, please contact us at:
          </p>
          <p>
            <a href="mailto:contact@caloriedata.io" className="text-primary-600 hover:text-primary-700">
              contact@caloriedata.io
            </a>
          </p>
          <p>
            We will respond to your request within 30 days.
          </p>
        </section>

        <section className="mb-12">
          <h2>7. Cookie Management</h2>
          <p>
            You can manage your cookie preferences in several ways:
          </p>

          <h3>7.1 Browser Settings</h3>
          <p>
            Most web browsers allow you to control cookies through their settings:
          </p>
          <ul>
            <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
            <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
            <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
          </ul>

          <h3>7.2 Opt-Out of Personalized Ads</h3>
          <ul>
            <li><strong>Google Ads:</strong> <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">Google Ads Settings</a></li>
            <li><strong>Digital Advertising Alliance:</strong> <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">www.aboutads.info/choices</a></li>
            <li><strong>Network Advertising Initiative:</strong> <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">www.networkadvertising.org/choices</a></li>
          </ul>

          <h3>7.3 Do Not Track</h3>
          <p>
            Some browsers have a &quot;Do Not Track&quot; feature that lets you tell websites you do not want your online activities tracked. We do not currently respond to Do Not Track signals.
          </p>
        </section>

        <section className="mb-12">
          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at contact@caloriedata.io, and we will delete such information.
          </p>
        </section>

        <section className="mb-12">
          <h2>9. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
          </p>
          <p>
            Security measures we implement include:
          </p>
          <ul>
            <li>HTTPS encryption for data transmission</li>
            <li>Secure hosting infrastructure</li>
            <li>Regular security updates and monitoring</li>
            <li>Limited access to personal information</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>10. International Data Transfers</h2>
          <p>
            Our website is hosted in the United States. If you are accessing our website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located.
          </p>
          <p>
            By using our website, you consent to the transfer of your information to the United States and the processing of such information in accordance with this Privacy Policy.
          </p>
        </section>

        <section className="mb-12">
          <h2>11. Links to Other Websites</h2>
          <p>
            Our website may contain links to third-party websites, including:
          </p>
          <ul>
            <li>USDA FoodData Central (fdc.nal.usda.gov)</li>
            <li>Google Privacy Policy and Ads Settings</li>
            <li>Other external resources</li>
          </ul>
          <p>
            We are not responsible for the privacy practices of these third-party websites. We encourage you to read the privacy policies of any website you visit.
          </p>
        </section>

        <section className="mb-12">
          <h2>12. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make changes, we will update the &quot;Last Updated&quot; date at the top of this policy.
          </p>
          <p>
            We encourage you to review this Privacy Policy periodically. Your continued use of our website after any changes indicates your acceptance of the updated policy.
          </p>
          <p>
            For significant changes, we may provide additional notice, such as adding a statement to our homepage.
          </p>
        </section>

        <section className="mb-12">
          <h2>13. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mt-4">
            <p className="mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@caloriedata.io" className="text-primary-600 hover:text-primary-700">
                contact@caloriedata.io
              </a>
            </p>
            <p className="mb-2">
              <strong>Website:</strong>{' '}
              <a href={SITE_URL} className="text-primary-600 hover:text-primary-700">
                {SITE_URL}
              </a>
            </p>
          </div>
          <p className="mt-4">
            We will respond to your inquiry within 30 days.
          </p>
        </section>

        <section className="mb-12">
          <h2>14. Additional Information for Specific Jurisdictions</h2>

          <h3>14.1 Nevada Residents</h3>
          <p>
            Nevada residents have the right to opt out of the sale of certain personal information. We do not sell personal information as defined under Nevada law.
          </p>

          <h3>14.2 Virginia, Colorado, Connecticut, and Utah Residents</h3>
          <p>
            Residents of Virginia, Colorado, Connecticut, and Utah have additional privacy rights under their respective state laws. These rights include the right to confirm whether we process your personal data, access your personal data, correct inaccuracies, delete your personal data, obtain a copy of your personal data, and opt out of certain processing activities.
          </p>
        </section>

        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Summary</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ We collect limited information (mainly analytics and ad-related data)</li>
            <li>✓ We use Google Analytics and Google AdSense</li>
            <li>✓ We do not sell your personal information</li>
            <li>✓ You can opt out of cookies and personalized ads</li>
            <li>✓ You have rights to access, correct, and delete your data</li>
            <li>✓ Contact us at contact@caloriedata.io for privacy questions</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
