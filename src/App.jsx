import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import Resume from './Resume'; // Import the Resume component
import "./App.css"

const App = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleChange = (field, value) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  return (
    <div>
      <h1 className="text-primary">Resume Generator</h1>
      <label className="text-primary">Name:</label>
      <input
        type="text"
        value={resumeData.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />

      <label className="text-primary">Education:</label>
      <input
        type="text"
        value={resumeData.education}
        onChange={(e) => handleChange('education', e.target.value)}
      />

      <label className="text-primary">Experience:</label>
      <input
        type="text"
        value={resumeData.experience}
        onChange={(e) => handleChange('experience', e.target.value)}
      />

      <label className="text-primary">Skills:</label>
      <input
        type="text"
        value={resumeData.skills}
        onChange={(e) => handleChange('skills', e.target.value)}
      />

      <Resume resumeData={resumeData} /> {/* Render the Resume component here */}
    </div>
  );
};

export default App;
