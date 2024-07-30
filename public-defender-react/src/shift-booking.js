
import React from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

export default function ShiftBooking() {

    const [shifts, setShifts] = useState([]);

    useEffect(() => {
        const loadedShifts = JSON.parse(localStorage.getItem('shifts'));
        if (loadedShifts) {
            setShifts(loadedShifts);
        }
    }, []);

    const handleBooking = (shift) => {
      const currentBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      currentBookings.push(shift);
      localStorage.setItem('bookings', JSON.stringify(currentBookings));
      
      //update the list and remove the shift from all of the shifts
      const updatedShifts = shifts.filter(s => s !== shift);
      setShifts(updatedShifts);
      localStorage.setItem('shifts', JSON.stringify(updatedShifts));
      
      setModalIsOpen(true);
  };

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
        justifyContent: 'center'
        
    }
}

const closeModal = () => {
  // Close the modal and disable the current booking button clicked
  setModalIsOpen(false);
};

  return (
       
<div>
<Navbar />
<Sidebar />
      <div>
        <h2 className="page-heading">Available Shift Assignments</h2>
        <br />
        <div className="filter-container">
          <select>
            <option value="">Filter..</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button type="submit" className="search-filter"><FontAwesomeIcon icon={faFilter} /></button>
        </div>
        <div className="shift-booking-table">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Type</th>
                <th>Time</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                            {shifts.map((shift, index) => (
                                <tr key={index}>
                                    <td>{shift.title}</td>
                                    <td>{shift.type}</td>
                                    <td>{shift.time}</td>
                                    <td>{shift.date}</td>
                                    <td><button className="make-booking" onClick={() => handleBooking(shift)}>Book Shift</button></td>
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
                contentLabel="Shift Created"
            >
                <h2>The selected shift has been booked successfully!</h2>
                <button className="modal-button" onClick={closeModal}>OK</button>
      </Modal>
</div>
    
  );
}
