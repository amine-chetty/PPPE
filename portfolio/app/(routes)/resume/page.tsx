import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { SectionTitle } from '@/components/section-title';
import { Card } from '@/components/card';
import { SlideUp } from '@/components/animations';
import { PrintButton } from '@/components/print-button';
import { siteConfig } from '@/src/content/site';
import { Download, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume',
  description: `${siteConfig.name}'s resume and CV`,
};

export default function Resume() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
        <Container size="md">
          <SlideUp>
            <div className="space-y-6">
              <SectionTitle
                title="Resume"
                description="Education, experience, and skills overview"
              />

              <div className="flex flex-wrap gap-4">
                <a href={siteConfig.resume} download>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="secondary">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </SlideUp>
        </Container>
      </section>

      {/* Resume Content */}
      <section className="py-16 sm:py-24">
        <Container size="md">
          <div className="space-y-12 print:space-y-8">
            {/* Contact Info */}
            <SlideUp delay={0.1}>
              <Card className="bg-accent-50 dark:bg-accent-950/20 border-accent-200 dark:border-accent-900">
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold">{siteConfig.name}</h1>
                  <p className="text-accent-600 dark:text-accent-400">{siteConfig.role}</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm pt-2">
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-600">
                      {siteConfig.email}
                    </a>
                    <span>•</span>
                    <span>{siteConfig.location}</span>
                  </div>
                </div>
              </Card>
            </SlideUp>

            {/* Summary */}
            <SlideUp delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {siteConfig.bio}
                </p>
              </div>
            </SlideUp>

            {/* Education */}
            <SlideUp delay={0.3}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="space-y-4">
                  {siteConfig.education.map((edu) => (
                    <Card key={edu.school} className="print:break-inside-avoid">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-bold">{edu.school}</h3>
                          <p className="text-accent-600 dark:text-accent-400">
                            {edu.degree} in {edu.field}
                          </p>
                          {edu.gpa && (
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                              GPA: {edu.gpa}
                            </p>
                          )}
                        </div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-500 whitespace-nowrap">
                          {edu.startYear} - {edu.endYear}
                        </div>
                      </div>
                      {edu.highlights && edu.highlights.length > 0 && (
                        <ul className="mt-3 space-y-1 text-sm">
                          {edu.highlights.map((highlight) => (
                            <li key={highlight} className="text-neutral-600 dark:text-neutral-400">
                              • {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </SlideUp>

            {/* Experience */}
            <SlideUp delay={0.4}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Experience</h2>
                <div className="space-y-4">
                  {siteConfig.experience.map((exp) => (
                    <Card key={exp.company} className="print:break-inside-avoid">
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <div>
                          <h3 className="font-bold">{exp.position}</h3>
                          <p className="text-accent-600 dark:text-accent-400">{exp.company}</p>
                        </div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-500 whitespace-nowrap">
                          {exp.startDate} - {exp.endDate}
                        </div>
                      </div>

                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        {exp.description}
                      </p>

                      {exp.responsibilities.length > 0 && (
                        <ul className="space-y-1 text-sm mb-3">
                          {exp.responsibilities.map((resp) => (
                            <li key={resp} className="text-neutral-600 dark:text-neutral-400">
                              • {resp}
                            </li>
                          ))}
                        </ul>
                      )}

                      {exp.technologies.length > 0 && (
                        <div className="text-xs">
                          <span className="font-medium text-neutral-700 dark:text-neutral-300">
                            Technologies:{' '}
                          </span>
                          <span className="text-neutral-600 dark:text-neutral-400">
                            {exp.technologies.join(', ')}
                          </span>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </SlideUp>

            {/* Skills */}
            <SlideUp delay={0.5}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Skills</h2>

                {['software', 'engineering', 'design', 'other'].map((category) => {
                  const categorySkills = siteConfig.skills.filter((s) => s.category === category);
                  if (categorySkills.length === 0) return null;

                  return (
                    <div key={category} className="mb-6 print:mb-4">
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {categorySkills.map((s) => s.name).join(', ')}
                      </p>
                    </div>
                  );
                })}
              </div>
            </SlideUp>

            {/* Print CTA */}
            <SlideUp delay={0.6}>
              <div className="print:hidden flex justify-center pt-8">
                <PrintButton />
              </div>
            </SlideUp>
          </div>
        </Container>
      </section>
    </>
  );
}
