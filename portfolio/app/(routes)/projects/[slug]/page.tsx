import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/container';
import { Button } from '@/components/button';
import { Badge } from '@/components/badge';
import { Card } from '@/components/card';
import { SlideUp } from '@/components/animations';
import { siteConfig, getProjectBySlug, getProjects } from '@/src/content/site';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.longDescription,
    openGraph: {
      title: project.title,
      description: project.longDescription,
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getProjects(project.category).filter(
    (p) => p.id !== project.id
  );

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
        <Container size="md">
          <SlideUp>
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>

            <div className="space-y-6">
              <div>
                <Badge variant="accent" className="mb-4">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400">
                  {project.longDescription}
                </p>
              </div>

              {/* CTA Links */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </SlideUp>
        </Container>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <Container size="md">
          <SlideUp delay={0.1}>
            <div className="relative w-full h-96 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 rounded-xl flex items-center justify-center">
              <span className="text-neutral-500 dark:text-neutral-400">{project.title} Screenshot</span>
            </div>
          </SlideUp>
        </Container>
      </section>

      {/* Case Study Content */}
      <section className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800">
        <Container size="md">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Problem */}
              <SlideUp delay={0.1}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Problem</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </SlideUp>

              {/* Solution */}
              <SlideUp delay={0.2}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Solution</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </SlideUp>

              {/* Screenshots Placeholder */}
              <SlideUp delay={0.3}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Screenshots</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="relative w-full h-48 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 rounded-lg flex items-center justify-center"
                      >
                        <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                          Screenshot {i}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </SlideUp>

              {/* Lessons Learned */}
              <SlideUp delay={0.4}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Lessons Learned</h2>
                  <ul className="space-y-3">
                    {project.lessonsLearned.map((lesson, idx) => (
                      <li key={idx} className="flex gap-3 text-neutral-600 dark:text-neutral-400">
                        <span className="text-accent-600 dark:text-accent-400 font-bold">→</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideUp>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Outcome */}
              <SlideUp delay={0.2}>
                <Card>
                  <h3 className="font-bold text-lg mb-3">Outcome</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {project.outcome}
                  </p>
                </Card>
              </SlideUp>

              {/* Tech Stack */}
              <SlideUp delay={0.3}>
                <Card>
                  <h3 className="font-bold text-lg mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="accent" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </SlideUp>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800">
          <Container size="md">
            <SlideUp delay={0.1}>
              <h2 className="text-3xl font-bold mb-12">Related Projects</h2>
            </SlideUp>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedProjects.slice(0, 2).map((relProject, idx) => (
                <Link key={relProject.id} href={`/projects/${relProject.id}`}>
                  <Card interactive>
                    <h3 className="font-bold text-lg mb-2">{relProject.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {relProject.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
