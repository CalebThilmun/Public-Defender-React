// SomePage.js
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';


export default function ShiftCreation() {


    const [startDate, setStartDate] = useState(new Date());
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [ampm, setAmpm] = useState("AM");
    const [title, setTitle] = useState("");
    const [shifts, setShifts] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Determine the shift type
    const type = ampm === "AM" ? "Dayshift" : "Nightshift";
    
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

    //function called from creat shift button
    const createShift = () => {
        const newShift = {
            date: startDate.toLocaleDateString(),
            time: `${hour}:${minute} ${ampm}`,
            title: title,
            type: type
        };

        // Retrieve the existing shifts from local storage
    const existingShifts = JSON.parse(localStorage.getItem('shifts')) || []; 

    // Add the new shift to the existing shifts
    const updatedShifts = [...existingShifts, newShift];

    // Store the updated shifts in local storage
    localStorage.setItem('shifts', JSON.stringify(updatedShifts));
        
        // Open the modal
        setModalIsOpen(true);
    };

    const closeModal = () => {
        // Close the modal and clear the fields
        setModalIsOpen(false);
        setStartDate(new Date());
        setHour("");
        setMinute("");
        setAmpm("AM");
        setTitle("");
    };

  return (
    <div>
        <Navbar />
        <Sidebar />
    <h2 className="page-heading">Shift Creation</h2>
      <br />
      <div id="calendar-container">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />
      </div>

      <div id="time-picker">
                <input type="number" id="hour" name="hour" min="1" max="12" placeholder="HH" onChange={(e) => setHour(e.target.value)} value={hour}/>
                <span id="time-picker-colon">:</span>
                <input type="number" id="minute" name="minute" min="0" max="59" placeholder="MM" onChange={(e) => setMinute(e.target.value)} value={minute}/>
                <select id="am-pm" name="am-pm" onChange={(e) => setAmpm(e.target.value)} value={ampm}>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>

        <div id="shift-title-picker">
        <select className="shift-title-picker" onChange={(e) => setTitle(e.target.value)} value={title}>
                <option value="">Please select a title for this shift...</option>
                <option value="Standard Weekday Day-Shift">Standard Weekday Day-Shift</option>
                <option value="Standard Weekday Night-Shift">Standard Weekday Night-Shift</option>
                <option value="Weekend Day-Shift">Weekend Day-Shift</option>
                <option value="Weekend Night-shift">Weekend Night-shift</option>
                <option value="Special Over-Time Shift">Special Over-Time Shift</option>
        </select>

        </div>
          <button className="new-shift-creation" onClick={createShift}>+ Create Shift</button>
          <button className="cancel-shift-creation">Cancel</button>

          <Modal
                style={ModalStyles}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Shift Created"
            >
                <h2>The shift has been created successfully!</h2>
                <button className="modal-button" onClick={closeModal}>OK</button>
            </Modal>
    </div>
     
  );
}
