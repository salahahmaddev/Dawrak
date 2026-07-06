/**
 * Wedding Invitation Configuration File
 * ملف إعدادات دعوة الزفاف
 * 
 * This file contains all the customizable settings for your wedding invitation.
 * Simply edit the values below and they will be reflected on the website.
 * 
 * يحتوي هذا الملف على جميع الإعدادات القابلة للتخصيص لدعوة زفافك.
 * ما عليك سوى تعديل القيم أدناه وسيتم تطبيقها على الموقع.
 */

const weddingConfig = {
    
    // ==========================================
    // COUPLE NAMES / أسماء العروسين
    // ==========================================
    groomName: {
        ar: "محمد أحمد",           // اسم العريس بالعربي
        en: "Mohammed Ahmed"        // Groom's name in English
    },
    brideName: {
        ar: "فاطمة علي",           // اسم العروس بالعربي
        en: "Fatima Ali"           // Bride's name in English
    },
    
    // ==========================================
    // WEDDING DATE & TIME / التاريخ والوقت
    // ==========================================
    weddingDate: {
        // JavaScript Date Format: new Date(year, month-1, day, hour, minute)
        // Note: months are 0-indexed (0=January, 11=December)
        dateObject: new Date(2024, 11, 15, 19, 0, 0), // December 15, 2024 at 7:00 PM
        
        // Display format for the details section
        displayDate: {
            ar: "الجمعة، 15 ديسمبر 2024",
            en: "Friday, December 15, 2024"
        },
        displayTime: {
            ar: "الساعة 7:00 مساءً",
            en: "7:00 PM"
        }
    },
    
    // ==========================================
    // VENUE INFORMATION / معلومات المكان
    // ==========================================
    venue: {
        name: {
            ar: "قاعة الأفراح الكبرى - فندق الريتز",
            en: "Grand Ballroom - The Ritz Hotel"
        },
        address: {
            ar: "شارع الملك فهد، الرياض، المملكة العربية السعودية",
            en: "King Fahd Road, Riyadh, Saudi Arabia"
        },
        googleMapsLink: "https://maps.google.com/?q=Riyadh+Saudi+Arabia",
        
        // Optional: Embed Google Maps iframe
        // Get this from: Google Maps → Share → Embed a map
        googleMapsEmbed: "",
        showEmbedMap: false // Set to true to show embedded map
    },
    
    // ==========================================
    // WELCOME MESSAGE / رسالة الترحيب
    // ==========================================
    welcomeMessage: {
        ar: "تزداد فرحتنا بوجودكم",
        en: "Your presence will make our joy complete"
    },
    
    // ==========================================
    // WEDDING TIMELINE / جدول الحفل
    // ==========================================
    timeline: [
        {
            icon: "fa-door-open",
            title: {
                ar: "استقبال الضيوف",
                en: "Guest Reception"
            },
            time: {
                ar: "7:00 مساءً",
                en: "7:00 PM"
            },
            color: "yellow" // yellow or emerald
        },
        {
            icon: "fa-music",
            title: {
                ar: "دخول العروسين - الزفة",
                en: "Grand Entrance - Zaffah"
            },
            time: {
                ar: "8:00 مساءً",
                en: "8:00 PM"
            },
            color: "emerald"
        },
        {
            icon: "fa-utensils",
            title: {
                ar: "العشاء والضيافة",
                en: "Dinner & Refreshments"
            },
            time: {
                ar: "8:30 مساءً",
                en: "8:30 PM"
            },
            color: "yellow"
        },
        {
            icon: "fa-cake-candles",
            title: {
                ar: "قص كعكة الزفاف",
                en: "Cake Cutting"
            },
            time: {
                ar: "9:00 مساءً",
                en: "9:00 PM"
            },
            color: "emerald"
        },
        {
            icon: "fa-camera",
            title: {
                ar: "جلسة التصوير",
                en: "Photo Session"
            },
            time: {
                ar: "9:30 مساءً",
                en: "9:30 PM"
            },
            color: "yellow"
        }
    ],
    
    // ==========================================
    // BACKGROUND MUSIC / الموسيقى
    // ==========================================
    backgroundMusic: {
        enabled: true,
        // Place your music file in the same folder and enter the filename here
        // ضع ملف الموسيقى في نفس المجلد وأدخل اسم الملف هنا
        filename: "wedding-music.mp3"
    },
    
    // ==========================================
    // RSVP SETTINGS / إعدادات تأكيد الحضور
    // ==========================================
    rsvp: {
        enabled: true,
        
        // Google Sheets Integration (optional)
        googleSheetsURL: "", // Add your Google Apps Script URL here
        
        // Success message after submission
        successMessage: {
            ar: "شكراً لتأكيد حضوركم! نتطلع لرؤيتكم في يومنا السعيد",
            en: "Thank you for confirming! We look forward to seeing you on our special day"
        }
    },
    
    // ==========================================
    // DESIGN SETTINGS / إعدادات التصميم
    // ==========================================
    design: {
        // Color theme: 'emerald' or 'burgundy'
        colorTheme: "emerald",
        
        // Custom colors (optional - leave empty to use default)
        customColors: {
            gold: "#D4AF37",
            emerald: "#0C5449",
            burgundy: "#800020",
            offWhite: "#FAF9F6"
        },
        
        // Show animations
        enableAnimations: true,
        
        // Primary language: 'ar' or 'en'
        primaryLanguage: "ar"
    },
    
    // ==========================================
    // SOCIAL MEDIA / وسائل التواصل (اختياري)
    // ==========================================
    socialMedia: {
        enabled: false,
        instagram: "",
        twitter: "",
        hashtag: "" // e.g., #MohammedAndFatima2024
    }
};

// Export for use in main HTML file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = weddingConfig;
}
