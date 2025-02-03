const API_BASE_URL = 'https://ticket-db-dtex.onrender.com';

// Function to add an event
export const addEvent = async (eventData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        });
        return response.json();
    } catch (error) {
        console.error('Error adding event:', error);
        throw error;
    }
};

// Function to add a user
export const addUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response.json();
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};