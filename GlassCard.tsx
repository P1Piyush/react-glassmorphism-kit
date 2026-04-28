import React from 'react';

export const GlassCard = ({ children }) => {
    return (
        <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '24px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
        }}>
            {children}
        </div>
    );
};
