import React, { useState } from 'react';

const AddAttraction = ({ onAddAttraction }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddAttraction({ name, type, price });
        setName('');
        setType('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Attraction</h2>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Type:
                <select value={type} onChange={(e) => setType(e.target.value)} required>
                    <option value="">Select Type</option>
                    <option value="Day">Day</option>
                    <option value="Night">Night</option>
                    <option value="Museum">Museum</option>
                    <option value="Park">Park</option>
                </select>
            </label>
            <label>
                Price:
                <select value={price} onChange={(e) => setPrice(e.target.value)} required>
                    <option value="">Select Price</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </label>
            <button type="submit">Add Attraction</button>
        </form>
    );
};

export default AddAttraction;
