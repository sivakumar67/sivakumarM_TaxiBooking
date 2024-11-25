import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/bookings');
                setBookings(res.data);
            } catch (error) {
                console.error('Failed to fetch bookings');
            }
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h2>All Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.pickup} to {booking.dropoff} at {new Date(booking.createdAt).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;
