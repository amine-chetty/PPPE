# Getting Started - First Steps

## 1️⃣ Installation & Setup

```bash
# Navigate to project
cd portfolio

# Install dependencies (this installs all npm packages)
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 2️⃣ Edit Your Content

**All content is in: `src/content/site.ts`**

This is the only file you need to edit to customize your portfolio!

```typescript
export const siteConfig: SiteConfig = {
  name: 'Amine Bentaleb',           // ← Your name
  title: 'Your Title - Portfolio',  // ← Page title
  description: '...',               // ← Meta description
  role: 'Engineering Student / Intern',     // ← Your role
  tagline: 'I build practical systems...', // ← Your tagline
  email: 'amine@example.com',       // ← Your email
  location: 'Algeria',              // ← Your location
  bio: '...',                        // ← Your bio
  
  // Social links
  socials: [
    { platform: 'GitHub', url: 'https://github.com/yourname', icon: 'Github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'Linkedin' },
    // ... add/remove as needed
  ],
  
  // Education
  education: [
    {
      school: 'University of Algiers',
      degree: 'Bachelor of Engineering',
      field: 'Industrial Engineering',
      startYear: 2021,
      endYear: 2025,
      gpa: '3.8/4.0',
      highlights: ['Dean's List', 'Best Project Award'],
    },
    // ... add more
  ],
  
  // Work experience
  experience: [
    {
      company: 'Paint Manufacturing Co',
      position: 'Engineering Intern',
      type: 'internship',
      startDate: 'June 2024',
      endDate: 'August 2024',
      description: '...',
      responsibilities: ['...', '...'],
      technologies: ['CAD', 'Process Optimization'],
    },
  ],
  
  // Skills
  skills: [
    { name: 'TypeScript', category: 'software', icon: 'Code2', proficiency: 'expert' },
    { name: 'React', category: 'software', icon: 'Zap', proficiency: 'expert' },
    // ... 12 total skills
  ],
  
  // Projects
  projects: [
    {
      id: 'project-slug',
      title: 'Project Title',
      description: 'Short description',
      longDescription: 'Longer description',
      category: 'web',  // web, electrical, industrial, other
      tags: ['React', 'Node.js', 'TypeScript'],
      image: '/images/project-1.jpg',
      github: 'https://github.com/...',
      demo: 'https://...',
      problem: 'The problem we solved...',
      solution: 'How we solved it...',
      outcome: 'The results...',
      lessonsLearned: ['Lesson 1', 'Lesson 2'],
    },
    // ... 6 total projects
  ],
};
```

## 3️⃣ Add Your Images & Files

### Project Images
1. Prepare images (recommend 1200x800px, optimized)
2. Save as `public/images/project-1.jpg`, `project-2.jpg`, etc.
3. Update image paths in project entries in `src/content/site.ts`

### Resume PDF
1. Export your resume as PDF
2. Save as `public/resume/resume.pdf`
3. A download button will automatically appear on the `/resume` page

### Favicon
1. Create an icon (32x32px)
2. Save as `public/favicon.ico`
3. Replace the existing placeholder

## 4️⃣ Customize Colors & Theme

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    // Change to your preferred color
    // Current is sky blue - change these hex values
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
  },
}
```

## 5️⃣ Test Locally

```bash
# In your terminal
npm run dev

# Visit http://localhost:3000
# Click through all pages
# Toggle dark mode
# Test contact form
# Test on mobile (DevTools F12)
```

## 6️⃣ Deploy to Vercel (FREE)

1. Push your code to GitHub (create a repo on github.com)
2. Go to https://vercel.com
3. Sign in with GitHub
4. Click "New Project"
5. Select your portfolio repository
6. Click "Deploy"

That's it! Your site is now live.

## 📖 File Guide

| File | Purpose | Edit? |
|------|---------|-------|
| `src/content/site.ts` | All your content | ✅ YES |
| `tailwind.config.ts` | Colors and design tokens | ✅ Maybe |
| `components/*.tsx` | UI components | ❌ Rarely |
| `app/(routes)/*.tsx` | Pages | ❌ No |
| `public/images/` | Your images | ✅ YES |
| `public/resume/` | Your resume PDF | ✅ YES |

## 🎨 Design Customization Quick Tips

### Change Main Color
Edit `src/content/site.ts` - look for mentions of "accent" color palette in Tailwind config

### Change Font
Search `font-family` in `app/globals.css` or add Google Fonts to `app/layout.tsx`

### Change Spacing/Layout
Edit `tailwind.config.ts` under `theme.extend.spacing`

### Change Dark Mode Default
Edit `app/providers.tsx` - change `defaultTheme="system"` to `"light"` or `"dark"`

## 🔗 Icon Names

Used in skills and socials. Available icons from Lucide:
- Code2, CodeBrackets, Database, Github, Linkedin
- Mail, MapPin, Settings, Zap, Lightbulb
- CheckCircle2, GitBranch, Grid3x3, Palette, Figma
- And 100+ more!

## 📞 Contact Form Setup

Works out of the box with:
- Form validation
- Success/error messages
- Automatic form clearing

To actually send emails, integrate with:
- **Resend** (easiest)
- **SendGrid**
- **Nodemailer**
- **AWS SES**

See DEPLOYMENT.md for integration steps.

## ✅ Pre-Launch Checklist

Before deploying:
- [ ] Updated name and bio
- [ ] Added 6 projects
- [ ] Added project images
- [ ] Updated resume PDF
- [ ] Updated all social links
- [ ] Added education history
- [ ] Added work experience
- [ ] Updated skills list
- [ ] Tested all pages locally
- [ ] Tested dark mode
- [ ] Tested on mobile
- [ ] Run `npm run build` successfully

## 🚀 Next Steps

1. Edit `src/content/site.ts`
2. Add images to `public/images/`
3. Test locally with `npm run dev`
4. Deploy to Vercel
5. Share with the world! 🎉

---

**That's it! You now have a professional portfolio website.**
