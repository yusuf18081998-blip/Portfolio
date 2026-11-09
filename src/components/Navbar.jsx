import React from 'react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justify: 'space-between',
      alignItems: 'center',
      padding: '24px 8%',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(16px)',
      backgroundColor: 'rgba(11, 7, 25, 0.75)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '800',
          fontSize: '18px',
          boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)'
        }}>
          Y
        </div>
        <span style={{ fontWeight: '700', fontSize: '18px', letterSpacing: '-0.5px' }}>
          Yusufbek<span style={{ color: '#a855f7' }}>.dev</span>
        </span>
      </div>

      <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
        <li><a href="#about" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Haqimda</a></li>
        <li><a href="#experience" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Tajriba & Ta'lim</a></li>
        <li><a href="#projects" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Loyihalar</a></li>
        <li><a href="#contact" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Aloqa</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;