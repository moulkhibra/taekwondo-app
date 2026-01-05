import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';

const Tournaments = () => {
  const { t } = useTranslation();
  const [tournaments, setTournaments] = useState([
    {
      id: 1,
      name: 'بطولة المنطقة الأولى',
      date: '2024-02-15',
      venue: 'صالة الملك فهد الرياضية',
      maxParticipants: 100,
      registeredCount: 45,
      status: 'upcoming',
    },
    {
      id: 2,
      name: 'بطولة الشباب',
      date: '2024-03-20',
      venue: 'مركز الشباب',
      maxParticipants: 60,
      registeredCount: 38,
      status: 'upcoming',
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{t('tournaments')}</h1>
        <button className="btn-primary flex items-center gap-2">
          <FiPlus /> إضافة بطولة
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="card">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800">{tournament.name}</h3>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEdit2 />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 />
                </button>
              </div>
            </div>

            <div className="space-y-3 text-gray-700">
              <p><strong>التاريخ:</strong> {tournament.date}</p>
              <p><strong>المكان:</strong> {tournament.venue}</p>
              <p><strong>عدد المشاركين:</strong> {tournament.registeredCount} / {tournament.maxParticipants}</p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{
                      width: `${(tournament.registeredCount / tournament.maxParticipants) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
