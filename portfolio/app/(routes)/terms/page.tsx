import { Container } from '@/components/container';
import Link from 'next/link';
import { Button } from '@/components/button';

export default function TermsPage() {
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
            <h1>Terms of Service</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Last updated: February 5, 2026
            </p>
          </div>

          <section className="space-y-4">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using this portfolio website, you accept and agree to be bound
              by the terms and provision of this agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials
              (information or software) on this website for personal, non-commercial transitory
              viewing only.
            </p>
          </section>

          <section className="space-y-4">
            <h2>Disclaimer</h2>
            <p>
              The materials on this website are provided on an 'as is' basis. We make no
              warranties, expressed or implied, and hereby disclaim and negate all other
              warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2>Limitations</h2>
            <p>
              In no event shall our company or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or profit, or due to
              business interruption) arising out of the use or inability to use the materials
              on this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2>Accuracy of Materials</h2>
            <p>
              The materials appearing on this website could include technical, typographical,
              or photographic errors. We do not warrant that any of the materials on our
              website are accurate, complete, or current.
            </p>
          </section>

          <section className="space-y-4">
            <h2>Contact</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us
              through the contact form on our website.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
