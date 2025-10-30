# 💙 Charity Website - Non-Profit Association MVP

A modern, production-ready charity website built with **React**, **Vite**, **Tailwind CSS**, and **Express.js**. This MVP is designed for non-profit organizations to showcase their mission, projects, and enable community support.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![Express](https://img.shields.io/badge/Express-4.18-000000?logo=express)

---

## 🚀 Features

### Frontend
- ✅ **5 Core Pages**: Home, About, Projects, Support Us, Contact
- ✅ **Modern UI/UX**: Responsive design with Tailwind CSS
- ✅ **Smooth Animations**: Framer Motion for delightful interactions
- ✅ **Form Validation**: React Hook Form for reliable data handling
- ✅ **Icon Library**: Lucide React for beautiful, consistent icons
- ✅ **Fast Performance**: Built with Vite for lightning-fast development
- ✅ **SEO Ready**: Semantic HTML and meta tags

### Backend
- ✅ **REST API**: Express.js server with modern best practices
- ✅ **Contact Form Endpoint**: Validated submissions with express-validator
- ✅ **Security**: Helmet.js for security headers
- ✅ **CORS Enabled**: Cross-origin resource sharing configured
- ✅ **Error Handling**: Centralized error management
- ✅ **Extensible**: Ready for database integration (PostgreSQL + Prisma)

---

## 📁 Project Structure

```
charity-website/
│
├── client/                    # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── HeroSection.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Support.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                    # Backend (Express)
│   ├── src/
│   │   ├── middleware/
│   │   │   └── errorHandler.js
│   │   ├── routes/
│   │   │   └── contact.routes.js
│   │   └── app.js
│   ├── package.json
│   ├── vercel.json
│   └── .env.example
│
├── .gitignore
├── package.json               # Root package.json
├── vercel.json                # Vercel deployment config
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Vite 5** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first CSS framework |
| **React Router DOM** | Client-side routing |
| **React Hook Form** | Form management |
| **Framer Motion** | Animation library |
| **Lucide React** | Icon library |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **express-validator** | Request validation |
| **Helmet.js** | Security middleware |
| **CORS** | Cross-origin resource sharing |
| **dotenv** | Environment variables |

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd charity-website
```

### 2️⃣ Install Dependencies
```bash
# Install root dependencies
npm run install:all

# Or install manually
npm install
cd client && npm install
cd ../server && npm install
```

### 3️⃣ Environment Setup
Create a `.env` file in the `server` directory:
```bash
cd server
cp .env.example .env
```

Edit `.env` with your configuration:
```env
PORT=5000
NODE_ENV=development
```

---

## 🚀 Running the Application

### Development Mode (Frontend + Backend)
Run both servers concurrently:
```bash
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

### Run Individually

**Frontend only:**
```bash
cd client
npm run dev
```

**Backend only:**
```bash
cd server
npm run dev
```

### Production Build
```bash
# Build frontend
npm run build:client

# Start backend
cd server
npm start
```

---

## 🌐 Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy to Production:**
```bash
vercel --prod
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the configuration
6. Click "Deploy"

### Environment Variables on Vercel

Add these in your Vercel project settings:
```
NODE_ENV=production
```

### Deployment Configuration

The `vercel.json` files are already configured:
- **Root**: Routes API calls to backend, static files to frontend
- **Client**: Static build output
- **Server**: Serverless functions

---

## 🔧 Customization Guide

### Branding
1. **Update Logo**: Replace `Heart` icon in `Navbar.jsx` and `Footer.jsx`
2. **Colors**: Edit `tailwind.config.js` primary and secondary colors
3. **Fonts**: Change font in `tailwind.config.js` and `index.html`

### Content
1. **Pages**: Edit content in `client/src/pages/*.jsx`
2. **Contact Info**: Update in `Footer.jsx` and `Contact.jsx`
3. **Projects**: Modify the `projects` array in `Projects.jsx`

### Images
Replace placeholder images with your own:
- Use services like **Cloudinary** or **Vercel Blob** for image hosting
- Update image URLs in page components
- Recommended dimensions: 1200x800px for project images

### Add Database (PostgreSQL + Prisma)

1. **Install Prisma:**
```bash
cd server
npm install prisma @prisma/client
npx prisma init
```

2. **Define Schema** in `prisma/schema.prisma`:
```prisma
model Contact {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  subject   String
  message   String
  createdAt DateTime @default(now())
}
```

3. **Update `.env`:**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/charity_db"
```

4. **Run Migrations:**
```bash
npx prisma migrate dev --name init
```

5. **Update `contact.routes.js`** to save to database

---

## 📧 Email Integration (Optional)

### Using Nodemailer

1. **Install:**
```bash
cd server
npm install nodemailer
```

2. **Create Email Service** (`server/src/services/email.service.js`):
```javascript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export const sendContactEmail = async (data) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'info@charityhope.org',
    subject: `Contact Form: ${data.subject}`,
    html: `<p><strong>From:</strong> ${data.name} (${data.email})</p>
           <p><strong>Message:</strong> ${data.message}</p>`
  })
}
```

3. **Update** `contact.routes.js` to use the service

---

## 🧪 Testing

### Frontend Testing (Future)
```bash
cd client
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Backend Testing (Future)
```bash
cd server
npm install -D jest supertest
```

