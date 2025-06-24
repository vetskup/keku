// Card.jsx


function Card({ position, name, imageUrl, messages }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      textAlign: 'center',
      maxWidth: '250px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <h3> {position}.</h3>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <p style={{ fontWeight: 'bold', margin: '8px 0 4px' }}>{name}</p>

    </div>
  );
}

export default Card;
