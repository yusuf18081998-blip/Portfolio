import React from 'react';

function Projects() {
  const projectsList = [
    {
      title: 'HquqAI',
      desc: 'Oʻzbekiston Konstitutsiyasiga asoslangan cyberpunk huquqiy intellektual veb-ilovasi.',
      tech: ['React', 'AI', 'LocalStorage', 'Cyberpunk UI'],
      glow: 'rgba(168, 85, 247, 0.3)'
    },
    {
      title: 'Yo Yo Code',
      desc: 'Visual Studio Code uchun ishlab chiqilgan avtonom AI agent kengaytmasi.',
      tech: ['TypeScript', 'VSCode API', 'OpenAI API'],
      glow: 'rgba(99, 102, 241, 0.3)'
    },
    {
      title: 'VAQT Loyihasi',
      desc: 'Inson unumdorligi va vaqtni toʻgʻri taqsimlash uchun aqlli dasturiy platforma.',
      tech: ['React', 'JavaScript', 'CSS3'],
      glow: 'rgba(236, 72, 153, 0.3)'
    },
    {
      title: 'ITCRM System',
      desc: 'Oʻquv markazlari hamda oʻquvchilar hisobini yurituvchi avtomatlashtirilgan CRM platforma.',
      tech: ['React.js', 'Node.js', 'Express'],
      glow: 'rgba(59, 130, 246, 0.3)'
    },
    {
      title: 'Schooldirect.ai.studio',
      desc: '45-maktab oʻquvchilari uchun anonim murojaatlar, petitsiyalar va takliflar portali.',
      tech: ['React', 'Firebase', 'Tailwind'],
      glow: 'rgba(34, 197, 94, 0.3)'
    },
    {
      title: 'COMPUTER INSTITUTE',
      desc: '19 ta innovatsion veb-loyiha jamlangan GitHub Pages platformasi va interaktiv portfolio.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      glow: 'rgba(245, 158, 11, 0.3)'
    },
    {
      title: 'YusufGO Platform',
      desc: 'IELTS preperations formatidagi avtomatlashtirilgan oʻquv-test tizimi.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      glow: 'rgba(168, 85, 247, 0.3)'
    },
    {
      title: 'XMY 1 OS',
      desc: 'Brauzer muhitida ishlovchi futuristik operatsion tizim konseptsiyasi va UI.',
      tech: ['JavaScript', 'HTML5 Canvas', 'WebGL'],
      glow: 'rgba(236, 72, 153, 0.3)'
    }
  ];

  return (
    <section id="projects" style={{ padding: '80px 8%', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
          Tanlangan Loyihalar
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '16px' }}>
          Har bir loyiha yuqori sifat, zamonaviy dizayn va murakkab muammolarga yechim sifatida yaratilgan
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '28px'
      }}>
        {projectsList.map((item, idx) => (
          <div key={idx} style={{
            backgroundColor: 'rgba(23, 15, 48, 0.7)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '32px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            boxShadow: `0 15px 35px -10px ${item.glow}`,
            backdropFilter: 'blur(16px)'
          }}>
            <div>
              <div style={{
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff' }}>{item.title}</h3>
                <span style={{ fontSize: '18px', color: '#c084fc' }}>↗</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
                {item.desc}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {item.tech.map((t, i) => (
                <span key={i} style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#e9d5ff',
                  backgroundColor: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  padding: '4px 10px',
                  borderRadius: '12px'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;