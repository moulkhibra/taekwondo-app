import React from 'react';
import { useTranslation } from 'react-i18next';

const Form = ({ fields, onSubmit, submitLabel = 'save', loading = false }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value || '' }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t(field.label) || field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className="input-field resize-none"
              rows="4"
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className="input-field"
            >
              <option value="">{t('select')} {field.label}</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {t(option.label) || option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type || 'text'}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className="input-field"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:bg-gray-400"
      >
        {loading ? t('loading') : t(submitLabel)}
      </button>
    </form>
  );
};

export default Form;
