import React from 'react';
/*import logoImg from '../assets/logo.jpeg';*/

const Logo = ({ size = 'medium', showText = true, className = '' }) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { width: '40px', height: '40px' };
      case 'medium':
        return { width: '60px', height: '60px' };
      case 'large':
        return { width: '80px', height: '80px' };
      default:
        return { width: '60px', height: '60px' };
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'small':
        return '0.9rem';
      case 'medium':
        return '1.2rem';
      case 'large':
        return '1.5rem';
      default:
        return '1.2rem';
    }
  };

  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      
      <img 
       /* src={logoImg} 
        alt="Traumatec/Hopitec logo"
        style={{
          ...getSizeStyles(),
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-sm)'
        }}*/
      />
      
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ 
            fontSize: getTextSize(),
            fontWeight: '800',
            color: 'var(--primary-blue)',
            lineHeight: '1.1'
          }}>
            TRAUMATEC/HOPITEC
          </div>
          <div style={{ 
            fontSize: '0.8rem',
            fontWeight: '600',
            color: 'var(--primary-green)',
            lineHeight: '1.1'
          }}>
            CAMEROUN
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
