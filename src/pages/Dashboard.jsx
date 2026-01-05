import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiUsers, FiCalendar, FiAward, FiTrendingUp } from 'react-icons/fi';
import StatCard from '../components/StatCard';

const Dashboard = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeClasses: 0,
    upcomingTournaments: 0,
    attendanceRate: 0,
  });

  useEffect(() => {
    // سيتم ملؤها بالبيانات من Firebase لاحقاً
    setStats({
      totalStudents: 45,
      activeClasses: 8,
      upcomingTournaments: 3,
      attendanceRate: 87,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{t('dashboard')}</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard
          title={t('total_students')}
          value={stats.totalStudents}
          icon={FiUsers}
          color="blue"
        />
        <StatCard
          title={t('active_classes')}
          value={stats.activeClasses}
          icon={FiCalendar}
          color="orange"
        />
        <StatCard
          title={t('upcoming_tournaments')}
          value={stats.upcomingTournaments}
          icon={FiAward}
          color="green"
        />
        <StatCard
          title={t('attendance_rate')}
          value={`${stats.attendanceRate}%`}
          icon={FiTrendingUp}
          color="purple"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Students */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{t('students')} الجدد</h2>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold">أحمد محمد</p>
              <p className="text-sm text-gray-600">حزام أبيض - تاريخ: 2024-01-15</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold">فاطمة علي</p>
              <p className="text-sm text-gray-600">حزام أصفر - تاريخ: 2024-01-10</p>
            </div>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-800 mb-4">الحصص القادمة</h2>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold">حصة المبتدئين</p>
              <p className="text-sm text-gray-600">الجمعة - 6:00 مساءً | المدرب: علي محمود</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold">حصة المتقدمين</p>
              <p className="text-sm text-gray-600">السبت - 7:00 مساءً | المدرب: محمد أحمد</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
