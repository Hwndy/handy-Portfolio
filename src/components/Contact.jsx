import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        message: '' 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsApp = () => {
        const { name, message } = formData;
        // Remove any non-numeric characters from the phone number
        const phoneNumber = '08087438117'.replace(/\D/g, '');
        
        // Format the message
        const whatsappMessage = `Hello, I am ${name}.\n\n${message}`;
        
        // Create the WhatsApp URL
        const whatsappUrl = `https://web.whatsapp.com/send?phone=234${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
        
        // For mobile devices, use the alternative URL
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = `whatsapp://send?phone=234${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
        } else {
            // For desktop, open in new tab
            window.open(whatsappUrl, '_blank');
        }
    };

    const handleEmail = () => {
        const { name, email, message } = formData;
        const mailtoUrl = `mailto:suleayo04@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
        )}`;
        window.location.href = mailtoUrl;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Form validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }
    };

    return (
        <section className="contact" id="contact">
            <h2>LET'S CONNECT</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange} 
                    required 
                />
                <textarea 
                    name="message" 
                    placeholder="Message" 
                    value={formData.message}
                    onChange={handleChange} 
                    required
                ></textarea>
                <div className="contact-buttons">
                    <button 
                        type="button" 
                        onClick={handleWhatsApp}
                        className="whatsapp-btn"
                    >
                        Send via WhatsApp
                    </button>
                    <button 
                        type="button" 
                        onClick={handleEmail}
                        className="email-btn"
                    >
                        Send via Email
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
