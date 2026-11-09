import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{
      padding: '100px 8%',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <div style={{
        backgroundColor: 'rgba(23, 15, 48, 0.8)',
        borderRadius: '32px',
        border: '1px solid rgba(168, 85, 247, 0.25)',
        padding: '60px 40px',
        boxShadow: '0 20px 50px rgba(109, 40, 217, 0.25)',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h2 style={{
          fontSize: '38px',
          fontWeight: '800',
          color: '#ffffff',
          marginBottom: '16px',
          letterSpacing: '-0.5px'
        }}>
          Birgalikda Buyuk Loyihalar Yaratamiz!
        </h2>
        
        <p style={{
          fontSize: '16px',
          color: '#94a3b8',
          maxWidth: '550px',
          margin: '0 auto 36px',
          lineHeight: '1.7'
        }}>
          Savollaringiz, loyihalar bo'yicha takliflaringiz yoki 45-maktab IT Club bo'yicha hamkorlik uchun men bilan bevosita bog'lanishingiz mumkin.
        </p>

        <a 
          href="https://t.me/khujayev13" 
          target="_blank" 
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '16px 36px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '16px',
            boxShadow: '0 10px 30px rgba(168, 85, 247, 0.5)'
          }}
        >
          ✈️ Telegram'da Yozish (@khujayev13)
        </a>

        <div style={{
          marginTop: '40px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justify: 'center',
          gap: '24px',
          fontSize: '13px',
          color: '#64748b'
        }}>
          <span>© 2026 Xo'jayev Muhammad Yusuf</span>
          <span>•</span>
          <span>45-Maktab IT Club</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;