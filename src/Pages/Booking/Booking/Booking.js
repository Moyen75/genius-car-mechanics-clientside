import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`https://serene-spire-85381.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <h1>service name:{service.Name}</h1>
        </div>
    );
};

export default Booking;