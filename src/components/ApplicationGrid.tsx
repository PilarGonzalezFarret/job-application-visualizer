// src/components/ApplicationGrid.tsx
import { applications } from '../data/applications';

const ApplicationGrid = () => {
  const total = applications.length;
  const rejected = applications.filter(x => x === 1).length;
  const pending = total - rejected;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        Mi viaje de {total} postulaciones en octubre 2025
      </h1>
      
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        <strong>{rejected}</strong> rechazadas o ghosteadas • 
        <strong>{pending}</strong> sin respuesta clara
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(20, 12px)`,
          gap: '2px',
          justifyContent: 'center',
        }}
      >
        {applications.map((status, i) => (
          <div
            key={i}
            title={`Postulación #${i + 1} — ${status ? 'Rechazada/Ghosted' : 'Sin respuesta'}`}
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: status ? '#ff8a80' : '#81c784',
              borderRadius: '2px',
              cursor: 'help',
            }}
          />
        ))}
      </div>

      <p style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
        Cada cuadrito es una postulación. El silencio también es una respuesta.  
        Pero sigo adelante.
      </p>
    </div>
  );
};

export default ApplicationGrid;