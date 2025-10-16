function PrivacyPolicy() {
  try {
    return (
      <div className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300" data-name="privacy-policy" data-file="components/PrivacyPolicy.js">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Last updated: October 2025
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="leading-relaxed mb-4">
                The P. Masemola Foundation ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or interact with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Information We Collect
              </h2>
              <p className="leading-relaxed mb-4">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide when filling out forms or contacting us.</li>
                <li><strong>Donation Information:</strong> Payment details and donation history when you contribute to our foundation.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process donations and maintain donor records</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about our programs and initiatives</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Disclosure of Your Information
              </h2>
              <p className="leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf (e.g., payment processors).</li>
                <li><strong>For Legal Purposes:</strong> We may disclose your information if required by law or in response to valid legal requests.</li>
                <li><strong>With Your Consent:</strong> We may share your information with your explicit consent.</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We do not sell, trade, or rent your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Your Rights
              </h2>
              <p className="leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of receiving marketing communications</li>
                <li>Withdraw consent where we rely on consent to process your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our services are not directed to children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you believe we have collected information 
                from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Contact Us
              </h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <p className="mb-2"><strong>P. Masemola Foundation</strong></p>
                <p className="mb-2">Ext 15, Mamelodi East</p>
                <p className="mb-2">Pretoria, 0122, South Africa</p>
                <p className="mb-2">Email: <a href="mailto:pmasemolafoundation@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">pmasemolafoundation@gmail.com</a></p>
                <p>Phone: <a href="tel:+27662950540" className="text-purple-600 dark:text-purple-400 hover:underline">+27 66 295 0540</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PrivacyPolicy component error:', error);
    return null;
  }
}
