'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/card';
import { Badge } from '@/components/badge';
import { SlideUp, HoverScale } from '@/components/animations';
import type { Project } from '@/src/types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <SlideUp delay={index * 0.1}>
      <Link href={`/projects/${project.id}`}>
        <HoverScale>
          <Card interactive className="h-full flex flex-col overflow-hidden">
            {/* Image Placeholder */}
            <div className="relative w-full h-48 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                {project.title}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="accent" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-800">
                {project.github && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                    className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </button>
                )}
                {project.demo && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}
                    className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                )}
              </div>
            </div>
          </Card>
        </HoverScale>
      </Link>
    </SlideUp>
  );
}
