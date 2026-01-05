import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import Modal from '../components/Modal';
import Form from '../components/Form';

const Students = () => {
  const { t } = useTranslation();
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'أحمد محمد',
      age: 12,
      belt: 'أبيض',
      phone: '0501234567',
      joinDate: '2024-01-15',
      status: 'active',
    },
    {
      id: 2,
      name: 'فاطمة علي',
      age: 14,
      belt: 'أصفر',
      phone: '0509876543',
      joinDate: '2024-01-10',
      status: 'active',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.phone.includes(searchQuery)
  );

  const handleAddStudent = async (formData) => {
    setLoading(true);
    setTimeout(() => {
      const newStudent = {
        id: Date.now(),
        ...formData,
        status: 'active',
      };
      setStudents([...students, newStudent]);
      setIsModalOpen(false);
      setLoading(false);
    }, 500);
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const formFields = [
    { name: 'name', label: 'name', type: 'text', required: true },
    { name: 'age', label: 'age', type: 'number', required: true },
    { name: 'belt', label: 'belt', type: 'select', required: true, options: [
      { value: 'أبيض', label: 'أبيض' },
      { value: 'أصفر', label: 'أصفر' },
      { value: 'برتقالي', label: 'برتقالي' },
      { value: 'أخضر', label: 'أخضر' },
      { value: 'أزرق', label: 'أزرق' },
      { value: 'أحمر', label: 'أحمر' },
      { value: 'بني', label: 'بني' },
      { value: 'أسود', label: 'أسود' },
    ]},
    { name: 'phone', label: 'phone', type: 'tel', required: true },
    { name: 'email', label: 'email', type: 'email' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{t('students')}</h1>
        <button
          onClick={() => {
            setEditingStudent(null);
            setIsModalOpen(true);
          }}
          className="btn-primary flex items-center gap-2"
        >
          <FiPlus /> {t('add_student')}
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <FiSearch className="absolute left-4 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder={t('search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field ltr:pl-10 rtl:pr-10"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto card">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="table-header">{t('name')}</th>
              <th className="table-header">{t('age')}</th>
              <th className="table-header">{t('belt')}</th>
              <th className="table-header">{t('phone')}</th>
              <th className="table-header">{t('join_date')}</th>
              <th className="table-header">{t('status')}</th>
              <th className="table-header">{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50 transition">
                <td className="table-row font-semibold">{student.name}</td>
                <td className="table-row">{student.age}</td>
                <td className="table-row">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {student.belt}
                  </span>
                </td>
                <td className="table-row">{student.phone}</td>
                <td className="table-row">{student.joinDate}</td>
                <td className="table-row">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    student.status === 'active'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {student.status === 'active' ? t('active') : t('inactive')}
                  </span>
                </td>
                <td className="table-row">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditStudent(student)}
                      className="text-blue-600 hover:text-blue-800 transition"
                      title={t('edit')}
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => handleDeleteStudent(student.id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title={t('delete')}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        title={editingStudent ? t('edit_student') : t('add_student')}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => handleAddStudent({})}
        loading={loading}
      >
        <Form
          fields={formFields}
          onSubmit={handleAddStudent}
          submitLabel={editingStudent ? 'edit' : 'add_student'}
          loading={loading}
        />
      </Modal>
    </div>
  );
};

export default Students;
