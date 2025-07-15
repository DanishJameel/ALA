import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
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
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('Failed to send message. Please check your connection.');
    }
  };

  return (
  <div className="bg-white">
    {/* Hero Section */}
    <section className="relative bg-gray-900 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1350&q=80)'}}>
      <div className="bg-black bg-opacity-70 py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-2">Contact</h1>
        <div className="text-white flex items-center space-x-2">
          <span>Home</span>
          <span className="mx-1">&gt;</span>
          <span>Contact</span>
        </div>
      </div>
    </section>

    {/* Get In Touch Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">Get In Touch</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.
        </p>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
          {/* Contact Info */}
          <div className="bg-black text-white rounded-lg p-8 w-full max-w-md flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1 text-blue-400"><MapPin className="w-5 h-5" /><span className="font-bold">Address :</span></div>
              <span className="text-blue-300 font-medium">321 Breaking Street, 2nd</span> cros st Newyork USA 10002
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 text-blue-400"><Phone className="w-5 h-5" /><span className="font-bold">Call Us :</span></div>
              +02-215-516-0025
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 text-blue-400"><Mail className="w-5 h-5" /><span className="font-bold">Mail Us :</span></div>
              Supportteam@email.com
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 text-blue-400"><Clock className="w-5 h-5" /><span className="font-bold">Opening Time :</span></div>
              Mon - Sat: 09.00am to 18.00
            </div>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow">
            <input 
              type="text" 
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name*" 
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1" 
              required 
            />
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email*" 
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-1" 
              required 
            />
            <input 
              type="text" 
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number" 
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" 
            />
            <textarea 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message*" 
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2 min-h-[120px]" 
              required
            ></textarea>
            <button type="submit" className="bg-blue-700 text-white px-8 py-3 rounded font-semibold md:col-span-2 hover:bg-blue-800 transition-colors">
              {status === 'Sending...' ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
            {status && (
              <div className={`text-center md:col-span-2 p-3 rounded ${
                status.includes('successfully') 
                  ? 'bg-green-100 text-green-700' 
                  : status === 'Sending...' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-red-100 text-red-700'
              }`}>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>

    {/* Google Map Section */}
    <section className="bg-white">
      <div className="container mx-auto px-0">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.858964857624!2d-74.0257496846026!3d41.1142227792927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e1e7e2e2e2e3%3A0x8e2e2e2e2e2e2e2e!2sSuffern%2C%20NY%2010901%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
);
};

export default ContactPage; 