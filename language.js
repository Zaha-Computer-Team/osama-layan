let isRTL = true;

function toggleLanguage() {
    // تبديل اتجاه الصفحة
    isRTL = !isRTL;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // تحديث نص الزر فقط
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.textContent = isRTL ? 'English' : 'عربي';
    }
}

// تعيين الاتجاه الافتراضي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.dir = 'rtl';
});