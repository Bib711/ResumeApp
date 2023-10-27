import React from 'react';
import jsPDF from 'jspdf';

const Resume = ({ resumeData }) => {
  const downloadResumeAsPDF = () => {
    const pdf = new jsPDF();

    // Add your styling and content here
    pdf.setFontSize(26);
    pdf.text(30, 30, 'Resume ', { underline: true });

    pdf.setFontSize(19);
    pdf.text(20, 40, 'Name:');
    pdf.setFontSize(12);
    pdf.text(40, 40, resumeData.name);

    pdf.setFontSize(19);
    pdf.text(20, 60, 'Education:');
    pdf.setFontSize(12);
    pdf.text(40, 60, resumeData.education);

    pdf.setFontSize(19);
    pdf.text(20, 80, 'Experience:');
    pdf.setFontSize(12);
    pdf.text(40, 80, resumeData.experience);

    pdf.setFontSize(19);
    pdf.text(20, 100, 'Skills:');
    pdf.setFontSize(12);
    pdf.text(40, 100, resumeData.skills);

    pdf.save('resume.pdf');
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <h1 className="text-primary">Resume Preview</h1>
      <p className="text-primary">
        <span style={{ fontWeight: 'bold' }}>Name:</span> 
        {resumeData.name}
      </p>
      <p className="text-primary">
        <span style={{ fontWeight: 'bold' }}>Education</span> <hr />{resumeData.education}
      </p>
      <p className="text-primary">
        <span style={{ fontWeight: 'bold' }}>Experience</span> <hr />{resumeData.experience}
      </p>
      <p className="text-primary">
        <span style={{ fontWeight: 'bold' }}>Skills</span> <hr />{resumeData.skills}
      </p>

      <button onClick={downloadResumeAsPDF} className="done-button">
        Done
      </button>
    </div>
  );
};

export default Resume;
