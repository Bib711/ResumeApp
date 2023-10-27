import React from 'react';
import jsPDF from 'jspdf';

const Resume = ({ resumeData }) => {
  const downloadResumeAsPDF = () => {
    const pdf = new jsPDF();

    // Add your styling and content here
    pdf.setFontSize(16);
    pdf.text(20, 20, 'Resume', { underline: true });
    pdf.setFontSize(12);
    pdf.text(20, 40, `Name: ${resumeData.name}`);
    pdf.text(20, 60, `Education: ${resumeData.education}`);
    pdf.text(20, 80, `Experience: ${resumeData.experience}`);
    pdf.text(20, 100, `Skills: ${resumeData.skills}`);

    pdf.save('resume.pdf');
  };

  return (
    <div>
      <h1 className="text-primary">Resume</h1>
      <p className="text-primary">Name: {resumeData.name}</p>
      <p className="text-primary">Education: {resumeData.education}</p>
      <p className="text-primary">Experience: {resumeData.experience}</p>
      <p className="text-primary">Skills: {resumeData.skills}</p>

      <button onClick={downloadResumeAsPDF}>Done</button>
    </div>
  );
};

export default Resume;

