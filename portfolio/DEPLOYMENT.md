# Complete Portfolio Website - Setup & Deployment Guide

## 📁 File Structure

```
portfolio/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx                          # Home page (Hero, About, Projects, Skills, CTA)
│   │   ├── about/
│   │   │   └── page.tsx                      # About page (Bio, Education, Experience, Values)
│   │   ├── projects/
│   │   │   ├── page.tsx                      # Projects listing with filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx                  # Project detail & case study
│   │   ├── resume/
│   │   │   └── page.tsx                      # Resume display & PDF download
│   │   ├── contact/
│   │   │   └── page.tsx                      # Contact form page
│   │   ├── privacy/
│   │   │   └── page.tsx                      # Privacy policy
│   │   └── terms/
│   │       └── page.tsx                      # Terms of service
│   ├── api/
│   │   └── contact/
│   │       └── route.ts                      # Contact form API endpoint
│   ├── layout.tsx                            # Root layout with navbar/footer
│   ├── globals.css                           # Global styles + Tailwind
│   ├── providers.tsx                         # Theme provider setup
│   └── not-found.tsx                         # 404 page
├── components/
│   ├── animations.tsx                        # Framer Motion wrappers (FadeIn, SlideUp, etc.)
│   ├── badge.tsx                             # Badge component (4 variants)
│   ├── button.tsx                            # Button component (3 variants, 3 sizes)
│   ├── card.tsx                              # Card component with hover effects
│   ├── container.tsx                         # Responsive container wrapper
│   ├── footer.tsx                            # Footer with socials and links
│   ├── navbar.tsx                            # Sticky navbar with theme toggle
│   ├── project-card.tsx                      # Project card with hover animations
│   └── section-title.tsx                     # Section heading component
├── src/
│   ├── content/
│   │   └── site.ts                           # MAIN CONFIG FILE - Edit all content here
│   ├── lib/
│   │   └── utils.ts                          # Utility functions (cn, formatDate, etc.)
│   └── types/
│       └── index.ts                          # TypeScript type definitions
├── public/
│   ├── images/
│   │   ├── project-1.jpg                     # Project thumbnail images (add yours)
│   │   ├── project-2.jpg
│   │   └── README.md
│   ├── resume/
│   │   └── resume.pdf                        # Resume PDF (replace placeholder)
│   ├── favicon.ico                           # Favicon (replace with your icon)
│   ├── robots.txt                            # SEO robots configuration
│   └── sitemap.xml                           # SEO sitemap
├── .eslintrc.json                            # ESLint configuration
├── .gitignore                                # Git ignore rules
├── package.json                              # Dependencies and scripts
├── tsconfig.json                             # TypeScript configuration
├── tailwind.config.ts                        # Tailwind CSS configuration
├── postcss.config.js                         # PostCSS configuration
├── next.config.js                            # Next.js configuration
├── README.md                                 # Project documentation
└── DEPLOYMENT.md                             # This file

```

## 🚀 Quick Start

### 1. Installation

```bash
# Navigate to portfolio directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your site.

### 2. Customize Content

**IMPORTANT: All content is in ONE file:** [src/content/site.ts](src/content/site.ts)

Edit this file to change:
- Name, email, bio, role
- Social media links
- Education entries
- Work experience
- Skills list
- All 6 projects with descriptions and details

```typescript
// Example: Change your name
export const siteConfig: SiteConfig = {
  name: 'Your Full Name',  // ← Edit here
  title: 'Your Title - Portfolio',
  email: 'your.email@example.com',
  // ... rest of config
};
```

### 3. Add Images & Files

1. **Project Images**: 
   - Place images in `public/images/project-1.jpg`, `project-2.jpg`, etc.
   - Update the `image` field in project entries in `src/content/site.ts`

2. **Resume PDF**:
   - Save your resume as `public/resume/resume.pdf`
   - Button automatically points to this file

3. **Favicon**:
   - Replace `public/favicon.ico` with your icon file

## 🎨 Customization Options

### Color Theme

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    // Change from sky blue (400-600) to any color
    600: '#0284c7',  // Change this for main accent color
  },
  // ...
}
```

### Typography & Spacing

All adjustable in `tailwind.config.ts` under `theme.extend`.

### Logo/Brand Name

