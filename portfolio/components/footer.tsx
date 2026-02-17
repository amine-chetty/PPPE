'use client';

import Link from 'next/link';
import { Container } from '@/components/container';
import { siteConfig } from '@/src/content/site';
import * as Icons from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50 mt-20">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-2">{siteConfig.name}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">{siteConfig.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {siteConfig.socials.map((social) => {
                const Icon = Icons[social.icon as keyof typeof Icons] as any;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-neutral-50">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-neutral-50">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
