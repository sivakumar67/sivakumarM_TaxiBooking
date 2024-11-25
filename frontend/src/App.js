import React from 'react';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';

const App = () => {
    return (
        <div>
            <h1>Taxi Booking System</h1>
            <BookingForm />
            <BookingList />
        </div>
    );
};

export default App;
