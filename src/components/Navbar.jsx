import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiLogOut, FiGlobe } from 'react-icons/fi';

const Navbar = ({ user, onLogout }) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/dashboard" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">🥋</span>
            <span>{t('app_name')}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/dashboard" className="hover:text-blue-200 transition">{t('dashboard')}</Link>
            <Link to="/students" className="hover:text-blue-200 transition">{t('students')}</Link>
            <Link to="/classes" className="hover:text-blue-200 transition">{t('classes')}</Link>
            <Link to="/tournaments" className="hover:text-blue-200 transition">{t('tournaments')}</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 px-3 py-2 rounded-lg transition"
              title="Switch language"
            >
              <FiGlobe /> {i18n.language.toUpperCase()}
            </button>

            {user && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg transition"
              >
                <FiLogOut /> {t('logout')}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/dashboard" className="block hover:text-blue-200">{t('dashboard')}</Link>
            <Link to="/students" className="block hover:text-blue-200">{t('students')}</Link>
            <Link to="/classes" className="block hover:text-blue-200">{t('classes')}</Link>
            <Link to="/tournaments" className="block hover:text-blue-200">{t('tournaments')}</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
