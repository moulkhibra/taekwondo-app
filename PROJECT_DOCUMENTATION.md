# 📊 توثيق تفصيلي للمشروع

## 🎯 نظرة عامة

**نظام إدارة التايكوندو** تطبيق ويب متكامل مُصمّم خصيصاً لإدارة الأندية الرياضية بجودة عالية وواجهة عربية احترافية.

---

## 📁 هيكل الملفات

```
taekwondo-app/
│
├── 📄 index.html              # صفحة HTML الرئيسية
├── 📄 vite.config.js          # إعدادات Vite
├── 📄 tailwind.config.js      # إعدادات TailwindCSS
├── 📄 postcss.config.js       # إعدادات PostCSS
├── 📄 package.json            # المكتبات والنصات
├── 📄 .gitignore              # ملفات لتجاهلها بـ Git
├── 📄 .eslintrc.json          # إعدادات ESLint
│
├── 📖 README.md               # توثيق شامل
├── 📖 QUICK_START.md          # دليل البدء السريع ⭐
├── 📖 FIREBASE_SETUP.md       # خطوات إعداد Firebase
├── 📖 PROJECT_DOCUMENTATION.md (هذا الملف)
│
├── 📁 public/                 # ملفات ثابتة
│
└── 📁 src/
    ├── 📄 main.jsx            # نقطة الدخول الرئيسية
    ├── 📄 App.jsx             # المكون الرئيسي للتطبيق
    ├── 📄 firebase.js         # إعدادات Firebase
    ├── 📄 i18n.js             # إعدادات i18next (الترجمة)
    │
    ├── 📁 components/         # مكونات React المشتركة
    │   ├── Navbar.jsx         # شريط التنقل العلوي
    │   ├── StatCard.jsx       # بطاقة الإحصائية
    │   ├── Modal.jsx          # نافذة منبثقة
    │   └── Form.jsx           # مكون النموذج العام
    │
    ├── 📁 pages/              # الصفحات الرئيسية
    │   ├── Login.jsx          # صفحة تسجيل الدخول
    │   ├── Dashboard.jsx      # لوحة القيادة
    │   ├── Students.jsx       # صفحة الطلاب
    │   ├── Classes.jsx        # صفحة الحصص
    │   └── Tournaments.jsx    # صفحة البطولات
    │
    ├── 📁 services/           # خدمات API (قريباً)
    │   └── firebaseService.js (سيتم إضافته)
    │
    ├── 📁 styles/             # ملفات CSS
    │   └── index.css          # الأنماط الرئيسية
    │
    └── 📁 locales/            # ملفات الترجمة
        ├── ar.json            # الترجمة العربية
        └── en.json            # الترجمة الإنجليزية
```

---

## 🔧 المكتبات المستخدمة

### واجهة أمامية (Frontend)
| المكتبة | الإصدار | الاستخدام |
|--------|---------|----------|
| React | 18.2.0 | مكتبة UI الرئيسية |
| React DOM | 18.2.0 | تصيير React |
| React Router | 6.20.0 | نظام التوجيه بين الصفحات |
| i18next | 23.7.0 | مكتبة الترجمة |
| react-i18next | 13.5.0 | تكامل i18next مع React |
| react-icons | 4.12.0 | مكتبة الأيقونات |
| date-fns | 2.30.0 | مكتبة معالجة التواريخ |

### الباكند (Backend)
| المكتبة | الإصدار | الاستخدام |
|--------|---------|----------|
| Firebase | 10.7.0 | قاعدة البيانات والمصادقة |

### التصميم (Styling)
| المكتبة | الإصدار | الاستخدام |
|--------|---------|----------|
| TailwindCSS | 3.3.6 | فئات CSS للتصميم |
| PostCSS | 8.4.32 | معالج CSS |
| Autoprefixer | 10.4.16 | إضافة البادئات التلقائية |

### بناء المشروع (Build Tools)
| المكتبة | الإصدار | الاستخدام |
|--------|---------|----------|
| Vite | 5.0.0 | أداة بناء سريعة |

---

## 🎨 معلومات التصميم

### نظام الألوان
```javascript
{
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',   // أزرق أساسي
    600: '#0284c7',   // أزرق داكن
    700: '#0369a1',
    800: '#075985',
    900: '#0c3d66',
  },
  secondary: {
    500: '#f97316',   // برتقالي
    600: '#ea580c',
    700: '#c2410c',
  },
  dark: '#1f2937',
  light: '#f9fafb',
}
```

### الخطوط
- **الخط الرئيسي:** Cairo (عربي محسّن)
- **الخط البديل:** Noto Kufi Arabic
- **الخط الأساسي:** system-ui, sans-serif

### الاستجابة
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 🔐 البنية الأمنية

### Authentication (المصادقة)
- ✅ Firebase Authentication
- ✅ Email/Password
- ✅ Session Management

### Database Rules
```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### متغيرات البيئة
```env
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

---

## 📊 قاعدة البيانات (Firestore)

### Collections المخطط لها

#### 1. `students` (الطلاب)
```typescript
{
  id: string,                    // معرّف فريد
  fullName: string,              // الاسم الكامل
  age: number,                   // العمر
  beltLevel: "أبيض" | "أصفر" | ..., // مستوى الحزام
  phone: string,                 // رقم الهاتف
  email: string,                 // البريد الإلكتروني
  parentPhone?: string,          // هاتف ولي الأمر
  joinDate: timestamp,           // تاريخ الانضمام
  status: "active" | "inactive", // الحالة
  notes?: string,                // ملاحظات
  createdAt: timestamp,          // تاريخ الإنشاء
  updatedAt: timestamp,          // تاريخ التحديث
}
```

