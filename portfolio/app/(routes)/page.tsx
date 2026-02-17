import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Badge } from '@/components/badge';
import { SectionTitle } from '@/components/section-title';
import { ProjectCard } from '@/components/project-card';
import { SlideUp, FadeIn } from '@/components/animations';
import { siteConfig, getProjects } from '@/src/content/site';
import { ArrowRight, Code2, Zap, Briefcase } from 'lucide-react';
import * as Icons from 'lucide-react';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function Home() {
  const featuredProjects = getProjects().slice(0, 3);
  const topSkills = siteConfig.skills.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 border-b border-neutral-200 dark:border-neutral-800">
        <Container className="space-y-8">
          <SlideUp delay={0}>
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                  Hey, I'm{' '}
                  <span className="bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">
                    {siteConfig.name.split(' ')[0]}
                  </span>
                </h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400">{siteConfig.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button className="group">
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </SlideUp>
        </Container>
      </section>

      {/* About Snapshot */}
      <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideUp delay={0.1}>
              <div className="space-y-4">
                <SectionTitle
                  subtitle="About"
                  title="Engineering + Software"
                  description="Combining technical rigor with creative problem-solving"
                />
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {siteConfig.bio}
                </p>
                <Link href="/about">
                  <Button variant="ghost" className="group pl-0">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center">
                  <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">4+</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Years Learning</p>
                </Card>
                <Card className="text-center">
                  <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">6+</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Projects Built</p>
                </Card>
                <Card className="text-center">
                  <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">12+</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Tech Skills</p>
                </Card>
              </div>
            </SlideUp>
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <div className="space-y-12">
            <SlideUp delay={0.1}>
              <div className="flex items-end justify-between">
                <SectionTitle
                  subtitle="Portfolio"
                  title="Featured Projects"
                  description="Showcase of recent work across engineering and software"
                />
                <Link href="/projects" className="hidden sm:inline">
                  <Button variant="ghost">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </SlideUp>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>

            <div className="flex justify-center sm:hidden">
              <Link href="/projects">
                <Button>
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <SlideUp delay={0.1}>
            <SectionTitle
              subtitle="Skills"
              title="Technologies & Tools"
              description="Proficient across engineering, software, and design domains"
            />
          </SlideUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {topSkills.map((skill, idx) => {
              const IconComponent = (Icons as any)[skill.icon];
              if (!IconComponent) return null;
              return (
                <SlideUp key={skill.name} delay={0.1 + idx * 0.05}>
                  <Card className="text-center hover:border-accent-300 dark:hover:border-accent-700">
                    <IconComponent className="w-8 h-8 mx-auto text-accent-600 dark:text-accent-400 mb-3" />
                    <p className="text-sm font-medium">{skill.name}</p>
                  </Card>
                </SlideUp>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-24">
        <Container>
          <SlideUp delay={0.1}>
            <Card className="bg-gradient-to-r from-accent-50 to-accent-100 dark:from-accent-950 dark:to-accent-900/50 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to work together?</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg mx-auto">
                Let's discuss your next project or how I can help bring your ideas to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button>Get in Touch</Button>
                </Link>
                <a href="mailto:amine@example.com">
                  <Button variant="secondary">Send Email</Button>
                </a>
              </div>
            </Card>
          </SlideUp>
        </Container>
      </section>
    </>
  );
}
