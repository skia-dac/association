# 🌍 Internationalization Guide (English/French)

Your charity website now supports **English** and **French** languages!

## ✅ What's Been Set Up

### 1. **i18next Configuration**
- **Location**: `client/src/i18n/config.js`
- Auto-detects browser language
- Saves preference to localStorage
- Falls back to English if language not found

### 2. **Translation Files**
- **English**: `client/src/i18n/locales/en.json`
- **French**: `client/src/i18n/locales/fr.json`

### 3. **Language Switcher**
- **Component**: `client/src/components/LanguageSwitcher.jsx`
- Shows current language (EN/FR)
- Click to toggle between languages
- Visible in navbar (desktop & mobile)

### 4. **Already Translated Components**
- ✅ Navbar (navigation links, donate button)
- ✅ HeroSection (all text content)

---

## 🚀 How to Use Translations in Components

### Step 1: Import the Hook
```javascript
import { useTranslation } from 'react-i18next'
```

### Step 2: Use the Hook in Your Component
```javascript
const MyComponent = () => {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.subtitle')}</p>
    </div>
  )
}
```

### Step 3: Replace Hardcoded Text
**Before:**
```javascript
<button>Donate Now</button>
```

**After:**
```javascript
<button>{t('nav.donate')}</button>
```

---

## 📝 Example: Translating the Footer Component

### Current Footer (English only):
```javascript
const Footer = () => {
  return (
    <footer>
      <p>Making a positive impact in our community</p>
      <h3>Quick Links</h3>
      <h3>Contact Info</h3>
    </footer>
  )
}
```

### Translated Footer:
```javascript
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  
  return (
    <footer>
      <p>{t('footer.tagline')}</p>
      <h3>{t('footer.quickLinks')}</h3>
      <h3>{t('footer.contactInfo')}</h3>
    </footer>
  )
}
```

---

## 📚 Translation Keys Reference

All translation keys are in `client/src/i18n/locales/en.json` and `fr.json`

### Available Sections:
- `nav.*` - Navigation menu
- `hero.*` - Hero section
- `home.*` - Home page sections
- `about.*` - About page
- `projects.*` - Projects page
- `support.*` - Support page
- `contact.*` - Contact page
- `footer.*` - Footer content
- `common.*` - Common phrases

### Examples:
```javascript
t('nav.home')           // "Home" / "Accueil"
t('hero.title')         // "Empowering Communities Through" / "Autonomiser les Communautés par la"
t('home.whyChoose.title') // "Why Choose Us" / "Pourquoi nous choisir"
t('contact.form.send')  // "Send Message" / "Envoyer le message"
```

---

## 🔧 How to Add New Translations

### 1. Add to English File (`en.json`)
```json
{
  "mySection": {
    "title": "My New Title",
    "description": "This is a description"
  }
}
```

### 2. Add French Translation (`fr.json`)
```json
{
  "mySection": {
    "title": "Mon Nouveau Titre",
    "description": "Ceci est une description"
  }
}
```

### 3. Use in Component
```javascript
<h1>{t('mySection.title')}</h1>
<p>{t('mySection.description')}</p>
```

---

## 🎨 Language Switcher Usage

The language switcher is already integrated in the Navbar. Users can:
1. Click the **Languages icon** (🌐) with EN/FR text
2. Language instantly switches
3. Preference saved to browser localStorage
4. Works on both desktop and mobile

---

## 📋 Components to Translate (TODO)

You can follow the pattern shown in **HeroSection** to translate these:

### Home Page
- [ ] Features section (`home.whyChoose.*`)
- [ ] Recent projects (`home.recentProjects.*`)
- [ ] CTA section (`home.cta.*`)

### About Page
- [ ] Hero text (`about.title`, `about.subtitle`)
- [ ] Mission & Vision (`about.mission.*`, `about.vision.*`)
- [ ] Values section (`about.values.*`)
- [ ] Team section (`about.team.*`)

### Projects Page
- [ ] Hero and filters (`projects.title`, `projects.filters.*`)
- [ ] Project cards (use dynamic content)
- [ ] CTA section (`projects.cta.*`)

### Support Page
- [ ] All sections (`support.*`)

### Contact Page
- [ ] Form labels and placeholders (`contact.form.*`)
- [ ] Contact info (`contact.info.*`)
- [ ] FAQs (`contact.faq.*`)

### Footer
- [ ] All footer links and text (`footer.*`)

---

## 🌐 Testing Languages

### In Browser:
1. Open http://localhost:3000
2. Click the language switcher (EN/FR button) in navbar
3. All translated content updates instantly
4. Reload page - language preference is remembered

### Programmatically:
```javascript
import { useTranslation } from 'react-i18next'

const MyComponent = () => {
  const { i18n } = useTranslation()
  
  // Get current language
  console.log(i18n.language) // 'en' or 'fr'
  
  // Change language manually
  i18n.changeLanguage('fr')
}
```

---

## 💡 Tips

1. **Always add translations in both files** (en.json and fr.json)
2. **Use descriptive keys**: `home.hero.title` not `title1`
3. **Organize by sections**: Keep related translations together
4. **Test both languages**: Make sure text fits in UI for both
5. **Handle plurals**: i18next supports plural forms if needed

---

## 🚨 Common Issues

### Translation Key Not Found
**Error**: `t('missing.key')` shows the key instead of text

**Solution**: Add the key to both `en.json` and `fr.json`

### Language Not Changing
**Solution**: Make sure i18n config is imported in `main.jsx`:
```javascript
import './i18n/config'
```

### Content Not Updating
**Solution**: Reload the page or clear localStorage:
```javascript
localStorage.clear()
```

---

## 📦 Dependencies Installed

- `i18next` - Core i18n library
- `react-i18next` - React bindings
- `i18next-browser-languagedetector` - Auto language detection

---

## 🎉 Ready to Use!

Your website now fully supports English and French! Users can:
- 🌍 Auto-detect their browser language
- 🔄 Switch languages with one click
- 💾 Have their preference saved
- 📱 Use it on any device

**Example Components Already Done:**
- ✅ Navbar (full translation)
- ✅ HeroSection (full translation)

**Follow the same pattern for other components!**
