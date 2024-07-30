// SomePage.js
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';


export default function ShiftCheckIn() {

  const [bookedShifts, setBookedShifts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const ModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    }
}

  useEffect(() => {
    const loadedBookings = JSON.parse(localStorage.getItem('bookings'));
    if (loadedBookings) {
      setBookedShifts(loadedBookings);
    }
  }, []);

  const handleCheckIn = (shift) => {
    const updatedShifts = bookedShifts.map(s => {
      if (s === shift) {
        const startTime = new Date(`${shift.date} ${shift.time}`);
        const durationHours = parseInt(shift.duration.split(' ')[0]);
        const endTime = new Date(startTime.getTime() + durationHours * 60 * 60 * 1000);

        return { ...s, status: 'checked-in', endTime: endTime.toLocaleTimeString() };
      }
      return s;
    });

    setBookedShifts(updatedShifts);
    localStorage.setItem('bookings', JSON.stringify(updatedShifts));
  };

  const handleCancel = (shift) => {
    const updatedBookedShifts = bookedShifts.filter(s => s !== shift);
    setBookedShifts(updatedBookedShifts);
    localStorage.setItem('bookings', JSON.stringify(updatedBookedShifts));

    const availableShifts = JSON.parse(localStorage.getItem('shifts')) || [];
    availableShifts.push(shift);
    localStorage.setItem('shifts', JSON.stringify(availableShifts));

    setModalIsOpen(true);
  };

  const closeModal = () => {
    // Close the modal and clear the fields
    setModalIsOpen(false);
};

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const updatedShifts = bookedShifts.map(shift => {
        if (shift.status === 'checked-in' && new Date(`${shift.date} ${shift.endTime}`) <= now) {
          return { ...shift, status: 'complete' };
        }
        return shift;
      });

      setBookedShifts(updatedShifts);
      localStorage.setItem('bookings', JSON.stringify(updatedShifts));
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [bookedShifts]);


  return (
       
<div>
<Navbar />
<Sidebar />
      <div>
        <h2 className="page-heading">Your Assigned Shifts</h2>
        <br />
        <div className="shifts-table-container">
          <table className="assigned-shifts-table">
            <thead>
              <tr>
                <th>Details</th>
                <th>Time</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookedShifts.map((shift, index) => (
                <tr key={index}>
                  <td>{shift.title}</td>
                  <td>{shift.time}</td>
                  <td>{shift.date}</td>
                  <td>{shift.duration}</td>
                  <td>{shift.status}</td>
                  <td>
                    {shift.status === 'pending' ? (
                      <button 
                        className="check-in" 
                        onClick={() => handleCheckIn(shift)}
                        style={{ backgroundColor: '#7B61FF', color: 'white', padding: '5px 10px', fontSize: '14px' }}
                      >
                        Check-in
                      </button>
                    ) : (
                      <button 
                        className="checked-in" 
                        style={{ backgroundColor: 'gray', color: 'white', padding: '5px 6px', fontSize: '12px' }}
                        disabled
                      >
                        Checked-in
                      </button>
                    )}
                  </td>
                  <td>
                    {shift.status === 'pending' && (
                      <button className="cancel-shift" onClick={() => handleCancel(shift)}>Cancel</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
      <Modal
                style={ModalStyles}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Shift Cancellation"
            >
                <h2>This shift has been cancelled successfully. It has now become available on the Shift Booking page.</h2>
                <button className="modal-button" onClick={closeModal}>OK</button>
      </Modal>
</div>

    
  );
}