---

## 🔒 Security Best Practices

- ✅ **Helmet.js**: Security headers enabled
- ✅ **Input Validation**: All form inputs validated
- ✅ **CORS**: Configure for specific domains in production
- ✅ **Environment Variables**: Sensitive data in `.env`
- ⚠️ **HTTPS**: Always use HTTPS in production (Vercel provides this)
- ⚠️ **Rate Limiting**: Add `express-rate-limit` for API protection

### Add Rate Limiting:
```bash
cd server
npm install express-rate-limit
```

```javascript
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

app.use('/api/', limiter)
```

---

## 🎨 UI Components & Styling

### Tailwind Custom Classes
Defined in `client/src/index.css`:
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.section-container` - Max-width container
- `.section-padding` - Consistent padding
- `.heading-1`, `.heading-2`, `.heading-3` - Typography
- `.card` - Card component

### Color Scheme
- **Primary**: Blue (`primary-600`)
- **Secondary**: Purple (`secondary-600`)
- **Accent**: Green (success states)

Customize in `tailwind.config.js`

---

## 📱 Mobile Responsiveness

All pages are fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Test with Chrome DevTools or real devices.

---

## 🚦 API Endpoints

### Health Check
```
GET /api/health
```
**Response:**
```json
{
  "success": true,
  "message": "Charity Website API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Contact Form
```
POST /api/contact
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Inquiry",
  "message": "Hello, I would like to..."
}
```
**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us!",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry",
    "receivedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### Get Contact Info
```
GET /api/contact
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 or 5000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Build Errors
```bash
# Check Node version
node -v  # Should be v18+

# Update dependencies
npm update
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For utility-first CSS
- **Vercel** - For seamless deployment
- **Open Source Community** - For incredible tools

---

## 📞 Support

For questions or support:
- **Email**: info@charityhope.org
- **Website**: [Your Website]
- **GitHub Issues**: [Repository Issues]

---

## 🗺️ Roadmap

- [ ] User authentication system
- [ ] Admin dashboard for content management
- [ ] Blog/News section
- [ ] Multi-language support (i18n)
- [ ] Payment gateway integration (Stripe)
- [ ] Newsletter subscription
- [ ] Social media feed integration
- [ ] Analytics dashboard
- [ ] SEO optimization tools
- [ ] Automated email notifications

---

## 💡 Tips for Success

1. **Regular Updates**: Keep dependencies updated
2. **Content Strategy**: Update projects and news regularly
3. **SEO**: Add meta descriptions and OpenGraph tags
4. **Analytics**: Integrate Google Analytics or similar
5. **Monitoring**: Use tools like Sentry for error tracking
6. **Backups**: Regular database backups
7. **Performance**: Monitor with Lighthouse scores
8. **Security**: Regular security audits

---

**Built with ❤️ for Non-Profit Organizations**

*Making a difference, one line of code at a time.*
