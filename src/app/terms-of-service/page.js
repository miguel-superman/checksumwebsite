'use client'

import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function TermsOfUse() {
  return (

    <>
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-12 text-gray-900">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">Terms of Use</h1>
        <p className="mb-4">Last updated: October 10, 2025</p>

        <section className="space-y-4">
            <p>
            Welcome to <strong>CS3 POS Pro</strong> App. These Terms govern your access
            to and use of the Service. By using the App, you agree to comply with and be bound by these
            Terms.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">1. Eligibility</h2>
            <p>You must be at least 18 years old or the age of majority in your jurisdiction.</p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">2. License</h2>
            <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to use the App
            for your business purposes, subject to these Terms.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
            <li>Maintain confidentiality of your account credentials.</li>
            <li>Use the Service in compliance with applicable laws and regulations.</li>
            <li>Do not interfere with, reverse engineer, or misuse the App or its APIs.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">4. Payments</h2>
            <p>
            Fees and subscriptions (if applicable) are billed according to your plan. Payments are
            non-refundable except where required by law.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">5. Intellectual Property</h2>
            <p>
            All content, code, design, and trademarks belong to CS3 POS Pro or its licensors. You may not
            reproduce or distribute any materials without written consent.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">6. Termination</h2>
            <p>
            We may suspend or terminate your account for violating these Terms or for fraudulent,
            abusive, or illegal use of the Service.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">7. Disclaimer</h2>
            <p>
            The Service is provided “as is” without any warranties, express or implied. We do not
            guarantee uninterrupted or error-free operation.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">8. Limitation of Liability</h2>
            <p>
            To the fullest extent permitted by law, CS3 POS Pro is not liable for indirect, incidental,
            special, or consequential damages, including loss of data or profits.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">9. Indemnification</h2>
            <p>
            You agree to indemnify and hold CS3 POS Pro harmless from claims, damages, or expenses arising
            from your misuse of the Service or violation of these Terms.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">10. Governing Law</h2>
            <p>
            These Terms are governed by the laws of <strong>Jamaica</strong>. Any disputes shall be
            resolved in the courts of <strong>St. Catherine, Jamaica</strong>.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">11. Changes to Terms</h2>
            <p>
            We may update these Terms from time to time. Continued use after updates means you accept
            the new Terms.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-teal-400">12. Contact Us</h2>
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
