# 🚀 Deployment Guide

Complete guide for deploying your charity website to production.

## Vercel Deployment (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects the configuration
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI

1. **Install CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From project root
   vercel
   ```

4. **Production Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables on Vercel

In your Vercel project dashboard:
1. Go to Settings → Environment Variables
2. Add these variables:
   ```
   NODE_ENV=production
   ```

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

## Alternative: Netlify

### Deploy to Netlify

1. **Build Configuration**
   Create `netlify.toml`:
   ```toml
   [build]
     base = "client"
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy via CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy
   ```

---

## Alternative: Railway

Perfect for full-stack deployment with database support.

1. **Create `railway.json`**
   ```json
   {
     "$schema": "https://railway.app/railway.schema.json",
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "npm run build && npm start",
       "restartPolicyType": "ON_FAILURE",
       "restartPolicyMaxRetries": 10
     }
   }
   ```

2. **Deploy**
   - Go to [railway.app](https://railway.app)
   - Create new project
   - Connect GitHub repo
   - Add PostgreSQL database (if needed)
   - Deploy

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form submission works
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify images load properly
- [ ] Test in multiple browsers
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure custom domain
- [ ] Set up SSL certificate (automatic on Vercel/Netlify)
- [ ] Add SEO meta tags
- [ ] Submit sitemap to Google Search Console
- [ ] Set up monitoring (Sentry, LogRocket)
- [ ] Configure CORS for production domain

---

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use CDN (Cloudinary, Vercel Blob)

2. **Enable Caching**
   ```javascript
   // In vercel.json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "Cache-Control",
             "value": "public, max-age=31536000, immutable"
           }
         ]
       }
     ]
   }
   ```

3. **Analyze Bundle Size**
   ```bash
   cd client
   npm run build
   npx vite-bundle-visualizer
   ```

---

## Monitoring & Analytics

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `client/index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Error Tracking (Sentry)

```bash
npm install @sentry/react
```

```javascript
// In main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

---

## Continuous Deployment

With GitHub integration, every push to `main` branch triggers automatic deployment.

### Branch Previews
- Push to any branch
- Vercel creates preview URL
- Test before merging to main

---

## Rollback

If something goes wrong:

1. **Vercel Dashboard**
   - Go to Deployments
   - Find previous working deployment
   - Click "Promote to Production"

2. **CLI**
   ```bash
   vercel rollback
   ```

---

## Database Setup (Optional)

If adding PostgreSQL:

### On Vercel
- Add Vercel Postgres from marketplace
- Get connection string
- Add to environment variables

### On Railway
- Add PostgreSQL service
- Copy DATABASE_URL
- Add to environment

---

## Security Checklist

- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Set CORS to specific domains
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting
- [ ] Set security headers (Helmet.js)
- [ ] Keep dependencies updated
- [ ] Regular security audits
- [ ] Implement CSP headers

---

## Support & Maintenance

### Regular Updates
```bash
# Update dependencies
npm update
cd client && npm update
cd ../server && npm update
```

### Backup
- Enable automatic backups on your hosting
- Export database regularly
- Keep git repository updated

---

**Need help? Check the main [README.md](./README.md) or open an issue on GitHub.**
