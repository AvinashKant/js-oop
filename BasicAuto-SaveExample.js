import React, { useState, useEffect } from 'react';

function AutoSaveForm() {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [isSaving, setIsSaving] = useState(false);

  // Debounced auto-save effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (formData.title || formData.description) {
        autoSave(formData);
      }
    }, 1000); // 1 second after last change

    return () => clearTimeout(timeout); // cancel if user keeps typing
  }, [formData]);

  const autoSave = async (data) => {
    setIsSaving(true);
    // Simulate API call
    console.log('🔄 Auto-saving...', data);
    await new Promise((res) => setTimeout(res, 500));
    setIsSaving(false);
    console.log('✅ Auto-saved!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Auto-Save Form</h2>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <p>{isSaving ? 'Saving...' : 'Saved ✅'}</p>
    </div>
  );
}

export default AutoSaveForm;
