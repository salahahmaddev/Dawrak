# 💍 Wedding Invitation Website - دعوة زفاف رقمية

A beautiful, modern, and fully responsive single-page wedding invitation website designed with elegance and luxury in mind.

## ✨ Features

- 🎨 **Elegant Design**: Luxury color palette with Off-White, Soft Gold (#D4AF37), and Deep Emerald Green
- 📱 **Fully Responsive**: Optimized for mobile devices (90% of guests will view on phones)
- ⏱️ **Live Countdown Timer**: Real-time countdown to the wedding date
- 🗺️ **Google Maps Integration**: Embedded map with location details
- 📝 **RSVP Form**: Beautiful form for guests to confirm attendance
- 📅 **Wedding Timeline**: Visual timeline of the event schedule
- 🎵 **Background Music**: Optional background music with mute/play controls
- ✨ **Smooth Animations**: Fade-in effects and smooth scrolling
- 🌐 **RTL Support**: Full Arabic language support with right-to-left layout

## 🚀 Quick Start

1. Open `index.html` in any modern web browser
2. Customize the content (see below)
3. Add your wedding music file (optional)
4. Deploy to any web hosting service

## 📝 How to Customize

### 1. **Names of Bride & Groom**
Find and replace in `index.html` (around line 135):
```html
<span class="block mb-2">[اكتب اسم العريس]</span>
...
<span class="block mt-2">[اكتب اسم العروس]</span>
```

### 2. **Wedding Date & Time**

**For the Countdown Timer** (line 356 in JavaScript):
```javascript
const WEDDING_DATE = new Date(2026, 11, 31, 19, 0, 0);
// Format: (Year, Month-1, Day, Hour, Minute)
// Note: Month is 0-indexed (0=Jan, 1=Feb, ... 11=Dec)
```

**For Display Text** (around line 207):
```html
[اكتب التاريخ واليوم]<br>
[اكتب الساعة]
```

### 3. **Venue Name & Location**
Find and replace (around line 220):
```html
[اسم القاعة أو الفندق]
```

### 4. **Google Maps**
Replace the map embed URL (around line 237):
1. Go to [Google Maps](https://maps.google.com)
2. Search for your venue
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the `src` attribute in the iframe

### 5. **Wedding Timeline**
Edit the timeline items (around lines 260-335):
- Change times (7:00 PM, 8:00 PM, etc.)
- Edit event titles and descriptions
- Add or remove timeline items as needed

### 6. **Background Music**
1. Add your music file (e.g., `wedding-music.mp3`) to the same folder as `index.html`
2. The file name is referenced on line 91:
```html
<source src="wedding-music.mp3" type="audio/mpeg">
```

### 7. **Color Scheme**
To change colors, edit the CSS variables (around line 25):
```css
:root {
    --color-off-white: #FAF9F6;
    --color-soft-gold: #D4AF37;
    --color-deep-emerald: #2C5F4F;
    --color-elegant-burgundy: #6B2737;
}
```

## 🎨 Font Customization

The website uses:
- **Amiri** - For Arabic decorative text
- **Cairo** - For Arabic body text
- **Playfair Display** - For names (elegant serif)

To change fonts, edit the Google Fonts link (line 13) and CSS font-family properties.

## 📤 RSVP Form Integration

The RSVP form currently shows a success message. To collect actual responses, you can integrate with:

### Option 1: Google Sheets (Recommended - Free)
1. Use [Google Apps Script Web App](https://github.com/jamiewilson/form-to-google-sheets)
2. Replace the form submission code (around line 464)

### Option 2: Email Service (EmailJS)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Add their SDK and update the form handler

### Option 3: Your Own Backend
- Send POST request to your server endpoint
- Uncomment and modify lines 470-474

## 🌐 Deployment Options

### Easy & Free Options:
1. **GitHub Pages**: Push to GitHub and enable Pages
2. **Netlify**: Drag and drop your folder
3. **Vercel**: Connect your repository
4. **Cloudflare Pages**: Fast and free hosting

### Steps for GitHub Pages:
```bash
git init
git add .
git commit -m "Initial wedding website"
git remote add origin YOUR_REPO_URL
git push -u origin main
```
Then enable Pages in repository settings.

## 📱 Mobile Optimization

The website is fully optimized for mobile:
- Responsive design with Tailwind CSS
- Touch-friendly buttons and forms
- Optimized font sizes for small screens
- Fast loading on mobile networks

## 🎯 Browser Support

- ✅ Chrome (recommended)
- ✅ Safari
- ✅ Firefox
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

1. **Test on Mobile**: Most guests will view on phones - test thoroughly!
2. **Keep it Light**: Optimize images and music file size for faster loading
3. **Share via WhatsApp**: The link will show a beautiful preview
4. **QR Code**: Generate a QR code for printed invitations
5. **Analytics**: Add Google Analytics to track views

## 🔧 Advanced Customization

### Add Background Pattern/Image
```css
.hero-pattern {
    background-image: url('your-image.jpg');
    background-size: cover;
}
```

### Add More Sections
Copy any existing section and modify the content:
```html
<section id="new-section" class="py-20 px-4">
    <!-- Your content -->
</section>
```

## 📸 Adding Images

To add photos of the couple:
```html
<img src="couple-photo.jpg" alt="صورة العروسين" 
     class="rounded-lg shadow-xl max-w-md mx-auto">
```

## 🐛 Troubleshooting

**Music not playing?**
- Some browsers block autoplay. The user must click the music button first.

**Countdown showing 00:00:00?**
- Check that the wedding date is in the future
- Verify the date format in JavaScript (Month is 0-indexed)

**Map not showing?**
- Ensure the iframe src URL is complete
- Check that you have a valid Google Maps embed link

## 📄 License

This is a free template. Feel free to use and customize for your wedding!

---

## 🤝 Support

If you need help customizing this website, please refer to the comments in the HTML file or search for the text markers:
- `[اكتب اسم العريس]` - Groom's name
- `[اكتب اسم العروس]` - Bride's name
- `[اكتب التاريخ واليوم]` - Date
- `[اكتب الساعة]` - Time
- `[اسم القاعة أو الفندق]` - Venue name

---

**Made with ❤️ for your special day**

تصميم مبارك - نتمنى لكم حياة سعيدة
