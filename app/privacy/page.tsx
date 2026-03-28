import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ContentLab",
  description: "Privacy practices for ContentLab.",
};

export default function PrivacyPage() {
  return (
    <article className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Privacy Policy</h1>
      
      <div className="prose prose-gray prose-lg space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            ContentLab may process information provided by users to create and prepare content. This includes:
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
              <li>Email address and basic profile information (if registered)</li>
              <li>Content and media you upload or provide for processing</li>
              <li>Usage data and analytics to improve our service</li>
            </ul>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">2. How We Use Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We use the information we collect to:
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
              <li>Provide, maintain, and improve ContentLab services</li>
              <li>Develop and refine our educational content creation tools</li>
              <li>Communicate with you regarding updates, security, and support</li>
              <li>Ensure the security and integrity of our systems</li>
            </ul>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">3. Cookies and Analytics</h2>
          <p className="text-gray-600 leading-relaxed">
            We use cookies and similar technologies to understand how users interact with our website and to improve user experience. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">4. Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed">
            ContentLab may use third-party services for:
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
              <li>Hosting and cloud infrastructure</li>
              <li>Product analytics and performance monitoring</li>
              <li>AI-based processing of user-provided content</li>
              <li>Social platform integrations (requires user authorization)</li>
            </ul>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">5. Data Retention</h2>
          <p className="text-gray-600 leading-relaxed">
            We retain your information as long as necessary to provide our services or as required by law. Users can request deletion of their data at any time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">6. Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, or alteration.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">7. Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">8. Children's Privacy</h2>
          <p className="text-gray-600 leading-relaxed">
            ContentLab is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">9. Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy periodically. Significant changes will be communicated through our application or via email.
          </p>
        </section>

        <section className="space-y-4 pt-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-2">10. Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            For privacy-related questions or requests, please contact us at:
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
