# 📝 Example Filled Wedding Invitation
# مثال على دعوة زفاف معبأة

This document shows you exactly what the placeholders should look like when filled in with real information.

---

## 🎯 Before and After Examples

### Example 1: Names

**BEFORE (in index.html):**
```html
<p class="font-english text-3xl md:text-5xl text-yellow-700 mb-4">
    [اكتب اسم العريس]
</p>
```

**AFTER (your customization):**
```html
<p class="font-english text-3xl md:text-5xl text-yellow-700 mb-4">
    Ahmed Mohammed
</p>
```

---

### Example 2: Bride's Name

**BEFORE:**
```html
<p class="font-english text-3xl md:text-5xl text-yellow-700">
    [اكتب اسم العروس]
</p>
```

**AFTER:**
```html
<p class="font-english text-3xl md:text-5xl text-yellow-700">
    Sarah Ali
</p>
```

---

### Example 3: Date and Time

**BEFORE:**
```html
<p class="font-arabic text-xl md:text-2xl text-gray-600">
    [اكتب التاريخ واليوم والساعة]
</p>
```

**AFTER:**
```html
<p class="font-arabic text-xl md:text-2xl text-gray-600">
    الجمعة، 25 ديسمبر 2024 - الساعة 8:00 مساءً
</p>
```

Or in English:
```html
<p class="font-arabic text-xl md:text-2xl text-gray-600">
    Friday, December 25, 2024 - 8:00 PM
</p>
```

---

### Example 4: Venue Name

**BEFORE:**
```html
<p class="font-arabic text-xl md:text-2xl text-gray-600 mb-6">
    [اسم القاعة أو الفندق]
</p>
```

**AFTER:**
```html
<p class="font-arabic text-xl md:text-2xl text-gray-600 mb-6">
    قاعة الياسمين - فندق الريتز كارلتون
</p>
```

Or with more detail:
```html
<p class="font-arabic text-xl md:text-2xl text-gray-600 mb-6">
    Grand Ballroom - The Ritz-Carlton Hotel<br>
    King Fahd Road, Riyadh
</p>
```

---

### Example 5: Google Maps Link

**BEFORE:**
```html
<a href="https://maps.google.com/?q=" target="_blank" class="btn-gold...">
```

**AFTER (Simple):**
```html
<a href="https://maps.google.com/?q=The+Ritz+Carlton+Riyadh" target="_blank" class="btn-gold...">
```

**AFTER (Exact coordinates):**
```html
<a href="https://maps.google.com/?q=24.7136,46.6753" target="_blank" class="btn-gold...">
```

**AFTER (Full Google Maps URL):**
```html
<a href="https://goo.gl/maps/abc123xyz" target="_blank" class="btn-gold...">
```

---

### Example 6: Wedding Date in JavaScript

**BEFORE:**
```javascript
const weddingDate = new Date(2024, 11, 15, 19, 0, 0);
```

**AFTER (December 25, 2024 at 8:00 PM):**
```javascript
const weddingDate = new Date(2024, 11, 25, 20, 0, 0);
//                           Year Month Day Hour Min Sec
//                           2024  Dec  25  8PM  00  00
```

**REMEMBER**: Months are 0-indexed!
- January = 0
- February = 1
- March = 2
- April = 3
- May = 4
- June = 5
- July = 6
- August = 7
- September = 8
- October = 9
- November = 10
- December = 11

**More Examples:**

March 15, 2025 at 7:30 PM:
```javascript
const weddingDate = new Date(2025, 2, 15, 19, 30, 0);
```

June 20, 2024 at 6:00 PM:
```javascript
const weddingDate = new Date(2024, 5, 20, 18, 0, 0);
```

September 10, 2024 at 9:00 PM:
```javascript
const weddingDate = new Date(2024, 8, 10, 21, 0, 0);
```

---

### Example 7: Footer Names

**BEFORE:**
```html
<p class="font-arabic text-lg text-gray-300">
    [اكتب اسم العريس] & [اكتب اسم العروس]
</p>
```

**AFTER:**
```html
<p class="font-arabic text-lg text-gray-300">
    Ahmed & Sarah
</p>
```

---

## 🎨 Complete Example Section

Here's how a complete details section would look after customization:

