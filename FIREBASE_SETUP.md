# Firebase Configuration Guide

## خطوات إعداد Firebase

### 1. إنشاء مشروع في Firebase Console

1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. انقر على "إضافة مشروع" (Add Project)
3. أدخل اسم المشروع (مثلاً: taekwondo-app)
4. قبول الشروط والمتابعة

### 2. تفعيل الخدمات

#### أ) Authentication (المصادقة)
1. من القائمة اليسرى: **Build** → **Authentication**
2. انقر على **Get Started**
3. فعّل **Email/Password**

#### ب) Firestore Database
1. من القائمة اليسرية: **Build** → **Firestore Database**
2. انقر على **Create Database**
3. اختر **Start in production mode** (أو test mode للاختبار)
4. حدد المنطقة الجغرافية (مثلاً: Middle East)

#### ج) Storage
1. من القائمة اليسرية: **Build** → **Storage**
2. انقر على **Get Started**

### 3. الحصول على بيانات Firebase

1. من القائمة اليسرية: **Project Settings** (⚙️)
2. ابحث عن **Web** في التطبيقات
3. انسخ بيانات الإعدادات

### 4. ملء بيانات Firebase في المشروع

ملف: `src/firebase.js`

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
```

### 5. قواعد أمان Firestore

ملف: `firestore.rules`

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // السماح للمستخدمين المصرح لهم بالقراءة والكتابة
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🔑 متغيرات البيئة

أنشئ ملف `.env.local`:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## ✅ التحقق من الإعداد

بعد إنشاء المشروع والخدمات، شغّل التطبيق:

```bash
npm run dev
```

يجب أن تتمكن من:
1. ✅ الدخول بأي بريد إلكتروني وكلمة مرور
2. ✅ عرض لوحة التحكم
3. ✅ إضافة والبحث عن الطلاب (محلياً حالياً)

## 🐛 استكشاف الأخطاء

**الخطأ: "Firebase is not configured"**
- تحقق من بيانات Firebase في `src/firebase.js`

**الخطأ: "Permission denied"**
- تحقق من قواعد Firestore في Firebase Console

**الخطأ: "Module not found"**
- شغّل `npm install` لتثبيت المكتبات

---

للمساعدة: راجع [Firebase Documentation](https://firebase.google.com/docs)
