// SomePage.js
import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Caleb from './assets/Caleb (1).jpg';

export default function ViewAllShifts() {
    const [date, setDate] = useState(new Date());
    const [days, setDays] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const loadedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        console.log('Loaded bookings:', loadedBookings); // Debugging log
        setBookings(loadedBookings);
    }, []);

    useEffect(() => {
        const month = date.getMonth();
        const year = date.getFullYear();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const newDays = [];
        for (let i = 1; i <= daysInMonth; i++) {
            newDays.push(i);
        }
        setDays(newDays);
    }, [date]);

    const goBack = () => {
        setDate(new Date(date.setMonth(date.getMonth() - 1)));
    };

    const goForward = () => {
        setDate(new Date(date.setMonth(date.getMonth() + 1)));
    };

    const getBookingsForDay = (day) => {
        const month = date.getMonth() + 1; // getMonth() is zero-based
        const year = date.getFullYear();
        const dateString = `${year}/${month < 10 ? '0' : ''}${month}/${day < 10 ? '0' : ''}${day}`;
        console.log(`Checking bookings for date: ${dateString}`); // Debugging log
        const bookingsForDay = bookings.filter(booking => booking.date === dateString);
        console.log(`Bookings for ${dateString}:`, bookingsForDay); // Debugging log
        return bookingsForDay;
    };

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div>
                <h2 className="page-heading">View All Shifts</h2>
                <br />
                <br />
                <div id="monthly-calendar-container" className="monthly-calendar-container">
                    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <button onClick={goBack} className="backward-forward-buttons">{"<"}</button>
                        <h1 id="monthAndYear">{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</h1>
                        <button onClick={goForward} className="backward-forward-buttons">{">"}</button>
                    </div>
                    <div id="monthly-calendar" className="monthly-calendar">
                        {days.map((day, index) => (
                            <div key={index} className="day">
                                <h2>{day}</h2>
                                {getBookingsForDay(day).map((booking, idx) => (
                                    <div key={idx} className={`calendar-block ${booking.type.toLowerCase()}`}>
                                        <p className="bookingTitle">{booking.title}</p>
                                        <p className="bookingType">Type: {booking.type}</p>
                                        <p className="bookingTime">Time: {booking.time}</p>
                                        <div className="profile-container">
                                        <img src={Caleb} alt="Profile" className="profile-icon" />
                                            <div className="profile-hover-box">
                                            <img src={Caleb} alt="Profile" className="profile-hover-image" />
                                                <p>Name: John Doe</p>
                                                <p>Contact: 123-456-7890</p>
                                                <p>Email: john.doe@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
