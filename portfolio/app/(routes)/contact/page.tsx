'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { SectionTitle } from '@/components/section-title';
import { SlideUp } from '@/components/animations';
import { siteConfig } from '@/src/content/site';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
        <Container size="md">
          <SlideUp>
            <SectionTitle
              title="Get in Touch"
              description="Have a project in mind? Let's talk about it. I'm always open to discussing new ideas and opportunities."
            />
          </SlideUp>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-24">
        <Container size="md">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <SlideUp delay={0.1} className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900/50 focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900/50 focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900/50 focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="Project inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900/50 focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg text-green-900 dark:text-green-100 text-sm">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg text-red-900 dark:text-red-100 text-sm">
                    ✗ Failed to send message. Please try again or email directly.
                  </div>
                )}
              </form>
            </SlideUp>

            {/* Contact Info */}
            <SlideUp delay={0.2}>
              <div className="space-y-6">
                {/* Email Card */}
                <Card>
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 text-sm"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Location Card */}
                <Card>
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        {siteConfig.location}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Social Links Card */}
                <Card>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <div className="space-y-3">
                    {siteConfig.socials.map((social) => {
                      const Icon = Icons[social.icon as keyof typeof Icons] as any;
                      return (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-accent-600 dark:hover:text-accent-400 text-sm"
                        >
                          <Icon className="w-4 h-4" />
                          {social.platform}
                          <ExternalLink className="w-3 h-3 ml-auto" />
                        </a>
                      );
                    })}
                  </div>
                </Card>

                {/* Resume Card */}
                <Card>
                  <h3 className="font-semibold mb-3">Resume</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    Download my full resume to learn more about my experience.
                  </p>
                  <a href={siteConfig.resume} download>
                    <Button size="sm" variant="secondary" className="w-full">
                      Download PDF
                    </Button>
                  </a>
                </Card>
              </div>
            </SlideUp>
          </div>
        </Container>
      </section>

      {/* Availability Banner */}
      <section className="py-16 border-t border-neutral-200 dark:border-neutral-800">
        <Container size="md">
          <SlideUp delay={0.1}>
            <Card className="bg-gradient-to-r from-accent-50 to-accent-100 dark:from-accent-950 dark:to-accent-900/50 text-center">
              <h2 className="text-2xl font-bold mb-2">Open to Opportunities</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Currently looking for internships, freelance projects, and collaboration opportunities.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                Response time: Usually within 24 hours
              </p>
            </Card>
          </SlideUp>
        </Container>
      </section>
    </>
  );
}
