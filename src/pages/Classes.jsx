import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import Modal from '../components/Modal';

const Classes = () => {
  const { t } = useTranslation();
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: 'حصة المبتدئين',
      level: 'beginner',
      coach: 'علي محمود',
      day: 'الجمعة',
      time: '6:00 مساءً',
      capacity: 20,
      location: 'الصالة الرئيسية',
    },
    {
      id: 2,
      title: 'حصة المتقدمين',
      level: 'advanced',
      coach: 'محمد أحمد',
      day: 'السبت',
      time: '7:00 مساءً',
      capacity: 15,
      location: 'الصالة الثانية',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{t('classes')}</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary flex items-center gap-2"
        >
          <FiPlus /> إضافة حصة
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((cls) => (
          <div key={cls.id} className="card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{cls.title}</h3>
                <p className="text-sm text-gray-600">{cls.location}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEdit2 />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 />
                </button>
              </div>
            </div>

            <div className="space-y-2 text-gray-700">
              <p><strong>المدرب:</strong> {cls.coach}</p>
              <p><strong>المستوى:</strong> {t(cls.level)}</p>
              <p><strong>اليوم والوقت:</strong> {cls.day} - {cls.time}</p>
              <p><strong>السعة:</strong> {cls.capacity} طالب</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        title="إضافة حصة جديدة"
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => setIsModalOpen(false)}
      >
        <p>نموذج إضافة الحصة سيتم تطويره قريباً</p>
      </Modal>
    </div>
  );
};

export default Classes;
