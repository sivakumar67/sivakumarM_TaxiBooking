import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/bookings/add', {
                pickup,
                dropoff,
            });
            setMessage(res.data.message);
            setPickup('');
            setDropoff('');
        } catch (error) {
            setMessage('Failed to add booking');
        }
    };

    return (
        <div>
            <h2>Book a Taxi</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Pickup Location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Dropoff Location"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    required
                />
                <button type="submit">Book Now</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookingForm;
