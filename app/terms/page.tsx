import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ContentLab",
  description: "Terms and conditions for using ContentLab.",
};

export default function TermsPage() {
  return (
    <article className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Terms of Service</h1>
      
      <div className="prose prose-gray prose-lg space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using ContentLab, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">2. Description of Service</h2>
          <p className="text-gray-600 leading-relaxed">
            ContentLab is a web-based tool for creating and testing educational media content and preparing it for sharing on social platforms with user control.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">3. User Responsibilities</h2>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for your use of the service and for any content you provide, including compliance with applicable laws, rules, and regulations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">4. Acceptable Use</h2>
          <p className="text-gray-600 leading-relaxed">
            You agree not to misuse ContentLab or help anyone else do so. This includes not attempting to gain unauthorized access to our systems or interfering with the service for other users.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">5. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            We retain all right, title, and interest in and to ContentLab, its logos, software, and content. Your use of the service does not grant you ownership of any intellectual property.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">6. Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed">
            ContentLab may integrate with third-party social platforms. Your use of those services is governed by their respective terms and privacy policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">7. Disclaimer of Warranties</h2>
          <p className="text-gray-600 leading-relaxed italic bg-gray-50 p-4 rounded-lg">
            CONTENTLAB IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">8. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            To the maximum extent permitted by law, ContentLab shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">9. Termination</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to suspend or terminate your access to ContentLab at any time, with or without cause.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">10. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We may modify these terms from time to time. We will provide notice of significant changes through the application or via email.
          </p>
        </section>

        <section className="space-y-4 pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">11. Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about these Terms, please contact us at:
            <br />
            <a href="mailto:support@contentlab.app" className="text-gray-900 font-medium hover:underline">
              support@contentlab.app
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
