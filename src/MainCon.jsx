
import Card from './Card';
import aliceImg from './assets/tikkumies.png'
import emoji from './assets/emoji.jpg'
import halikko from './assets/halikko.png'

function MainCon() {
  const leaderboardData = [
    { position: 1, name: 'Alice', imageUrl: aliceImg, messages: 150 },
    { position: 2, name: 'Bob', imageUrl: halikko, messages: 120 },
    { position: 3, name: 'Charlie', imageUrl: emoji, messages: 100 },
  ];

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <h2>Leaderboard</h2>
      <div className='kortit'>
        {leaderboardData.map(({ position, name, imageUrl, messages }) => (
          <Card
            key={position}
            position={position}
            
            imageUrl={imageUrl}
            messages={messages}
          />
        ))}
      </div>
    </div>
  );
}

export default MainCon;
