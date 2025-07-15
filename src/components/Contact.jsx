import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required />
      <button type="submit">Send</button>
      <div>{status}</div>
    </form>
  );
};

export default Contact;

