import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-700">
            Last updated: September 2024
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to the Lost and Found portal of Thapar University. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Personal Identification Information: This includes your name, email address, phone number, and other contact details.</li>
            <li>Item Information: Details about lost or found items you report, including descriptions, images, and location.</li>
            <li>Usage Data: Information about how you interact with our website, such as your IP address, browser type, and pages visited.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Facilitate the reporting and searching of lost and found items.</li>
            <li>Improve our services and website functionality.</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Send periodic emails related to your reports or updates about our services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Protect Your Information</h2>
          <p className="mb-4">
            We implement a variety of security measures to maintain the safety of your personal information. These include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Data Encryption: We use encryption to protect sensitive data transmitted between your browser and our servers.</li>
            <li>Access Controls: Only authorized personnel have access to your personal information.</li>
            <li>Regular Security Reviews: We regularly review and update our security practices to ensure your information remains protected.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Access and update your personal information.</li>
            <li>Request deletion of your personal information, subject to legal and regulatory requirements.</li>
            <li>Opt-out of receiving promotional emails from us at any time.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="mb-4">
            <strong>Email:</strong> technical_team@thapar.edu
          </p>
          <p>
            <strong>Address:</strong> Thapar University, Patiala, Punjab, India
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
