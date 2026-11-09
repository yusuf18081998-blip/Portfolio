import React from 'react';
import userAvatar from '../assets/user.jpg';

function Hero() {
  return (
    <section id="about" style={{
      padding: '90px 8% 60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '40px',
        width: '320px',
        height: '320px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1, marginBottom: '28px' }}>
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          padding: '4px',
          background: 'linear-gradient(135deg, #a855f7, #6366f1, #ec4899)',
          boxShadow: '0 0 40px rgba(168, 85, 247, 0.65)'
        }}>
          <img 
            src={userAvatar} 
            alt="Xo'jayev Muhammad Yusuf" 
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      <div style={{
        zIndex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 20px',
        borderRadius: '30px',
        backgroundColor: 'rgba(30, 20, 55, 0.85)',
        border: '1px solid rgba(168, 85, 247, 0.35)',
        color: '#c084fc',
        fontSize: '13px',
        fontWeight: '600',
        marginBottom: '24px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#22c55e',
          boxShadow: '0 0 10px #22c55e'
        }}></span>
        45-maktab IT Koordinator & IT Club Rahbari
      </div>

      <h1 style={{
        zIndex: 1,
        fontSize: '52px',
        fontWeight: '800',
        lineHeight: '1.15',
        maxWidth: '850px',
        marginBottom: '20px',
        letterSpacing: '-1.5px',
        color: '#ffffff'
      }}>
        Men <span style={{
          background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Muhammad Yusuf</span>man, Software Engineer & AI Innovator
      </h1>

      <p style={{
        zIndex: 1,
        fontSize: '18px',
        color: '#94a3b8',
        maxWidth: '680px',
        marginBottom: '40px',
        lineHeight: '1.7'
      }}>
        45-umumiy o'rta ta'lim maktabi o'quvchisi va sun'iy intellekt hamda dasturlash bo'yicha mutaxassis. 
        10 dan ortiq xalqaro sertifikatlar egasi, 15+ muvaffaqiyatli loyihalar muallifi.
      </p>

      <div style={{ zIndex: 1, display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#projects" style={{
          padding: '14px 32px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #9333ea 0%, #6366f1 100%)',
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: '15px',
          boxShadow: '0 8px 25px rgba(147, 51, 234, 0.45)'
        }}>
          ⚡ Loyihalarimni ko'rish (10+)
        </a>
        <a href="https://t.me/khujayev013" target="_blank" rel="noreferrer" style={{
          padding: '14px 32px',
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          ✈️ Telegram'da bog'lanish
        </a>
      </div>
    </section>
  );
}

export default Hero;