'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/button';
import { SlideUp } from '@/components/animations';
import { siteConfig, getProjects } from '@/src/content/site';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web' },
  { id: 'electrical', label: 'Electrical' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'other', label: 'Other' },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projects = getProjects(selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
        <Container>
          <SlideUp>
            <SectionTitle
              title="Projects"
              description="A collection of work spanning web development, industrial engineering, and electrical systems"
            />
          </SlideUp>
        </Container>
      </section>

      {/* Filter & Projects */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-12">
            {/* Category Filter */}
            <SlideUp delay={0.1}>
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-accent-600 text-white'
                        : 'bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </SlideUp>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.length > 0 ? (
                projects.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx} />
                ))
              ) : (
                <SlideUp className="col-span-full text-center py-12">
                  <p className="text-neutral-600 dark:text-neutral-400">No projects found in this category.</p>
                </SlideUp>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