#### 2. `classes` (الحصص)
```typescript
{
  id: string,
  title: string,                 // اسم الحصة
  description?: string,          // وصف
  level: "beginner" | "intermediate" | "advanced",
  coachId: string,               // معرّف المدرب
  dayOfWeek: "السبت" | "الأحد" | ...,
  startTime: string,             // وقت البداية (HH:MM)
  endTime: string,               // وقت النهاية (HH:MM)
  capacity: number,              // السعة
  location: string,              // المكان
  students: string[],            // معرّفات الطلاب المسجلين
  createdAt: timestamp,
  updatedAt: timestamp,
}
```

#### 3. `tournaments` (البطولات)
```typescript
{
  id: string,
  name: string,                  // اسم البطولة
  description?: string,
  date: timestamp,               // تاريخ البطولة
  venue: string,                 // المكان
  maxParticipants: number,
  registeredParticipants: string[], // معرّفات المشاركين
  status: "upcoming" | "ongoing" | "completed",
  createdAt: timestamp,
  updatedAt: timestamp,
}
```

#### 4. `coaches` (المدربون)
```typescript
{
  id: string,
  fullName: string,
  email: string,
  phone: string,
  specialization?: string,       // التخصص
  certifications?: string[],     // الشهادات
  availability?: object,         // الأوقات المتاحة
  createdAt: timestamp,
  updatedAt: timestamp,
}
```

#### 5. `attendance` (الحضور)
```typescript
{
  id: string,
  studentId: string,
  classId: string,
  date: timestamp,
  status: "present" | "absent" | "late",
  notes?: string,
  createdAt: timestamp,
}
```

---

## 🎯 الميزات المتاحة حالياً

### ✅ صفحة تسجيل الدخول
- نموذج بسيط وآمن
- دعم عربي كامل
- تصميم حديث وجذاب

### ✅ لوحة القيادة
- عرض الإحصائيات الأساسية
- بطاقات معلومات سريعة
- قائمة الطلاب الجدد
- قائمة الحصص القادمة

### ✅ إدارة الطلاب
- عرض قائمة الطلاب
- بحث سريع عن الطلاب
- معلومات مفصلة لكل طالب
- تصفية حسب المستوى والحالة

### ✅ إدارة الحصص
- عرض جميع الحصص المتاحة
- معلومات المدرب والوقت
- السعة والموقع

### ✅ إدارة البطولات
- عرض البطولات القادمة
- شريط تقدم المشاركين
- تفاصيل التاريخ والمكان

---

## 🚀 خطوات التطوير المستقبلية

### المرحلة الثانية (القريبة)
- [ ] ربط كامل مع Firebase (CRUD عمليات)
- [ ] نظام الحضور والغياب المتقدم
- [ ] إدارة الرسوم والاشتراكات
- [ ] تقارير شهرية قابلة للتصدير (PDF)
- [ ] نظام الإشعارات عبر البريد الإلكتروني

### المرحلة الثالثة
- [ ] تطبيق للهواتف الذكية (React Native)
- [ ] لوحة تحكم للمدربين
- [ ] سجل الحضور الذكي (QR Code)
- [ ] نظام التقييم والملاحظات

### المرحلة الرابعة (المتقدمة)
- [ ] تحليل الأداء بـ AI
- [ ] نظام الإحصائيات المتقدم
- [ ] بوابة دفع آمنة
- [ ] تكاملات مع وسائل التواصل

---

## 🔧 الأوامر المتاحة

```bash
# تشغيل المشروع (نسخة التطوير)
npm run dev

# بناء النسخة الإنتاجية
npm run build

# عرض النسخة المبنية
npm run preview

# تنظيف وإعادة التثبيت
rm -rf node_modules package-lock.json
npm install
```

---

## 📱 دعم الأجهزة

✅ **Desktop** (Windows, Mac, Linux)
✅ **Tablet** (iPad, Android)
✅ **Mobile** (iPhone, Android)

---

## 🌐 دعم اللغات

✅ **العربية** (RTL - يمين إلى يسار)
✅ **English** (LTR - يسار إلى يمين)

---

## 📞 نصائح وحيل

### 1. الدخول السريع
استخدم بيانات اختبار أي بيانات لتسجيل الدخول:
```
البريد: test@example.com
كلمة المرور: 123456
```

### 2. تبديل اللغة
انقر على زر اللغة في الشريط العلوي لتبديل بين العربية والإنجليزية فوراً.

### 3. الوضع الداكن (قريباً)
سيتم إضافة دعم الوضع الداكن في النسخة القادمة.

---

## 🐛 استكشاف الأخطاء الشائعة

| المشكلة | الحل |
|--------|------|
| **"Module not found"** | شغّل `npm install` |
| **Port 5173 مستخدم** | غيّر المنفذ: `npm run dev -- --port 3000` |
| **Firebase خطأ** | تحقق من `FIREBASE_SETUP.md` |
| **RTL لا يعمل** | تأكد من أن `dir="rtl"` في HTML |

---

## 📚 مراجع مفيدة

- 📖 [React Documentation](https://react.dev)
- 📖 [Firebase Docs](https://firebase.google.com/docs)
- 📖 [TailwindCSS](https://tailwindcss.com)
- 📖 [i18next Guide](https://www.i18next.com)
- 📖 [Vite Guide](https://vitejs.dev)

---

**تم التطوير بـ ❤️**

**الإصدار:** 0.1.0 | **التاريخ:** 5 يناير 2024
