import type { SiteConfig } from '@/src/types';

export const siteConfig: SiteConfig = {
  name: 'Mohamed Amine BENNOUAR',
  title: 'Mohamed Amine BENNOUAR - Engineering Student & Developer',
  description:
    'Portfolio of Mohamed Amine BENNOUAR, an engineering student and developer building practical systems from industrial processes to modern web applications.',
  role: 'Engineering Student / Intern',
  tagline: 'I build practical systems — from industrial processes to modern web apps.',
  email: 'mohamed_amine.bennouar@g.enp.edu.dz',
  location: 'Algiers, Algeria',
  bio:'' ,

  resume: '/resume/resume.pdf',

  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/amine-chetty',
      icon: 'Github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'Linkedin',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com',
      icon: 'Twitter',
    },
    {
      platform: 'Email',
      url: 'mailto:amine@example.com',
      icon: 'Mail',
    },
  ],

  education: [
    {
      school: 'Ecole Nationale Polytechnique',
      degree: 'Automation, Control & Robotics Engineering',
      field: 'Electrical Engineering',
      startYear: 2023,
      endYear: 2028,
      gpa: '3.8/4.0',
      highlights: [
        'Dean\'s List (2023, 2024)',
        'Awarded Best Senior Project (2024)',
        'President of Tech Club (2023-2024)',
      ],
    },
    {
      school: 'Secondary School',
      degree: 'Baccalaureate',
      field: 'Science - Technology Stream',
      startYear: 2018,
      endYear: 2021,
    },
  ],

  experience: [
    {
      company: 'Premium Paint Manufacturing',
      position: 'Engineering Intern',
      type: 'internship',
      startDate: 'June 2024',
      endDate: 'August 2024',
      description:
        'Worked on paint production optimization and quality control systems. Developed solutions to improve manufacturing efficiency and reduce waste.',
      responsibilities: [
        'Analyzed paint formulation processes and identified efficiency gains',
        'Assisted in designing spray application systems for industrial use',
        'Created technical documentation for manufacturing procedures',
        'Collaborated with production team to implement process improvements',
        'Conducted quality control testing on final products',
      ],
      technologies: ['Process Optimization', 'CAD', 'Quality Assurance', 'Technical Writing'],
    },
  ],

  skills: [
    {
      name: 'TypeScript',
      category: 'software',
      icon: 'Code2',
      proficiency: 'expert',
    },
    {
      name: 'React',
      category: 'software',
      icon: 'Zap',
      proficiency: 'expert',
    },
    {
      name: 'Next.js',
      category: 'software',
      icon: 'Boxes',
      proficiency: 'advanced',
    },
    {
      name: 'Node.js',
      category: 'software',
      icon: 'Server',
      proficiency: 'advanced',
    },
    {
      name: 'Tailwind CSS',
      category: 'design',
      icon: 'Palette',
      proficiency: 'expert',
    },
    {
      name: 'CAD (SolidWorks)',
      category: 'engineering',
      icon: 'Grid3x3',
      proficiency: 'advanced',
    },
    {
      name: 'Process Engineering',
      category: 'engineering',
      icon: 'Settings',
      proficiency: 'intermediate',
    },
    {
      name: 'Quality Control',
      category: 'engineering',
      icon: 'CheckCircle2',
      proficiency: 'intermediate',
    },
    {
      name: 'MongoDB',
      category: 'software',
      icon: 'Database',
      proficiency: 'advanced',
    },
    {
      name: 'Git & GitHub',
      category: 'software',
      icon: 'GitBranch',
      proficiency: 'expert',
    },
    {
      name: 'UI/UX Design',
      category: 'design',
      icon: 'Figma',
      proficiency: 'intermediate',
    },
    {
      name: 'Problem Solving',
      category: 'other',
      icon: 'Lightbulb',
      proficiency: 'expert',
    },
  ],

  projects: [
    {
      id: 'paint-formulation-app',
      title: 'Paint Formulation Calculator',
      description: 'Web app for calculating optimal paint formulations based on specifications',
      longDescription: 'A full-stack application built during my internship to streamline paint formulation calculations.',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB', 'Web App'],
      image: '/images/project-1.jpg',
      github: 'https://github.com',
      demo: 'https://example.com',
      problem:
        'Paint formulation required manual calculations that were error-prone and time-consuming. Production team needed faster, more accurate formulations.',
      solution:
        'Built an interactive calculator that stores formulation templates, computes recipes based on batch size, and exports production sheets.',
      outcome: 'Reduced formulation time by 60%, eliminated calculation errors, improved production efficiency.',
      lessonsLearned: [
        'Understanding domain-specific requirements is crucial for effective solutions',
        'User feedback loops accelerate product refinement',
        'Technical documentation helps with knowledge transfer',
      ],
    },
    {
      id: 'industrial-dashboard',
      title: 'Manufacturing Dashboard',
      description: 'Real-time monitoring system for industrial production metrics',
      longDescription: 'A responsive dashboard for tracking production KPIs and system health.',
      category: 'industrial',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Real-time Data'],
      image: '/images/project-2.jpg',
      github: 'https://github.com',
      demo: 'https://example.com',
      problem:
        'Production supervisors lacked real-time visibility into key metrics. Data was scattered across multiple legacy systems.',
      solution:
        'Created a unified dashboard integrating data from various sensors and systems, displaying metrics like throughput, defect rates, and equipment status.',
      outcome: 'Enabled faster decision-making, identified production bottlenecks, improved equipment maintenance scheduling.',
      lessonsLearned: [
        'Real-time systems require careful consideration of performance and latency',
        'Data visualization can reveal patterns not obvious in raw metrics',
        'User training is essential for adoption of new tools',
      ],
    },
    {
      id: 'spray-system-design',
      title: 'Spray Application System Design',
      description: 'CAD modeling and optimization of industrial spray equipment',
      longDescription: 'Complete design optimization for paint spraying systems using CAD.',
      category: 'industrial',
      tags: ['SolidWorks', 'CAD', 'Process Engineering', 'Mechanical Design'],
      image: '/images/project-3.jpg',
      problem:
        'Current spray systems had inconsistent paint application patterns, leading to quality issues and material waste.',
      solution:
        'Redesigned nozzle geometry and spray patterns using computational fluid dynamics and CAD. Optimized air pressure and flow rates.',
      outcome: 'Improved paint coverage uniformity by 40%, reduced material waste by 25%, enhanced product quality.',
      lessonsLearned: [
        'Simulation before manufacturing saves time and resources',
        'Small design changes can have significant performance impacts',
        'Collaboration between engineering and operations is vital',
      ],
    },
    {
      id: 'portfolio-website',
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio showcasing projects and skills',
      longDescription: 'A clean, accessible portfolio built with Next.js and Tailwind CSS.',
      category: 'web',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/images/project-4.jpg',
      github: 'https://github.com',
      demo: 'https://example.com',
      problem:
        'Needed a professional online presence to showcase projects and connect with potential employers and collaborators.',
      solution:
        'Built a fast, accessible, SEO-friendly portfolio with dynamic content configuration and smooth animations.',
      outcome: 'Created a platform for professional visibility and networking.',
      lessonsLearned: [
        'Good design is about clarity and usability, not complexity',
        'Accessibility benefits all users and improves SEO',
        'Content separation from presentation makes updates easier',
      ],
    },
    {
      id: 'inventory-system',
      title: 'Warehouse Inventory System',
      description: 'Full-stack inventory management system for warehouse operations',
      longDescription: 'Complete inventory tracking and management application.',
      category: 'web',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Real-time Sync'],
      image: '/images/project-5.jpg',
      github: 'https://github.com',
      demo: 'https://example.com',
      problem:
        'Warehouse operations relied on manual tracking, leading to discrepancies and inefficient stock management.',
      solution:
        'Developed real-time inventory system with barcode scanning, automated stock level alerts, and analytics dashboard.',
      outcome: 'Reduced inventory discrepancies by 95%, improved stock rotation, enabled data-driven purchasing decisions.',
      lessonsLearned: [
        'Automation of manual processes provides significant ROI',
        'Real-world constraints often shape technical decisions',
        'User experience directly impacts system adoption rates',
      ],
    },
    {
      id: 'quality-analytics',
      title: 'Quality Analytics Platform',
      description: 'Data analytics platform for quality control metrics and trends',
      longDescription: 'Analytics platform for tracking and analyzing quality control data over time.',
      category: 'industrial',
      tags: ['Data Analytics', 'Visualization', 'Python', 'Machine Learning'],
      image: '/images/project-6.jpg',
      github: 'https://github.com',
      demo: 'https://example.com',
      problem:
        'Quality issues were reactive rather than preventive. Lacked ability to identify trends and root causes.',
      solution:
        'Built analytics platform with historical data analysis, statistical process control charts, and predictive quality alerts.',
      outcome: 'Shifted to preventive quality management, reduced defect rates by 35%, improved product consistency.',
      lessonsLearned: [
        'Data-driven insights are more convincing than anecdotal evidence',
        'Visualizations help communicate insights to non-technical stakeholders',
        'Historical data is valuable for identifying patterns and trends',
      ],
    },
  ],
};

export function getProjectBySlug(slug: string) {
  return siteConfig.projects.find(
    (project) => project.id === slug || project.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
}

export function getProjects(category?: string) {
  if (!category || category === 'all') {
    return siteConfig.projects;
  }
  return siteConfig.projects.filter((project) => project.category === category);
}
