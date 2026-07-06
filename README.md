# 🎉 دعوة زفاف رقمية - Digital Wedding Invitation

موقع دعوة زفاف أنيق وعصري، مصمم بشكل كامل باستخدام HTML و Tailwind CSS و JavaScript.

A modern, elegant, and fully responsive wedding invitation website built with HTML, Tailwind CSS, and vanilla JavaScript.

## ✨ المميزات / Features

- ✅ تصميم فاخر وأنيق / Luxury elegant design
- ✅ متجاوب بالكامل (موبايل، تابلت، ديسكتوب) / Fully responsive
- ✅ عداد تنازلي للعرس / Wedding countdown timer
- ✅ نموذج تأكيد حضور تفاعلي / Interactive RSVP form
- ✅ جدول الحفل مع أيقونات / Wedding timeline with icons
- ✅ دعم الخرائط / Google Maps integration
- ✅ زر موسيقى خلفية / Background music player
- ✅ رسوم متحركة سلسة / Smooth scroll animations
- ✅ دعم اللغة العربية (RTL) / Arabic RTL support
- ✅ خطوط Google Fonts جميلة / Beautiful Google Fonts

## 🎨 الألوان المستخدمة / Color Palette

- **Off-White**: `#FAF9F6` - الخلفية الرئيسية
- **Soft Gold**: `#D4AF37` - اللون الذهبي الناعم
- **Deep Emerald**: `#0C5449` - الأخضر الزمردي
- **Elegant Burgundy**: `#800020` - (اختياري)

## 📝 كيفية التخصيص / How to Customize

### 1. تعديل الأسماء / Edit Names

افتح ملف `index.html` وابحث عن:

```html
<p class="font-english text-3xl md:text-5xl text-yellow-700 mb-4">
    [اكتب اسم العريس]
</p>
```

```html
<p class="font-english text-3xl md:text-5xl text-yellow-700">
    [اكتب اسم العروس]
</p>
```

استبدل النص بأسماء العريس والعروسة.

### 2. تحديث تاريخ الزفاف / Update Wedding Date

ابحث عن السطر في نهاية الملف:

```javascript
const weddingDate = new Date(2024, 11, 15, 19, 0, 0);
```

قم بتغييره إلى التاريخ الصحيح:
```javascript
// Format: new Date(Year, Month-1, Day, Hour, Minute)
// Example: December 15, 2024, 7:00 PM
const weddingDate = new Date(2024, 11, 15, 19, 0, 0);
```

**ملاحظة مهمة**: الأشهر تبدأ من 0 (يناير = 0، ديسمبر = 11)

### 3. تفاصيل الحفل / Event Details

ابحث عن قسم "تفاصيل الحفل" وقم بتعديل:

```html
<p class="font-arabic text-xl md:text-2xl text-gray-600">
    [اكتب التاريخ واليوم والساعة]
</p>
```

```html
<p class="font-arabic text-xl md:text-2xl text-gray-600 mb-6">
    [اسم القاعة أو الفندق]
</p>
```

### 4. إضافة موقع Google Maps / Add Google Maps

1. اذهب إلى [Google Maps](https://www.google.com/maps)
2. ابحث عن موقع الحفل
3. اضغط على "Share" → "Embed a map"
4. انسخ كود الـ iframe
5. استبدل الرابط في السطر:

```html
<a href="https://maps.google.com/?q=" target="_blank" ...>
```

أضف عنوان الموقع بعد `q=`، مثلاً:
```html
<a href="https://maps.google.com/?q=Riyadh+Saudi+Arabia" target="_blank" ...>
```

**لتفعيل الخريطة المدمجة**:
- ابحث عن `<div class="map-container"...>`
- احذف `style="display: none;"`
- استبدل رابط الـ `iframe src` بالكود من Google Maps

### 5. تعديل جدول الحفل / Edit Timeline

ابحث عن قسم "جدول الحفل" وقم بتعديل الأوقات والأحداث حسب برنامجك:

```html
<h3 class="font-arabic text-xl md:text-2xl font-bold text-gray-800 mb-2">
    استقبال الضيوف
</h3>
<p class="font-arabic text-lg text-yellow-600 font-semibold">
    7:00 مساءً
</p>
```

### 6. إضافة موسيقى خلفية / Add Background Music

1. أضف ملف الموسيقى (MP3) إلى مجلد المشروع
2. ابحث عن:

```html
<audio id="backgroundMusic" loop>
    <source src="" type="audio/mpeg">
</audio>
```

3. أضف اسم الملف:

```html
<audio id="backgroundMusic" loop>
    <source src="wedding-music.mp3" type="audio/mpeg">
</audio>
```

### 7. ربط نموذج RSVP بقاعدة بيانات / Connect RSVP Form

يمكنك ربط النموذج مع:

#### أ) Google Sheets (سهل ومجاني)
1. أنشئ Google Sheet جديد
2. اذهب إلى `Extensions` → `Apps Script`
3. أضف الكود التالي:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.attendance, data.guestsCount]);
  return ContentService.createTextOutput(JSON.stringify({success: true}));
}
```

4. انشر Script كـ Web App
5. انسخ الرابط واستبدله في `index.html`:

```javascript
fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, attendance, guestsCount })
});
```

#### ب) خيارات أخرى:
- Firebase Realtime Database
- Formspree
- EmailJS
- أي Backend API

## 🚀 كيفية النشر / How to Deploy

### طريقة 1: GitHub Pages (مجاني)
1. ارفع الملفات إلى GitHub repository
2. اذهب إلى Settings → Pages
3. اختر `main` branch
4. احفظ - سيعطيك رابط مثل: `https://username.github.io/repo-name`

