import React, {useState} from 'react';
const Subscribe = async (email, setEmail, setStatus) => {
    // Validate email format
    if (!/\S+@\S+\.\S+/.test(email)) {
        setStatus('Invalid email format.');
        return;
    }

    try {
        const response = await fetch('http://localhost:4001/user/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setStatus('Subscription successful!');
            setEmail(''); // Clear the input field
        } else {
            const data = await response.json();
            setStatus(data.message || 'Failed to subscribe.');
        }
    } catch (error) {
        setStatus('Failed to subscribe.');
    }
};

export default Subscribe;
