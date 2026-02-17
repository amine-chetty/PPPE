import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';
import { SlideUp } from '@/components/animations';
import { siteConfig } from '@/src/content/site';
import { Card } from '@/components/card';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${siteConfig.name} - background, education, and experience`,
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <SlideUp>
            <div className="max-w-3xl space-y-6">
              <SectionTitle
                title="About Me"
                description="My journey in engineering and software development"
              />
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {siteConfig.bio}
              </p>
            </div>
          </SlideUp>
        </Container>
      </section>

      {/* Education */}
      <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <SlideUp delay={0.1}>
            <SectionTitle subtitle="Education" title="Academic Background" />
          </SlideUp>

          <div className="mt-12 space-y-6">
            {siteConfig.education.map((edu, idx) => (
              <SlideUp key={edu.school} delay={0.1 + idx * 0.1}>
                <Card>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg">{edu.school}</h3>
                      <p className="text-accent-600 dark:text-accent-400 font-medium">
                        {edu.degree} in {edu.field}
                      </p>
                      {edu.gpa && (
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">GPA: {edu.gpa}</p>
                      )}
                      {edu.highlights && edu.highlights.length > 0 && (
                        <ul className="mt-3 space-y-1">
                          {edu.highlights.map((highlight) => (
                            <li key={highlight} className="text-sm text-neutral-600 dark:text-neutral-400">
                              • {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-500 whitespace-nowrap">
                      {edu.startYear} - {edu.endYear}
                    </div>
                  </div>
                </Card>
              </SlideUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <SlideUp delay={0.1}>
            <SectionTitle subtitle="Experience" title="Work Experience" />
          </SlideUp>

          <div className="mt-12 space-y-6">
            {siteConfig.experience.map((exp, idx) => (
              <SlideUp key={exp.company} delay={0.1 + idx * 0.1}>
                <Card>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{exp.position}</h3>
                      <p className="text-accent-600 dark:text-accent-400 font-medium">{exp.company}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 uppercase tracking-wide">
                        {exp.type}
                      </p>
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-500 whitespace-nowrap">
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{exp.description}</p>

                  {exp.responsibilities.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-2">Key Responsibilities:</p>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp) => (
                          <li key={resp} className="text-sm text-neutral-600 dark:text-neutral-400">
                            • {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                      <p className="text-xs font-medium text-neutral-500 dark:text-neutral-500 mb-2 uppercase">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </SlideUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Values & Interests */}
      <section className="py-16 sm:py-24">
        <Container>
          <SlideUp delay={0.1}>
            <SectionTitle
              subtitle="Philosophy"
              title="Values & Interests"
              description="What drives my work and passion"
            />
          </SlideUp>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              {
                title: 'Problem Solving',
                description:
                  'I love tackling complex challenges and finding elegant solutions that make a real impact.',
              },
              {
                title: 'Continuous Learning',
                description:
                  'Technology evolves rapidly. I stay curious and committed to learning new skills and methodologies.',
              },
              {
                title: 'Quality & Excellence',
                description:
                  'Whether in industrial processes or code, I believe in delivering high-quality work that stands the test of time.',
              },
              {
                title: 'Collaboration',
                description:
                  'The best solutions come from diverse perspectives. I thrive working with talented teams.',
              },
            ].map((value, idx) => (
              <SlideUp key={value.title} delay={0.1 + idx * 0.1}>
                <Card>
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{value.description}</p>
                </Card>
              </SlideUp>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
