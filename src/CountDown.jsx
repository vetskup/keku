import React, { useEffect, useState } from 'react';

const dayNames = ['SuKuttaa', 'MaKuttaa', 'TiKuttaa', 'KeKuttaa', 'ToKuttaa', 'PeKuttaa', 'LaKuttaa'];

function CountDown() {
  const [timeLeft, setTimeLeft] = useState('');
  const [isWednesday, setIsWednesday] = useState(false);
  const [todayShort, setTodayShort] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const currentDay = now.getDay();

      setIsWednesday(currentDay === 3);
      setTodayShort(dayNames[currentDay]);

      let target;

      if (currentDay === 3) {
        // Countdown until end of Wednesday (23:59:59)
        target = new Date(now);
        target.setHours(23, 59, 59, 999);
      } else {
        // Countdown until next Wednesday at midnight
        const daysUntilNextWednesday = (10 - currentDay) % 7 || 7;
        target = new Date(now);
        target.setDate(now.getDate() + daysUntilNextWednesday);
        target.setHours(0, 0, 0, 0);
      }

      const diff = target.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const dayLabel = days === 1 ? 'päivä' : 'päivää';

      setTimeLeft(`${days} ${dayLabel} ${hours} h ${minutes} min ${seconds} s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <p style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        {isWednesday ? (
          <>
            <p style={{color: 'blue', fontSize: '24px'}}>Tänään on KeKu!</p>
            <span style={{ display: 'inline-block', marginBottom: '10px' }}>
              KeKua jäljellä:
            </span>
            <br />
            <span
              style={{
                border: '1px solid black',
                padding: '2px 6px',
                borderRadius: '4px',
                display: 'inline-block'
              }}
            >
              {timeLeft}
            </span>
          </>
        ) : (
          <>
            <span style={{ display: 'inline-block', marginBottom: '10px' }}>
              Aikaa jäljellä seuraavaan
            </span>
            <br />
            <span style={{ display: 'inline-block' }}>
              keskiviikkoon:{' '}
              <span
                style={{
                  border: '1px solid black',
                  margin: '5px',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}
              >
                {timeLeft}
              </span>
            </span>
          </>
        )}
      </p>

      {!isWednesday && (
        <p style={{ fontSize: '24px', color: 'blue', textAlign: 'center' }}>
          Onneksi tänään voi {todayShort}!
        </p>
      )}
    </header>
  );
}

export default CountDown;
