# 🚀 Quick Start Guide

Get your charity website up and running in 5 minutes!

## Prerequisites
- Node.js v18+ installed
- npm or yarn
- A code editor (VS Code recommended)

## Step 1: Install Dependencies

```bash
# Install all dependencies (root + client + server)
npm run install:all
```

## Step 2: Start Development Servers

```bash
# Start both frontend and backend
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## Step 3: Open in Browser

Navigate to http://localhost:3000 and you should see your charity website!

## What's Next?

### Customize Content
1. **Branding**: Update logo and colors in `client/src/components/Navbar.jsx` and `tailwind.config.js`
2. **Pages**: Edit content in `client/src/pages/*.jsx`
3. **Contact Info**: Update in `client/src/components/Footer.jsx`

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

### Add Database (Optional)
```bash
cd server
npm install prisma @prisma/client
npx prisma init
```

## Common Issues

**Port already in use?**
Change ports in:
- `client/vite.config.js` (frontend port)
- `server/src/app.js` (backend port)

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## Need Help?

Check the full [README.md](./README.md) for detailed documentation.

Happy building! 🎉