```html
<!-- Wedding Details Section -->
<section id="details" class="py-16 md:py-24 px-4">
    <div class="container mx-auto max-w-4xl fade-in">
        <h2 class="font-arabic text-4xl md:text-5xl font-bold text-center text-emerald-900 mb-12">
            تفاصيل الحفل
        </h2>
        
        <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-yellow-600">
            <!-- Date & Time -->
            <div class="mb-8 text-center">
                <div class="inline-block bg-yellow-50 rounded-full p-4 mb-4">
                    <i class="fas fa-calendar-alt text-yellow-600 text-3xl"></i>
                </div>
                <h3 class="font-arabic text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    التاريخ والوقت
                </h3>
                <p class="font-arabic text-xl md:text-2xl text-gray-600">
                    الجمعة، 25 ديسمبر 2024
                </p>
                <p class="font-arabic text-lg text-gray-500 mt-2">
                    الساعة 8:00 مساءً
                </p>
            </div>
            
            <!-- Venue -->
            <div class="mb-8 text-center">
                <div class="inline-block bg-yellow-50 rounded-full p-4 mb-4">
                    <i class="fas fa-map-marker-alt text-yellow-600 text-3xl"></i>
                </div>
                <h3 class="font-arabic text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    مكان الحفل
                </h3>
                <p class="font-arabic text-xl md:text-2xl text-gray-600 mb-6">
                    قاعة الياسمين - فندق الريتز كارلتون<br>
                    طريق الملك فهد، الرياض
                </p>
                
                <!-- Google Maps Button -->
                <a href="https://maps.google.com/?q=The+Ritz+Carlton+Riyadh" target="_blank" class="btn-gold inline-block text-white font-arabic text-lg px-8 py-4 rounded-full shadow-lg">
                    <i class="fas fa-map-marked-alt ml-2"></i>
                    عرض الموقع على الخريطة
                </a>
            </div>
        </div>
    </div>
</section>
```

---

## 📅 Timeline Examples

Here's how to customize the timeline events:

**Original Event:**
```html
<h3 class="font-arabic text-xl md:text-2xl font-bold text-gray-800 mb-2">
    استقبال الضيوف
</h3>
<p class="font-arabic text-lg text-yellow-600 font-semibold">
    7:00 مساءً
</p>
```

**Customized Event:**
```html
<h3 class="font-arabic text-xl md:text-2xl font-bold text-gray-800 mb-2">
    استقبال الضيوف والمشروبات الترحيبية
</h3>
<p class="font-arabic text-lg text-yellow-600 font-semibold">
    6:30 مساءً
</p>
```

**Adding Event Description (optional):**
```html
<h3 class="font-arabic text-xl md:text-2xl font-bold text-gray-800 mb-2">
    استقبال الضيوف
</h3>
<p class="font-arabic text-lg text-yellow-600 font-semibold mb-1">
    6:30 مساءً
</p>
<p class="font-arabic text-sm text-gray-500">
    مشروبات ترحيبية وبوفيه مفتوح
</p>
```

---

## 🎵 Music File Example

**BEFORE:**
```html
<audio id="backgroundMusic" loop>
    <source src="" type="audio/mpeg">
</audio>
```

**AFTER:**
```html
<audio id="backgroundMusic" loop>
    <source src="wedding-music.mp3" type="audio/mpeg">
</audio>
```

**With Multiple Formats (for better compatibility):**
```html
<audio id="backgroundMusic" loop>
    <source src="wedding-music.mp3" type="audio/mpeg">
    <source src="wedding-music.ogg" type="audio/ogg">
</audio>
```

---

## 🗺️ Google Maps Embed Example

**To show embedded map**, find this section and remove `style="display: none;"`:

**BEFORE:**
```html
<div class="map-container rounded-xl overflow-hidden mt-8" style="display: none;">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
        width="100%" 
        height="400" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

**AFTER:**
```html
<div class="map-container rounded-xl overflow-hidden mt-8">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.469!2d46.6753!3d24.7136!..."
        width="100%" 
        height="400" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

**How to get the embed code:**
1. Go to Google Maps
2. Search for your venue
3. Click "Share"
4. Click "Embed a map"
5. Copy the iframe code
6. Replace the entire `<iframe>` tag

---

## 📱 Real-World Complete Example

Here's what your hero section might look like completely filled in:

