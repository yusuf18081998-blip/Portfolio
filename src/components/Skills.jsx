import React from 'react';

function Skills() {
  const skills = ['React.js', 'JavaScript', 'HTML5 & CSS3', 'Python', 'Tailwind CSS', 'Git & GitHub'];

  return (
    <section id="skills" style={{ padding: '60px 40px', backgroundColor: '#1e293b', textAlign: 'center' }}>
      <h2 style={{ fontSize: '32px', marginBottom: '40px', color: '#38bdf8' }}>Mening Texnologiyalarim</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <span key={index} style={{
            padding: '10px 20px',
            backgroundColor: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '20px',
            color: '#e2e8f0',
            fontWeight: '600'
          }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;