Edit the "Amine" text in [components/navbar.tsx](components/navbar.tsx):

```typescript
<Link href="/" className="font-bold text-xl">
  Your Name Here  {/* ← Change this */}
</Link>
```

## 📝 Pages Overview

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hero, about snippet, featured projects, skills |
| About | `/about` | Full bio, education, experience, values |
| Projects | `/projects` | Project grid with category filters |
| Project Detail | `/projects/[slug]` | Full case study with problem/solution/outcome |
| Resume | `/resume` | Formatted resume + PDF download |
| Contact | `/contact` | Contact form + social links |
| Privacy | `/privacy` | Privacy policy (placeholder) |
| Terms | `/terms` | Terms of service (placeholder) |

## 🔧 Environment Setup (Optional)

For email functionality, create `.env.local`:

```env
# If integrating with Resend, SendGrid, or similar
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📧 Contact Form Setup

Currently, the contact form:
- ✅ Has frontend validation
- ✅ Shows success/error messages
- ✅ Logs submissions to console

To make it fully functional, integrate with an email service:

### Option 1: Resend (Recommended)
```bash
npm install resend
```

Update `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In POST handler:
await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: process.env.ADMIN_EMAIL,
  subject: `New message from ${name}`,
  html: `<p>${message}</p>`,
});
```

### Option 2: SendGrid
```bash
npm install @sendgrid/mail
```

### Option 3: Nodemailer
```bash
npm install nodemailer
```

## 📱 Testing

### Local Testing
```bash
npm run dev
```

### Build Testing
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## 🚀 Deployment

### Option 1: Vercel (Recommended - Zero Config)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → "Import Git Repository"
4. Select your portfolio repository
5. Click "Deploy"

That's it! Vercel handles everything.

**Environment Variables (if using email)**:
- In Vercel dashboard → Settings → Environment Variables
- Add: `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, etc.

### Option 2: Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### Option 3: Self-Hosted (Render, Railway, etc.)

```bash
# Build
npm run build

# Start
npm run start
```

Set `NODE_ENV=production` in environment.

### Option 4: Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🔍 SEO Optimization

Already configured with:
- ✅ Meta tags on all pages
- ✅ OpenGraph tags for social sharing
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Structured data ready

To improve further:
1. Add Google Analytics: Update `gtag` in `app/layout.tsx`
2. Submit sitemap to Google Search Console
3. Verify domain ownership
4. Get SSL certificate (automatic on Vercel)

## ♿ Accessibility

Already WCAG AA compliant with:
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Color contrast
- Alt text support

Test with:
- Chrome DevTools → Lighthouse
- WebAIM Contrast Checker
- NVDA screen reader

## ⚡ Performance Optimization

Tips for best performance:

1. **Optimize Images**:
   ```bash
   # Use ImageOptim, TinyPNG, or Squoosh
   # Keep images under 500KB
   ```

2. **Monitor Core Web Vitals**:
   - Use PageSpeed Insights
   - Check Lighthouse scores

3. **Cache Strategy**:
   - Static pages cached by Vercel CDN
   - API routes cached with appropriate headers

4. **Bundle Analysis**:
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

## 🐛 Troubleshooting

### Port 3000 in use
```bash
npm run dev -- -p 3001
```

### Build fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Dark mode not working
Check browser localStorage and ensure JavaScript is enabled.

### Contact form not sending
- Check browser console for errors
- Verify email service credentials
- Check spam folder

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

## 📞 Support

For issues or questions:
1. Check README.md
2. Review Next.js documentation
3. Debug with browser DevTools
4. Clear cache and rebuild

## ✅ Checklist Before Launch

- [ ] Updated all content in `src/content/site.ts`
- [ ] Added profile/project images to `public/images/`
- [ ] Added resume PDF to `public/resume/`
- [ ] Changed favicon
- [ ] Set up email service if needed
- [ ] Updated theme colors if desired
- [ ] Tested all pages in development
- [ ] Tested contact form
- [ ] Tested dark mode toggle
- [ ] Checked mobile responsiveness
- [ ] Ran `npm run build` successfully
- [ ] Added custom domain (optional)
- [ ] Set up analytics (optional)
- [ ] Submitted sitemap to Google Search Console

---

**You're all set! 🎉 Your portfolio is ready to go live.**
