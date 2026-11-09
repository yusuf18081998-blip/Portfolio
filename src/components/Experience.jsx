import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'IT Koordinator & IT Club Rahbari',
      place: '45-umumiy oʻrta taʻlim maktabi',
      desc: 'Maktabning raqamli infratuzilmasini boshqarish, oʻquvchilarga Sunʻiy Intellekt va Dasturlash kurslarini oʻtish.',
      icon: '💻',
      badge: '2026 - Hozir'
    },
    {
      role: '10+ Xalqaro Sertifikatlar',
      place: 'Cisco Academy, Coursera, Huawei ICT',
      desc: 'Cybersecurity, Python, Generative AI va Web Development yoʻnalishlarida xalqaro sertifikat va beyjlar.',
      icon: '🏆',
      badge: 'Xalqaro Daraja'
    },
    {
      role: 'Navi Global Hackathon (3-oʻrin)',
      place: 'Navi Global Platform',
      desc: 'Xalqaro xakaton tanlovida Sunʻiy intellektga asoslangan loyiha bilan faxrli 3-oʻrin sohibi.',
      icon: '🥇',
      badge: 'Sovrindor'
    },
    {
      role: 'FullStack & AI Dasturchi',
      place: 'Shaxsiy Loyihalar & Open Source',
      desc: 'React, Node.js, Python, TypeScript va Playwright texnologiyalarida 15 dan ortiq muvaffaqiyatli loyihalar.',
      icon: '🚀',
      badge: 'Tajriba'
    }
  ];

  return (
    <section id="experience" style={{ padding: '80px 8%', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: '12px',
        color: '#ffffff'
      }}>
        Tajriba va Yutuqlar
      </h2>
      <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '48px', fontSize: '16px' }}>
        Raqamli olamdagi asosiy faoliyatim va erishgan marralarim
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px'
      }}>
        {experiences.map((exp, idx) => (
          <div key={idx} style={{
            backgroundColor: 'rgba(23, 15, 48, 0.6)',
            border: '1px solid rgba(168, 85, 247, 0.15)',
            borderRadius: '20px',
            padding: '28px',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              fontSize: '32px',
              marginBottom: '16px',
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(168, 85, 247, 0.2)'
            }}>
              {exp.icon}
            </div>

            <span style={{
              position: 'absolute',
              top: '28px',
              right: '24px',
              fontSize: '11px',
              fontWeight: '700',
              color: '#c084fc',
              backgroundColor: 'rgba(168, 85, 247, 0.12)',
              padding: '4px 10px',
              borderRadius: '20px',
              border: '1px solid rgba(168, 85, 247, 0.25)'
            }}>
              {exp.badge}
            </span>

            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '6px' }}>
              {exp.role}
            </h3>
            <div style={{ fontSize: '13px', color: '#a855f7', fontWeight: '600', marginBottom: '12px' }}>
              {exp.place}
            </div>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;