import { Container } from '@/components/container';
import Link from 'next/link';
import { Button } from '@/components/button';

export default function PrivacyPolicy() {
  return (
    <div className="py-16 sm:py-24">
      <Container size="sm">
        <div className="space-y-8 prose dark:prose-invert">
          <div>
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-8">
                ← Back
              </Button>
            </Link>
            <h1>Privacy Policy</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Last updated: February 5, 2026
            </p>
          </div>

          <section className="space-y-4">
            <h2>Introduction</h2>
            <p>
              This portfolio website respects your privacy. This policy explains how information
              is collected and used.
            </p>
          </section>

          <section className="space-y-4">
            <h2>Information We Collect</h2>
            <p>
              When you use our contact form, we collect:
            </p>
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2>How We Use Information</h2>
            <p>
              Information from the contact form is used only to respond to your inquiry.
            </p>
          </section>

          <section className="space-y-4">
            <h2>Analytics</h2>
            <p>
              This site may use analytics tools to understand visitor behavior. No personally
              identifiable information is collected through analytics.
            </p>
          </section>

          <section className="space-y-4">
            <h2>Contact</h2>
            <p>
              If you have privacy concerns, please contact us through the contact form.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
