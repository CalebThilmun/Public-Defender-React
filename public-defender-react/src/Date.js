import React, { useState, useEffect } from 'react';

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const formattedDate = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      setCurrentDate(formattedDate);
    };

    updateDate(); // Set initial date
    const intervalId = setInterval(updateDate, 1000); // Update date every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="padDiv">
      <label htmlFor="Certify">Date Created: {currentDate}</label>
    </div>
  );
};

export default DateComponent;
