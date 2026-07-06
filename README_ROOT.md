# 💍 Wedding Invitation Website | موقع دعوة زفاف رقمية

<div align="center">

![Wedding](https://img.shields.io/badge/Wedding-Invitation-gold?style=for-the-badge)
![Arabic](https://img.shields.io/badge/Language-Arabic%20%26%20English-green?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Design-Responsive-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-red?style=for-the-badge)

**A beautiful, modern, and fully responsive wedding invitation website**

[Live Demo](#) • [Getting Started](#-quick-start) • [Documentation](#-documentation)

</div>

---

## ✨ Features

- 🎨 **Luxury Design** - Elegant Off-White, Soft Gold, and Deep Emerald color palette
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🌍 **RTL Support** - Complete Arabic right-to-left layout
- ⏰ **Live Countdown** - Real-time countdown timer to wedding day
- ✉️ **RSVP Form** - Interactive form with attendance confirmation
- 📅 **Timeline** - Beautiful wedding agenda with custom icons
- 🗺️ **Google Maps** - Integrated location with map link
- 🎵 **Music Player** - Floating background music control
- ✨ **Animations** - Smooth scroll effects and fade-in transitions
- 🚀 **Easy Deploy** - No build process, works immediately

---

## 🚀 Quick Start

### 1️⃣ Open the Website
Double-click `index.html` to open in your browser

### 2️⃣ Customize
Replace placeholders with your information:
- `[اكتب اسم العريس]` → Your name
- `[اكتب اسم العروس]` → Partner's name
- `[اكتب التاريخ واليوم والساعة]` → Date and time
- `[اسم القاعة أو الفندق]` → Venue name

### 3️⃣ Update Wedding Date
Find line ~580 in `index.html`:
```javascript
const weddingDate = new Date(2024, 11, 25, 20, 0, 0);
//                           Year Month Day Hour Min Sec
```

### 4️⃣ Deploy
Upload to [Netlify](https://netlify.com), [Vercel](https://vercel.com), or [GitHub Pages](https://pages.github.com)

### 5️⃣ Share
Send the link to your guests! 🎉

---

## 📚 Documentation

We've created comprehensive guides for all skill levels:

| Guide | Description | Best For |
|-------|-------------|----------|
| **[QUICK_START_AR.md](QUICK_START_AR.md)** | 🇸🇦 Beginner-friendly Arabic guide | Non-technical users |
| **[EXAMPLES.md](EXAMPLES.md)** | 📝 Before/after customization examples | Visual learners |
| **[README.md](README.md)** | 📖 Complete technical documentation | Everyone |
| **[VISUAL_GUIDE.md](VISUAL_GUIDE.md)** | 🎨 Design system & specifications | Designers/Developers |
| **[PREVIEW.md](PREVIEW.md)** | 👀 How to preview & test | Testing |
| **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** | 📊 Complete project overview | Overview |
| **[config.js](config.js)** | ⚙️ Configuration template | Advanced users |

---

## 🎯 Which Guide Should I Read?

### 🆕 Complete Beginner (No Coding Experience)
Start with **[QUICK_START_AR.md](QUICK_START_AR.md)** (in Arabic)
- Step-by-step instructions
- Screenshots and descriptions
- Common issues solved
- Deployment tutorial

### 📸 Learn by Example
Check **[EXAMPLES.md](EXAMPLES.md)**
- Before/after comparisons
- Real-world examples
- Find & replace guide
- Quick reference checklist

### 🔧 Want Full Details
Read **[README.md](README.md)**
- Complete feature list
- Technical documentation
- RSVP integration (Google Sheets)
- Advanced customization

### 🎨 Designer or Developer
See **[VISUAL_GUIDE.md](VISUAL_GUIDE.md)**
- Color system
- Typography specs
- Animation details
- Responsive breakpoints

---

## 📁 Project Structure

```
wedding-invitation/
│
├── index.html              # Main website (31 KB)
│
├── config.js               # Configuration template
│
├── QUICK_START_AR.md       # Arabic beginner guide
├── EXAMPLES.md             # Customization examples
├── README.md               # Main documentation
├── VISUAL_GUIDE.md         # Design specifications
├── PREVIEW.md              # Preview instructions
└── PROJECT_SUMMARY.md      # Project overview
```

---

## 🎨 Preview

### Hero Section
- Beautiful typography with couple names
- Live countdown timer
- Elegant decorative elements

### Details Section
- Date, time, and venue information
- Google Maps integration
- Clean card-based design

### Timeline Section
- 5 customizable events with icons
- Alternating gold and emerald colors
- Fully responsive layout

### RSVP Section
- Guest name input
- Attendance confirmation (Yes/No)
- Number of guests dropdown
- Success message animation

---

## 🌐 Deployment Options

### Option 1: Netlify (Easiest) ⭐
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the project folder
3. Get instant URL
4. **Free** with HTTPS

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import project
3. Deploy in seconds
4. **Free** with custom domains

### Option 3: GitHub Pages
1. Push to GitHub
2. Enable Pages in Settings
3. Get `username.github.io/wedding` URL
4. **Free** hosting

---

## ✉️ RSVP Integration

### Google Sheets (Recommended)
Collect guest responses automatically in a spreadsheet:

1. Create Google Sheet
2. Add Apps Script (code provided in README)
3. Deploy as Web App
4. Update URL in `index.html`

**Step-by-step tutorial** in [README.md](README.md)

### Other Options
- Firebase Realtime Database
- Formspree / EmailJS
- Custom backend API

---

## 🎵 Add Background Music

1. Add your music file: `wedding-music.mp3`
2. Update in `index.html`:
```html
<source src="wedding-music.mp3" type="audio/mpeg">
```
3. Guests can play/pause using the floating button

---

## 📱 Mobile Optimized

This website is designed **mobile-first** because 90% of guests will view it on their phones:

- ✅ Touch-friendly buttons (44×44px minimum)
- ✅ Readable fonts on small screens
- ✅ Fast loading on 3G/4G
- ✅ Smooth scrolling and animations
- ✅ Works offline after initial load

---

## 🌟 Key Features

| Feature | Description |
|---------|-------------|
| **Single HTML File** | No build process required |
| **CDN Libraries** | Tailwind CSS, Font Awesome, Google Fonts |
| **RTL Support** | Full Arabic language support |
| **Animations** | Fade-in, smooth scroll, transitions |
| **Countdown Timer** | Updates every second |
| **RSVP Form** | Validates inputs, shows success message |
| **Google Maps** | Button link + optional embed |
| **Music Player** | Floating control with play/pause |
| **Responsive** | Mobile, tablet, desktop breakpoints |

---

## 🎨 Color Palette

```css
Off-White:   #FAF9F6  /* Background */
Soft Gold:   #D4AF37  /* Accents, buttons */
Deep Emerald: #0C5449  /* Headers, dark sections */
```

**Alternative**: Replace emerald with Elegant Burgundy (`#800020`) if preferred

---

## 🔧 Customization Levels

### ⭐ Easy (No Coding)
- Names and dates
- Venue information
- Timeline events
- Google Maps link

### ⭐⭐ Moderate (Basic HTML)
- Add/remove timeline items
- Change section order
- Embed Google Maps
- Add images

### ⭐⭐⭐ Advanced (CSS/JS)
- Color scheme
- Custom fonts
- Animations
- RSVP backend integration
- New sections/features

---

## 📊 Technical Specs

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling
- **Vanilla JavaScript** - No frameworks
- **Font Awesome 6** - Icons
- **Google Fonts** - Amiri, Cairo, Playfair Display
- **File Size** - 31 KB (HTML only)
- **Load Time** - < 2s (on 3G with CDN)

---

## ✅ Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (iOS & macOS)
- ✅ Mobile browsers (iOS & Android)
- ✅ All modern browsers with JavaScript enabled

---

## 🛠️ Troubleshooting

### Countdown not working?
Check wedding date format (months are 0-indexed!)

### Music not playing?
Ensure filename is correct and file is in same folder

### Arabic text looks wrong?
Make sure `dir="rtl"` is in `<html>` tag

### Changes not showing?
Hard refresh: `Ctrl+F5` (or `Cmd+Shift+R` on Mac)

**More solutions** in [QUICK_START_AR.md](QUICK_START_AR.md)

---

## 💡 Tips & Best Practices

1. **Test on mobile** - Most guests will use phones
2. **Keep backups** - Save original before editing
3. **Test all links** - Google Maps, RSVP submission
4. **Compress music** - Keep under 5 MB
5. **Use HTTPS** - Free with Netlify/Vercel
6. **Shorten URL** - Use Bitly or TinyURL
7. **Create QR code** - For printed invitations
8. **Send test invites** - To yourself first

---

## 📞 Need Help?

### For Beginners:
- Read [QUICK_START_AR.md](QUICK_START_AR.md) (Arabic, step-by-step)
- Check [EXAMPLES.md](EXAMPLES.md) (visual examples)

### For Technical Users:
- Read [README.md](README.md) (full documentation)
- See [VISUAL_GUIDE.md](VISUAL_GUIDE.md) (design specs)

### Common Questions:
- **How to deploy?** → See [Deployment Options](#-deployment-options)
- **How to add RSVP?** → See [README.md](README.md) Google Sheets section
- **How to customize colors?** → Edit CSS variables in `<style>`

---

## 📜 License

**MIT License** - Free to use and modify for your wedding!

---

## 🎊 Success Stories

This template is perfect for:
- 💍 Wedding invitations
- 💐 Engagement announcements
- 📅 Save-the-date cards
- 🎉 Wedding websites
- 🎈 Anniversary celebrations

---

## 🌟 What Makes This Special?

- ✅ **Complete Solution** - Everything you need in one file
- ✅ **No Coding Required** - Simple find & replace
- ✅ **Production Ready** - Use immediately
- ✅ **Free to Deploy** - Multiple free hosting options
- ✅ **Well Documented** - 7 comprehensive guides
- ✅ **Arabic Support** - Full RTL and bilingual
- ✅ **Mobile First** - Optimized for phones
- ✅ **Beautiful Design** - Luxury and elegant

---

## 🚀 Get Started Now

1. **Clone or download** this repository
2. **Open** `index.html` in your browser
3. **Read** [QUICK_START_AR.md](QUICK_START_AR.md) for beginners
4. **Customize** with your information
5. **Deploy** to free hosting
6. **Share** with your guests!

**Total time**: 20 minutes to a live wedding invitation! ⚡

---

## 💝 Final Words

مبروك العرس! 🎉  
نتمنى لكم حياة سعيدة مليئة بالحب والسعادة! 💕

**Congratulations on your wedding!**  
Wishing you a lifetime of love and happiness! 🎊

---

<div align="center">

**Made with ❤️ for your special day**

[⭐ Star this repo](../../stargazers) • [🐛 Report issue](../../issues) • [💬 Get help](../../discussions)

</div>
