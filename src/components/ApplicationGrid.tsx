// src/components/ApplicationGrid.tsx
import { applications } from '../data/applications';

const ApplicationGrid = () => {
  const total = applications.length;
  const rejected = applications.filter(x => x === 1).length;
  const pending = total - rejected;

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1000px', 
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '2rem', 
        marginBottom: '1rem',
        color: '#ffffff',
        letterSpacing: '1px'
      }}>
        Mi viaje de {total} postulaciones desde enero hasta octubre 2025
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        marginBottom: '2rem',
        color: '#cccccc'
      }}>
        <strong style={{ color: '#f44336' }}>{rejected}</strong> rechazadas  • 
        <strong style={{ color: '#4caf50' }}>{pending}</strong> sin respuesta
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(20, 12px)`,
          gap: '2px',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}
      >
        {applications.map((status, i) => (
          <div
            key={i}
            title={`Postulación #${i + 1} — ${status ? 'Rechazada/Ghosted' : 'Sin respuesta'}`}
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: status ? '#f44336' : '#4caf50',
              borderRadius: '2px',
              cursor: 'help',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        ))}
      </div>

      <p style={{ 
        marginTop: '2rem', 
        fontStyle: 'italic', 
        color: '#aaaaaa',
        fontSize: '1rem',
        lineHeight: '1.6'
      }}>
        Cada cuadrito es una postulación. El silencio también es una respuesta.  
        Pero sigo adelante.
      </p>
    </div>
  );
};

export default ApplicationGrid;