```html
<!-- Hero Section -->
<section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12">
    <div class="container mx-auto text-center fade-in">
        <!-- Decorative Top Element -->
        <div class="mb-8">
            <i class="fas fa-heart text-yellow-600 text-4xl mb-4 animate-pulse"></i>
        </div>
        
        <!-- Main Heading -->
        <h1 class="font-arabic text-5xl md:text-7xl font-bold mb-6 text-emerald-900">
            دعوة زفاف
        </h1>
        
        <!-- Decorative Line -->
        <div class="decorative-line w-64 mx-auto mb-8"></div>
        
        <!-- Names -->
        <div class="mb-8">
            <p class="font-english text-3xl md:text-5xl text-yellow-700 mb-4">
                Ahmed Mohammed
            </p>
            <p class="font-arabic text-4xl md:text-6xl text-gray-700 mb-4">
                &
            </p>
            <p class="font-english text-3xl md:text-5xl text-yellow-700">
                Sarah Ali
            </p>
        </div>
        
        <!-- Decorative Line -->
        <div class="decorative-line w-64 mx-auto mb-8"></div>
        
        <!-- Welcoming Message -->
        <p class="font-arabic text-2xl md:text-3xl text-emerald-800 mb-12">
            تشرفنا بحضوركم في أجمل أيامنا
        </p>
        
        <!-- Countdown Timer (JavaScript will populate) -->
        <div id="countdown" class="flex justify-center gap-4 md:gap-8 mb-12 flex-wrap">
            <!-- Countdown boxes here -->
        </div>
        
        <!-- Scroll Down Indicator -->
        <a href="#details" class="inline-block animate-bounce text-yellow-600 text-3xl">
            <i class="fas fa-chevron-down"></i>
        </a>
    </div>
</section>
```

With JavaScript countdown:
```javascript
const weddingDate = new Date(2024, 11, 25, 20, 0, 0); // Dec 25, 2024, 8:00 PM
```

---

## ✅ Quick Reference Checklist

Use this to make sure you've customized everything:

```
[ ] Groom's name (line ~151)
[ ] Bride's name (line ~157)
[ ] Welcome message (line ~168)
[ ] Wedding date JavaScript (line ~580)
[ ] Display date text (line ~210)
[ ] Display time text (line ~212)
[ ] Venue name (line ~226)
[ ] Google Maps link (line ~230)
[ ] Timeline event 1 time (line ~267)
[ ] Timeline event 2 time (line ~278)
[ ] Timeline event 3 time (line ~289)
[ ] Timeline event 4 time (line ~300)
[ ] Timeline event 5 time (line ~311)
[ ] Music file path (line ~18)
[ ] Footer names (line ~497)
```

---

## 🎯 Find and Replace Guide

If you're comfortable with "Find and Replace" in your text editor:

1. **Find:** `[اكتب اسم العريس]`  
   **Replace with:** `Ahmed Mohammed`

2. **Find:** `[اكتب اسم العروس]`  
   **Replace with:** `Sarah Ali`

3. **Find:** `[اكتب التاريخ واليوم والساعة]`  
   **Replace with:** `الجمعة، 25 ديسمبر 2024 - الساعة 8:00 مساءً`

4. **Find:** `[اسم القاعة أو الفندق]`  
   **Replace with:** `قاعة الياسمين - فندق الريتز كارلتون`

Then manually update:
- Line ~580: `const weddingDate = new Date(2024, 11, 25, 20, 0, 0);`
- Line ~230: Google Maps URL
- Line ~18: Music file path (if adding music)

---

## 🌟 Tips for Arabic Text

When writing Arabic names in English fonts (Playfair Display):

**Option 1: Use Arabic names**
```html
<p class="font-english text-3xl md:text-5xl text-yellow-700 mb-4">
    أحمد محمد
</p>
```

**Option 2: Use English transliteration**
```html
<p class="font-english text-3xl md:text-5xl text-yellow-700 mb-4">
    Ahmed Mohammed
</p>
```

**Option 3: Use both**
```html
<p class="font-english text-3xl md:text-5xl text-yellow-700 mb-4">
    Ahmed Mohammed
</p>
<p class="font-arabic text-xl text-gray-600">
    أحمد محمد
</p>
```

---

## 💡 Pro Tips

1. **Test after each change**: Save and refresh browser
2. **Keep a backup**: Save original file as `index-backup.html`
3. **Use UTF-8 encoding**: Make sure your editor saves in UTF-8
4. **Don't change class names**: Only change the text content
5. **Preserve spacing**: Keep indentation as is
6. **Check quotes**: Use straight quotes (`"`) not curly quotes (`"`)

---

## ✨ You're Ready!

With these examples, you should be able to customize the entire wedding invitation confidently!

مبروك و بالتوفيق! 🎉

---

**Need Help?** Check `QUICK_START_AR.md` for step-by-step instructions.
