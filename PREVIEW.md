# Preview Instructions / تعليمات المعاينة

## How to Open / كيفية الفتح

### Method 1: Direct File (Recommended)
1. Navigate to the project folder
2. Double-click `index.html`
3. It will open in your default browser

### الطريقة 1: فتح الملف مباشرة (موصى به)
1. اذهب إلى مجلد المشروع
2. اضغط مرتين على ملف `index.html`
3. سيفتح في المتصفح الافتراضي

---

### Method 2: Local Server (for full functionality)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### الطريقة 2: سيرفر محلي (للوظائف الكاملة)
```bash
# باستخدام Python 3
python -m http.server 8000
```

ثم افتح: `http://localhost:8000`

---

## What You'll See / ما ستراه

### 1. Hero Section (الصفحة الرئيسية)
- Beautiful centered design with couple names
- Live countdown timer to wedding date
- Elegant typography and animations
- Heart icon and decorative lines

### 2. Details Section (قسم التفاصيل)
- Date and time with calendar icon
- Venue information with location icon
- Google Maps button
- Clean card-based layout

### 3. Timeline Section (جدول الحفل)
- 5 events with custom icons
- Alternating colors (gold and emerald)
- Vertical timeline layout
- Fully responsive on mobile

### 4. RSVP Form (نموذج التأكيد)
- Name input field
- Yes/No attendance radio buttons
- Number of guests dropdown (shows only if "Yes" selected)
- Success message animation after submission

### 5. Interactive Elements
- Floating music player button (bottom left)
- Smooth scroll animations
- Fade-in effects as you scroll
- Responsive design for all screen sizes

---

## Mobile View / العرض على الموبايل

### To Test Mobile View in Browser:
**Chrome/Edge/Firefox:**
- Press `F12` to open Developer Tools
- Press `Ctrl+Shift+M` (or `Cmd+Shift+M` on Mac)
- Select a mobile device from the dropdown

**Safari:**
- Enable Developer Menu: Preferences → Advanced → Show Develop menu
- Develop → Enter Responsive Design Mode

### لاختبار العرض على الموبايل:
**كروم/إيدج/فايرفوكس:**
- اضغط `F12` لفتح أدوات المطور
- اضغط `Ctrl+Shift+M` (أو `Cmd+Shift+M` على ماك)
- اختر جهاز موبايل من القائمة

---

## Customization Checklist / قائمة التخصيص

Before sharing with guests / قبل المشاركة مع الضيوف:

- [ ] Replace `[اكتب اسم العريس]` with groom's name
- [ ] Replace `[اكتب اسم العروس]` with bride's name
- [ ] Update wedding date in JavaScript (line ~580)
- [ ] Add date and time in details section
- [ ] Add venue name
- [ ] Update Google Maps link
- [ ] Customize timeline events and times
- [ ] Add background music file (optional)
- [ ] Test RSVP form
- [ ] Test on mobile device

---

## Features to Note / مميزات مهمة

### ✅ Fully Responsive
- Looks perfect on phones, tablets, and desktops
- 90% of guests will view on mobile - optimized for that!

### ✅ RTL Support
- Full Arabic right-to-left text direction
- Mixed Arabic and English typography

### ✅ Animations
- Countdown timer updates every second
- Fade-in animations on scroll
- Smooth transitions on buttons
- Success message slide-in animation

### ✅ Accessibility
- High contrast colors
- Clear typography
- Large tap targets for mobile
- Semantic HTML structure

### ✅ Performance
- Lightweight (single HTML file)
- CDN-hosted libraries (Tailwind, Font Awesome)
- Fast loading times
- No build process required

---

## Browser Compatibility / التوافق مع المتصفحات

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile Safari (iOS)
✅ Chrome Mobile (Android)

---

## Next Steps / الخطوات التالية

1. **Customize the content** following the README.md guide
2. **Test thoroughly** on multiple devices
3. **Deploy** to GitHub Pages, Netlify, or Vercel
4. **Share the link** with your guests via WhatsApp, SMS, or email

1. **خصص المحتوى** باتباع دليل README.md
2. **اختبر جيداً** على أجهزة متعددة
3. **انشر** على GitHub Pages أو Netlify أو Vercel
4. **شارك الرابط** مع ضيوفك عبر واتساب أو رسائل نصية أو بريد إلكتروني

---

Made with ❤️ for your special day
