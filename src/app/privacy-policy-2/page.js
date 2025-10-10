'use client'

import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function PrivacyPolicy() {
  return (
    <>
    <Header />
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-900">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Privacy Policy</h1>
        <p className="mb-4">Last updated: October 10, 2025</p>

        <section className="space-y-4">
          <p>
            Welcome to <strong>CS3 POS Pro</strong> . We respect your privacy and are
            committed to protecting your personal information. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your data when you use our mobile app and related
            services (Point-Of-Sales).
          </p>

          <h2 className="text-xl font-semibold mt-6 text-teal-400">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> name, email, phone, business name, and address
              (when provided).
            </li>
            <li>
              <strong>Transactional Data:</strong> sales, inventory, product information, payments, and
              related business activity.
            </li>
            <li>
              <strong>Device & Usage Data:</strong> device model, OS version, IP address, and usage
              patterns.
            </li>
            <li>
              <strong>Cookies / Analytics:</strong> we may use analytics tools like Google Analytics to
              improve our app experience.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 text-teal-400">2. How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, maintain, and improve the Service</li>
            <li>To process transactions and send confirmations</li>
            <li>To offer support and respond to user inquiries</li>
            <li>To detect and prevent fraud or misuse</li>
            <li>To send service-related notices or marketing (if opted in)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 text-teal-400">3. Data Sharing & Disclosure</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>With trusted service providers (hosting, analytics, payment processing)</li>
            <li>For legal reasons, if required by law or government request</li>
            <li>During business transfers, mergers, or acquisitions</li>
            <li>With your consent, for specific services</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 text-teal-400">4. Data Retention & Security</h2>
          <p>
            We retain your data only as long as necessary for business or legal purposes. We use secure
            servers, encrypted communications, and restricted access controls to safeguard your
            information.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-teal-400">5. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or restrict
            processing of your personal data. You can contact us at any time to exercise these rights.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-teal-400">6. Children’s Privacy</h2>
          <p>
            Our app is not directed to children under 13. We do not knowingly collect data from minors.
            If you believe your child has shared information with us, please contact us for deletion.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-teal-400">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Updates will be posted in the app and on
            our website with a new “Last Updated” date.
          </p>

          <h2 className="text-xl font-semibold mt-6 text-teal-400">8. Contact Us</h2>
          <p>
            If you have questions or requests regarding your data, please contact us:
          </p>
          <ul className="list-none space-y-1">
            <li>Email: <a href="mailto:support@cs3.ltd" className="text-teal-400">support@cs3.ltd</a></li>
            <li>Address: 9 Colony Avenue Waterford, P.O. St Catherine, Portmore, Jamaica</li>
            <li>Phone: +1 (876) 833-6852</li>
          </ul>
        </section>
      </div>
      <Footer />
    
    </>
  )
}