### طريقة 2: Netlify (مجاني)
1. اذهب إلى [Netlify](https://www.netlify.com/)
2. اسحب مجلد المشروع
3. سيعطيك رابط فوري

### طريقة 3: Vercel (مجاني)
1. اذهب إلى [Vercel](https://vercel.com/)
2. ارفع المشروع
3. سيعطيك رابط مخصص

## 📱 اختبار على الموبايل / Mobile Testing

افتح الملف في المتصفح واضغط:
- **Chrome/Edge**: F12 → Toggle Device Toolbar
- **Safari**: Develop → Enter Responsive Design Mode

## 🎯 نصائح إضافية / Additional Tips

### تحسين الصور
إذا أضفت صور، استخدم:
- WebP format للأداء الأفضل
- قلل حجم الصور قبل الرفع
- استخدم [TinyPNG](https://tinypng.com/) للضغط

### الخطوط
الخطوط المستخدمة:
- **Amiri**: للنصوص العربية الرئيسية
- **Cairo**: للنصوص العربية العادية
- **Playfair Display**: للأسماء بالإنجليزية

### تغيير الألوان
ابحث عن:
```css
:root {
    --soft-gold: #D4AF37;
    --deep-emerald: #0C5449;
    --elegant-burgundy: #800020;
    --off-white: #FAF9F6;
}
```

وغيّر القيم حسب ذوقك.

## 📞 الدعم / Support

إذا واجهت أي مشكلة:
1. تأكد من أن كل النصوص داخل `[...]` تم استبدالها
2. تحقق من تاريخ الزفاف في JavaScript
3. تأكد من أن ملف الموسيقى في نفس المجلد
4. جرب فتح الملف في متصفح آخر

## 📄 الملفات / Files

```
wedding-invitation/
│
├── index.html          # الملف الرئيسي / Main file
├── README.md           # هذا الملف / This file
└── [your-music.mp3]    # ملف الموسيقى (اختياري) / Music file (optional)
```

## 🎊 ملاحظات مهمة / Important Notes

1. **الموبايل أولاً**: التصميم مُحسّن للموبايل لأن معظم الضيوف سيفتحون الدعوة من هواتفهم
2. **سرعة التحميل**: الموقع خفيف وسريع التحميل
3. **التوافق**: يعمل على جميع المتصفحات الحديثة
4. **الخصوصية**: لا يتم جمع أي بيانات بدون ربط النموذج بقاعدة بيانات

## 📅 Checklist قبل النشر

- [ ] تم تغيير أسماء العروسين
- [ ] تم تحديث تاريخ الزفاف
- [ ] تم إضافة تفاصيل المكان والوقت
- [ ] تم ربط Google Maps
- [ ] تم إضافة الموسيقى (اختياري)
- [ ] تم ربط نموذج RSVP (اختياري)
- [ ] تم تحديث جدول الحفل
- [ ] تم اختبار الموقع على الموبايل
- [ ] تم اختبار جميع الروابط

---

## 💝 مبروك العرس!

نتمنى لكم حياة سعيدة مليئة بالحب والسعادة! 🎉

**Congratulations on your wedding!**
Wishing you a lifetime of love and happiness! 🎊

---

Made with ❤️ for your special day
