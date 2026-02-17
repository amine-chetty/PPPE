# Amine's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design**: Clean, minimal aesthetic with excellent typography and spacing
- 🎨 **Dark Mode**: Full dark mode support with system preference detection
- ⚡ **Fast**: Optimized for performance with Next.js 15 App Router
- 📱 **Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: WCAG-compliant with semantic HTML and ARIA attributes
- 🔍 **SEO Optimized**: Meta tags, OpenGraph, and structured data
- 🎬 **Animations**: Smooth, subtle animations with Framer Motion
- 🎯 **Dynamic Content**: All content pulls from a single configuration file
- 📧 **Contact Form**: Working contact form with validation and success/error states
- 🎨 **Component Library**: Reusable, well-organized components

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, next-themes

## Project Structure

```
portfolio/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx          # Home page
│   │   ├── about/
│   │   ├── projects/
│   │   ├── resume/
│   │   └── contact/
│   ├── api/
│   │   └── contact/          # Contact form API
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── providers.tsx         # Theme provider
├── components/
│   ├── animations.tsx        # Framer Motion components
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── container.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   ├── project-card.tsx
│   └── section-title.tsx
├── src/
│   ├── content/
│   │   └── site.ts          # ALL CONTENT CONFIGURATION
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── types/
│       └── index.ts         # TypeScript types
├── public/
│   ├── images/              # Project images
│   ├── resume/              # Resume PDF
│   ├── robots.txt
│   └── sitemap.xml
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Customization

### Edit Your Content

All site content is centralized in [src/content/site.ts](src/content/site.ts):

```typescript
export const siteConfig: SiteConfig = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  // ... and more fields
};
```

Update this file to customize:
- Personal information (name, role, bio, email, location)
- Social media links
- Education history
- Work experience
- Skills (with categories and proficiency levels)
- Projects (with descriptions, tech tags, links, case study details)

The entire site automatically pulls from this configuration, so no other files need to be edited.

### Customize Styling

- **Colors**: Edit the theme in [tailwind.config.ts](tailwind.config.ts)
- **Typography**: Adjust in `tailwind.config.ts` under `theme.extend.typography`
- **Spacing & Components**: Modify Tailwind configuration or component files

### Add Your Images

1. Create actual image files in `public/images/` (replace the placeholder entries)
2. Project images are referenced in the `projects` array in `src/content/site.ts`
3. Favicon: Replace `public/favicon.ico` with your own icon file

### Add Your Resume

1. Create a PDF of your resume
2. Save it as `public/resume/resume.pdf` (replacing the placeholder)
3. Update the `resume` field in `src/content/site.ts` if you change the path

## Pages Overview

### 1. Home (`/`)
- Hero section with CTA buttons
- About snapshot with key stats
- Featured projects (3 cards)
- Skills showcase
- Call-to-action banner

### 2. About (`/about`)
- Full bio
- Education timeline
- Experience timeline
- Values & interests section

### 3. Projects (`/projects`)
- Filterable project grid (All/Web/Electrical/Industrial/Other)
- Project cards with tech tags
- Dynamic project detail pages with case studies

### 4. Resume (`/resume`)
- Formatted resume display
- Print-friendly styles
- Download PDF button
- Education, experience, and skills sections

### 5. Contact (`/contact`)
- Contact form with validation
- Contact information cards
- Social links
- Availability status

## API Routes

### POST `/api/contact`
Handles contact form submissions with validation.

**Request body:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message received successfully"
}
```

**Note**: Currently logs submissions to console. For production:
- Integrate with email service (Resend, SendGrid, etc.)
- Store in database
- Set up environment variables for API keys

## Dark Mode

Dark mode is automatically implemented via `next-themes`:
- Respects system preference by default
- Toggle button in navbar
- User preference is saved to localStorage

## Performance Tips

- Images: Optimize and compress before adding to `public/images/`
- Lazy loading: Images and components are optimized automatically
- Build size: Tree-shaking removes unused code
- Lighthouse: Target scores should be 90+ for all categories

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy with a single click

Environment variables (if using email service):
- `NEXT_PUBLIC_SITE_URL`: Your domain

### Other Platforms

This project works on any platform that supports Node.js (Netlify, Render, AWS, etc.)

```bash
npm run build
npm run start
```

## SEO

- ✅ Metadata tags on all pages
- ✅ OpenGraph and Twitter card tags
- ✅ Structured data (schema.org)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Mobile-friendly
- ✅ Fast Core Web Vitals

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast ratios (WCAG AA)
- ✅ Alt text support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Updating Dependencies

To keep dependencies up to date:

```bash
npm outdated           # Check for updates
npm update             # Update all packages
npm audit              # Check for vulnerabilities
```

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Clear cache
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Build issues
```bash
npm run lint
npm run build
```

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please create an issue in your repository or contact through the contact form on the website.

---

**Happy coding!** 🚀
