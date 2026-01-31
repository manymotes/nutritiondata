import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${SITE_NAME}. Read our terms and conditions, disclaimers, and legal information.`,
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  const lastUpdated = 'January 31, 2026'

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Terms of Service
      </h1>
      <p className="text-gray-600 mb-8">
        Last Updated: {lastUpdated}
      </p>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to {SITE_NAME}. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website at {SITE_URL} (the &quot;Site&quot;) and any related services provided by us.
          </p>
          <p>
            By accessing or using our Site, you agree to be bound by these Terms and our <Link href="/privacy" className="text-primary-600 hover:text-primary-700">Privacy Policy</Link>. If you do not agree with any part of these Terms, you must not use our Site.
          </p>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2>2. Description of Service</h2>
          <p>
            {SITE_NAME} provides free access to nutrition information for foods and beverages. Our services include:
          </p>
          <ul>
            <li>A searchable database of nutrition facts for 300,000+ foods</li>
            <li>Nutrition comparison tools</li>
            <li>Calorie and macro calculators</li>
            <li>Food category browsing</li>
            <li>Educational content about nutrition</li>
          </ul>
          <p>
            All nutrition data is sourced from the United States Department of Agriculture (USDA) FoodData Central database and other publicly available sources.
          </p>
        </section>

        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            ⚠️ IMPORTANT MEDICAL DISCLAIMER
          </h2>
          <p className="text-red-900 font-semibold mb-4">
            Please read this section carefully. This disclaimer is crucial for your health and safety.
          </p>
        </div>

        <section className="mb-12">
          <h2>3. Medical and Nutritional Disclaimer</h2>

          <h3>3.1 Not Medical or Nutritional Advice</h3>
          <p className="font-semibold">
            THE INFORMATION PROVIDED ON THIS SITE IS FOR GENERAL INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY. IT IS NOT INTENDED AS, AND SHOULD NOT BE CONSTRUED AS, MEDICAL ADVICE, NUTRITIONAL ADVICE, DIETARY GUIDANCE, OR A SUBSTITUTE FOR PROFESSIONAL MEDICAL CONSULTATION, DIAGNOSIS, OR TREATMENT.
          </p>
          <p>
            The nutrition data, calculators, comparisons, and content on this Site:
          </p>
          <ul>
            <li>Are provided for general information only</li>
            <li>Should not be used to diagnose, treat, cure, or prevent any disease or health condition</li>
            <li>Do not constitute medical, nutritional, or dietary advice</li>
            <li>Are not a replacement for personalized advice from qualified healthcare professionals</li>
            <li>May not be suitable for your individual health needs or circumstances</li>
          </ul>

          <h3>3.2 Consult Healthcare Professionals</h3>
          <p className="font-semibold">
            ALWAYS CONSULT WITH A QUALIFIED HEALTHCARE PROFESSIONAL BEFORE MAKING ANY CHANGES TO YOUR DIET, NUTRITION PLAN, OR HEALTH REGIMEN.
          </p>
          <p>
            You should particularly seek professional medical advice if you:
          </p>
          <ul>
            <li>Have any pre-existing medical conditions (diabetes, heart disease, kidney disease, etc.)</li>
            <li>Are pregnant, nursing, or planning to become pregnant</li>
            <li>Are taking medications or supplements</li>
            <li>Have food allergies or intolerances</li>
            <li>Are considering significant dietary changes</li>
            <li>Are under 18 years of age</li>
            <li>Have a history of eating disorders</li>
            <li>Are experiencing any health symptoms or concerns</li>
          </ul>

          <h3>3.3 No Doctor-Patient Relationship</h3>
          <p>
            Use of this Site does not create a doctor-patient, therapist-patient, nutritionist-client, or any other healthcare professional relationship. The Site and its content are not intended to be a substitute for professional medical advice, diagnosis, or treatment.
          </p>

          <h3>3.4 Individual Results May Vary</h3>
          <p>
            Nutritional needs, dietary requirements, and health outcomes vary significantly between individuals based on factors including but not limited to: age, sex, weight, height, activity level, metabolic rate, genetic factors, health conditions, and medications.
          </p>
          <p>
            Information that may be appropriate for one person may not be appropriate for another. Only a qualified healthcare professional can provide personalized advice based on your specific circumstances.
          </p>

          <h3>3.5 Emergency Medical Situations</h3>
          <p className="font-semibold">
            IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, CALL 911 (IN THE US) OR YOUR LOCAL EMERGENCY NUMBER IMMEDIATELY. DO NOT RELY ON INFORMATION FROM THIS WEBSITE IN EMERGENCY SITUATIONS.
          </p>
          <p>
            If you think you may have a medical emergency, call your doctor or emergency services immediately. Do not delay seeking medical attention based on information found on this Site.
          </p>
        </section>

        <section className="mb-12">
          <h2>4. Data Accuracy Disclaimer</h2>

          <h3>4.1 Source of Data</h3>
          <p>
            The nutrition data on {SITE_NAME} is primarily sourced from:
          </p>
          <ul>
            <li>USDA FoodData Central database</li>
            <li>Food manufacturer-provided information</li>
            <li>Other publicly available nutrition databases</li>
          </ul>

          <h3>4.2 Accuracy Limitations</h3>
          <p>
            While we strive to provide accurate and up-to-date nutrition information, you acknowledge and agree that:
          </p>
          <ul>
            <li>Nutrition data can vary based on growing conditions, seasonality, and preparation methods</li>
            <li>Food manufacturers may change product formulations without notice</li>
            <li>Different brands or varieties of the same food may have different nutritional values</li>
            <li>Cooking methods can significantly affect nutritional content</li>
            <li>Serving sizes may vary from the standard portions shown</li>
            <li>Data may contain errors, omissions, or be outdated</li>
            <li>We do not independently verify all nutrition data</li>
          </ul>

          <h3>4.3 Use as General Guide Only</h3>
          <p>
            The nutrition information on this Site should be used as a general guide and approximation only. For critical dietary needs (such as managing diabetes, allergies, or other health conditions), always:
          </p>
          <ul>
            <li>Check product packaging and manufacturer labels directly</li>
            <li>Consult with registered dietitians or nutritionists</li>
            <li>Verify information with authoritative sources</li>
            <li>Work with your healthcare provider</li>
          </ul>

          <h3>4.4 Reporting Errors</h3>
          <p>
            If you notice any errors in our nutrition data, please contact us at <a href="mailto:contact@caloriedata.io" className="text-primary-600 hover:text-primary-700">contact@caloriedata.io</a>. While we appreciate error reports, we cannot guarantee that all reported errors will be corrected or corrected immediately.
          </p>
        </section>

        <section className="mb-12">
          <h2>5. Disclaimer of Warranties</h2>

          <h3>5.1 &quot;As Is&quot; Basis</h3>
          <p className="font-semibold">
            THE SITE AND ALL CONTENT, INFORMATION, AND SERVICES PROVIDED THROUGH THE SITE ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
          <p>
            To the fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to:
          </p>
          <ul>
            <li>Warranties of merchantability</li>
            <li>Warranties of fitness for a particular purpose</li>
            <li>Warranties of non-infringement</li>
            <li>Warranties of accuracy, reliability, or completeness</li>
            <li>Warranties that the Site will be uninterrupted, secure, or error-free</li>
          </ul>

          <h3>5.2 No Guarantee of Results</h3>
          <p>
            We make no warranties or guarantees about:
          </p>
          <ul>
            <li>The accuracy, completeness, or reliability of nutrition data</li>
            <li>The suitability of any information for your individual needs</li>
            <li>The results you may or may not achieve from using the Site</li>
            <li>The availability or uptime of the Site</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>6. Limitation of Liability</h2>

          <h3>6.1 No Liability for Health Outcomes</h3>
          <p className="font-semibold">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THIS SITE OR THE INFORMATION PROVIDED ON IT.
          </p>
          <p>
            This includes, but is not limited to, liability for:
          </p>
          <ul>
            <li>Any health problems, injuries, or adverse outcomes resulting from following nutrition information</li>
            <li>Decisions made based on data or information found on the Site</li>
            <li>Allergic reactions, food poisoning, or other health issues</li>
            <li>Weight gain, weight loss, or failure to achieve desired health goals</li>
            <li>Reliance on inaccurate or incomplete data</li>
            <li>Any medical conditions that develop or worsen</li>
          </ul>

          <h3>6.2 Maximum Liability</h3>
          <p>
            In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount you paid to access the Site (which is zero, as the Site is free).
          </p>

          <h3>6.3 Assumption of Risk</h3>
          <p>
            You acknowledge and agree that:
          </p>
          <ul>
            <li>You use this Site at your own risk</li>
            <li>You are responsible for your own health and dietary decisions</li>
            <li>You will seek appropriate professional medical advice for health concerns</li>
            <li>You will not rely solely on this Site for medical or nutritional guidance</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>7. User Responsibilities</h2>

          <h3>7.1 Appropriate Use</h3>
          <p>
            By using this Site, you agree to:
          </p>
          <ul>
            <li>Use the Site for lawful purposes only</li>
            <li>Not misuse, abuse, or interfere with the Site&apos;s functionality</li>
            <li>Not attempt to gain unauthorized access to any portion of the Site</li>
            <li>Not use automated tools (bots, scrapers) to access or collect data without permission</li>
            <li>Not transmit viruses, malware, or other harmful code</li>
            <li>Not violate any applicable laws or regulations</li>
          </ul>

          <h3>7.2 Accuracy of Information You Provide</h3>
          <p>
            If you use our calculators or provide any information to us, you agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Update information as needed</li>
            <li>Not impersonate any person or entity</li>
          </ul>

          <h3>7.3 Age Requirement</h3>
          <p>
            You must be at least 13 years old to use this Site. If you are under 18, you should use this Site only with the involvement and permission of a parent or guardian.
          </p>
        </section>

        <section className="mb-12">
          <h2>8. Intellectual Property Rights</h2>

          <h3>8.1 Our Content</h3>
          <p>
            The Site and its original content (excluding USDA data), features, functionality, design, and graphics are owned by {SITE_NAME} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h3>8.2 USDA Data</h3>
          <p>
            Nutrition data sourced from the USDA FoodData Central is in the public domain and not subject to copyright protection. However, our presentation, organization, and compilation of this data may be protected.
          </p>

          <h3>8.3 Limited License</h3>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Site for personal, non-commercial purposes. This license does not include:
          </p>
          <ul>
            <li>Any right to scrape, download, or collect data in bulk</li>
            <li>Any right to redistribute, sell, or commercialize our content</li>
            <li>Any right to modify, reproduce, or create derivative works</li>
            <li>Any right to use our trademarks, logos, or brand elements</li>
          </ul>

          <h3>8.4 Prohibited Uses</h3>
          <p>
            You may not:
          </p>
          <ul>
            <li>Copy, reproduce, or republish significant portions of the Site</li>
            <li>Use automated tools to scrape or download data without written permission</li>
            <li>Create a competing database or service using our data</li>
            <li>Remove or alter any copyright notices or attributions</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>9. Third-Party Links and Content</h2>
          <p>
            The Site may contain links to third-party websites, including:
          </p>
          <ul>
            <li>USDA FoodData Central</li>
            <li>Google Privacy Policy and Ads Settings</li>
            <li>Other external resources and references</li>
          </ul>
          <p>
            We are not responsible for:
          </p>
          <ul>
            <li>The content, accuracy, or opinions expressed on third-party websites</li>
            <li>The privacy practices of third-party websites</li>
            <li>Any damages or losses caused by third-party websites</li>
          </ul>
          <p>
            Links to third-party websites are provided for convenience only and do not constitute an endorsement. You access third-party websites at your own risk.
          </p>
        </section>

        <section className="mb-12">
          <h2>10. Advertising</h2>
          <p>
            We display advertisements on our Site through Google AdSense and potentially other advertising networks. We do not control or endorse:
          </p>
          <ul>
            <li>The products or services advertised</li>
            <li>The claims made in advertisements</li>
            <li>The accuracy of advertising content</li>
          </ul>
          <p>
            You interact with advertisers at your own risk. We are not responsible for any transactions between you and advertisers, or for any losses or damages resulting from such interactions.
          </p>
        </section>

        <section className="mb-12">
          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless {SITE_NAME}, its owners, operators, employees, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising from or related to:
          </p>
          <ul>
            <li>Your use or misuse of the Site</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Any health issues or damages resulting from your use of information from the Site</li>
            <li>Any content you submit or transmit through the Site</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>12. Termination</h2>
          <p>
            We reserve the right to:
          </p>
          <ul>
            <li>Suspend or terminate your access to the Site at any time, for any reason, without notice</li>
            <li>Modify or discontinue any aspect of the Site</li>
            <li>Remove or refuse to post any content</li>
          </ul>
          <p>
            Upon termination, all rights granted to you under these Terms will immediately cease.
          </p>
        </section>

        <section className="mb-12">
          <h2>13. Changes to the Site and Terms</h2>

          <h3>13.1 Changes to the Site</h3>
          <p>
            We reserve the right to:
          </p>
          <ul>
            <li>Modify, suspend, or discontinue the Site or any portion of it at any time</li>
            <li>Change the data sources we use</li>
            <li>Update or remove nutrition data</li>
            <li>Add or remove features</li>
          </ul>
          <p>
            We are not liable to you or any third party for any modification, suspension, or discontinuation of the Site.
          </p>

          <h3>13.2 Changes to These Terms</h3>
          <p>
            We may revise these Terms at any time by updating this page. Changes are effective immediately upon posting. Your continued use of the Site after changes are posted constitutes acceptance of the revised Terms.
          </p>
          <p>
            We encourage you to review these Terms periodically.
          </p>
        </section>

        <section className="mb-12">
          <h2>14. Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
          <p>
            Any disputes arising from these Terms or your use of the Site shall be resolved in the courts of competent jurisdiction in the United States.
          </p>
        </section>

        <section className="mb-12">
          <h2>15. Dispute Resolution</h2>

          <h3>15.1 Informal Resolution</h3>
          <p>
            If you have any dispute with us, you agree to first contact us at <a href="mailto:contact@caloriedata.io" className="text-primary-600 hover:text-primary-700">contact@caloriedata.io</a> and attempt to resolve the dispute informally.
          </p>

          <h3>15.2 Arbitration</h3>
          <p>
            If we cannot resolve the dispute informally within 30 days, any remaining dispute shall be resolved through binding arbitration rather than in court, except that you may assert claims in small claims court if your claims qualify.
          </p>

          <h3>15.3 Class Action Waiver</h3>
          <p>
            You agree to resolve disputes with us on an individual basis only, and not as part of any class, consolidated, or representative action.
          </p>
        </section>

        <section className="mb-12">
          <h2>16. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
          </p>
        </section>

        <section className="mb-12">
          <h2>17. Entire Agreement</h2>
          <p>
            These Terms, together with our <Link href="/privacy" className="text-primary-600 hover:text-primary-700">Privacy Policy</Link>, constitute the entire agreement between you and {SITE_NAME} regarding the use of the Site, and supersede any prior agreements.
          </p>
        </section>

        <section className="mb-12">
          <h2>18. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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
        </section>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Points to Remember</h3>
          <ul className="space-y-2 text-gray-700">
            <li>⚠️ <strong>Not medical advice:</strong> Always consult healthcare professionals before making dietary changes</li>
            <li>📊 <strong>Data accuracy:</strong> Use information as a general guide only; verify critical information with product labels</li>
            <li>🛡️ <strong>No warranties:</strong> Information provided &quot;as is&quot; without guarantees</li>
            <li>⚖️ <strong>No liability:</strong> We are not responsible for health outcomes or decisions made based on our data</li>
            <li>🎯 <strong>Your responsibility:</strong> You are responsible for your own health and dietary choices</li>
            <li>📧 <strong>Questions?</strong> Contact us at contact@caloriedata.io</li>
          </ul>
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-600">
            By using {SITE_NAME}, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/privacy"
              className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              View Privacy Policy
            </Link>
            <Link
              href="/"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
