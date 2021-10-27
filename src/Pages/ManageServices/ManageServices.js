import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://serene-spire-85381.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = id => {
        const url = `https://serene-spire-85381.herokuapp.com/services/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Service Deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }
            })
    }
    return (
        <div>
            {
                services.map(service => <div
                    key={service._id}
                >
                    <h1>{service.Name}</h1>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;