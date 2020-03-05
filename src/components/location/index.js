import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.615742994018!2d3.4222641140172994!3d6.443360395338403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d410e0abad%3A0x4f525e87793f8b3e!2sBogobiri%20House%20Ikoyi%20Lagos!5e0!3m2!1sen!2sng!4v1583407625082!5m2!1sen!2sng" width="100%" height="500px" frameBorder="0" allowFullScreen></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;