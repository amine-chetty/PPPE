# 🚀 Quick Reference Card

## Immediate Next Steps

```bash
# 1. Install dependencies
cd portfolio
npm install

# 2. Start development server
npm run dev

# 3. Edit your content
# Open: src/content/site.ts
# Edit: name, bio, projects, education, experience, skills

# 4. Add images
# Save to: public/images/project-1.jpg, project-2.jpg, etc.

# 5. Add resume
# Save to: public/resume/resume.pdf

# 6. Test
# Visit: http://localhost:3000

# 7. Deploy
# Push to GitHub → vercel.com → Import → Deploy
```

## File Editing Quick Guide

| What | Where | How |
|------|-------|-----|
| Name, email, bio | `src/content/site.ts` | Edit config object |
| Education | `src/content/site.ts` | Add to `education` array |
| Experience | `src/content/site.ts` | Add to `experience` array |
| Skills | `src/content/site.ts` | Add to `skills` array |
| Projects | `src/content/site.ts` | Add to `projects` array |
| Colors | `tailwind.config.ts` | Edit `colors.accent` |
| Images | `public/images/` | Add JPG/PNG files |
| Resume | `public/resume/` | Add PDF file |

## Project Content Template

### Education Entry
```typescript
{
  school: 'University Name',
  degree: 'Bachelor of Engineering',
  field: 'Your Field',
  startYear: 2021,
  endYear: 2025,
  gpa: '3.8/4.0',
  highlights: ['Achievement 1', 'Achievement 2'],
}
```

### Experience Entry
```typescript
{
  company: 'Company Name',
  position: 'Your Position',
  type: 'internship',
  startDate: 'June 2024',
  endDate: 'August 2024',
  description: 'Brief description of what you did...',
  responsibilities: ['Task 1', 'Task 2', 'Task 3'],
  technologies: ['Tech 1', 'Tech 2'],
}
```

### Skill Entry
```typescript
{
  name: 'TypeScript',
  category: 'software',  // or 'engineering', 'design'
  icon: 'Code2',         // Lucide icon
  proficiency: 'expert', // or 'advanced', 'intermediate'
}
```

### Project Entry
```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'One line',
  longDescription: 'Longer version',
  category: 'web',       // or 'electrical', 'industrial'
  tags: ['Tech1', 'Tech2'],
  image: '/images/project-1.jpg',
  github: 'https://github.com/...',
  demo: 'https://...',
  problem: 'The problem...',
  solution: 'How we fixed it...',
  outcome: 'The results...',
  lessonsLearned: ['Lesson 1', 'Lesson 2'],
}
```

## Common Lucide Icons

**Categories**: Code2, Database, Server, GitBranch, Settings, Zap, Lightbulb, CheckCircle2, Grid3x3, Palette, Mail, MapPin, Github, Linkedin, Twitter, ExternalLink, ArrowRight, Menu, Moon, Sun

[See full list](https://lucide.dev)

## Terminal Commands

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm run start      # Run production build
npm run lint       # Check code quality
npm install        # Install dependencies
npm run dev -- -p 3001  # Use different port if 3000 busy
```

## Keyboard Shortcuts (in VSCode)

```
Ctrl/Cmd + Shift + F    # Find across files
Ctrl/Cmd + H            # Find and replace
Ctrl/Cmd + /            # Toggle comment
Ctrl/Cmd + Shift + P    # Command palette
Alt + Up/Down           # Move line up/down
```

## Page Routes

```
/                 → Home
/about            → About
/projects         → Projects (with filters)
/projects/[slug]  → Project detail
/resume           → Resume
/contact          → Contact
/privacy          → Privacy policy
/terms            → Terms
```

## Color Customization

Edit `tailwind.config.ts`:

```typescript
accent: {
  600: '#0284c7',  // Main accent color (change this)
  // Other shades auto-generate
}
```

**Popular color codes**:
- Sky Blue: `#0284c7`
- Emerald: `#059669`
- Rose: `#e11d48`
- Purple: `#9333ea`
- Amber: `#d97706`

## Deployment Options

1. **Vercel** (easiest): vercel.com → Import → Deploy
2. **Netlify**: Connect GitHub, build: `npm run build`, directory: `.next`
3. **Self-hosted**: `npm run build && npm run start`
4. **Docker**: Create Dockerfile and deploy

## Contact Form Integration

Currently: Console logging only

To add email:
```typescript
// In app/api/contact/route.ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({...});
```

See DEPLOYMENT.md for full setup.

## Testing Checklist

- [ ] Visit http://localhost:3000
- [ ] Click through all pages
- [ ] Test dark mode toggle
- [ ] Fill contact form, submit
- [ ] Check "View Projects" and project filters work
- [ ] Test on mobile (F12 → toggle device)
- [ ] Check print resume (Ctrl/Cmd + P)
- [ ] Verify all images load
- [ ] Check all links work

## Pre-Deploy Checklist

- [ ] All content updated
- [ ] Images added
- [ ] Resume PDF added
- [ ] Local testing passed
- [ ] `npm run build` succeeds
- [ ] No console errors

## Documentation Files

- **PROJECT-SUMMARY.md** ← Overview (you are here!)
- **GETTING-STARTED.md** ← Quick start guide
- **README.md** ← Full documentation
- **DEPLOYMENT.md** ← Deployment guide

## Performance Goals

- Initial load: < 3s
- Lighthouse: 90+ on all metrics
- Mobile: Fully responsive
- Accessibility: WCAG AA
- SEO: All pages indexed

## Environment Variables (Optional)

Create `.env.local` for:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
RESEND_API_KEY=your_api_key_here
ADMIN_EMAIL=your@email.com
```

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Module not found | Delete `node_modules`, run `npm install` |
| Build fails | Clear `.next`, run `npm run build` |
| Dark mode wrong | Check localStorage, clear cache |
| Images not showing | Check path in `src/content/site.ts` |
| Contact form errors | Check browser console and network tab |

## Need Help?

1. Check GETTING-STARTED.md
2. Check README.md
3. Check DEPLOYMENT.md
4. Check Next.js docs: https://nextjs.org/docs
5. Create an issue on GitHub

---

**You've got this! 🚀 Happy building!**
