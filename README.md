# نظام إدارة التايكوندو 🥋

تطبيق ويب متكامل لإدارة نادي التايكوندو باستخدام **React** و **Firebase** مع واجهة عربية كاملة.

## ✨ المميزات الرئيسية

### 1. إدارة الطلاب 👥
- ✅ إضافة وحذف الطلاب
- ✅ تسجيل معلومات شاملة (الاسم، العمر، الحزام، الهاتف)
- ✅ بحث سريع عن الطلاب
- ✅ تتبع تاريخ الانضمام

### 2. إدارة الحصص 📅
- ✅ جدولة الحصص حسب الأيام والأوقات
- ✅ تحديد المدرب والمستوى لكل حصة
- ✅ تنظيم الحصص حسب المبتدئين والمتقدمين

### 3. إدارة البطولات 🏆
- ✅ تسجيل البطولات القادمة
- ✅ تحديد التاريخ والمكان
- ✅ متابعة عدد المشاركين

### 4. ميزات إضافية ⭐
- ✅ واجهة عربية بالكامل مع دعم RTL
- ✅ تصميم عصري وجذاب (TailwindCSS)
- ✅ سهل الاستخدام وسريع الاستجابة
- ✅ دعم متعدد اللغات (عربي/إنجليزي)
- ✅ نظام دخول بسيط

## 🛠️ التكنولوجيا المستخدمة

| المكون | التقنية |
|-------|--------|
| واجهة أمامية | React 18 |
| التوجيه | React Router v6 |
| قاعدة البيانات | Firebase Firestore |
| الاستيقاء | Firebase Authentication |
| التخزين | Firebase Storage |
| CSS | TailwindCSS |
| الترجمة | i18next |
| بناء المشروع | Vite |

## 📁 هيكل المشروع

```
taekwondo-app/
├── public/              # الملفات الثابتة
├── src/
│   ├── components/      # مكونات React المشتركة
│   │   ├── Navbar.jsx
│   │   ├── StatCard.jsx
│   │   ├── Modal.jsx
│   │   └── Form.jsx
│   ├── pages/           # الصفحات الرئيسية
│   │   ├── Dashboard.jsx
│   │   ├── Students.jsx
│   │   ├── Classes.jsx
│   │   ├── Tournaments.jsx
│   │   └── Login.jsx
│   ├── services/        # خدمات API و Firebase
│   ├── locales/         # ملفات الترجمة
│   │   ├── ar.json
│   │   └── en.json
│   ├── styles/          # الأنماط العامة
│   │   └── index.css
│   ├── firebase.js      # إعدادات Firebase
│   ├── i18n.js          # إعدادات i18next
│   ├── App.jsx          # المكون الرئيسي
│   └── main.jsx         # نقطة الدخول
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🚀 البدء السريع

### 1. تثبيت المتطلبات

```bash
cd taekwondo-app
npm install
```

### 2. إعداد Firebase

1. انتقل إلى [Firebase Console](https://console.firebase.google.com/)
2. أنشئ مشروع جديد
3. فعّل Authentication و Firestore
4. انسخ بيانات المشروع في `src/firebase.js`

```javascript
// src/firebase.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ...
};
```

### 3. تشغيل المشروع

```bash
npm run dev
```

سيفتح التطبيق تلقائياً على `http://localhost:5173`

## 📝 بيانات الاختبار

للدخول، استخدم أي بريد إلكتروني وكلمة مرور:

```
البريد: admin@taekwondo.com
كلمة المرور: أي قيمة
```

## 🎨 التصميم والألوان

- **اللون الأساسي:** أزرق (Blue 600)
- **اللون الثانوي:** برتقالي (Orange 500)
- **الخط:** Cairo و Noto Kufi Arabic (عربي محسّن)
- **الاستجابة:** جوال أولاً (Mobile First)

## 📊 قاعدة البيانات (Firestore)

### Collections المخطط لها:

#### 1. `students` (الطلاب)
```json
{
  "id": "uuid",
  "fullName": "string",
  "age": "number",
  "beltLevel": "string",
  "phone": "string",
  "email": "string",
  "joinDate": "timestamp",
  "status": "active|inactive",
  "parentPhone": "string",
  "notes": "string"
}
```

#### 2. `classes` (الحصص)
```json
{
  "id": "uuid",
  "title": "string",
  "level": "beginner|intermediate|advanced",
  "coachId": "string",
  "dayOfWeek": "string",
  "startTime": "time",
  "endTime": "time",
  "capacity": "number",
  "location": "string",
  "students": ["student_id_1", "student_id_2"]
}
```

#### 3. `tournaments` (البطولات)
```json
{
  "id": "uuid",
  "name": "string",
  "date": "timestamp",
  "venue": "string",
  "maxParticipants": "number",
  "registeredParticipants": ["student_id_1"],
  "status": "upcoming|ongoing|completed"
}
```

#### 4. `attendance` (الحضور)
```json
{
  "id": "uuid",
  "studentId": "string",
  "classId": "string",
  "date": "timestamp",
  "status": "present|absent|late"
}
```

## 🔐 قواعد أمان Firebase

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // السماح بالقراءة والكتابة للمستخدمين المصرح لهم فقط
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📋 الخطوات التالية (المرحلة الثانية)

- [ ] إضافة نظام الحضور والغياب
- [ ] إدارة الرسوم والاشتراكات
- [ ] نظام التقارير الشهرية
- [ ] تطبيق للهواتف الذكية (React Native)
- [ ] لوحة تحكم للمدربين
- [ ] نظام الإشعارات عبر البريد الإلكتروني
- [ ] تحليل الأداء الذكي (AI)

## 🤝 المساهمة

الملاحظات والاقتراحات مرحب بها دائماً!

## 📄 الترخيص

جميع الحقوق محفوظة © 2024 نظام إدارة التايكوندو

---

**تم التطوير بـ ❤️ من أجل نادي التايكوندو**
